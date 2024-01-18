import { useState } from "react";

function useFlipToggle(initialVal = true) {
  // call useState, "reserve piece of state"
  const [isUp, setIsFacingUp] = useState(initialVal);
  const flipCard = () => {
    setIsFacingUp(isUp => !isUp);
  };
  return [isUp, flipCard];
}

export default useFlipToggle;