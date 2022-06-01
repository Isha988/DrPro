import './App.css';
import Nav from './components/Nav'
import Footer from './components/Footer';
import Home from './components/pages/Home';
import { ContextProvider } from './components/ContextProvider';
import { Routes, Route} from "react-router-dom";
import Doctor from './components/pages/Doctor';

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <Nav/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="doctors" element={<Doctor/>} />
        </Routes>
        <Footer/>
      </div>
    </ContextProvider>
  );
}

export default App;
