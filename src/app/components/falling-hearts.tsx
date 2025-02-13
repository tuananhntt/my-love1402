"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Heart } from "lucide-react";

type HeartType = {
  id: number;
  left: string;
  delay: number;
  size: number;
  duration: number;
};

const generateHeart = (id: number): HeartType => ({
  id,
  left: Math.random() * 100 + "%",
  delay: Math.random() * 5,
  size: Math.random() * 40 + 10,
  duration: Math.random() * 20 + 10,
});

export default function FallingHearts() {
  const [loaded, setLoaded] = useState(false);

  const [hearts, setHearts] = useState<HeartType[]>(
    Array.from({ length: 10 }, (_, i) => generateHeart(Date.now() + i))
  );

  useEffect(() => {
    setLoaded(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setHearts((prevHearts) => [
        ...prevHearts.filter((heart) => heart.id > Date.now() - 30000),
        generateHeart(Date.now()),
      ]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    navigator.permissions
      .query({ name: "geolocation" })
      .then((permissionStatus) => {
        console.log("Quyền microphone:", permissionStatus.state);
      });
  }, []);

  if (!loaded) return null;

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden bg-pink-100 pointer-events-none z-[-1]">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{ y: "-10vh", opacity: 0, x: Math.random() * 20 - 10 }}
          animate={{ y: "100vh", opacity: 1, x: Math.random() * 20 - 10 }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute text-red-500"
          style={{ left: heart.left }}
        >
          <Heart fill="currentColor" width={heart.size} height={heart.size} />
        </motion.div>
      ))}
      {/* <YouTube videoId="AfNbehFKJ7o" opts={videoOptions} /> */}
      <audio autoPlay className="hidden">
        <source src="/NgayDauTien-DucPhuc-7129810.mp3" />
      </audio>
    </div>
  );
}
