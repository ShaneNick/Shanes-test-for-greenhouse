//ADDED THESE TO FILE -SHANE
import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation AddUser($socialTitle: String, $firstName: String!, $lastName: String!, $email: String!, $password: String!, $birthDate: String) {
    addUser(socialTitle: $socialTitle, firstName: $firstName, lastName: $lastName, email: $email, password: $password, birthDate: $birthDate) {
      token
      user {
        _id
        socialTitle
        firstName
        lastName
        email
        birthDate
      }
    }
  }
`;

export const ADD_PRODUCT = gql`
  mutation AddProduct($productName: String!, $description: String!, $image: String, $price: Float!, $quantity: Int!, $plantStatus: String!, $category: String!) {
    addProduct(productName: $productName, description: $description, image: $image, price: $price, quantity: $quantity, plantStatus: $plantStatus, category: $category) {
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

export const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        socialTitle
        firstName
        lastName
        email
        birthDate
      }
    }
  }
`;

export const UPDATE_USER = gql`
  mutation UpdateUser($id: ID!, $shippingAddress: String, $shippingCity: String, $shippingState: String, $shippingZip: String, $billingAddress: String, $billingCity: String, $billingState: String, $billingZip: String) {
    updateUser(_id: $id, shippingAddress: $shippingAddress, shippingCity: $shippingCity, shippingState: $shippingState, shippingZip: $shippingZip, billingAddress: $billingAddress, billingCity: $billingCity, billingState: $billingState, billingZip: $billingZip) {
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
    }
  }
`;
