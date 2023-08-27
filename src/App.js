import Navbar from './components/Navbar';
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TripForm from './components/Tripform';

function App() {
  return (
    <BrowserRouter>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Navbar tittle="C.U.S.T" AboutText="About" />
      <Routes>
      <Route path="/" element={<TripForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
