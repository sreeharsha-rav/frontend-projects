import React from "react";
import PokemonInfo from "./components/PokemonInfo";
import PokemonFilter from "./components/PokemonFilter";
import PokemonTable from "./components/PokemonTable";
import PokemonContext from "./PokemonContext";
import styled from "@emotion/styled";

import "./App.css";

const Title = styled.h1`
  text-align: center;
`;

const TwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 80% 20%;
  grid-column-gap: 4rem;
  margin-top: 1rem;
`;

const PageContainer = styled.div`
  margin: auto;
  padding: 1rem;
`;

function App() {
  const [filter, filterSet] = React.useState("");
  const [pokemon, pokemonSet] = React.useState(null);
  const [selectedPokemon, selectedPokemonSet] = React.useState(null);

  React.useEffect(() => {
    setTimeout(() => {
      fetch("/pokemon.json")
        .then((resp) => resp.json())
        .then((data) => pokemonSet(data));
    }, 1000);
  }, []);

  if (!pokemon) {
    return <div>Loading data</div>;
  }

  return (
    <PokemonContext.Provider 
      value={{
        filter,
        filterSet,
        pokemon,
        pokemonSet,
        selectedPokemon,
        selectedPokemonSet,
      }}
    >
    <PageContainer>
      <Title>Pokemon Search</Title>
      <TwoColumnLayout>
        <div>
          <PokemonFilter/>
          <PokemonTable/>
        </div>
        <PokemonInfo/>
      </TwoColumnLayout>
    </PageContainer>
    </PokemonContext.Provider>
  );
}

export default App;
