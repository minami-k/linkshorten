import { useState  } from "react";
import Input from "./components/Form/Input";
import Output from "./components/Form/Output";

function App() {
  const [inputValue, setInputValue] = useState("")

  return (
    <div className="has-text-centered">
      <Input setInputValue={setInputValue}/>
      <Output inputValue={inputValue}/>
    </div>
  );
}

export default App;
