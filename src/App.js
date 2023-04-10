// import React, { useState } from "react";
// import { DisplayLanguage } from "./displayLanguege";
// import { LanguageContext } from "./languageContext";
import { FilteredList } from "./filteredList";
import { Counter } from "./state";
// import { Sum } from "./sum";
// import { Welcome } from "./welcome";

const users = [
  { id: 1, name: "Pax1", age: 62 },
  { id: 2, name: "Pax2", age: 28 },
  { id: 3, name: "Pax3", age: 26 },
  { id: 4, name: "Pax4", age: 11 },
  { id: 5, name: "Pax5", age: 57 },
  { id: 6, name: "Pax6", age: 12 },
  { id: 7, name: "Pax7", age: 50 },
];

export function App(){

  // const[language, setLanguage] = useState('en')

  // function handleLanguageChange(e){
  //    setLanguage(e.target.value);
  // }

    return (
      <>
        {/* <div>
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
        </div> */}
        <Counter />
        <FilteredList list={users}/>
      </>
    );
  }

export default App;
