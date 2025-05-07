import { useEffect, useState } from 'react'
import "../Styles/Faqs.css"

const Faqs = () =>{
       const [isVisible, setIsVisible] = useState(false);
     
       useEffect(() => {
         const handleScroll = () => {
           const section = document.getElementById("faq-container");
           if (section) {
             const rect = section.getBoundingClientRect();
             if (rect.top < window.innerHeight * 0.75) {
               setIsVisible(true);
             }
           }
         };
     
         window.addEventListener("scroll", handleScroll);
         return () => window.removeEventListener("scroll", handleScroll);
       }, []);

    const faqs = [
        {
          question: "How does HabeoPrax differ from other habit trackers?",
          answer:
            "HabeoPrax stands out with its comprehensive insights, personalized rewards system, and adaptive reminders. Unlike other trackers, we focus on the psychology of habit formation and provide detailed analytics to help you understand your patterns.",
        },
        {
          question: "Is there a limit to how many habits I can track?",
          answer: "The free plan allows tracking up to 5 habits. Premium plans offer unlimited habit tracking along with additional features like advanced analytics and priority support.",
        },
        {
          question: "Can I export my habit data?",
          answer: "Yes! Premium users can export their habit data in various formats (CSV, PDF) for external analysis or record-keeping. This is perfect for those who want to dig deeper into their habits.",
        },
        {
          question: "How are streaks calculated?",
          answer: "Streaks are calculated based on consistent completion of your habits according to their schedule (daily, weekly, etc.). We also have a flexible streak system that allows for occasional misses without breaking your momentum.",
        },
        {
          question: "Does HabeoPrax work offline?",
          answer: "Yes, the mobile apps work offline and will sync your data when you're back online. The web version requires an internet connection.",
        },
        {
          question: "Can I set up team habits for my organization?",
          answer: "Absolutely! Our Teams plan allows organizations to create shared habits, track group progress, and foster accountability among team members.",
        },
      ];
      const [openIndex, setOpenIndex] = useState(null);

      const toggleFAQ = (index) => {
       setOpenIndex(openIndex === index ? null : index);
     };
      
    return (<div className='faq-CONTAINER'>
           <div id = "faq-container" className={`faq-container ${isVisible ? "slide-in" : ""}`}>
        <h2 className="faq-title">Frequently Asked <span className="highlight">Questions</span></h2>
        <p className="faq-subtitle">Everything you need to know about HabeoPrax and building lasting habits.</p>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button
                onClick={() => toggleFAQ(index)}
                className="faq-question"
              >
                {faq.question}
                <span className="toggle-icon">{openIndex === index ? "-" : "+"}</span>
              </button>
              {openIndex === index && (
                <div className="faq-answer">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>)
}

export default Faqs