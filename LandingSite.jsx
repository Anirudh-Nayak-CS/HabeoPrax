// import { useEffect, useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import FirstPart from './Components/FirstPart.jsx';
// import Features from './Components/Features.jsx';
// import Faqs from './Components/Faqs.jsx';
// import Pricing from './Components/Pricing.jsx';
// import Footer from './Components/Footer.jsx';

// const LandingSite = () => {
// return(<>
// <FirstPart />
// <Features />
// <Faqs />
// <Pricing />
// <Footer />
// </>)
// }
// export default LandingSite;

import { useRef } from 'react';
import FirstPart from './Components/FirstPart.jsx';
import Features from './Components/Features.jsx';
import Faqs from './Components/Faqs.jsx';
import Pricing from './Components/Pricing.jsx';
import Footer from './Components/Footer.jsx';

const LandingSite = () => {
  const featuresRef = useRef(null);
  const faqsRef = useRef(null);
  const pricingRef = useRef(null);

  return (
    <>
      <FirstPart
        onScrollToFeatures={() => featuresRef.current?.scrollIntoView({ behavior: 'smooth' })}
        onScrollToFaqs={() => faqsRef.current?.scrollIntoView({ behavior: 'smooth' })}
        onScrollToPricing={() => pricingRef.current?.scrollIntoView({ behavior: 'smooth' })}
      />
      <div ref={featuresRef}><Features /></div>
      <div ref={faqsRef}><Faqs /></div>
      <div ref={pricingRef}><Pricing /></div>
      <Footer />
    </>
  );
};

export default LandingSite;
