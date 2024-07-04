import styled from "styled-components";
import Hero from "../../components/home/Hero";
import Featured from "../../components/home/Featured";
import NewArrival from "../../components/home/NewArrival";
import SavingZone from "../../components/home/SavingZone";
import Catalog from "../../components/home/Catalog";
import { limelightCatalog, mensCatalog, womensCatalog } from "../../data/data";
import Brands from "../../components/home/Brands";
import Feedback from "../../components/home/Feedback";

import {axios} from "../../services/customize-axios";
import { fetchAllProducts, fetchMenProducts, fecthWomenProduct, fetchLimelightProduct } from "../../services/customize

const HomeScreenWrapper = styled.main``;

const HomeScreen = () => {

  const [mensCatalog, setMensCatalog] = useState([]);
  const [womensCatalog, setWomensCatalog] = useState([]); //
  const [limelightCatalog, setLimelightCatalog] = useState([]);


  useEffect(()=> {
    //  call apis
  })



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
