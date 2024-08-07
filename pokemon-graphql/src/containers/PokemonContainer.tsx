import { useQuery } from '@apollo/client';
import Pokemon from '../components/Pokemon';
import { GET_POKEMONS } from '../graphql/get-pokemons';

// Define the Pokemon interface
interface Pokemon {
    id: string;
    name: string;
    image: string;
    maxHP: number;
    maxCP: number;
    attacks: {
        special: {
            name: string;
            damage: number;
        }[];
    };
}

const styles = {
    grid: 'grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 p-4',
}

const PokemonContainer = () => {
    const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
        variables: { first: 15 },
    });

    return (
        <div className={styles.grid}>
            {pokemons && pokemons.map((pokemon: Pokemon) => <Pokemon key={pokemon.id} pokemon={pokemon} />)}
        </div>
    );
};

export default PokemonContainer;