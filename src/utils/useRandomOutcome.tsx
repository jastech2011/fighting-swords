import { useState } from "react";

const useRandomOutcome = (): [string, () => void] => {
  const [outcome, setOutcome] = useState<string>("");

  const generateOutcome = () => {
    setOutcome(Math.random() < 0.5 ? "Win" : "Lose");
  };

  return [outcome, generateOutcome];
};

export default useRandomOutcome;
