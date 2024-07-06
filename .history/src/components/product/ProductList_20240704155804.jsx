import styled from "styled-components";
import ProductItem from "./ProductItem";
import { PropTypes } from "prop-types";
import { breakpoints } from "../../styles/themes/default";
import ReactPaginate from 'react-paginate';

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

  const handlePageClick = () => {

  }

  return (<>
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
    pageCount={10}
    previousLabel="< previous"
    // renderOnZeroPageCount={null}
    pageclassName="page-item"
    pageLinkClassName="page-link"
    previousClassName="page-item"
    previousLinkClassName="page-link"
    nextClassName="page-item"
    nextLinkClassName="page-link"
    breakClassName="page-item"
    breakLinkClassName="page-link"
    containerClassName="pagination"
    activeclassName="active"
  />
  </>
  );
};

export default ProductList;

ProductList.propTypes = {
  products: PropTypes.array,
};
