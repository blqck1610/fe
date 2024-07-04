import styled from "styled-components";
import Hero from "../../components/home/Hero";
import Featured from "../../components/home/Featured";
import NewArrival from "../../components/home/NewArrival";
import SavingZone from "../../components/home/SavingZone";
import Catalog from "../../components/home/Catalog";
import { limelightCatalog, mensCatalog, womensCatalog } from "../../data/data";
import Brands from "../../components/home/Brands";
import Feedback from "../../components/home/Feedback";

import { fetchAllProducts, fetchMenProducts, fecthWomenProduct, fetchLimelightProduct } from "../../services/ProductService";

const HomeScreenWrapper = styled.main``;

const HomeScreen = () => {

  const [menProducts, setMenProducts] = useState([]);
  const [womenProducts, setWomenProducts] = useState([]); //
  const [limelightCatalog, setLimelightCatalog] = useState([]);


  useEffect(()=> {
    //  call apis
    getMenProducts();

  }, []);
  const getMenProducts = async () => {
    let res = await fetchMenProducts();
    if(res && res.content){
      setMenProducts(res.content);
      console.log("men products: ",  mensCatalog)
    }
  }



  return (
    <HomeScreenWrapper>
      <Hero />
      <Featured />
      <NewArrival />
      <SavingZone />
      <Catalog catalogTitle={"Categories For Men"} products={mensCatalog} />
      <Catalog catalogTitle={"Categories For Women"} products={womensCatalog} />
      <Brands />
      <Catalog catalogTitle={"In The LimeLight"} products={limelightCatalog} />
      <Feedback />
    </HomeScreenWrapper>
  );
};

export default HomeScreen;
