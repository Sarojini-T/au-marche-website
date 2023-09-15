import React from "react";
import products from "../data/products.json";
import "./itemdetails.css";
import { useLanguageContext } from "./LanguageContext";
import inPersonStores from "../data/inPersonStores.json";
import onlineStores from "../data/onlineStores.json";


interface ItemDetailsProps {
  item: string;
}

const ItemDetails: React.FC<ItemDetailsProps> = ({ item }) => {
  const {languageData} = useLanguageContext();

  const translationArr = products
  .filter((product) =>
    [product.englishName, product.frenchName, product.kreyolName].includes(item)
  )
  .map((product) => [product.englishName, product.frenchName, product.kreyolName]);

  const inPersonProductsArr = inPersonStores.map((store) => store.products);
  const inPersonStoresArr = inPersonStores.map((store) => store.name);
  const inPersonAddressArr = inPersonStores.map((store) => store.address);
  const onlineProductsArr = onlineStores.map((store) => store.products);
  const onlineStoresArr = onlineStores.map((store) => store.name);
  const onlineURL = onlineStores.map((store) => store.url);

  const personMatchingIndexes = inPersonProductsArr
    .map((prodArr, i) => {
      if (prodArr.some((prod) => translationArr.some((translation) => translation.includes(prod))) || prodArr.some((prod) => prod === item)) {
        return i;
      }
      return null;
    })
    .filter((index) => index !== null);
  
    const onlineMatchingIndexes = onlineProductsArr.map((prodArr, i) => {
      if (prodArr.some((prod) => translationArr.some((translation) => translation.includes(prod))) || prodArr.some((prod) => prod === item)) {
        return i;
      }
      return null;
    })
    .filter((index) => index !== null);

  const matchingPStoresArr = personMatchingIndexes.map((index) => {if(index !== null){
    return inPersonStoresArr[index]}});
  const matchingPAddressesArr = personMatchingIndexes.map((index) => {if(index !== null){
    return inPersonAddressArr[index]
  }
  });
  const matchingOnlineStoresArr = onlineMatchingIndexes.map((index) => {if(index !== null){
    return onlineStoresArr[index];
  }});
  const matchingURL = onlineMatchingIndexes.map((index) => {if(index !== null){
    return onlineURL[index];
  }});


  return (
    <div>
      {matchingPStoresArr.length > 0 && matchingPAddressesArr.length > 0 ? (
  <div>
    <h1 className="inPersonTitle">{languageData.inPersonStores}</h1>
    <ul>
      {matchingPStoresArr.map((store, index) => (
        <li key={index} className="inPersonInfo">
          {store}
          <br />
          <span className="address">
            {matchingPAddressesArr[index]}
          </span>
        </li>
      ))}
    </ul>
  </div>
) : null}

      {matchingOnlineStoresArr.length > 0 && matchingURL.length > 0 ? (
    <div>
      <h2 className="onlineTitle">{languageData.onlineStores}</h2>
      <ul>
        {matchingOnlineStoresArr.map((store, index) => (
          <li key={index} className="inPersonInfo">
            {store}
            <br />
            <a href={matchingURL[index]} target="_blank" rel="noopener noreferrer" className="URLName">
              {matchingURL[index]}
            </a>
          </li>
        ))}
      </ul>
    </div>
  ) : null}

      {matchingPStoresArr.length === 0 && matchingOnlineStoresArr.length === 0 && (
        <p className= "notFound"> {languageData.noItemFound} {item}</p>
      )}
    </div>
  );
};

export default ItemDetails;
