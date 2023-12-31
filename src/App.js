import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <div id='wrapperDiv'>
        <div id='headerWrapper' className='mt-4 mx-4 mb-[38px] md:mt-6 md:mx-10 md:mb-[99px] xl:mx-[165px] xl:mb-[185px]'>
          <Header />
        </div>
        <div id='bodyWrapper'>
          <Body />
        </div>
        <div id='footerWrapper' className='px-4 bg-naval md:px-10 xl:px-[165px]'>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
