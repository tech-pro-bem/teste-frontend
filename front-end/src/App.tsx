import { ImageGenerator } from "./components/ImageGenerator/Index"
import { GlobalStyle } from "./styles/global"

function App() {
  return (
    <>
      <main>
        <section>
          <ImageGenerator petType="cat" width={200} height={300}/>
          <ImageGenerator petType="dog" width={200} height={300}/>
          <GlobalStyle/>
        </section>
      </main>
    </>
  )
}

export default App
