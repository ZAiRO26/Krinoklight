import React, { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Detect mobile device
const isMobile = () => {
    if (typeof window === 'undefined') return false;
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
        window.innerWidth < 768;
};

// Simplex noise GLSL - for smooth organic distortion
const vertexShader = `
    uniform float uTime;
    uniform float uStrength;
    uniform vec2 uMouse;
    
    varying vec2 vUv;
    varying float vDisplacement;
    varying vec3 vNormal;
    
    // Simplex 3D noise
    vec4 permute(vec4 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
    vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

    float snoise(vec3 v) {
        const vec2 C = vec2(1.0/6.0, 1.0/3.0);
        const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
        
        vec3 i  = floor(v + dot(v, C.yyy));
        vec3 x0 = v - i + dot(i, C.xxx);
        
        vec3 g = step(x0.yzx, x0.xyz);
        vec3 l = 1.0 - g;
        vec3 i1 = min(g.xyz, l.zxy);
        vec3 i2 = max(g.xyz, l.zxy);
        
        vec3 x1 = x0 - i1 + C.xxx;
        vec3 x2 = x0 - i2 + C.yyy;
        vec3 x3 = x0 - D.yyy;
        
        i = mod(i, 289.0);
        vec4 p = permute(permute(permute(
            i.z + vec4(0.0, i1.z, i2.z, 1.0))
            + i.y + vec4(0.0, i1.y, i2.y, 1.0))
            + i.x + vec4(0.0, i1.x, i2.x, 1.0));
        
        float n_ = 1.0/7.0;
        vec3 ns = n_ * D.wyz - D.xzx;
        
        vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
        
        vec4 x_ = floor(j * ns.z);
        vec4 y_ = floor(j - 7.0 * x_);
        
        vec4 x = x_ *ns.x + ns.yyyy;
        vec4 y = y_ *ns.x + ns.yyyy;
        vec4 h = 1.0 - abs(x) - abs(y);
        
        vec4 b0 = vec4(x.xy, y.xy);
        vec4 b1 = vec4(x.zw, y.zw);
        
        vec4 s0 = floor(b0)*2.0 + 1.0;
        vec4 s1 = floor(b1)*2.0 + 1.0;
        vec4 sh = -step(h, vec4(0.0));
        
        vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
        vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
        
        vec3 p0 = vec3(a0.xy, h.x);
        vec3 p1 = vec3(a0.zw, h.y);
        vec3 p2 = vec3(a1.xy, h.z);
        vec3 p3 = vec3(a1.zw, h.w);
        
        vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
        p0 *= norm.x;
        p1 *= norm.y;
        p2 *= norm.z;
        p3 *= norm.w;
        
        vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
        m = m * m;
        return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
    }
    
    void main() {
        vUv = uv;
        vNormal = normal;
        
        // Multi-layered noise for ultra-smooth organic fluid effect
        float time = uTime * 0.25;  // Slower for smoother motion
        
        // Primary noise layer - slow, large features (smoother)
        float noise1 = snoise(position * 0.6 + time * 0.4) * 0.45;
        
        // Secondary noise - medium detail (smoother blending)
        float noise2 = snoise(position * 1.2 + time * 0.6) * 0.25;
        
        // Tertiary noise - fine detail (subtle)
        float noise3 = snoise(position * 2.0 + time * 0.8) * 0.12;
        
        // Quaternary noise - ultra-fine shimmer
        float noise4 = snoise(position * 3.5 + time * 1.2) * 0.06;
        
        // Mouse influence - very subtle
        float mouseInfluence = length(uMouse) * 0.15;
        
        // Combined displacement with smoother blending
        float displacement = (noise1 + noise2 + noise3 + noise4) * uStrength;
        displacement += mouseInfluence * snoise(position * 1.5 + time) * 0.5;
        
        // Smooth the displacement
        displacement = smoothstep(-0.5, 0.5, displacement) - 0.5;
        displacement *= uStrength * 1.5;
        
        vDisplacement = displacement;
        
        // Apply displacement along normal
        vec3 newPosition = position + normal * displacement;
        
        gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
    }
`;

const fragmentShader = `
    uniform float uTime;
    uniform vec3 uColorA;
    uniform vec3 uColorB;
    uniform vec3 uColorC;
    
    varying vec2 vUv;
    varying float vDisplacement;
    varying vec3 vNormal;
    
    void main() {
        // Create gradient based on displacement and position
        float mixStrength = (vDisplacement + 0.5) * 0.9;
        
        // Beautiful blue gradient - consistent colors
        vec3 color = mix(uColorA, uColorB, smoothstep(0.0, 0.5, mixStrength));
        color = mix(color, uColorC, smoothstep(0.4, 1.0, mixStrength));
        
        // Subtle rim lighting for posh look
        float rim = 1.0 - dot(vNormal, vec3(0.0, 0.0, 1.0));
        rim = smoothstep(0.35, 1.0, rim);
        color += rim * 0.2;
        
        // Soft alpha for edges
        float alpha = 0.92 + vDisplacement * 0.05;
        
        gl_FragColor = vec4(color, alpha);
    }
`;

// Noise Sphere mesh component
function NoiseSphere({ mousePosition, isMobileDevice }) {
    const meshRef = useRef();
    const materialRef = useRef();

    // Create shader material - locked blue palette
    const uniforms = useMemo(() => ({
        uTime: { value: 0 },
        uStrength: { value: 0.45 },
        uMouse: { value: new THREE.Vector2(0, 0) },
        uColorA: { value: new THREE.Color('#162850') },  // Richer navy blue
        uColorB: { value: new THREE.Color('#4477bb') },  // More vibrant blue
        uColorC: { value: new THREE.Color('#88bbee') },  // Brighter blue highlight
    }), []);

    useFrame((state, delta) => {
        if (materialRef.current) {
            // Smooth time progression
            materialRef.current.uniforms.uTime.value += delta;

            // Smooth mouse interpolation for distortion only
            const targetX = mousePosition.current.x;
            const targetY = mousePosition.current.y;
            materialRef.current.uniforms.uMouse.value.x += (targetX - materialRef.current.uniforms.uMouse.value.x) * 0.08;
            materialRef.current.uniforms.uMouse.value.y += (targetY - materialRef.current.uniforms.uMouse.value.y) * 0.08;
        }

        if (meshRef.current) {
            // Very slow rotation for organic feel
            meshRef.current.rotation.y += delta * 0.05;
            meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
        }
    });

    const geometry = useMemo(() => {
        // ULTRA HIGH QUALITY: 128 subdivisions for desktop, 64 for mobile
        return new THREE.IcosahedronGeometry(2.5, isMobileDevice ? 64 : 128);
    }, [isMobileDevice]);

    return (
        <mesh ref={meshRef} geometry={geometry}>
            <shaderMaterial
                ref={materialRef}
                vertexShader={vertexShader}
                fragmentShader={fragmentShader}
                uniforms={uniforms}
                transparent
                side={THREE.DoubleSide}
            />
        </mesh>
    );
}

// Soft ambient glow
function AmbientGlow() {
    return (
        <mesh position={[0, 0, -2]}>
            <planeGeometry args={[15, 15]} />
            <meshBasicMaterial
                color="#1e3a5f"
                transparent
                opacity={0.3}
                blending={THREE.AdditiveBlending}
            />
        </mesh>
    );
}

// Scene component
function Scene({ mousePosition, isMobileDevice }) {
    return (
        <>
            <color attach="background" args={['#030712']} />

            {/* Soft lighting */}
            <ambientLight intensity={0.3} />
            <pointLight position={[5, 5, 5]} intensity={0.5} color="#3b82f6" />
            <pointLight position={[-5, -5, 5]} intensity={0.3} color="#1e40af" />

            {/* Main noise sphere */}
            <NoiseSphere mousePosition={mousePosition} isMobileDevice={isMobileDevice} />

            {/* Background glow */}
            <AmbientGlow />
        </>
    );
}

// Main Noise Sphere Hero Component
export default function NoiseSphereHero({ className = '' }) {
    const mousePosition = useRef({ x: 0, y: 0 });
    const [isMobileDevice, setIsMobileDevice] = useState(false);

    useEffect(() => {
        setIsMobileDevice(isMobile());
    }, []);

    // Mouse/touch tracking with smooth values
    useEffect(() => {
        const handleMouseMove = (e) => {
            mousePosition.current.x = (e.clientX / window.innerWidth) * 2 - 1;
            mousePosition.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
        };

        const handleTouchMove = (e) => {
            if (e.touches.length > 0) {
                const touch = e.touches[0];
                mousePosition.current.x = (touch.clientX / window.innerWidth) * 2 - 1;
                mousePosition.current.y = -(touch.clientY / window.innerHeight) * 2 + 1;
            }
        };

        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        window.addEventListener('touchmove', handleTouchMove, { passive: true });

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('touchmove', handleTouchMove);
        };
    }, []);

    return (
        <div className={`absolute inset-0 ${className}`}>
            <Canvas
                camera={{ position: [0, 0, 5], fov: 50 }}
                dpr={isMobileDevice ? 1.5 : Math.min(window.devicePixelRatio, 2.5)}  // 4K quality
                gl={{
                    antialias: true,  // Always enable for crisp edges
                    alpha: true,
                    powerPreference: 'high-performance',
                    stencil: false,
                    precision: 'highp',  // High precision for smooth gradients
                }}
                style={{ background: 'transparent' }}
            >
                <Scene mousePosition={mousePosition} isMobileDevice={isMobileDevice} />
            </Canvas>
        </div>
    );
}
