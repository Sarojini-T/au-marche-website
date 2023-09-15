import React, { useState } from "react";
import "./navbar.css";
import SearchBar from "./SearchBar";
import { useLanguageContext } from "./LanguageContext";

interface NavbarProps {
  selectedItem: string | null;
  setSelectedItem: React.Dispatch<React.SetStateAction<string | null>>;
}

const Navbar: React.FC<NavbarProps> = ({ selectedItem, setSelectedItem }) => {
  const { setLanguage } = useLanguageContext();
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newLanguage = event.target.value;
    setSelectedLanguage(newLanguage);
    setLanguage(newLanguage);
  };

  const handleHomeClick = () => {
    setSelectedItem(null);
  };


  return (
    <nav className="nav">
      <a href="/" className="site-title" onClick={handleHomeClick}>
        auMarche
      </a>
      <div className="searchBarContainer">
        <SearchBar selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
      </div>
      <select value={selectedLanguage} onChange={handleLanguageChange} className="selectButton">
        <option value="en">English</option>
        <option value="fr">Français</option>
        <option value="ht">Kreyòl</option>
      </select>
    </nav>
  );
};

export default Navbar;
