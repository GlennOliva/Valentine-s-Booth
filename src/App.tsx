
import { Route, Routes } from 'react-router'
import LandingPage from './Pages/LandingPage'

import '../src/App.css';

import ImageDownload from './Pages/ImageDownload';
import CameraPage from './Pages/CameraPage';



const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path='/camera' element={<CameraPage/>}/>
      <Route path='/download' element={<ImageDownload/>}/>
    </Routes>
    </>
  )
}

export default App