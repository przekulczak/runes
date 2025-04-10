import { useCallback, useState } from "react";
import { runeShapes } from "../data/shapes";

export const useCreateRune = () => {
  const [inputValue, setInputValue] = useState("");
  const [generatedSVG, setGeneratedSVG] = useState("");
  const [error, setError] = useState("");

  const generateSVG = () => {
    const value = inputValue.trim();
    const num = parseInt(value, 10);

    if (isNaN(num) || num < 1 || num > 9999) {
      setError("Please enter a valid number between 1 and 9999");
      setGeneratedSVG("");
      return;
    }
    setError("");

    let shape = "";
    if (runeShapes[num.toString()]) {
      shape = runeShapes[num.toString()];
    } else {
      const thousands = Math.floor(num / 1000);
      const hundreds = Math.floor((num % 1000) / 100);
      const tens = Math.floor((num % 100) / 10);
      const ones = num % 10;

      const shapes = [];

      if (thousands > 0) {
        shapes.push(runeShapes[(thousands * 1000).toString()]);
      }

      if (hundreds > 0) {
        shapes.push(runeShapes[(hundreds * 100).toString()]);
      }

      if (tens > 0) {
        shapes.push(runeShapes[(tens * 10).toString()]);
      }

      if (ones > 0) {
        shapes.push(runeShapes[ones.toString()]);
      }
      shape = shapes.join(" ");
    }

    setGeneratedSVG(shape);
  };

  const handleSubmit = useCallback(
    (e?: React.FormEvent) => {
      if (e) {
        e.preventDefault();
      }
      generateSVG();
    },
    [generateSVG]
  );

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
    },
    []
  );

  return {
    inputValue,
    generatedSVG,
    setGeneratedSVG,
    handleInputChange,
    error,
    generateSVG,
    handleSubmit,
  };
};
