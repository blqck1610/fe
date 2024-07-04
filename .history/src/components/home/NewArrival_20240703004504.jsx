import styled from "styled-components";
import { Container, Section } from "../../styles/styles";
import Title from "../common/Title";
import Slider from "react-slick";
import CustomNextArrow from "../common/CustomNextArrow";
import CustomPrevArrow from "../common/CustomPrevArrow";
import { newArrivalData } from "../../data/data";
import { commonCardStyles } from "../../styles/card";
import { breakpoints } from "../../styles/themes/default";
import {useState, useEffect} from 'react';
import axios from 'axios';

const ProductCardBoxWrapper = styled.div`
  ${commonCardStyles}
  .product-img {
    height: 262px;
    width: 262px;
  }

  @media (max-width: ${breakpoints.sm}) {
    padding-left: 6px;
    padding-right: 6px;
  }
`;

const ArrivalSliderWrapper = styled.div`
  .custom-prev-arrow {
    top: 43%;
    left: -18px;
    @media (max-width: ${breakpoints.xxl}) {
      left: 24px;
    }

    @media (max-width: ${breakpoints.xs}) {
      left: 4px;
    }
  }

  .custom-next-arrow {
    top: 43%;
    right: -18px;
    @media (max-width: ${breakpoints.xxl}) {
      right: 24px;
    }

    @media (max-width: ${breakpoints.xs}) {
      right: 4px;
    }
  }
`;

const NewArrival = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
  };
  const myNewArrival = () => {
    const[data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    console.log(1);

    useEffect(() =>{
      const fetchData = async() => {
        try{
          const response = await fetch('http://localhost:8080/api/v1/product/new-arrivals')
          const jsonData = await response.json();
          setData(jsonData);
          setLoading(false);
      } catch (error) {
          setError(error);
          setLoading(false);
      }
      };

      fetchData();  
    }, []); // Empty array as second argument means this effect will run once

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error.message}</div>;
    }
    
  }



  return (
    <Section>
      <Container>
        <Title titleText={"New Arrival"} />
        <ArrivalSliderWrapper>
          <Slider
            nextArrow={<CustomNextArrow />}
            prevArrow={<CustomPrevArrow />}
            {...settings}
          >
            {data?.map((newArrival) => {
              return (
                <ProductCardBoxWrapper key={newArrival.id}>
                  <div className="product-img">
                    <img
                      className="object-fit-cover"
                      src={newArrival.imageUrl}
                    />
                  </div>
                  <div className="product-info">
                    <p className="font-semibold text-xl">{newArrival.title}</p>
                  </div>
                </ProductCardBoxWrapper>
              );
            })}
          </Slider>
        </ArrivalSliderWrapper>
      </Container>
    </Section>
  );
};

export default NewArrival;
