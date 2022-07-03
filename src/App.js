import GlobalStyle from "./globalStyles";
import React, { useState } from "react"
import { getImageCat, getImageDog } from './services/api'
import Container from "./components/Container";
import Header from "./components/Header";

function App() {

  const [count, setCount] = useState(0)
  const colors = ['#69f58e', '#69d0f5', '#f2eb88', '#f28d88', '#595555']

  const BgBody = () => {
    return <GlobalStyle color={colors[count]} />
  }

  const changeCounter = () => {
    setCount((count + 1) % colors.length)
  }

  return (
    <>
      <BgBody />
      <Header />
      <Container getImageAnimal={getImageCat} animal={'CAT'} changeCounter={changeCounter} />
      <Container getImageAnimal={getImageDog} animal={'DOG'} changeCounter={changeCounter} />
    </>
  );
}

export default App;

// npm install react-transition-group --save
