import { motion, useSpring } from "framer-motion";
import { ChangeEvent } from "react";

export default function RangeSliderSpring() {
  const scale = useSpring(1);

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    scale.set(parseFloat(event.target.value));
  };

  return (
    <div>
      <motion.button className="box" style={{ scale }} />
      <div className="mt-[6rem]">
        <input
          type="range"
          className="absolute z-10"
          min={0.5}
          max={5}
          step={0.01}
          defaultValue={1}
          onChange={changeHandler}
        />
      </div>
    </div>
  );
}
