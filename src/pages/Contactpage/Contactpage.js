import React, { useEffect } from 'react'
import Contact from '../../components/contact/Contact'
import Hero from '../../components/common/Hero/Hero'
import { translatePageContent, getLanguagePreference, saveTranslatedContent, getTranslatedContent } from './../../pages/TranslateUtils'; // Import translation functions



const ContactPage = () => {
useEffect(() => {
  const fetchData = async () => {
    const language = getLanguagePreference();
    if (language === 'hi') {
      const componentName = 'Contact';
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
      <Hero title="Contact" />
      <Contact/>
    </div>
  )
}

export default ContactPage;
