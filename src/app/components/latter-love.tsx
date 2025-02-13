"use client";

import { motion } from "framer-motion";

import { Mail } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Button from "./romantic-button";

interface Props {
  setStep: (step: number) => void;
}

const LetterLove = ({ setStep }: Props) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) return null;

  return (
    <div className="w-full max-w-xl flex flex-col items-center gap-10 px-6">
      <div className="w-full flex flex-col gap-6 items-center">
        <div className="w-full">
          {/* <div className="flex items-center justify-center gap-3 mb-3">
          {[1, 2, 3, 4, 5].map((i) => (
            <Heart key={i} color="red" className="text-sm" />
          ))}
        </div> */}
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: [1.1, 0.9, 1] }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Image
              src={"/letter2-removebg-preview-crop.png"}
              width={576}
              height={600}
              alt="latter for my love"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
        <div className="text-center flex flex-col gap-2">
          <p className="text-xl text-pink-600 font-medium">KNOCK KNOCK!</p>
          <p className="text-base text-pink-600 font-medium">
            {`BỨC THƯ DÀNH RIÊNG CHO BẠN`}
          </p>
        </div>
      </div>
      <Button
        className="w-fit flex justify-center items-center gap-2 px-8 py-3"
        onClick={() => setStep(2)}
      >
        <Mail color="#DB2777" />
        Click để mở nó nhé!
      </Button>
    </div>
  );
};

export default LetterLove;
