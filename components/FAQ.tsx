"use client";

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';

const categories = {
  general: "General",
  services: "Services",
  process: "Process",
};

const faqData = {
  general: [
    {
      question: "Are you available for freelance projects?",
      answer: "Yes! I occasionally take on freelance projects, depending on my schedule. If you have an exciting UI/UX or Frontend development project in mind, feel free to reach out via email."
    },
    {
      question: "What is your primary tech stack?",
      answer: "My core stack revolves around the React ecosystem. I heavily use Next.js, TypeScript, and Tailwind CSS. For fluid animations and motion design, I exclusively use Framer Motion and GSAP."
    }
  ],
  services: [
    {
      question: "Do you only do frontend development?",
      answer: "While my expertise lies in Frontend Engineering, I'm also deeply involved in Creative Technology and UI/UX Design. I bridge the gap between design and engineering to create pixel-perfect, interactive web experiences."
    },
    {
      question: "Can you help optimize my website's performance?",
      answer: "Absolutely. I specialize in web performance optimization, fixing Core Web Vitals (LCP, CLS, INP), minimizing bundle sizes, and implementing best practices for Next.js architectures."
    }
  ],
  process: [
    {
      question: "How do you approach a new web project?",
      answer: "I start by understanding your goals and target audience. From there, I establish a robust design system and component architecture before diving into iterative development, ensuring everything is scalable and accessible from day one."
    },
    {
      question: "How long does a typical project take?",
      answer: "It entirely depends on the scope. A simple landing page might take a week, while a full-scale web application with complex animations and backend integration (like Supabase) can take a few months."
    }
  ]
};

export default function FAQ() {
  const categoryKeys = Object.keys(categories);
  const [selectedCategory, setSelectedCategory] = useState(categoryKeys[0]);

  return (
    <section 
      id="faq"
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "120px 24px",
        background: "#050505",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <FAQHeader />
      <FAQTabs 
        categories={categories}
        selected={selectedCategory} 
        setSelected={setSelectedCategory} 
      />
      <FAQList 
        faqData={faqData}
        selected={selectedCategory} 
      />
    </section>
  );
}

const FAQHeader = () => (
  <div style={{
    position: "relative",
    zIndex: 10,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  }}>
    <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}>
      <span
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "11px",
          fontWeight: 500,
          color: "#444",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
        }}
      >
        (FAQ)
      </span>
      <span
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "11px",
          fontWeight: 500,
          color: "#444",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
        }}
      >
        Common Questions
      </span>
    </div>
    
    <h2
      style={{
        marginBottom: "48px",
        fontFamily: "'Syne', sans-serif",
        fontSize: "clamp(32px, 5vw, 56px)",
        fontWeight: 800,
        letterSpacing: "-0.03em",
        lineHeight: 1.15,
        color: "#f0f0f0",
      }}
    >
      Got <span style={{ color: "#666" }}>questions?</span>
    </h2>
  </div>
);

const FAQTabs = ({ categories, selected, setSelected }: { categories: Record<string, string>, selected: string, setSelected: (k: string) => void }) => (
  <div style={{
    position: "relative",
    zIndex: 10,
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    gap: "16px",
  }}>
    {Object.entries(categories).map(([key, label]) => {
      const isSelected = selected === key;
      return (
        <button
          key={key}
          onClick={() => setSelected(key)}
          className="cursor-target"
          style={{
            position: "relative",
            overflow: "hidden",
            whiteSpace: "nowrap",
            borderRadius: "999px",
            border: isSelected ? "1px solid rgba(255,255,255,0.2)" : "1px solid rgba(255,255,255,0.05)",
            padding: "10px 24px",
            fontSize: "14px",
            fontWeight: 500,
            transition: "all 0.5s ease",
            background: "transparent",
            color: isSelected ? "#050505" : "#888",
            cursor: "pointer",
            fontFamily: "'Space Grotesk', sans-serif",
            letterSpacing: "0.02em",
          }}
          onMouseEnter={(e) => {
            if (!isSelected) e.currentTarget.style.color = "#f0f0f0";
          }}
          onMouseLeave={(e) => {
            if (!isSelected) e.currentTarget.style.color = "#888";
          }}
        >
          <span style={{ position: "relative", zIndex: 10 }}>{label}</span>
          <AnimatePresence>
            {isSelected && (
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                exit={{ y: "100%" }}
                transition={{ duration: 0.5, ease: "backIn" }}
                style={{
                  position: "absolute",
                  inset: 0,
                  zIndex: 0,
                  background: "#f0f0f0",
                }}
              />
            )}
          </AnimatePresence>
        </button>
      );
    })}
  </div>
);

const FAQList = ({ faqData, selected }: { faqData: Record<string, any[]>, selected: string }) => (
  <div style={{
    margin: "48px auto 0",
    maxWidth: "768px",
    minHeight: "300px",
  }}>
    <AnimatePresence mode="wait">
      {Object.entries(faqData).map(([category, questions]) => {
        if (selected === category) {
          return (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              {questions.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
              ))}
            </motion.div>
          );
        }
        return null;
      })}
    </AnimatePresence>
  </div>
);

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      animate={isOpen ? "open" : "closed"}
      style={{
        borderRadius: "16px",
        border: "1px solid rgba(255,255,255,0.05)",
        transition: "background 0.3s ease",
        background: isOpen ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.01)",
        overflow: "hidden",
      }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-target"
        style={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
          padding: "24px",
          textAlign: "left",
          background: "none",
          border: "none",
          cursor: "pointer",
          outline: "none",
        }}
      >
        <span
          style={{
            fontSize: "clamp(16px, 2vw, 18px)",
            fontWeight: 600,
            transition: "color 0.3s ease",
            color: isOpen ? "#fff" : "#ccc",
            fontFamily: "'Syne', sans-serif",
          }}
        >
          {question}
        </span>
        <motion.span
          variants={{
            open: { rotate: "45deg" },
            closed: { rotate: "0deg" },
          }}
          transition={{ duration: 0.2 }}
          style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          <Plus
            size={20}
            color={isOpen ? "#fff" : "#666"}
            style={{ transition: "color 0.3s ease" }}
          />
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{ 
          height: isOpen ? "auto" : "0px", 
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{ overflow: "hidden", padding: "0 24px" }}
      >
        <p 
          style={{
            paddingBottom: "24px",
            fontSize: "15px",
            lineHeight: 1.6,
            color: "#888",
            fontFamily: "'Space Grotesk', sans-serif",
            margin: 0,
          }}
        >
          {answer}
        </p>
      </motion.div>
    </motion.div>
  );
};
