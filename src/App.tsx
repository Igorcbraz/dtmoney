import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Modal from 'react-modal';
import { TransactionsProvider } from './hooks/useTransactions';

import { Home } from './pages/Home'
import { Login } from './pages/Login';
import { Cadastro } from './pages/Cadastro';

import { GlobalStyle } from "./styles/global";
import { Profile } from './pages/Profile';

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

      <GlobalStyle/>
    </BrowserRouter>
  );
}
