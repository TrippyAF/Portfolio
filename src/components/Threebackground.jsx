// import * as THREE from 'three'
// import { useRef, useEffect } from 'react';
// const Threebackground = () => {
//     const containerRef = useRef(null);

//     useEffect(() => {
//         const container = containerRef.current;

//         if (container) return;

//         const scene = new THREE.Scene();
//         const camera = new THREE.PerspectiveCamera(
//             75,
//             container.clientWidth / container.clientheight,
//             0.1,
//             1000
//         );

//         const renderer = new THREE.WebGLRenderer({ antialias: true });
//         renderer.setSize(container.clientWidth, container.clientheight);
//         renderer.setPixelRatio(window.devicePixelRatio);
//         container.appendChild(renderer.domElement);

//         const starGeometry = new THREE.BufferGeometry();
//         const starMaterial = new THREE.PointsMaterial({ color: 0xffffff });
//         const starVertices = [];

//         for (let i = 0; i < 10000; i++) {
//             const x = (Math.random() - 0.5) * 2000;
//             const y = (Math.random() - 0.5) * 2000;
//             const z = -Math.random() * 2000;

//             starVertices.push(x, y, z);
//         }
//         starGeometry.setAttribute(
//             "position",
//             new THREE.Float32BufferAttribute(starVertices, 3)
//         );

//         const stars = new THREE.Points(starGeometry, starMaterial);
//         scene.add(stars);
//         camera.position.z = 1;

//         const animateLoop = () => {
//             stars.rotation.x += 0.0005;
//             stars.rotation.y += 0.0005;
//             renderer.render(scene, camera);
//             requestAnimationFrame(animateLoop);
//         };
//         animateLoop();

//         const onWindowResize = () => {
//             camera.aspect = container.clientWidth / container.clientheight;
//             camera.updateProjectionMatrix();
//             renderer.setSize(container.clientWidth, container.clientheight);
//         };
//         window.addEventListener("resize", onWindowResize);

//         return () => {
//             window.removeEventListener("resize", onWindowResize);
//             ContainerWithChildren.removechild(renderer.domElement);
//             starGeometry.dispose();
//             starMaterial.dispose();
//             stars.geometry.dispose();
//             stars.material.dispose();
//         }
//     }, [])

//     return (
//         <div
//             ref={containerRef}
//             className="fixed inset-0 z-0"
//             style={{ overflow: "hidden" }}
//         />
//     )
// }

// export default Threebackground;
import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const Threebackground = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        // Scene
        const scene = new THREE.Scene();

        // Camera
        const camera = new THREE.PerspectiveCamera(
            75,
            container.clientWidth / container.clientHeight,
            0.1,
            1000
        );
        camera.position.z = 1;

        // Renderer
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        container.appendChild(renderer.domElement);

        // Stars
        const starGeometry = new THREE.BufferGeometry();
        const starMaterial = new THREE.PointsMaterial({ color: 0xffffff });
        const starVertices = [];

        for (let i = 0; i < 10000; i++) {
            const x = (Math.random() - 0.5) * 2000;
            const y = (Math.random() - 0.5) * 2000;
            const z = -Math.random() * 2000;
            starVertices.push(x, y, z);
        }

        starGeometry.setAttribute(
            "position",
            new THREE.Float32BufferAttribute(starVertices, 3)
        );

        const stars = new THREE.Points(starGeometry, starMaterial);
        scene.add(stars);

        // Animation loop
        const animateLoop = () => {
            stars.rotation.x += 0.0005;
            stars.rotation.y += 0.0005;
            renderer.render(scene, camera);
            requestAnimationFrame(animateLoop);
        };
        animateLoop();

        // Handle resize
        const onWindowResize = () => {
            camera.aspect = container.clientWidth / container.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(container.clientWidth, container.clientHeight);
        };
        window.addEventListener("resize", onWindowResize);

        // Cleanup
        return () => {
            window.removeEventListener("resize", onWindowResize);
            container.removeChild(renderer.domElement);
            starGeometry.dispose();
            starMaterial.dispose();
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-0 pointer-events-none "
            style={{ overflow: "hidden" }}
        />
    );
};

export default Threebackground;
