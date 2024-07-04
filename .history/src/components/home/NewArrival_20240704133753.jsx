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
import { fetchAllProducts } from '../../services/ProductService'

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

const NewArrival = (props) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
  };

  const [listProducts, setListProducts] = useState([]) ;
  
   useEffect(() =>{
    // call apis 
    getNewArrivalProducts();
   },[]);

   const getNewArrivalProducts = async () => {
    let res = await fetchAllProducts();
    if(res  && res.content){
      
      setListProducts(res.content);
      console.log(""listProducts);
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
            {listProducts && listProducts.length > 0 &&
            listProducts.map((product, index) => {
              return (
                <ProductCardBoxWrapper key={'product-${index}'}>
                  <div className="product-img">
                    <img
                      className="object-fit-cover"
                      src={product.imageUrl}
                    />
                  </div>
                  <div className="product-info">
                    <p className="font-semibold text-xl">{product.productName}</p>
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
