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

const NewArrival = ({products}) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
  };
  const [products, setProduct] = useState([]);
  useEffect(()=> {
    //  call apis

    getArrivalProducts();
    // getLimelightProducts();
    // getWomenProducts();

  }, []);

  const getArrivalProducts = async () => {
    let res = await ProductService.fetchArrivalProducts();
    if(res && res.content){
      console.log("Arrival Products:", res.content);
      setArrivalProducts(res.content);
    }
    else {
      console.log("No content in Arrival Products response");
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
            {products && products.length > 0 &&
            products.map((product, index) => {
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
