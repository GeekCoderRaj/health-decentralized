import { Route, Routes } from 'react-router-dom';
import Account from './components/admin-page/Account';
import AddDoctor from './components/admin-page/AddDoctor';
import ViewDoctors from './components/admin-page/ViewDoctors';
import AdminPage from './components/AdminPage';
import DoctorPage from './components/DoctorPage';
import Home from './components/Home';
import PatientPage from './components/PatientPage';
import PatientSignup from './components/PatientSignup';
import './styles/App.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/admin' element={<AdminPage />} />
      <Route path='/doctor' element={<DoctorPage />} />
      <Route path='/patient' element={<PatientPage />} />
      <Route path='/patient-signup' element={<PatientSignup />} />
      <Route path='/admin/add-doctor' element={<AddDoctor />} />
      <Route path='/admin/view-doc' element={<ViewDoctors />} />
      <Route path='/admin/account' element={<Account />} />
    </Routes>
  );
}

export default App;
