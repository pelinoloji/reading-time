import React, { useState } from "react";
import "./App.scss";
import $ from "jquery";

import popperJs from "popper.js";
window.jQuery = $;
window.$ = $;
global.jQuery = $;
global["popper.js"] = popperJs;

function App() {
  const [text, setText] = useState("");
  const [readingTime, setReadingTime] = useState("");

  const disabledButton = () => {
    return !text;
  };

  const calculateTime = () => {
    const howManyWords = text.split(" ").length;

    if (howManyWords < 230) {
      setReadingTime("1");
    } else if (howManyWords >= 230) {
      const wordAMinute = parseFloat(howManyWords / 230).toFixed(1);
      setReadingTime(wordAMinute);
    }
  };

  return (
    <div className="container text-align-center">
      <div>
        <h1 className="col-12" id="title">
          Estimated Reading Time
        </h1>
        <textarea
          className="col-12"
          placeholder="Please enter your text"
          onChange={event => {
            setText(event.target.value);
          }}
        ></textarea>
        <div className="btn-area col-12">
          <button
            type="button"
            className="btn btn-primary col-3 btn-lg"
            disabled={disabledButton()}
            onClick={() => {
              calculateTime();
            }}
          >
            Calculate
          </button>
        </div>
        {//!! Converts Object to boolean. If it was falsey (e.g. 0, null, undefined, etc.), it will be false, otherwise, true
        !!readingTime ? (
          <h5 data-testid="result">
            It will take approximately {readingTime} minutes
          </h5>
        ) : null}
      </div>
    </div>
  );
}

export default App;
