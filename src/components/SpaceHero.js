import React, { useRef, useEffect, useState, useMemo } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing';
import * as THREE from 'three';

// Detect mobile
const isMobile = () => {
    if (typeof window === 'undefined') return false;
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
        window.innerWidth < 768;
};

// High-quality realistic moon
function RealisticMoon({ mousePosition, isMobileDevice }) {
    const moonRef = useRef();
    const rotationRef = useRef({ x: 0, y: 0, z: 0 });

    // Use Three.js example moon texture (CORS-friendly)
    const moonTexture = useLoader(
        THREE.TextureLoader,
        'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/moon_1024.jpg'
    );

    // Configure texture for best quality
    useEffect(() => {
        if (moonTexture) {
            moonTexture.anisotropy = 16;
            moonTexture.colorSpace = THREE.SRGBColorSpace;
        }
    }, [moonTexture]);

    useFrame((state, delta) => {
        if (moonRef.current) {
            // Very slow constant rotation
            moonRef.current.rotation.y += delta * 0.02;

            // Ultra-smooth mouse-following tilt
            const targetX = mousePosition.current.y * 0.1;
            const targetZ = mousePosition.current.x * 0.05;

            rotationRef.current.x += (targetX - rotationRef.current.x) * 0.02;
            rotationRef.current.z += (targetZ - rotationRef.current.z) * 0.02;

            moonRef.current.rotation.x = rotationRef.current.x;
            moonRef.current.rotation.z = rotationRef.current.z;
        }
    });

    return (
        <mesh ref={moonRef}>
            <sphereGeometry args={[2.2, isMobileDevice ? 48 : 96, isMobileDevice ? 48 : 96]} />
            <meshStandardMaterial
                map={moonTexture}
                roughness={1}
                metalness={0}
                emissive="#0a0a12"
                emissiveIntensity={0.05}
            />
        </mesh>
    );
}

// Subtle atmospheric haze (no ugly ring)
function MoonGlow() {
    return (
        <mesh>
            <sphereGeometry args={[2.35, 32, 32]} />
            <meshBasicMaterial
                color="#8888cc"
                transparent
                opacity={0.03}
                side={THREE.BackSide}
            />
        </mesh>
    );
}

// Glowing particle comets (no lines!)
function GlowingComets({ count = 5, mousePosition }) {
    const cometsRef = useRef([]);

    const cometData = useMemo(() => {
        return Array.from({ length: count }, (_, i) => ({
            id: i,
            angle: Math.random() * Math.PI * 2,
            speed: 0.08 + Math.random() * 0.12,
            radius: 4 + Math.random() * 3,
            yOffset: (Math.random() - 0.5) * 2.5,
            size: 0.015 + Math.random() * 0.02,
        }));
    }, [count]);

    useFrame((state) => {
        const time = state.clock.elapsedTime;

        cometData.forEach((comet, i) => {
            if (cometsRef.current[i]) {
                const angle = time * comet.speed + comet.angle;
                const x = Math.cos(angle) * comet.radius;
                const z = Math.sin(angle) * comet.radius * 0.5;
                const y = comet.yOffset + Math.sin(angle * 2) * 0.3;

                cometsRef.current[i].position.set(x, y, z);
            }
        });
    });

    return (
        <group>
            {cometData.map((comet, i) => (
                <mesh key={comet.id} ref={(el) => (cometsRef.current[i] = el)}>
                    <sphereGeometry args={[comet.size, 8, 8]} />
                    <meshBasicMaterial
                        color="#aaddff"
                        transparent
                        opacity={0.9}
                    />
                </mesh>
            ))}
        </group>
    );
}

// Sparse distant stars (subtle, not overwhelming)
function SparseStars({ mousePosition, isMobileDevice }) {
    const starsRef = useRef();
    const positionRef = useRef({ x: 0, y: 0 });

    useFrame(() => {
        if (starsRef.current) {
            // Very subtle parallax
            positionRef.current.x += (mousePosition.current.x * 0.1 - positionRef.current.x) * 0.015;
            positionRef.current.y += (mousePosition.current.y * 0.1 - positionRef.current.y) * 0.015;

            starsRef.current.rotation.y = positionRef.current.x * 0.05;
            starsRef.current.rotation.x = positionRef.current.y * 0.05;
        }
    });

    return (
        <group ref={starsRef}>
            <Stars
                radius={80}
                depth={100}
                count={isMobileDevice ? 1000 : 2500}
                factor={3}
                saturation={0}
                fade
                speed={0.3}
            />
        </group>
    );
}

// Scene component
function Scene({ mousePosition, isMobileDevice }) {
    return (
        <>
            {/* Pure black space background */}
            <color attach="background" args={['#000000']} />

            {/* Subtle ambient light */}
            <ambientLight intensity={0.1} />

            {/* Main sun light */}
            <directionalLight
                position={[8, 3, 5]}
                intensity={1.8}
                color="#ffffff"
            />

            {/* Subtle rim light */}
            <pointLight
                position={[-6, 2, -4]}
                intensity={0.15}
                color="#6688aa"
                distance={15}
            />

            {/* Sparse stars */}
            <SparseStars mousePosition={mousePosition} isMobileDevice={isMobileDevice} />

            {/* The realistic Moon */}
            <React.Suspense fallback={null}>
                <RealisticMoon mousePosition={mousePosition} isMobileDevice={isMobileDevice} />
            </React.Suspense>

            {/* Subtle glow */}
            <MoonGlow />

            {/* Glowing comets (no ugly lines) */}
            <GlowingComets count={isMobileDevice ? 3 : 5} mousePosition={mousePosition} />

            {/* Cinematic post-processing */}
            {!isMobileDevice && (
                <EffectComposer>
                    <Bloom
                        intensity={0.3}
                        luminanceThreshold={0.6}
                        luminanceSmoothing={0.9}
                    />
                    <Vignette
                        eskil={false}
                        offset={0.2}
                        darkness={0.8}
                    />
                </EffectComposer>
            )}
        </>
    );
}

// Main Space Hero Component
export default function SpaceHero({ className = '' }) {
    const mousePosition = useRef({ x: 0, y: 0 });
    const [isMobileDevice, setIsMobileDevice] = useState(false);

    useEffect(() => {
        setIsMobileDevice(isMobile());
    }, []);

    // Ultra-smooth mouse tracking
    useEffect(() => {
        let animationId;
        const targetMouse = { x: 0, y: 0 };

        const handleMouseMove = (e) => {
            targetMouse.x = (e.clientX / window.innerWidth) * 2 - 1;
            targetMouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
        };

        const handleTouchMove = (e) => {
            if (e.touches.length > 0) {
                const touch = e.touches[0];
                targetMouse.x = (touch.clientX / window.innerWidth) * 2 - 1;
                targetMouse.y = -(touch.clientY / window.innerHeight) * 2 + 1;
            }
        };

        const animate = () => {
            mousePosition.current.x += (targetMouse.x - mousePosition.current.x) * 0.05;
            mousePosition.current.y += (targetMouse.y - mousePosition.current.y) * 0.05;
            animationId = requestAnimationFrame(animate);
        };

        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        window.addEventListener('touchmove', handleTouchMove, { passive: true });
        animate();

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('touchmove', handleTouchMove);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <div className={`absolute inset-0 ${className}`}>
            <Canvas
                camera={{ position: [0, 0, 7], fov: 45 }}
                dpr={isMobileDevice ? 1 : Math.min(window.devicePixelRatio, 2)}
                gl={{
                    antialias: true,
                    alpha: true,
                    powerPreference: 'high-performance',
                    stencil: false,
                }}
                style={{ background: '#000000' }}
            >
                <Scene mousePosition={mousePosition} isMobileDevice={isMobileDevice} />
            </Canvas>
        </div>
    );
}
