import { ChangeEvent } from "react"
import Button from "./components/Button"
import Input from "./components/Input";

function App() {
  const handleButtonClick = (): void => console.log("Button clicked")
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => console.log(event.target.value);

  return (
    <div>
      <h1>Homework 38</h1>
      <Button text="Click me" onClick={handleButtonClick}/>
      <Input onChange={handleInputChange} placeholder="Enter text here"/>
    </div>
  )
}

export default App
