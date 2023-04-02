import React from "react";
import { LanguageContext } from "./languageContext";

const Strings = {
  en: {
    FRAZE: "This is the total: ",
  },
  mon: {
    FRAZE: "Энэ бол нийт дүн:",
  },
};

export function Sum({ num = [0] }) {
  const sum = num.reduce((a, b) => a + b, 0);
  return (
    <div>
      <LanguageContext.Consumer>
        {(language) => {
          return (
            <div>
              <h4>
                {Strings[language].FRAZE}
                {sum}
              </h4>
            </div>
          );
        }}
      </LanguageContext.Consumer>
    </div>
  );
}
