import React, { useState } from 'react';
import styled from "@emotion/styled";
import {
  Box,
  FormControl,
  Input,
  InputGroup,
  Select,
  InputLeftAddon,
  InputRightAddon,
} from "@chakra-ui/react";

// icons
import { PiMagnifyingGlass } from "react-icons/pi";

// assets
import BackgroundImage from "../../assets/searchbackground.png";

export default function SearchBar({ setSelectedCategory, setSearchQuery }) {
  const [searchText, setSearchText] = useState('');

  const categories = [
    {
      id: 0,
      label: "None",
      value: "All Products",
    },
    {
      id: 1,
      label: "Fig Trees",
      value: "Fig Trees",
    },
    {
      id: 2,
      label: "Maple Trees",
      value: "Maple Trees",
    },
    {
      id: 3,
      label: "Shrub Trees",
      value: "Shrub Trees",
    },
    {
      id: 4,
      label: "Fruits Trees",
      value: "Fruits Trees",
    },
  ];

  const changeCategory = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSearch = () => {
    setSearchQuery(searchText);
  };

  return (
    <SearchBarWrapper as="section" imagepath={BackgroundImage}>
      <form>
        <FormControlWrapper>
          <InputGroup className="input-group">
            <InputLeftAddon className="left">
              <Select onChange={changeCategory}>
                {categories.map((c) => (
                  <option key={c.id} value={c.value}>
                    {c.label}
                  </option>
                ))}
              </Select>
              <p className="divider-p">|</p>
            </InputLeftAddon>
            <Input
              type="search"
              placeholder="Enter your search query..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <InputRightAddon className="right">
              <button type="submit" onClick={handleSearch}>
                <PiMagnifyingGlass fontSize={22} />
              </button>
            </InputRightAddon>
          </InputGroup>
        </FormControlWrapper>
      </form>
    </SearchBarWrapper>
  );
}

// Styling for SearchBarWrapper using styled components
const SearchBarWrapper = styled(Box)`
  min-height: 250px;
  padding-top: 40px;
  background: url(${(props) => props.imagepath});
  background-size: cover;
  background-position: center;
  max-width: 1200px;
  margin: 0 auto;

  & form {
    max-width: 600px;
    margin: 0 auto;
  }
`;

// Styling for FormControlWrapper using styled components
const FormControlWrapper = styled(FormControl)`
  & .input-group {
    border: 1px solid black;
    border-radius: 5px;
    padding: 10px;
    background: white;
    gap: 0;
  }

  & .left,
  & .right {
    background: white;
    border: none;
  }

  & .divider-p {
    color: lightgray;
  }

  & input,
  & select,
  & button {
    background: white;
    border: none;
    border-radius: 5px;
    outline: none;
    font-size: 14px;
    font-weight: 400;
  }

  &input:focus-visible {
    outline: none;
  }
};
`
