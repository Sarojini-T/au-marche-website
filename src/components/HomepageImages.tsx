import Akasan from "../img/Akasan.jpeg";
import Aranso from "../img/Aranso.jpeg";
import Asosi from "../img/Asosi.jpeg";
import Ble from "../img/Ble.jpeg";
import Bongu from "../img/Bongu.png";
import Chokola from "../img/Chokola.jpeg";
import ColaCouronne from "../img/ColaCouronne.jpeg";
import Crakenas from "../img/Crakenas.jpeg";
import Criolito from "../img/criolito.png";
import Djondjon   from "../img/Djondjon.png";
import Doukounou  from "../img/Doukounou.png";
import DousMakos   from "../img/DousMakos.jpeg";
import FarinMayi from "../img/FarinMayi.jpeg";
import FarinPomdete from "../img/FarinPomdete.jpeg";
import FeyCitron from "../img/FeyCitron.jpeg";
import FeyCorosol from "../img/FeyCorosol.jpeg";
import FeyMango from "../img/FeyMango.jpeg";
import FeySimenKontra from "../img/FeySimenKontra.png";
import FeyZanman from "../img/FeyZanman.jpeg";
import FeyZoranj from "../img/FeyZoranj.jpeg";
import Grenadia from "../img/Grenadia.jpeg";
import Guarina from "../img/Guarina.png";
import Kalalou from "../img/Kalalou.jpeg";
import Kann from "../img/Kann.jpeg";
import Karabela from "../img/Karabela.jpeg";
import Kassav from "../img/Kassav.jpeg";
import Kenep from "../img/Kenep.jpeg";
import Konfiti from "../img/Konfiti.jpeg";
import Kremas from "../img/Kremas.jpeg";
import Labapin from "../img/Labapin.jpeg";
import LaFamosa from "../img/LaFamosa.png";
import Lalo from "../img/Lalo.jpeg";
import LwilMaskreti from "../img/lwilMaskreti.png";
import Maggi from "../img/Maggi.jpeg";
import Mamba from "../img/Mamba.jpeg";
import MangoFransik from "../img/MangoFransik.jpeg";
import Mori from "../img/Mori.jpeg";
import PenPatat from "../img/PenPatat.jpeg";
import Pistach from "../img/Pistach.jpeg";
import Pitimi from "../img/Pitimi.jpeg";
import Prestige from "../img/Prestige.png";
import PwaCongo from "../img/PwaCongo.jpeg";
import Rapadou from "../img/Rapadou.jpeg";
import SandalKwi from "../img/SandalKwi.jpeg";
import Shella from "../img/Shella.png";
import SiwoKann from "../img/SiwoKann.jpeg";
import Tabasco from "../img/Tabasco.png";
import TabletKokoye from "../img/TabletKokoye.jpeg";
import TabletNoix from "../img/TabletNoix.png";
import TabletPistach from "../img/TabletPistach.jpeg";
import TiBonm from "../img/TiBonm.png";
import TiMalice from "../img/TiMalice.jpeg";
import Tritri from "../img/Tritri.jpeg";
import Yam from "../img/yam.jpeg";
import Zanman from "../img/zanman.png";
import BonbonSiwo from "../img/BonbonSiwo.jpeg";
import BonbonAmidon from "../img/BonbonAmidon.png";
import Pomket from "../img/Pomket.png";
import Kokonet from "../img/Kokonet.png";
import Kafe from "../img/Kafe.jpeg";
import FarinManyok from "../img/FarinManyok.jpeg";
import PenMayi from "../img/PenMayi.jpeg";
import Goyav from "../img/Goyav.jpeg";
import Kokoye from "../img/Kokoye.jpeg";
import Lambi from "../img/Lambi.jpeg";
import TabletWowoli from "../img/TabletWowoli.png";
import LamVeritab from "../img/LamVeritab.jpeg";
import Creson from "../img/Creson.jpeg";
import SiwoMiel from "../img/SiwoMiel.jpeg";
import ChanmChanm from "../img/ChanmChanm.png";
import FarinDiri from "../img/FarinDiri.jpeg";
import Papita from "../img/Papita.jpeg";
import LemonBalm from "../img/LemonBalm.jpeg";
import Amidon from "../img/Amidon.jpeg";
import GresCacao from "../img/GresCacao.png";
import MayiTchaka from "../img/MayiTchaka.png";
import Konparet from "../img/Konparet.png";
import Militon from "../img/Militon.jpeg";
import FeyTwompet from "../img/FeyTwompet.png";
import FeyPwaKongo from "../img/FeyPwaKongo.jpeg";
import FeyPapaye from "../img/FeyPapaye.jpeg";
import Cachiman from "../img/Cachiman.jpeg";
import Chichi from "../img/Chichi.png";
import Alaska from "../img/Alaska.png";
import Guiness from "../img/Guinness.jpeg";
import RhumBarbancourt from "../img/RhumBarbancourt.jpeg";
import Knorr from "../img/Knorr.jpeg";
import ColaLacaye from "../img/ColaLacaye.jpeg";
import MaltaH from "../img/MaltaH.jpeg";
import Manyok from "../img/Manyok.jpeg";
import Tamaren from "../img/Tamaren.jpeg";
import Kowosol from "../img/Kowosol.jpeg";
import Chadek from "../img/Chadek.jpeg";
import FeyKowosol from "../img/FeyKowosol.jpeg";
import Malanga from "../img/Malanga.jpeg";
import Bannann from "../img/Bannann.jpeg";
import Piman from "../img/Piman.jpeg";
import ZoranjSu from "../img/ZoranjSu.jpeg";
import Sapotille from "../img/Sapotille.jpeg";
import Mazonbel from "../img/Mazonbel.png";
import products from "../data/products.json";

export const englishTranslationMap: Record <string,string> = {};
export const frenchTranslationMap: Record < string, string> = {};
products.forEach((product) => {englishTranslationMap[product.englishName] = product.kreyolName; frenchTranslationMap[product.frenchName] = product.kreyolName;});

export const imageMap: Record<string, string> = {
    "Akasan": Akasan,
    "Aranso": Aranso,
    "Asosi": Asosi,
    "Ble": Ble,
    "Bongu": Bongu,
    "Chokola": Chokola,
    "Cola Couronne": ColaCouronne,
    "Crakenas": Crakenas,
    "Criolito": Criolito ,
    "Djondjon": Djondjon,
    "Doukounou": Doukounou ,
    "Dous Makos": DousMakos ,
    "Farin Mayi": FarinMayi ,
    "Farin Pomdete": FarinPomdete,
    "Fey Citron": FeyCitron,
    "Fey Corossol": FeyCorosol,
    "Fey Mango": FeyMango,
    "Fey Semen Kontra": FeySimenKontra,
    "Fey Zanman": FeyZanman ,
    "Fey Zoranj": FeyZoranj,
    "Grenadia": Grenadia ,
    "Guarina": Guarina ,
    "Kalalou": Kalalou,
    "Kann": Kann,
    "Karabela": Karabela,
    "Kassav": Kassav,
    "Kenep": Kenep,
    "Konfiti": Konfiti,
    "Kremas": Kremas,
    "Labapin": Labapin,
    "LaFamosa": LaFamosa,
    "Lalo": Lalo ,
    "Lwil Maskreti": LwilMaskreti ,
    "Maggi": Maggi,
    "Mamba": Mamba,
    "Mango Fransik": MangoFransik ,
    "Mori": Mori,
    "Pen Patat":PenPatat ,
    "Pistach": Pistach ,
    "Pitimi": Pitimi ,
    "Prestige": Prestige,
    "Pwa Kongo": PwaCongo,
    "Rapadou": Rapadou,
    "Sandal Kwi": SandalKwi ,
    "Shella": Shella,
    "Siwo Kann": SiwoKann ,
    "Tabasco": Tabasco,
    "Tablet Kokoye": TabletKokoye ,
    "Tablet Nwa": TabletNoix,
    "Tablet Pistach": TabletPistach,
    "Ti Bonm": TiBonm,
    "Ti Malice": TiMalice ,
    "Tritri": Tritri,
    "Yam": Yam,
    "Zanmann": Zanman,
    "Bonbon Siwo": BonbonSiwo,
    "Bonbon Amidon": BonbonAmidon,
    "Pomket": Pomket,
    "Kokonet": Kokonet,
    "Kafe": Kafe,
    "Farin Manyok": FarinManyok,
    "Pen Mayi": PenMayi,
    "Goyav": Goyav,
    "Kokoye": Kokoye,
    "Lambi": Lambi,
    "Tablet Wowoli": TabletWowoli,
    "Lam Veritab": LamVeritab,
    "Kreson": Creson,
    "Siwo Miel": SiwoMiel,
    "Chanm Chanm": ChanmChanm,
    "Farin Diri": FarinDiri,
    "Papita": Papita,
    "Melis": LemonBalm,
    "Amidon": Amidon,
    "Gres Cacao": GresCacao,
    "Mayi Tchaka": MayiTchaka,
    "Konparet": Konparet,
    "Militon": Militon,
    "Fey Twompet": FeyTwompet,
    "Fey Pwa Kongo": FeyPwaKongo,
    "Fey Papaye": FeyPapaye,
    "Cachiman": Cachiman,
    "Chichi": Chichi,
    "Alaska": Alaska,
    "Guiness": Guiness,
    "Guinness": Guiness,
    "Rhum Barbancourt": RhumBarbancourt,
    "Knorr": Knorr,
    "Cola Lacaye": ColaLacaye,
    "Malta H": MaltaH,
    "Manyok": Manyok,
    "Tamaren": Tamaren,
    "Kowosol": Kowosol,
    "Chadek": Chadek,
    "Fey Kowosol": FeyKowosol,
    "Malanga": Malanga,
    "Bannann": Bannann,
    "Piman": Piman,
    "Zoranj Su": ZoranjSu,
    "Sapotille": Sapotille,
    "Mazonbel": Mazonbel,
  };
  