"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "./romantic-button";
import { Heart } from "lucide-react";

interface Props {
  setStep: (num: number) => void;
}

const LetterStepTwo = ({ setStep }: Props) => {
  return (
    <div className="px-6 flex flex-col justify-center items-center gap-6">
      <div className="w-full flex flex-col gap-5 justify-center items-center">
        <div className="flex flex-row gap-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <span key={i} className="inline-block h-4 w-5 bg-pink-200"></span>
          ))}
        </div>

        <p className="text-base md:text-xl text-pink-600 font-normal text-center">
          {`Chúc cô gái anh thương luôn xinh đẹp và hạnh phúc em nhé. Mong rằng em
          sẽ luôn nở nụ cười xinh trên môi, gác bỏ mọi ưu phiền và luôn biết yêu
          bản thân nhiều hơn. Mong cho mọi điều tốt đẹp nhất sẽ đến với em <3!`}
        </p>
        <p className="text-base text-pink-600">{`Happy valentine's day`}</p>

        <div>
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/happy-valentine-day-removebg-preview.png"
              width={300}
              height={200}
              alt="my-heart"
            />
          </motion.div>
        </div>
      </div>

      <Button
        className="w-fit flex justify-center items-center gap-2"
        onClick={() => setStep(3)}
      >
        <Heart className="" />
        {`Continue -->`}
      </Button>
    </div>
  );
};

export default LetterStepTwo;
