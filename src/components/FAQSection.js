import React, { useState, useRef, useEffect } from "react";
import "./FAQSection.css";

const faqs = [
  { question: "What is LinkLab?", answer: "LinkLab is a platform to manage and share links." },
  { question: "Is it free?", answer: "Yes, LinkLab has a free version with basic features." },
  { question: "Can I share my links with others?", answer: "Yes, you can share your collections easily with anyone." },
  
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const answerRefs = useRef([]);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Fix: Update max-height when openIndex changes
  useEffect(() => {
    answerRefs.current.forEach((ref, index) => {
      if (ref) {
        if (openIndex === index) {
          ref.style.maxHeight = ref.scrollHeight + "px";
        } else {
          ref.style.maxHeight = "0px";
        }
      }
    });
  }, [openIndex]);

  return (
    <div className="faq-div">
      <h2 className="faq-title">FAQs</h2>

      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={index} className="faq-item">
            <button
              className={`faq-question ${isOpen ? "active" : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className="faq-toggle">{isOpen ? "−" : "+"}</span>
            </button>

            <div
              ref={(el) => (answerRefs.current[index] = el)}
              className={`faq-answer ${isOpen ? 'open' : ''}`}
              style={{
                maxHeight: "0px", // Will be updated by useEffect
                opacity: isOpen ? 1 : 0,
              }}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}