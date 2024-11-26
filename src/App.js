import './App.css';
import Footer from './components/Common/Footer/Footer';
import Header from './components/Common/Header/Header';
import MainComponents from './components/LandingPage/MainComponents/MainComponents';

function App() {
  return (
    <div className="App">
      <Header/>
      <MainComponents/>
      {/*<Footer/>*/}
    </div>
  );
}

export default App;
