//ADDED THESE TO FILE -SHANE
import { gql } from '@apollo/client';

export const GET_ALL_PRODUCTS = gql`
  query GetAllProducts {
    getAllProducts {
      _id
      productName
      description
      image
      price
      quantity
      plantStatus
      category
    }
  }
`;

export const GET_PRODUCT_BY_ID = gql`
  query GetProductById($id: ID!) {
    getProductById(_id: $id) {
      _id
      productName
      description
      image
      price
      quantity
      plantStatus
      category
    }
  }
`;

export const GET_PRODUCTS_BY_CATEGORY = gql`
  query GetProductsByCategory($category: String!) {
    getProductsByCategory(category: $category) {
      _id
      productName
      description
      image
      price
      quantity
      plantStatus
      category
    }
  }
`;

export const GET_USER_BY_ID = gql`
  query GetUserById($id: ID!) {
    getUserById(_id: $id) {
      _id
      socialTitle
      firstName
      lastName
      email
      birthDate
      shippingAddress
      shippingCity
      shippingState
      shippingZip
      billingAddress
      billingCity
      billingState
      billingZip
      orders {
        _id
        purchaseDate
      }
      products {
        _id
        productName
        description
        image
        price
        quantity
        plantStatus
        category
      }
    }
  }
`;

export const CHECKOUT = gql`
  query Checkout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;
