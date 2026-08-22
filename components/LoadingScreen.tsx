"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [visible, setVisible] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((c) => {
        if (c >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setVisible(false);
            setTimeout(onComplete, 600);
          }, 200);
          return 100;
        }
        return c + Math.floor(Math.random() * 8) + 3;
      });
    }, 40);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "#050505",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "32px",
          }}
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "48px",
              fontWeight: 800,
              color: "#f0f0f0",
              letterSpacing: "-0.04em",
            }}
          >
            RK
          </motion.div>

          {/* Progress bar */}
          <div
            style={{
              width: "120px",
              height: "1px",
              background: "rgba(255,255,255,0.08)",
              borderRadius: "1px",
              overflow: "hidden",
            }}
          >
            <motion.div
              style={{
                height: "100%",
                background: "#f0f0f0",
                borderRadius: "1px",
                width: `${Math.min(count, 100)}%`,
              }}
              transition={{ ease: "linear" }}
            />
          </div>

          {/* Counter */}
          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "11px",
              color: "#444",
              letterSpacing: "0.15em",
              fontWeight: 500,
            }}
          >
            {Math.min(count, 100)}%
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
