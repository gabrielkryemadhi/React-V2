import React, { useContext } from "react";
import { LanguageContext } from "./languageContext";

// const Languages = {
//   en: {
//     select: "English",
//   },
//   mon: {
//     select: "Mongolian",
//   },
// };

// export class DisplayLanguage extends React.Component {
//   render() {
//     return (
//       <>
//         <LanguageContext.Consumer>
//           {(language) => {
//             return (
//               <div>
//                 <h1>{Languages[language].select}</h1>
//               </div>
//             );
//           }}
//         </LanguageContext.Consumer>
//       </>
//     );
//   }
// }

export function DisplayLanguage() {
  const language = useContext(LanguageContext);

  return <h3>Currently selected: {language}</h3>;
}
