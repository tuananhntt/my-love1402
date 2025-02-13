import { useState } from "react";
import { motion } from "framer-motion";
import "../../css/letter-card.css";
import { ValentineNumbers } from "./letter-step-three";

interface Props {
  letter: ValentineNumbers;
  isSelected: boolean;
  addLetterSelected: (data: ValentineNumbers) => void;
}

const LetterCard = ({ letter, isSelected, addLetterSelected }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  const listKeyDes = (() => {
    return letter.name.split("");
  })();

  const letterOnSelect = () => {
    addLetterSelected(letter);
  };

  return (
    <div
      className="letter-card-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="valentines">
        <div className="envelope"></div>
        <div className="front"></div>

        <motion.div
          animate={{ top: isHovered ? "-90px" : "0px" }}
          transition={{ duration: 0.6 }}
          className="card"
        >
          <div className="text">
            <p>{`Happy Valentine's Day!`}</p>
            {!isSelected && (
              <div className="heart" onClick={letterOnSelect}></div>
            )}
            {!isSelected && (
              <p className="mt-5 text-xl text-pink-600 font-medium -ml-[28px]">
                {letter.name}
              </p>
            )}
            {isSelected && (
              <div>
                {letter.des.map((i, index) => {
                  return (
                    <p
                      key={`${letter.id}-${i}-${index}`}
                      className="text-xs text-pink-600 font-medium"
                    >
                      {`${listKeyDes[index]} -> ${i}`}
                    </p>
                  );
                })}
              </div>
            )}
          </div>
          {/* <div className="hearts">
            <div className="one"></div>
            <div className="two"></div>
            <div className="three"></div>
            <div className="four"></div>
            <div className="five"></div>
          </div> */}
        </motion.div>
      </div>

      <div className="shadow"></div>
    </div>
  );
};

export default LetterCard;
