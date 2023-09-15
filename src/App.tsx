import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import { LanguageProvider } from "./components/LanguageContext"; 
import List from "./pages/List";

const App: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  useEffect(() => {
    const storedSelectedItem = localStorage.getItem("selectedItem");
    if (storedSelectedItem) {
      setSelectedItem(storedSelectedItem);
    }
  }, []);

  useEffect(() => {
    if (selectedItem) {
      localStorage.setItem("selectedItem", selectedItem);
    } else {
      localStorage.removeItem("selectedItem");
    }
  }, [selectedItem]);

  return (
    <LanguageProvider> 
      <div className="container">
        <BrowserRouter>
          <Navbar selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
          <Routes>
            <Route index element={<Homepage selectedItem={selectedItem} />} />
            <Route path="/home" element={<Homepage selectedItem={null} />} />
            {/* <Route path="/clothes" element={<Clothes />} />
            <Route path="/brands" element={<Brands />} />
            <Route path="/art" element={<Art />} />*/}
            <Route path="/list/:selectedOption" element={<List />} /> 
          </Routes>
        </BrowserRouter>
      </div>
    </LanguageProvider>
  );
};

export default App;
