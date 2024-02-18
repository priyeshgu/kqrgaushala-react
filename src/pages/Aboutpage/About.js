import React, { useEffect } from 'react'
import About from '../../components/homepage/About/About'
import Members from '../../components/homepage/About/Members/Members'
import Statements from '../../components/homepage/About/Statements/Statements'
import Hero from '../../components/common/Hero/Hero'
import { translatePageContent, getLanguagePreference, saveTranslatedContent, getTranslatedContent } from './../../pages/TranslateUtils'; // Import translation functions



const Aboutpage = () => {
useEffect(() => {
  const fetchData = async () => {
    const language = getLanguagePreference();
    if (language === 'hi') {
      const componentName = 'About';
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
    <>
    <Hero title="About" />
    <About/>
    <Statements/>
    <Members/>
    </>
  )
}

export default Aboutpage;