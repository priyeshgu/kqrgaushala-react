// translationUtils.js
import axios from 'axios';

export const translateContentAPI = async (elementsWithText) => {
    try {
      // Traverse the DOM and extract text content from all suitable elements
      const textsToTranslate = Array.from(elementsWithText).map(element => element.textContent).join('\n');
  
      // Translate the text content
      const response = await axios.post('https://api.kqrgaushala.org/translate', { webpageContent: textsToTranslate });
      const translatedTexts = response.data.TranslatedText.split('\n');
      localStorage.setItem('language', 'hi');
  
      // Update the text content of each element with its translated counterpart
      elementsWithText.forEach((element, index) => {
        element.textContent = translatedTexts[index];
      });
  
      // Return the translated text
      return response.data.translatedText;
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  export const translatePageContent = async () => {
    try {
      const elementsWithText = document.querySelectorAll('p, span, h1, h2, h3, h4, h5, h6,  button');
      const translatedContent =await translateContentAPI(elementsWithText);
      return translatedContent
    } catch (error) {
      console.error('Error:', error);
    }
  };

// localStorageUtils.js
export const saveTranslatedContent = (pageName, language, content) => {
    localStorage.setItem(`${pageName}_${language}`, JSON.stringify(content));
};

export const getTranslatedContent = (pageName, language) => {
    const storedContent = localStorage.getItem(`${pageName}_${language}`);
    return storedContent ? JSON.parse(storedContent) : null;
};

export const saveLanguagePreference = (language) => {
    localStorage.setItem('language', language);
};

export const getLanguagePreference = () => {
    return localStorage.getItem('language') || 'en'; // Default to English if preference is not set
};
