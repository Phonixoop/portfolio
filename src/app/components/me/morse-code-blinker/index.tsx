import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { MORSE_CODE } from "./morse-code";

type Token = "." | "-" | "|" | "/"; // '.' = dot, '-' = dash, '|' = pause between letters, '/' = pause between words

// Morse code timing constants (unit in ms)
const DOT_DURATION = 333;
const DASH_DURATION = DOT_DURATION * 3;
const BETWEEN_SYMBOLS = DOT_DURATION; // gap between dots and dashes in a letter
const BETWEEN_LETTERS = DOT_DURATION * 3; // gap between letters
const BETWEEN_WORDS = DOT_DURATION * 7; // gap between words
const LOOP_DELAY = DOT_DURATION * 10; // additional delay between loops

function textToMorse(text: string): Token[] {
  const tokens: Token[] = [];
  const words = text.trim().toUpperCase().split(/\s+/);

  words.forEach((word, wi) => {
    const letters = word.split("");
    letters.forEach((ch, ci) => {
      const code = MORSE_CODE[ch as keyof typeof MORSE_CODE];
      if (!code) return;
      tokens.push(...(code.split("") as Token[]));
      if (ci < letters.length - 1) tokens.push("|");
    });
    if (wi < words.length - 1) tokens.push("/");
  });

  return tokens;
}

export default function MorseBlinker({
  text,
  loop = true,
}: {
  text: string;
  loop?: boolean;
}) {
  const [sequence, setSequence] = useState<Token[]>([]);
  const [index, setIndex] = useState(0);
  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    setSequence(textToMorse(text));
    setIndex(0);
  }, [text]);

  useEffect(() => {
    if (sequence.length === 0) return;

    let timer: ReturnType<typeof setTimeout>;
    const token = sequence[index];

    const advance = () =>
      setIndex((prev) =>
        prev + 1 < sequence.length ? prev + 1 : loop ? 0 : prev,
      );

    if (token === "." || token === "-") {
      const duration = token === "." ? DOT_DURATION : DASH_DURATION;
      setIsOn(true);
      timer = setTimeout(() => {
        setIsOn(false);
        timer = setTimeout(advance, BETWEEN_SYMBOLS);
      }, duration);
    } else {
      setIsOn(false);
      const offDuration =
        token === "|"
          ? BETWEEN_LETTERS - BETWEEN_SYMBOLS
          : BETWEEN_WORDS - BETWEEN_SYMBOLS;
      timer = setTimeout(advance, offDuration);
    }

    return () => clearTimeout(timer);
  }, [index, sequence, loop]);

  useEffect(() => {
    if (sequence.length === 0 && loop) {
      const loopTimer = setTimeout(() => setIndex(0), LOOP_DELAY);
      return () => clearTimeout(loopTimer);
    }
  }, [sequence, loop]);

  return (
    <div className="flex flex-col items-center gap-4">
      <motion.div
        className="bg-m-foreground size-2 rounded-full"
        animate={{ opacity: isOn ? 0.3 : 0.09 }}
        transition={{ duration: 0.08 }}
      />
    </div>
  );
}
