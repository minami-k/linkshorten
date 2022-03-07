import React, { useState } from "react";
import "./form.css";

const Input = ({ setInputValue }) => {
  const [inputUrl, setInputUrl] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    setInputValue(inputUrl)
    setInputUrl("");
  };
  const changeHandler = (e) => {
    setInputUrl(e.target.value);
  };

  return (
    <div className="form">
      <h1 className="is-size-3">Paste URL you wish to modify</h1>
      <form onSubmit={submitHandler}>
        <div className="mt-4">
          <label className="is-size-5" style={{display:"none"}}>Shorten URL</label>
          <br />
          <input
            type="text"
            value={inputUrl}
            placeholder="Paste URL here"
            onChange={changeHandler}
            className="input-area input is-warning is-rounded is-focused "
          />
        </div>
        <button type="submit" className="button is-dark mt-4">
          Shorten
        </button>
      </form>
    </div>
  );
};

export default Input;
