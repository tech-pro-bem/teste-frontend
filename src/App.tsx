import { Card } from "./components/Card";
import "./styles/gobal.css"

export function App() {

  return (
    <>
      <h1>Pet Generator</h1>
      <Card type="cat" />
      <Card type="dog" />
    </>
  )
}

