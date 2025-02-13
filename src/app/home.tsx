"use client";

import { motion, AnimatePresence } from "framer-motion";
import LetterLove from "./components/latter-love";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import LoadingPage from "./components/loading-page";
import LetterStepTwo from "./components/letter-step-two";
import LetterStepThree from "./components/letter-step-three";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Happy Valentine's Day <3 💕",
  description: "...",
};

export default function Home() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);

  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, [pathname]);

  const setStep = useCallback((step: number) => {
    setCurrentStep(step);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <LoadingPage />
      ) : (
        <motion.div
          key={pathname}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.5 }}
          className="relative w-full h-full"
        >
          <div className=" bg-transparent top-0 left-0 right-0 z-10 h-auto overflow-y-auto">
            <main className="w-full max-w-3xl mx-auto grid place-items-center min-h-screen">
              {currentStep === 1 && <LetterLove setStep={setStep} />}
              {currentStep === 2 && <LetterStepTwo setStep={setStep} />}
              {currentStep === 3 && <LetterStepThree />}
            </main>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
