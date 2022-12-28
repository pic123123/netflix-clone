import Header from "components/Header";
import Home from "pages/Home";
import Tv from "pages/Tv";
import Search from "pages/Search";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tv" element={<Tv />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}
