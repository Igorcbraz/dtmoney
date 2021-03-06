import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { TransactionsProvider } from './hooks/useTransactions';
import Modal from 'react-modal';
import { ToastContainer } from 'react-toastify';

import { Home } from './pages/Home'
import { Login } from './pages/Login';
import { Cadastro } from './pages/Cadastro';
import { Docs } from './pages/Docs';
import { Profile } from './pages/Profile';
import { Landing } from './pages/Landing';
import { NewPassword } from './pages/NewPassword';

import { GlobalStyle } from "./styles/global";

import 'react-toastify/dist/ReactToastify.css';

Modal.setAppElement('#root');

export function App() {
  return (
    <BrowserRouter>
      <TransactionsProvider>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Cadastro" element={<Cadastro />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/newPassword" element={<NewPassword />} />
          <Route path="/Docs" element={<Docs />} />
        </Routes>
      </TransactionsProvider>

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
        theme='colored'
      />
      <GlobalStyle/>
    </BrowserRouter>
  );
}
