import { useState  } from "react";
import Input from "./components/Form/Input";
import Output from "./components/Form/Output";
import "./style.css"

function App() {
  const [inputValue, setInputValue] = useState("")

  return (
    <div className="has-text-centered main-box">
      <div className="inside-box">
      <Input setInputValue={setInputValue}/>
      <Output inputValue={inputValue}/>
      </div>
    </div>
  );
}

export default App;
