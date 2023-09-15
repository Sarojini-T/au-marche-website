// export const translations = {
//     en: {
//       welcomeMessage: "Welcome to auMarche",
//       selectLanguage: "Select a language",
//       aboutTitle: "About",
//       aboutDescription:  "This page was created to act as an online resource for Haitians living in Massachusetts. If you've ever found yourself wanting a food or brand that you used to have in Haiti and wanted to find it locally, this is the place for you! Just scroll up to the search bar and type in any ingredient, food, or product you're looking for and we'll provide you with a list of in-person and online stores that carry the item.",
//       noItemFound: "No Item Found",
//       inPersonStores: "In-Person Stores",
//       onlineStores : "Online Stores",
//       notFound: "No Stores Found For"
//     },
//     fr: {
//         welcomeMessage: "Bienvenue auMarche",
//         selectLanguage: "Choisis une lange",
//         aboutTitle: "A Propos",
//         aboutDescription:  "Cette page a été créée pour servir de ressource en ligne aux Haïtiens vivant dans le Massachusetts. Si vous avez déjà souhaité retrouver un aliment ou une marque que vous aviez en Haïti et que vous souhaitiez le trouver localement, c'est l'endroit idéal ! Il vous suffit de faire défiler vers le haut jusqu'à la barre de recherche, de taper n'importe quel ingrédient, aliment ou produit que vous recherchez et nous vous fournirons une liste de magasins en personne et en ligne qui proposent l'article.",
//         noItemFound: "Aucun Article Trouvé",
//         inPersonStores: "Magasins en Personnes",
//         onlineStores : "Magasins En-Ligne",
//         notFound: "Aucun Magasin A Ete Trouve Pour "
//     },
//     ht: {
//         welcomeMessage: "Byenveni nan auMarche !",
//         selectLanguage: "Chwazi yon lang :",
//         aboutTitle: "Deskrypsyon",
//         aboutDescription: "Paj sa a te kreye pou sèvi kòm resous sou entènèt pou Ayisyen ki abite nan Massachusetts. Si w janm jwenn tèt ou vle yon manje oswa yon mak ki ou te genyen an Ayiti epi ou vle jwenn li lokalman, sa a se kote pou ou! Jis fè desandan nan bari rechèch la epi tape nenpòt engridyan, manje, oswa pwodwi ou ap chèche a ak nou pral founi ou yon lis nan magazen ki nan moun ak sou entènèt ki gen atik la.",
//         noItemFound: "Nou Pa Jwen ",
//         inPersonStores: "Magazen An Pèson",
//         onlineStores : "Magazen Sou Entènèt",
//         notFound: "Nou Pa Jwenn Magazen Pou "
//       },
//   };
  








export interface TranslationData {
    welcomeMessage: string;
    selectLanguage: string;
    aboutTitle: string;
    aboutDescription: string;
    noItemFound: string;
    inPersonStores: string;
    onlineStores: string;
    notFound: string;
    [key: string]: string; 
  }
  
export const translations: {
    en: TranslationData;
    fr: TranslationData;
    ht: TranslationData;
  } = {
    en: {
      welcomeMessage: "Welcome to auMarche",
      selectLanguage: "Select a language",
      aboutTitle: "About",
      aboutDescription:
        "This page was created to act as an online resource...",
      noItemFound: "No Item Found",
      inPersonStores: "In-Person Stores",
      onlineStores: "Online Stores",
      notFound: "No Stores Found For"
    },
    fr: {
      welcomeMessage: "Bienvenue auMarche",
      selectLanguage: "Choisis une langage",
      aboutTitle: "À Propos",
      aboutDescription:
        "Cette page a été créée pour servir de ressource en ligne...",
      noItemFound: "Aucun Article Trouvé",
      inPersonStores: "Magasins en Personne",
      onlineStores: "Magasins En Ligne",
      notFound: "Aucun Magasin Pour"
    },
    ht: {
      welcomeMessage: "Byenveni nan auMarche !",
      selectLanguage: "Chwazi yon lang :",
      aboutTitle: "Deskripsyon",
      aboutDescription:
        "Paj sa a te kreye pou sèvi kòm resous sou entènèt...",
      noItemFound: "Nou Pa Jwen Atik Sa",
      inPersonStores: "Magazen An Pèson",
      onlineStores: "Magazen Sou Entènèt",
      notFound: "Pa Gen Magazen Pou"
    },
  };
  