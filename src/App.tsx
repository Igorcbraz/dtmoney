import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Modal from 'react-modal';
import { TransactionsProvider } from './hooks/useTransactions';

import { Home } from './pages/Home'
import { Login } from './pages/Login';
import { Cadastro } from './pages/Cadastro';

import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root');

export function App() {
  return (
    <BrowserRouter>
      <TransactionsProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Cadastro" element={<Cadastro />} />
        </Routes>
      </TransactionsProvider>

      <GlobalStyle/>
    </BrowserRouter>
  );
}
