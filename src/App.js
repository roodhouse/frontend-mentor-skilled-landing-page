import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div id='wrapperDiv'>
        <div id='headerWrapper' className='mt-4 mx-4 mb-[38px]'>
          <Header />
        </div>
        <div id='bodyWrapper'>
          <Body />
        </div>
        <div id='footerWrapper' className='bg-naval px-4'>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
