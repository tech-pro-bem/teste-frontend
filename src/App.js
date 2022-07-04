import PetsContainer from "./components/PetsContainer";
import GlobalStyles from "./styles/global";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <PetsContainer />
      <GlobalStyles />
      <ToastContainer />
    </>
  );
}

export default App;
