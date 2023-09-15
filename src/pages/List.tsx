import React from "react";
import { useParams } from "react-router-dom";
import onlineStores from "../data/onlineStores.json";

const List: React.FC = () => {
  const { item } = useParams<{ item: string }>();
  const storeMap: Record<string, string[]> = {};
  const urlMap: Record<string, string[]> = {};

  console.log("List component reached");

  onlineStores.forEach((store) => {
    const { name, url, products } = store;

    products.forEach((product) => {
      if (!(product in storeMap)) {
        storeMap[product] = [];
      }
      storeMap[product].push(name);

      if (!(product in urlMap)) {
        urlMap[product] = [];
      }
      urlMap[product].push(url);
    });
  });

  console.log(storeMap);
  console.log(urlMap);

  return (
    <div>
      <h1>Item: {item}</h1>
      <p>
        Store Map:
        {Object.entries(storeMap).map(([product, storeNames]) => (
          <div key={product}>
            <strong>{product}</strong>: {storeNames.join(", ")}
          </div>
        ))}
      </p>
      <p>
        URL Map:
        {Object.entries(urlMap).map(([product, storeURLs]) => (
          <div key={product}>
            <strong>{product}</strong>: {storeURLs.join(", ")}
          </div>
        ))}
      </p>
    </div>
  );
};

export default List;


