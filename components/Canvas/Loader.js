import { Html, useProgress } from "@react-three/drei";
import { useEffect, useState } from "react";

const Loader = () => {
  const { progress } = useProgress();
  const [animation, setAnimation] = useState(0);

  useEffect(() => {
    const animationInterval = setInterval(() => {
      setAnimation(prevAnimation => (prevAnimation + 1) % 360);
    }, 30);
    
    return () => clearInterval(animationInterval);
  }, []);

  return (
    <Html>
      <div className="flex flex-col items-center fixed transform -translate-x-1/2 -translate-y-1/2 translate-y-20">
        <div className="w-20 h-20 border-4 border-white border-t-4 border-blue-500 rounded-full animate-spin" style={{ transform: `rotate(${animation}deg)` }}></div>
        <p className="text-lg font-semibold text-white mt-4">{progress.toFixed(2)}%</p>
      </div>
    </Html>
  );
};

export default Loader;
