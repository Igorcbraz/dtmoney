import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { TransactionsProvider } from './hooks/useTransactions';
import Modal from 'react-modal';
import { ToastContainer } from 'react-toastify';

import { Home } from './pages/Home'
import { Login } from './pages/Login';
import { Cadastro } from './pages/Cadastro';

import { GlobalStyle } from "./styles/global";
import { Profile } from './pages/Profile';

import 'react-toastify/dist/ReactToastify.css';

Modal.setAppElement('#root');

export function App() {
  return (
    <BrowserRouter>
      <TransactionsProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Cadastro" element={<Cadastro />} />
          <Route path="/Profile" element={<Profile />} />
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
