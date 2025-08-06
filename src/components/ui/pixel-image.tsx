"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const randomNumberBetween = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

interface PixelImageProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string;
  grid?: "6x4" | "8x8" | "8x3" | "4x6" | "3x8";
  customGrid?: { rows: number; cols: number };
  grayscaleAnimation?: boolean;
  pixelFadeInDuration?: number;
  maxAnimationDelay?: number;
  colorRevealDelay?: number;
}

const gridConfig = {
  "6x4": { rows: 6, cols: 4 },
  "8x8": { rows: 8, cols: 8 },
  "8x3": { rows: 8, cols: 3 },
  "4x6": { rows: 4, cols: 6 },
  "3x8": { rows: 3, cols: 8 },
};

export const PixelImage = ({
  src,
  grid = "8x8",
  customGrid,
  className,
  grayscaleAnimation = true,
  pixelFadeInDuration = 1000,
  maxAnimationDelay = 1200,
  colorRevealDelay = 1500,
}: PixelImageProps) => {
  const { rows, cols } = customGrid || gridConfig[grid];
  const totalPixels = rows * cols;
  const pixelWidth = 100 / cols;
  const pixelHeight = 100 / rows;

  return (
    <div
      className={cn("relative w-full h-auto overflow-hidden", className)}
      style={{
        aspectRatio: `${cols} / ${rows}`,
      }}
    >
      {[...Array(totalPixels)].map((_, i) => {
        const row = Math.floor(i / cols);
        const col = i % cols;
        const animationDelay = randomNumberBetween(0, maxAnimationDelay);

        return (
          <motion.div
            key={i}
            className="absolute"
            style={{
              width: `${pixelWidth}%`,
              height: `${pixelHeight}%`,
              left: `${col * pixelWidth}%`,
              top: `${row * pixelHeight}%`,
              backgroundImage: `url(${src})`,
              backgroundSize: `${cols * 100}% ${rows * 100}%`,
              backgroundPosition: `${col * (100 / (cols - 1))}% ${
                row * (100 / (rows - 1))
              }%`,
            }}
            initial={{
              opacity: 0,
              filter: grayscaleAnimation ? "grayscale(100%)" : "none",
            }}
            animate={{
              opacity: 1,
              transition: {
                duration: pixelFadeInDuration / 1000,
                delay: animationDelay / 1000,
              },
            }}
          >
            {grayscaleAnimation && (
              <motion.div
                className="w-full h-full"
                style={{
                  backgroundImage: `url(${src})`,
                  backgroundSize: `${cols * 100}% ${rows * 100}%`,
                  backgroundPosition: `${col * (100 / (cols - 1))}% ${
                    row * (100 / (rows - 1))
                  }%`,
                }}
                initial={{ opacity: 1 }}
                animate={{
                  opacity: 0,
                  transition: {
                    delay:
                      (animationDelay + pixelFadeInDuration + colorRevealDelay) /
                      1000,
                  },
                }}
              />
            )}
          </motion.div>
        );
      })}
    </div>
  );
};
