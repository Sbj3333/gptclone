import './App.css';
import Backgroundvideo from './Background';
import Content from './Content';
import Navbar from './Navbar'
import Input from './Input'

function App() {
  return (
    <div>
      {/* <Backgroundvideo/> */}
      <div className='container'>
        <div className='box'>
          <Navbar/>
          <Content/>
          <Input/>
        </div>
      </div>
    </div>
  );
}

export default App;
