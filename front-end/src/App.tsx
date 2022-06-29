import { ImageGenerator } from "./components/ImageGenerator/Index"
import { GlobalStyle } from "./styles/global"

function App() {
  return (
    <>
      <main>
        <h1>Pet Generator</h1>
        <section>
          <div>
            <ImageGenerator petType="cat"/>
            <ImageGenerator petType="dog"/>
            <ImageGenerator petType="cat" width={100} height={500}/>
            <ImageGenerator petType="dog" width={100} height={500}/>
          </div>
        </section>
      </main>
      <GlobalStyle/>
    </>
  )
}

export default App
