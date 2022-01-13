import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Modal from 'react-modal';
import { TransactionsProvider } from './hooks/useTransactions';

import { Home } from './pages/Home'
import { Login } from './pages/Login';

import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root');

export function App() {
  return (
    <BrowserRouter>
      <TransactionsProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </TransactionsProvider>

      <GlobalStyle/>
    </BrowserRouter>
  );
}
