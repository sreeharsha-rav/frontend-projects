import React from "react";
import PokemonRow from "./PokemonRow";
import PokemonContext from "../PokemonContext";


const PokemonTable = () => {
  const { filter, pokemon, selectedPokemonSet } = React.useContext(
    PokemonContext);
  return (
    <table width="100%">
      <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>More Information</th>
          </tr>
        </thead>
      <tbody>
        {pokemon
          .filter(({ name: { english } }) =>
            english
              .toLocaleLowerCase()
              .includes(filter.toLocaleLowerCase())
          )
          .slice(0, 20)
          .map((pokemon) => (
            <PokemonRow
              pokemon={pokemon}
              onClick={(pokemon) => selectedPokemonSet(pokemon)}
              key={pokemon.id}
            />
          ))}
      </tbody>
    </table>
  );
}

export default PokemonTable;