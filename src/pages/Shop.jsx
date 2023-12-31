import { useState } from "react";

// components
import styled from "@emotion/styled";
import { Box } from "@chakra-ui/react";

import productsData from "../data/products";

// components
import ProductsList from "../components/shared/ProductsList";
import SearchBar from "../components/Shop/SearchBar";
import SectionTitle from "../components/shared/SectionTitle";

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState("null");
  
  // Filter the products based on selected category
  const filteredProducts = selectedCategory === "All Categories" 
    ? productsData 
    : productsData.filter(product => product.category === selectedCategory);

  return (
    <main>
      <SearchBar setSelectedCategory={setSelectedCategory} />
      <ProductsWrapper as="section">
        <SectionTitle title={selectedCategory || "All Products" } />
        <ProductsList products={filteredProducts} productsCount={12} />
      </ProductsWrapper>
    </main>
  );
}


// Styled components
const ProductsWrapper = styled(Box)`
  margin-top: 40px;

  .products-list {
    margin: 60px 0;
  }
`;
