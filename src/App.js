import './App.css';
import "../src/Pages/LandingPage"
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import LandingPage from '../src/Pages/LandingPage';
import LoginPage from '../src/Pages/LoginPage';
import SignupPage from '../src/Pages/SignupPage';
import ProfilePage from '../src/Pages/ProfilePage';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/profile' element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
