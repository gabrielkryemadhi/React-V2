import React, { useState } from "react";
// import { DisplayLanguage } from "./displayLanguege";
import { LanguageContext } from "./languageContext";
import { Counter } from "./state";
import { Sum } from "./sum";
import { Welcome } from "./welcome";

export function App(){

  const[language, setLanguage] = useState('en')

  function handleLanguageChange(e){
     setLanguage(e.target.value);
  }

    return (
      <>
        <div>
          {/* <DisplayLanguage /> */}
          <select
            name="language"
            value={language}
            onChange={handleLanguageChange}
          >
            <option value="en">English</option>
            <option value="mon">Mongolian</option>
          </select>
          <LanguageContext.Provider value={language}>
            <Welcome />
            <Sum /> 
            <Counter inicialValue={0} />
          </LanguageContext.Provider>
        </div>
      </>
    );
  }

export default App;
