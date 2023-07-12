//ADDED JS SIGNUP FUNCTIONALITY TO THIS (NOT WORKING) - SHANE
import { useState } from "react";
import styled from "@emotion/styled";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";

import { Link } from "react-router-dom";
import {
  Box,
  Input,
  Checkbox,
  FormControl,
  FormLabel,
  InputRightAddon,
  InputGroup,
  FormHelperText,
  RadioGroup,
  Stack,
  Radio,
} from "@chakra-ui/react";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [formState, setFormState] = useState({
    title: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    dob: "",
    receiveOffers: false,
    newsletter: false,
  });
  
  const [addUser] = useMutation(ADD_USER);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

const handleSubmit = async (event) => {
  event.preventDefault();
  try {
    const { title, firstName, lastName, email, password, dob } = formState;
    const mutationResponse = await addUser({
      variables: {
        socialTitle: title,
        firstName,
        lastName,
        email,
        password,
        birthDate: dob,
      },
    });
    console.log(mutationResponse);
  } catch (err) {
    console.error(err);
  }
};

  

  return (
    <Main>
      <h2 className="title">Create an account</h2>
      <RegisterFormWrapper as="section">
        <p>
          Already have an account with us? <Link to="/login">Login instead</Link>
        </p>
        <form onSubmit={handleSubmit}>
          {/* Title */}
          <FormControlWrapper>
            <FormLabel>Title</FormLabel>
            <RadioGroup
              value={formState.title}
              onChange={(e) => handleChange({ target: { name: 'title', value: e }})}
            >
              <Stack direction="row">
                <Radio value="Mr">Mr.</Radio>
                <Radio value="Mrs">Mrs.</Radio>
              </Stack>
            </RadioGroup>
          </FormControlWrapper>

          {/* First Name */}
          <FormControlWrapper>
            <FormLabel>First Name</FormLabel>
            <Input type="text" name="firstName" value={formState.firstName} onChange={handleChange} />
          </FormControlWrapper>

          {/* Last Name */}
          <FormControlWrapper>
            <FormLabel>Last Name</FormLabel>
            <Input type="text" name="lastName" value={formState.lastName} onChange={handleChange} />
          </FormControlWrapper>

          {/* Email */}
          <FormControlWrapper>
            <FormLabel>Email</FormLabel>
            <Input type="email" name="email" value={formState.email} onChange={handleChange} />
          </FormControlWrapper>

          {/* Password */}
          <FormControlWrapper>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input type={showPassword ? "text" : "password"} name="password" value={formState.password} onChange={handleChange} />
              <InputRightAddon onClick={togglePassword}>Show</InputRightAddon>
            </InputGroup>
          </FormControlWrapper>

          {/* Date of Birth */}
          <FormControlWrapper>
            <FormLabel>Date Of Birth</FormLabel>
            <Input type="date" name="dob" value={formState.dob} onChange={handleChange} />
            <FormHelperText>Optional</FormHelperText>
          </FormControlWrapper>

          {/* Receive offers checkbox */}
          <FormControlWrapper className="checkboxWrapper">
            <Checkbox name="receiveOffers" isChecked={formState.receiveOffers} onChange={(e) => handleChange({ target: { name: 'receiveOffers', value: e.target.checked }})}>
              Receive offers from partners
            </Checkbox>
          </FormControlWrapper>

          {/* Newsletter checkbox */}
          <FormControlWrapper className="checkboxWrapper">
            <Checkbox name="newsletter" isChecked={formState.newsletter} onChange={(e) => handleChange({ target: { name: 'newsletter', value: e.target.checked }})}>
              Sign up for our newsletter. <br /> You may unsubscribe at any moment.
              For that purpose, please find our contact info in the legal
              notice.
            </Checkbox>
          </FormControlWrapper>

          <button type="submit">Register</button>
        </form>
      </RegisterFormWrapper>
    </Main>
  );
}
// Styled components

// Main container for the register section
const Main = styled.main`
  max-width: 1200px;
  margin: 50px auto 0;

  & .title {
    font-size: 22px;
    font-weight: bolder;
  }
`;

// Wrapper for the register form
const RegisterFormWrapper = styled(Box)`
  box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.3);
  padding: 20px;
  margin-top: 30px;
  border-radius: 5px;

  & p a {
    color: var(--green-medium);
  }

  & form {
    margin-top: 30px;
    display: flex;
    gap: 30px;
    flex-direction: column;

    & button[type="submit"] {
      padding: 12px 18px;
      background: #333;
      color: white;
      border-radius: 5px;
      align-self: flex-end;
      margin-top: 20px;
    }
  }

  @media (max-width: 768px) {
    padding: 20px 10px;

    & form {
      gap: 10px;
    }

    & form button[type="submit"] {
      align-self: center;
    }
  }
`;
const FormControlWrapper = styled(FormControl)`
  display: flex;
  gap: 20px;
  align-items: center;

  & label {
    max-width: 150px;
    width: 100%;
    text-align: right;
  }

  & input {
    background: #eee;
    border-radius: 3px;
    border: 1px solid lightgray;
  }

  &.checkboxWrapper label.checkbox {
    text-align: left;
    max-width: 300px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 5px;
    align-items: flex-start;

    & label {
      text-align: left;
      max-width: 100%;
    }

    &.checkboxWrapper label.checkbox {
      max-width: 100%;
    }
  }
`;
