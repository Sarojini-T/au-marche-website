import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import products from "../data/products.json";
import brandsData from "../data/brands.json";
import { useLanguageContext } from "./LanguageContext"; // Update the path to LanguageContext


interface SearchBarProps {
  selectedItem: string | null;
  setSelectedItem: React.Dispatch<React.SetStateAction<string | null>>;
}

const englishItems = products.map((product) => {
  return product.englishName;
});

const frenchItems = products.map((product) => {
  return product.frenchName;
});

const kreyolItems = products.map((product) => {
  return product.kreyolName;
});

const brands = brandsData.map((brand) => {
  return brand.name;
});

const languageMap: Record<string, string[]> = {};
languageMap["en"] = englishItems;
languageMap["fr"] = frenchItems;
languageMap["ht"] = kreyolItems;

const SearchBar: React.FC<SearchBarProps> = ({ setSelectedItem }) => {
  const { languageData, language } = useLanguageContext(); 
  const [selectedItemLocal, setSelectedItemLocal] = useState<string | null>(
    null
  );

  const handleSearch = (value: string | null) => {
    setSelectedItemLocal(value);
  };

  const currItem = languageMap[language];

  return (
    <Autocomplete
      freeSolo
      disablePortal
      id="search-bar"
      sx={{ width: 400, height: 55 }}
      options={[...currItem, ...brands]}
      value={selectedItemLocal}
      onInputChange={(_, value) => handleSearch(value)}
      renderInput={(params) => (
        <TextField
          {...params}
          label={languageData.placeholder}
          InputProps={{
            ...params.InputProps,
            endAdornment: null,
          }}
        />
      )}
      onChange={(_, value) => setSelectedItem(value)}
      onBlur={() => setSelectedItem(selectedItemLocal)}
      onKeyPress={(e) => {
        if (e.key === "Enter") {
          setSelectedItem(selectedItemLocal);
        }
      }}
    />
  );
};

export default SearchBar;
