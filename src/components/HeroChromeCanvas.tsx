import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export const HeroChromeCanvas: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let width = container.clientWidth || 450;
    let height = container.clientHeight || 450;

    // Check WebGL availability
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
    if (!gl) return;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 6.2);

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      container.appendChild(renderer.domElement);
    } catch {
      return;
    }

    // High-Contrast Studio Lighting (Key to Luxury Chrome Aesthetics)
    const ambientLight = new THREE.AmbientLight(0x0f1523, 1.4);
    scene.add(ambientLight);

    // Sharp Cyan Rim Light
    const cyanLight = new THREE.DirectionalLight(0x55c8f5, 3.2);
    cyanLight.position.set(4, 5, 4);
    scene.add(cyanLight);

    // Warm Titanium Rim Light
    const titaniumLight = new THREE.DirectionalLight(0xa7b0c0, 2.4);
    titaniumLight.position.set(-4, -4, 3);
    scene.add(titaniumLight);

    // Top Key Specular Light (Pure White Glint)
    const topGlint = new THREE.DirectionalLight(0xffffff, 3.8);
    topGlint.position.set(0, 6, 3);
    scene.add(topGlint);

    // Point Light for Inner Glow
    const innerPointLight = new THREE.PointLight(0x55c8f5, 1.5, 8);
    innerPointLight.position.set(0, 0, 0.5);
    scene.add(innerPointLight);

    // Main 3D Emblem Group
    const emblemGroup = new THREE.Group();

    // 1. Sleek Chrome Metallic Material
    const chromeMaterial = new THREE.MeshStandardMaterial({
      color: 0x141a24,
      metalness: 0.96,
      roughness: 0.14,
    });

    // 2. Beveled Edge Trim (Cyan Luminous Accent)
    const edgeTrimMaterial = new THREE.MeshStandardMaterial({
      color: 0x55c8f5,
      emissive: 0x55c8f5,
      emissiveIntensity: 1.6,
      metalness: 0.8,
      roughness: 0.2,
    });

    // 3. Construct Stylized Sharp Monolithic "V" Emblem (VibeCheck)
    // Left Wing of V
    const leftShape = new THREE.Shape();
    leftShape.moveTo(-1.6, 1.6);
    leftShape.lineTo(-1.0, 1.6);
    leftShape.lineTo(-0.15, -1.5);
    leftShape.lineTo(-0.75, -1.5);
    leftShape.closePath();

    const extrudeSettings = {
      depth: 0.35,
      bevelEnabled: true,
      bevelSegments: 4,
      steps: 1,
      bevelSize: 0.08,
      bevelThickness: 0.08,
    };

    const leftGeo = new THREE.ExtrudeGeometry(leftShape, extrudeSettings);
    leftGeo.center();
    const leftWing = new THREE.Mesh(leftGeo, chromeMaterial);
    leftWing.position.set(-0.6, 0.1, 0);
    emblemGroup.add(leftWing);

    // Right Wing of V (Aerodynamic & Sharp)
    const rightShape = new THREE.Shape();
    rightShape.moveTo(1.6, 1.6);
    rightShape.lineTo(1.0, 1.6);
    rightShape.lineTo(0.15, -1.5);
    rightShape.lineTo(0.75, -1.5);
    rightShape.closePath();

    const rightGeo = new THREE.ExtrudeGeometry(rightShape, extrudeSettings);
    rightGeo.center();
    const rightWing = new THREE.Mesh(rightGeo, chromeMaterial);
    rightWing.position.set(0.6, 0.1, 0);
    emblemGroup.add(rightWing);

    // Center Dynamic Diamond / Core Anchor (Like Kinetix center spear)
    const spearShape = new THREE.Shape();
    spearShape.moveTo(0, 1.8);
    spearShape.lineTo(0.35, 0.3);
    spearShape.lineTo(0, -1.7);
    spearShape.lineTo(-0.35, 0.3);
    spearShape.closePath();

    const spearGeo = new THREE.ExtrudeGeometry(spearShape, {
      depth: 0.45,
      bevelEnabled: true,
      bevelSegments: 3,
      steps: 1,
      bevelSize: 0.06,
      bevelThickness: 0.06,
    });
    spearGeo.center();
    const centerSpear = new THREE.Mesh(spearGeo, edgeTrimMaterial);
    centerSpear.position.set(0, 0.05, 0.1);
    emblemGroup.add(centerSpear);

    // Concentric Luxury Precision Rings
    const ring1Geo = new THREE.TorusGeometry(2.3, 0.02, 16, 64);
    const ring1Mat = new THREE.MeshStandardMaterial({
      color: 0x55c8f5,
      emissive: 0x55c8f5,
      emissiveIntensity: 1.2,
      roughness: 0.2,
      metalness: 0.9,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 3.2;
    emblemGroup.add(ring1);

    const ring2Geo = new THREE.TorusGeometry(2.7, 0.015, 16, 64);
    const ring2Mat = new THREE.MeshStandardMaterial({
      color: 0xa7b0c0,
      metalness: 0.95,
      roughness: 0.2,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.y = Math.PI / 3.5;
    emblemGroup.add(ring2);

    // Floating Specular Sparkles/Stars
    const sparkleCount = 60;
    const sparkleGeo = new THREE.BufferGeometry();
    const sparklePos = new Float32Array(sparkleCount * 3);
    for (let i = 0; i < sparkleCount; i++) {
      const radius = 2.4 + Math.random() * 1.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      sparklePos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      sparklePos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      sparklePos[i * 3 + 2] = radius * Math.cos(phi);
    }
    sparkleGeo.setAttribute('position', new THREE.BufferAttribute(sparklePos, 3));
    const sparkleMat = new THREE.PointsMaterial({
      size: 0.045,
      color: 0x55c8f5,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });
    const sparkles = new THREE.Points(sparkleGeo, sparkleMat);
    emblemGroup.add(sparkles);

    scene.add(emblemGroup);

    // Mouse Tracking Physics for Luxury Interactive Tilt
    let targetRotX = 0;
    let targetRotY = 0;
    let currentRotX = 0;
    let currentRotY = 0;

    const handlePointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetRotY = x * 0.45;
      targetRotX = -y * 0.45;
    };

    const handlePointerLeave = () => {
      targetRotX = 0;
      targetRotY = 0;
    };

    container.addEventListener('mousemove', handlePointerMove);
    container.addEventListener('mouseleave', handlePointerLeave);

    const handleResize = () => {
      if (!renderer || !container) return;
      const w = container.clientWidth || 450;
      const h = container.clientHeight || 450;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // Render Animation Loop
    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      // Smooth lerp tilt towards mouse
      currentRotX += (targetRotX - currentRotX) * 0.08;
      currentRotY += (targetRotY - currentRotY) * 0.08;

      // Base idle rotation + interactive mouse sway
      emblemGroup.rotation.y = currentRotY + Math.sin(elapsed * 0.7) * 0.15;
      emblemGroup.rotation.x = currentRotX + Math.cos(elapsed * 0.5) * 0.08;
      emblemGroup.position.y = Math.sin(elapsed * 1.2) * 0.08;

      // Rotate concentric rings in opposite directions
      ring1.rotation.z = elapsed * 0.5;
      ring2.rotation.z = -elapsed * 0.35;
      sparkles.rotation.y = elapsed * 0.15;

      // Light pulsing
      innerPointLight.intensity = 1.2 + Math.sin(elapsed * 2.5) * 0.4;

      renderer.render(scene, camera);
      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animId);
      container.removeEventListener('mousemove', handlePointerMove);
      container.removeEventListener('mouseleave', handlePointerLeave);
      window.removeEventListener('resize', handleResize);

      leftGeo.dispose();
      rightGeo.dispose();
      spearGeo.dispose();
      ring1Geo.dispose();
      ring2Geo.dispose();
      sparkleGeo.dispose();
      chromeMaterial.dispose();
      edgeTrimMaterial.dispose();
      ring1Mat.dispose();
      ring2Mat.dispose();
      sparkleMat.dispose();

      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="relative w-full aspect-square max-w-[420px] sm:max-w-[460px] mx-auto flex items-center justify-center cursor-grab active:cursor-grabbing select-none"
    >
      {/* Interactive Micro-badge */}
      <div
        className={`absolute bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#10141C]/80 backdrop-blur-md border border-[#303744] text-[10px] font-mono tracking-wider text-[#A7B0C0] pointer-events-none transition-opacity duration-300 ${
          isHovering ? 'opacity-100 text-[#55C8F5] border-[#55C8F5]/40' : 'opacity-60'
        }`}
      >
        INTERACTIVE 3D CHROME MONOLITH
      </div>
    </div>
  );
};
