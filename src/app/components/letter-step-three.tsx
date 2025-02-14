"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import LetterCard from "./latter-card";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { db } from "@/lib/firebase-config";
import { toast } from "react-toastify";

export interface ValentineNumbers {
  id: string;
  name: string;
  des: string[];
}

const letters: ValentineNumbers[] = [
  {
    id: "902535",
    name: "902535",
    des: ["Mong", "Em", "Yêu", "Và", "Nhớ", "Anh"],
  },
  {
    id: "507680",
    name: "507680",
    des: ["Anh", "Nhất", "Định", "Tán", "Được", "Em"],
  },
  {
    id: "770880",
    name: "770880",
    des: ["Hôn", "Em", "Và", "Ôm", "Em", "Đi"],
  },
  {
    id: "883476",
    name: "883476",
    des: ["Tương", "Tư", "Chỉ", "Mình", "Em", "Thôi"],
  },
  {
    id: "990885",
    name: "990885",
    des: ["Cuộc", "Đời", "Này", "Chỉ", "Yêu", "Em"],
  },
];

const LetterStepThree = () => {
  const [letterSelected, setLetterSelected] = useState<ValentineNumbers | null>(
    null
  );

  const [receivedGift, setReceivedGift] = useState<boolean>(false);

  const isSelected = useMemo(() => {
    return letters.some((lt) => lt.id === letterSelected?.id) ? true : false;
  }, [letterSelected?.id]);

  useEffect(() => {
    const unsubscribed = onSnapshot(
      collection(db, "receivedGift"),
      (querySnapshot) => {
        if (!querySnapshot.empty) {
          const items = querySnapshot.docs.map((doc) => doc.data());
          setReceivedGift(items.length ? true : false);
        } else {
          setReceivedGift(false);
        }
      }
    );
    return () => unsubscribed();
  }, []);

  useEffect(() => {
    const unsubscribed = onSnapshot(
      collection(db, "letterSelected"),
      (querySnapshot) => {
        if (!querySnapshot.empty) {
          const items = querySnapshot.docs.map((doc) => doc.data());
          setLetterSelected(items[0] as ValentineNumbers);
        } else {
          setLetterSelected(null);
        }
      }
    );
    return () => unsubscribed();
  }, []);

  const notify = () => toast("Ahihi, chỉ được chọn 1 lần thôi nhá 😘");

  const addLetterSelected = useCallback(
    async (data: ValentineNumbers) => {
      const exitsLetterSelected = letters.some(
        (lt) => lt.id === letterSelected?.id
      );
      if (exitsLetterSelected) {
        notify();
        return;
      }
      const docRef = await addDoc(collection(db, "letterSelected"), data);
      console.log("Document written with ID:", docRef.id);
    },
    [letterSelected?.id]
  );

  return (
    <div className="px-6 flex flex-col justify-center items-center gap-28">
      <div>
        <p className="fixed w-full top-20 px-6 left-1/2 -translate-x-1/2 text-sm text-pink-600 font-medium text-center">
          {receivedGift
            ? "Happy Valentine's Day <3!"
            : isSelected
            ? "Một món quà nhỏ đang được gửi <3!"
            : `Mỗi bức thư là một món quà chứa ý nghĩa đặc biệt, em hãy sũy nghĩ kỹ
          và chọn một trong số chúng nhé 🥰!`}
          <br />
          {!isSelected && !receivedGift && (
            <span className="text-[10px] mt-2 text-pink-400">
              {`( Click vào trái tim để chọn )`}
            </span>
          )}
        </p>
      </div>
      <div className="flex flex-col gap-64 mt-48">
        {letters.map((item) => {
          return (
            <LetterCard
              key={item.id}
              letter={item}
              isSelected={item.id === letterSelected?.id ? true : false}
              addLetterSelected={addLetterSelected}
            />
          );
        })}
      </div>
    </div>
  );
};

export default LetterStepThree;
