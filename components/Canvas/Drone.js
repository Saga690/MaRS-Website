import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF, useAnimations } from '@react-three/drei';
import CanvasLoader from './Loader';

const Drone = () => {
    const drone = useGLTF('./buster_drone/scene.gltf');

    return (
        <mesh>
            <hemisphereLight intensity={3.2} groundColor="violet" />
            <pointLight intensity={5} />

            <primitive
                object={drone.scene}
                scale={[2.2, 2.2, 2.2]}
                position={[0, -1, 0]}
                rotation={[0, 0.7, 0]}
            />
        </mesh>
    );
};

const DroneCanvas = () => {
    return (
        <Canvas
            frameLoop="demand"
            shadows
            camera={{ position: [20, 3, 5], fov: 25 }}
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
                <Drone />
            </Suspense>
            <Preload all />
        </Canvas>
    );
};

export default DroneCanvas;