import React from "react";
import styled from "@emotion/styled";
import PokemonContext from "../PokemonContext";

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const PokemonFilter = () => {
  const { filter, filterSet } = React.useContext(PokemonContext);
  return (
    <Input
      type="text"
      value={filter}
      onChange={(evt) => filterSet(evt.target.value)}
    />
  );
}

export default PokemonFilter;