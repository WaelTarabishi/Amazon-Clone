import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home, Navbar, CheckOut, SearchResult, ProductsPage, Eror } from "./components/"
import './App.css'


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/search" element={<SearchResult />} />
        <Route path="/product/:id" element={<ProductsPage />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="*" element={<Eror />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
