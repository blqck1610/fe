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
import  ProductService from "../../services/ProductService";
import UserService from "../../services/UserService";
import { useLocation } from 'react-router-dom';

const HomeScreenWrapper = styled.main``;

const HomeScreen = (props) => {

  const [menProducts, setMenProducts] = useState([]);
  const [arrivalProducts, setArrivalProducts] = useState([]);
  const [womenProducts, setWomenProducts] = useState([]);
  const [limelightProducts, setLimelightProducts] = useState([]);
  const [page, setPage] = useState(0);


  useEffect(() => {
    // Call APIs using Promise.all
    fetchAllProducts(page);
  }, []);
  

  const fetchAllProducts = async (page) => {
    try {
      const [menRes, arrivalRes, womenRes, limelightRes] = await Promise.all([
        ProductService.fetchMenProducts(page),
        ProductService.fetchArrivalProducts(page),
        ProductService.fetchWomenProducts(page),
        ProductService.fetchLimelightProducts(page)
      ]);
      // console.log(menRes);
      

      if (menRes && menRes.content) {
        // console.log("Men Products:", menRes.content);
        setMenProducts(menRes.content);
      } else {
        console.log("No content in Men Products response");
      }
      if (womenRes && womenRes.content) {
        // console.log("Men Products:", womenRes.content);
        setWomenProducts(womenRes.content);
      } else {
        console.log("No content in Men Products response");
      }
      
      if (limelightRes && limelightRes.content) {
        // console.log("limelight Products:", limelightRes.content);
        setLimelightProducts(limelightRes.content);
      } else {
        console.log("No content in Men Products response");
      }

      if (arrivalRes && arrivalRes.content) {
        // console.log("Arrival Products:", arrivalRes.content);
        setArrivalProducts(arrivalRes.content);
      } else {
        console.log("No content in Arrival Products response");
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  

  return (
    <HomeScreenWrapper>
      <Hero />
      <Featured />
      <NewArrival products={arrivalProducts}/>
      <SavingZone />
      <Catalog catalogTitle={"Categories For Men"} products={menProducts} />
      <Catalog catalogTitle={"Categories For Women"} products={womenProducts} />
      <Brands />
      <Catalog catalogTitle={"In The LimeLight"} products={limelightProducts} />
      <Feedback />
    </HomeScreenWrapper>
  );
};

export default HomeScreen;
