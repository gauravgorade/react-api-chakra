import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header'

import Exchanges from './components/Exchanges'
import Coins from './components/Coins'
import CoinDetails from './components/CoinDetails'


function App() {
  return (

    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/exchanges" />} />
        <Route path="/exchanges" element={<Exchanges />} />
        <Route path="/coins" element={<Coins />} />
        <Route path="/coins/:id" element={<CoinDetails />} />
        {/* The user will be routed back to home if they attempt to access a path that does not exist. */}
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;


