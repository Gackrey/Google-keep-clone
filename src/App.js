import "./styles.css";
import Home from './pages/Home'
import Delete from './pages/Delete'
import Archive from './pages/Archive'
import Sidebar from './Components/Sidebar'
import Navbar from './Components/Navbar'
import { useState } from "react";
export default function App() {
  const [page, SetPage] = useState('home')
  return (
    <div className="App">
      <Navbar />
      <div className="homeview">
        <Sidebar pageset={SetPage} />
        {page === 'home' && <Home />}
        {page === 'archive' && <Archive />}
        {page === 'delete' && <Delete />}
      </div>
    </div>
  );
}
