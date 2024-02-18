// LanguageSelector.js
import React from 'react';
import { translatePageContent } from './TranslateUtils';

const LanguageSelector = () => {
    const handleLanguageChange = (language) => {
        if (language === 'en') {
            // Remove language preference from localStorage
            localStorage.removeItem('language');
            // Refresh the page
            window.location.reload();
        } else {
            // Save language preference to localStorage
            localStorage.setItem('language', language);
            // Optionally, trigger a page refresh or update translation context to reflect the language change
            translatePageContent();
        }
    };

    return (
        <div>
            <button onClick={() => handleLanguageChange('en')}>English</button>
            <button onClick={() => handleLanguageChange('hi')}>Hindi</button>
        </div>
    );
};

export default LanguageSelector;

