import React from "react";
import PokemonContext from "../PokemonContext";

const PokemonInfo = () => {
  const { selectedPokemon } = React.useContext(PokemonContext);
  return selectedPokemon ? (
    <div>
      <h2>{selectedPokemon.name.english}</h2>
      <table>
        <tbody>
          {Object.keys(selectedPokemon.base).map((key) => (
            <tr key={key}>
              <td>{key}</td>
              <td>{selectedPokemon.base[key]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : (
    <div>Click on a Pokemon to see more information</div>
  );
}

export default PokemonInfo;