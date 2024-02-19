// LanguageSelector.js
import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { translatePageContent } from '../TranslateUtils';


const LanguageSelector = () => {
    const [selectedLanguage, setSelectedLanguage] = useState('en');

    const handleLanguageChange = (language) => {
        if (language !== selectedLanguage) {
            if (language === 'en') {
                localStorage.removeItem('language');
                window.location.reload();
            } else {
                localStorage.setItem('language', language);
                translatePageContent();
                setSelectedLanguage(language);
            }
        }
    };

    return (
        <Dropdown  >
            <Dropdown.Toggle variant="" id="dropdown-basic" style={{background:"rgba(0,0,0,0)",color:"rgba(0,0,0,.5)",fontFamily:"Roboto"}}>
                {selectedLanguage === 'en' ? 'English' : 'Hindi'}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {selectedLanguage !== 'en' && (
                    <Dropdown.Item onClick={() => handleLanguageChange('en')}>English</Dropdown.Item>
                )}
                {selectedLanguage !== 'hi' && (
                    <Dropdown.Item onClick={() => handleLanguageChange('hi')}>Hindi</Dropdown.Item>
                )}
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default LanguageSelector;
