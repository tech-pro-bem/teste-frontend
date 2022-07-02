import GlobalStyle from './assets/theme/globalStyles';
import Topbar from "./components/topbar/Topbar";
import Footer from './components/footer/Footer';
import Homepage from './pages/homepage/Homepage';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Topbar />
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
