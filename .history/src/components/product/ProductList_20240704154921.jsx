import styled from "styled-components";
import ProductItem from "./ProductItem";
import { PropTypes } from "prop-types";
import { breakpoints } from "../../styles/themes/default";

const ProductListWrapper = styled.div`
  column-gap: 20px;
  row-gap: 40px;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));

  @media (max-width: ${breakpoints.sm}) {
    gap: 12px;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

const ProductList = ({products}) => {
  return (
    <ProductListWrapper className="grid">
      {products.map((product, index) => {
        return <ProductItem key={product.productId} product={product} />;
      })}
    </ProductListWrapper>
    <ReactPaginate
    breakLabel="..."
    nextLabel="next >"
    onPageChange={handlePageClick}
    pageRangeDisplayed={5}
    pageCount={pageCount}
    previousLabel="< previous"
    renderOnZeroPageCount={null}
  />
  );
};

export default ProductList;

ProductList.propTypes = {
  products: PropTypes.array,
};
