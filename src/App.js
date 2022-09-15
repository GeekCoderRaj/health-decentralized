import { Route, Routes } from 'react-router-dom';
import AdminPage from './components/AdminPage';
import DoctorPage from './components/DoctorPage';
import Home from './components/Home';
import PatientPage from './components/PatientPage';
import PatientSignup from './components/PatientSignup';
import './styles/App.css';

function App() {
  return (
    // <Home />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/admin' element={<AdminPage />} />
      <Route path='/doctor' element={<DoctorPage />} />
      <Route path='/patient' element={<PatientPage />} />
      <Route path='/patient-signup' element={<PatientSignup />} />
    </Routes>
  );
}

export default App;
