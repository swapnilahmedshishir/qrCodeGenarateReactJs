import './App.css';
import {Routes, Route,NavLink} from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Genatate from './component/Genarate/Genatate';
import Scanned from './component/Scanned/Scanned';
import Webcam from './component/Webcam/Webcam';

function App() {
  return (
    <div className="App">
      <header>
        <NavLink to='/qrcode'><Button>QR Code Genarate</Button></NavLink>
        <NavLink to='/scanner'><Button>QR Code Scanned </Button></NavLink>
        <NavLink to='/webcam'><Button>QR Code Scanned WebCam</Button></NavLink>
      </header>
      <div className='code_box'>
      <Routes>
        <Route exact path="/" element={<Genatate />} />
        <Route  path="/qrcode" element={<Genatate />} />
        <Route path="/scanner" element={<Scanned />} />
        <Route path="/webcam" element={<Webcam />} />
      </Routes>

      </div>
     
    </div>
  );
}

export default App;
