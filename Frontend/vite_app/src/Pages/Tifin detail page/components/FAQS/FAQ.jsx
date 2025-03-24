import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import "./faq.css"; // Import external CSS file

const faqs = [
  {
    question: "How does the delivery system work?",
    answer:
      "We deliver fresh meals twice daily - lunch between 11:30 AM to 1:00 PM and dinner between 7:00 PM to 8:30 PM. You can track your delivery in real-time through our app.",
  },
  {
    question: "Can I customize my meals?",
    answer:
      "Yes! You can customize your meals based on your dietary preferences. We offer vegetarian, non-vegetarian, Jain, and diet-friendly options.",
  },
  {
    question: "What about the quality of ingredients?",
    answer:
      "We use fresh, high-quality ingredients sourced daily from trusted suppliers. Our kitchen maintains strict hygiene standards and follows all food safety guidelines.",
  },
  {
    question: "How can I cancel or pause my subscription?",
    answer:
      "You can easily manage your subscription through your dashboard. Pause or cancel your subscription with 24 hours notice before your next delivery.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="faq-header">
          <h2>Frequently Asked Questions</h2>
          <p>Find answers to common questions about our service</p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button
                className="faq-question"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span>{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="icon" />
                ) : (
                  <ChevronDown className="icon" />
                )}
              </button>
              {openIndex === index && <p className="faq-answer">{faq.answer}</p>}
            </div>
          ))}
        </div>

        <div className="faq-footer">
          <button className="ask-question-btn">Ask a Question</button>
        </div>
      </div>
    </section>
  );
}
