import React from "react";
import { LanguageContext } from "./languageContext";
import { Counter } from "./state";
import { Sum } from "./sum";
import { Welcome } from "./welcome";

export class App extends React.Component {
  state = {
    language: "en",
  };

  handleLanguageChange = (event) => {
    this.setState({
      language: event.target.value,
    });
  };

  render() {
    return (
      <>
        <div>
          <select
            name="language"
            value={this.state.language}
            onChange={this.handleLanguageChange}
          >
            <option value="en">English</option>
            <option value="mon">Mongolian</option>
          </select>
          <LanguageContext.Provider value="this.state.language">
            <Welcome />
            <Sum />
            <Counter inicialValue={0} />
          </LanguageContext.Provider>
        </div>
      </>
    );
  }
}

export default App;
