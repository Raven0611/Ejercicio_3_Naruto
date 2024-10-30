
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from './Components/Header/Header';

//importar las páginas de la App
import HomePage from "./Pages/HomePage/HomePage";
import AboutPage from "./Pages/AboutPage/AboutPage";
import ListFavorite from "./Pages/ListFavorite/ListFavorite";


const App = () => {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ListFavorite" element={<ListFavorite />} />
          <Route path="/AboutPage/:id" element={<AboutPage />} />
        </Routes>

      </Router>
    </div>
  )
}

export default App