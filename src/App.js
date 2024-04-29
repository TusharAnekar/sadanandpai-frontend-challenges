import { Route, Routes } from "react-router-dom";

import "./App.css";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Counter } from "./pages/Counter";
import { AnagramChecker } from "./pages/AnagramChecker";
import { QuoteGenerator } from "./pages/QuoteGenerator";
import { ImageGallery } from "./pages/ImageGallery";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/counter" element={<Counter />}></Route>
        <Route path="/anagram-checker" element={<AnagramChecker />}></Route>
        <Route path="/quote-generator" element={<QuoteGenerator />}></Route>
        <Route path="/image-gallery" element={<ImageGallery />}></Route>
      </Routes>
    </div>
  );
}

export default App;
