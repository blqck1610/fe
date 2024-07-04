import styled from "styled-components";
import Hero from "../../components/home/Hero";
import Featured from "../../components/home/Featured";
import NewArrival from "../../components/home/NewArrival";
import SavingZone from "../../components/home/SavingZone";
import Catalog from "../../components/home/Catalog";
import { limelightCatalog, mensCatalog, womensCatalog } from "../../data/data";
import Brands from "../../components/home/Brands";
import Feedback from "../../components/home/Feedback";
import {useState, useEffect} from 'react';
import { fetchAllProducts, fetchMenProducts, fetchWomenProducts, fetchLimelightProducts } from "../../services/ProductService";

const HomeScreenWrapper = styled.main``;

const HomeScreen = (props) => {

  const [menProducts, setMenProducts] = useState([]);
  const [arrivalProducts, setArrivalProducts] = useState([]); 
  // const [womenProducts, setWomenProducts] = useState([]); //
  // const [limelightProducts, setLimelightProducts] = useState([]);


  useEffect(()=> {
    //  call apis
    getMenProducts();
    getArrivalProducts();
    // getLimelightProducts();
    // getWomenProducts();

  }, []);

  // const getWomenProducts = async () => {
  //   let res = await fetchWomenProducts();
  //   if(res && res.content){
  //     console.log(res.content);
  //     setWomenProducts(res.content);
  //   }
  // }
  // const getLimelightProducts = async () => {
  //   let res = await setLimelightProducts();
  //   if(res && res.content){
  //     setLimelightProducts(res.content);
  //   }
  // }


  const getMenProducts = async () => {
    let res = await fetchMenProducts();
    if(res && res.content){
      setMenProducts(res.content);
    }
  }
  const getArrivalProducts = async () => {
    let res = await fetchArrivalProducts();
  }



  return (
    <HomeScreenWrapper>
      <Hero />
      <Featured />
      <NewArrival products = {arrivalProducts}/>
      <SavingZone />
      <Catalog catalogTitle={"Categories For Men"} products={menProducts} />
      {/* <Catalog catalogTitle={"Categories For Women"} products={womenProducts} /> */}
      <Brands />
      {/* <Catalog catalogTitle={"In The LimeLight"} products={limelightProducts} /> */}
      <Feedback />
    </HomeScreenWrapper>
  );
};

export default HomeScreen;
