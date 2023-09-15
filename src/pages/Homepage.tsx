import React from "react";
import ItemDetails from "../components/ItemDetails";
import "./homepage.css";
import  { useLanguageContext } from "../components/LanguageContext";
import products from "../data/products.json";
import brands from "../data/brands.json";
import aboutPic4 from "../img/aboutPic4.png";
import {imageMap, englishTranslationMap, frenchTranslationMap} from "../components/HomepageImages";



interface HomePageProps {
  selectedItem: string | null;
}

const englishItems: string[] = products.map((product) => {return product.englishName})
const frenchItems: string[] = products.map((product) => {return product.frenchName})
const kreyolItems: string[] = products.map((product) => {return product.kreyolName})

const brandNames = brands.map((brand) => {
  return brand.name;
});

const allItems = [...englishItems,...frenchItems,...kreyolItems, ...brandNames];

const englishNameMap: Record<string, string> = {};
products.forEach((product) => {
  const keyName1: string = product.frenchName;
  const keyName2: string = product.kreyolName;
  englishNameMap[keyName1] = product.englishName;
  englishNameMap[keyName2] = product.englishName;
});

const kreyolTransaltions : Record<string, string> = {};
const frenchTranslations : Record<string,string> = {};
products.forEach((product) => {kreyolTransaltions[product.englishName] = product.kreyolName; frenchTranslations[product.englishName] = product.frenchName;});

const HomePage: React.FC<HomePageProps> = ({ selectedItem }) => {
  const { languageData } = useLanguageContext();
  let currKey = selectedItem;
  if(frenchItems.some((item) => item === selectedItem) && selectedItem){
    currKey = frenchTranslationMap[selectedItem];
  }
  else if (englishItems.some((item) => item === selectedItem) && selectedItem){
    currKey = englishTranslationMap[selectedItem];
  }

  let translatedName = "";
  const translatedArr: string[] = [];
  if(englishItems.some((item) => item === selectedItem) && selectedItem){
    translatedArr.push(kreyolTransaltions[selectedItem]);
    translatedArr.push(frenchTranslations[selectedItem]);
  }
  else if(selectedItem){
    translatedName = englishNameMap[selectedItem];
  }
 
  return (
    <div className="homepageContainer">
      {!selectedItem ? (
        <>
          <div className="topHalf">
            <div className="leftSide"></div>
            <div className="rightSide">
              <p className="welcomeMessage">{languageData.welcomeMessage}</p>
            </div>
          </div>
          <span className="aboutHeader">
            <h1 className="aboutTitle">{languageData.aboutTitle}</h1>
          </span>
          <div className="bottomLeft">
            <div className="aboutContent">
              <div className="leftPortion">
                <p className="aboutDescription">
                  {languageData.aboutDescription}
                </p>
              </div>
              <div className="rightPortion">
                <img className="aboutImg" src={aboutPic4} />
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          {allItems.includes(selectedItem) ? (
            <>
              <h1 className="itemName">{selectedItem}</h1>
              <h2 className="translations">
                {!brandNames.some((item) => item === selectedItem)? !englishItems.some((item) => item === selectedItem) ? <h2 className="translation1">English Name: {translatedName}</h2> : <h2 className="translation2">Kreyol Name: {translatedArr[0]} <br></br> French Name: {translatedArr[1]}</h2> : ""}
              </h2>
              <div className="selectedContent">
                <div className="leftSection">
                  <ItemDetails item={selectedItem} />
                </div>
                <div className="rightSection">
                  {currKey && <img src={imageMap[currKey]}></img>}
                </div>
              </div>
            </>
          ) : <p className="nullSelectedItem">{languageData.noItemFound}</p>}
        </>
      )}
    </div>
  );
};

export default HomePage;


