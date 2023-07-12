import { gql, useMutation } from '@apollo/client';

export const LOGIN_USER = gql`
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
  }
`;

export function useLoginMutation() {
  const [loginMutation, { loading, error }] = useMutation(LOGIN_USER, {
    onCompleted({ login }) {
      if (login.token) {
        setToken(login.token);
      }
    }
  });

  return {
    login: (email, password) => loginMutation({ variables: { email, password } }),
    loading,
    error
  };
}

export function setToken(token) {
  localStorage.setItem('id_token', token);
}

export function getToken() {
  return localStorage.getItem('id_token');
}

export function removeToken() {
  localStorage.removeItem('id_token');
}
