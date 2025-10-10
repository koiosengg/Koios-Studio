import React, { useState } from "react";

function FAQ() {
  const FAQ_DATA = [
    {
      question: "What is a Khata in Bangalore?",
      answer:
        "A Khata is an official property account maintained by BBMP/BDA that proves property ownership for tax and utility purposes.",
    },
    {
      question: "How long does it take to get a Khata?",
      answer:
        " It typically takes 15–30 working days depending on document readiness and government processing.",
    },
    {
      question: "Can I transfer my Khata to a new owner?",
      answer:
        "Yes, Estate Now helps with Khata transfer when you buy or sell a property. All supporting documents like sale deed, tax receipts, and EC are required.",
    },
    {
      question: "What is the difference between Khata and e-Khata?",
      answer:
        "Khata is the physical document, while e-Khata is the digitized version introduced by BBMP for faster, paperless property records.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="template faq">
      <div className="template-heading">
        <p>FAQ’s</p>
        <h2>Frequently Asked Questions</h2>
      </div>
      <div className="faq-container">
        {FAQ_DATA.map((faqData, index) => (
          <React.Fragment key={index}>
            <div
              className={`faq-set ${activeIndex === index ? "active-faq" : ""}`}
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
            >
              <div className="faq-set-heading">
                <h3>{faqData.question}</h3>
                <div className="faq-set-svg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M8 9.97458L13.2332 5.12457C13.2754 5.08464 13.3254 5.05307 13.3805 5.03169C13.4356 5.01031 13.4945 4.99954 13.554 5.00001C13.6135 5.00048 13.6722 5.01218 13.7269 5.03443C13.7816 5.05668 13.8311 5.08904 13.8726 5.12963C13.9141 5.17022 13.9467 5.21824 13.9685 5.27092C13.9904 5.32359 14.0011 5.37987 13.9999 5.4365C13.9988 5.49313 13.9859 5.54898 13.9619 5.60082C13.938 5.65266 13.9035 5.69947 13.8604 5.73853L8.31362 10.8787C8.22966 10.9565 8.11714 11 8 11C7.88286 11 7.77034 10.9565 7.68638 10.8787L2.13958 5.73853C2.09652 5.69947 2.06201 5.65266 2.03807 5.60082C2.01412 5.54898 2.00121 5.49313 2.00008 5.4365C1.99895 5.37987 2.00962 5.32359 2.03148 5.27092C2.05333 5.21824 2.08594 5.17022 2.12741 5.12963C2.16888 5.08904 2.21839 5.05668 2.27308 5.03443C2.32776 5.01218 2.38654 5.00048 2.446 5.00001C2.50547 4.99954 2.56444 5.01031 2.61951 5.03169C2.67458 5.05307 2.72464 5.08464 2.76682 5.12457L8 9.97458Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
              <p>{faqData.answer}</p>
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
