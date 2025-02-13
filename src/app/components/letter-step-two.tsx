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

        <p className="text-base text-pink-600 font-normal text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur
          voluptatum eius officia ullam iste quibusdam repellat alias ipsa
          deserunt nobis. Modi doloremque vero sunt impedit, nesciunt voluptas
          ipsam ut. Tenetur!
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
