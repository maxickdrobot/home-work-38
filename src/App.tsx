import Button from "./components/Button"

function App() {
  const handleButtonClick = () => console.log("Button clicked")

  return (
    <div>
      <h1>Homework 38</h1>
      <Button text="Click me" onClick={handleButtonClick}/>
    </div>
  )
}

export default App
