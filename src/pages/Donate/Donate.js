import React, { useEffect } from "react";
import Donationmain from "../../components/donate/donationMain/Donationmain";
import Hero from "../../components/common/Hero/Hero";
import { translatePageContent, getLanguagePreference, saveTranslatedContent, getTranslatedContent } from './../../pages/TranslateUtils'; // Import translation functions

const Donate = () => {
  // useEffect(() => {
  //   const translatePageContent = async () => {
  //     const language = localStorage.getItem('language');
  //     if (language==='hi') {
  //       const elementsWithText = document.querySelectorAll('p, span, h1, h2, h3, h4, h5, h6, a, button');
  //       var translatedTexts=await translateContentAPI(elementsWithText);
  //       localStorage.setItem('DonateHindi', translatedTexts.join('\n'));

  //     }
  //   };
  //   translatePageContent();
  // }, []);
  useEffect(() => {
    const fetchData = async () => {
      const language = getLanguagePreference();
      if (language === 'hi') {
        const componentName = 'Donate';
        const translatedContent = getTranslatedContent(componentName, language);
        if (!translatedContent) {
          const translatedText = await translatePageContent();
          if(translatedText!==undefined){
          saveTranslatedContent(componentName, language, translatedText);
          }
        }
      }
    };
  
    fetchData();
  }, []);


  return (
    <div>
      <Hero title="Donate" />
      <Donationmain/>
    </div>
  );
}

export default Donate;

