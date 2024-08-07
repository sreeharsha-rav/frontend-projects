import React from 'react';

interface PokemonProps {
    pokemon: {
        name: string;
        maxHP: number;
        maxCP: number;
        image: string;
        attacks: {
            special: {
                name: string;
                damage: number;
            }[];
        };
    };
}

const styles = {
    pokemon_card: "min-h-60 flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70",
    pokemon_wrapper: "flex flex-auto flex-col justify-center items-center p-4",
    pokemon_name: "w-full py-2 px-2 inline-flex justify-center items-center text-lg font-bold rounded-lg border border-transparent bg-yellow-500 text-white",
    pokemon_meta: "flex justify-between items-center w-full mt-2",
    pokemon_hp: "py-1 px-2 text-sm font-semibold rounded-lg border border-transparent bg-green-500 text-white",
    pokemon_cp: "py-1 px-2 text-sm font-semibold rounded-lg border border-transparent bg-red-500 text-white",
    pokemon_image: "mt-2 w-40 h-40 rounded-md overflow-hidden",
    pokemon_attacks_wrapper: "flex justify-between items-center max-w-full mt-2 space-x-2",
    pokemon_attacks: "flex flex-col w-full p-2 rounded-lg border border-transparent bg-orange-400 text-white",
    attack_name: "text-sm font-semibold",
    attack_damage: "text-sm font-bold",
}

const Pokemon: React.FC<PokemonProps> = ({ pokemon }) => {
    return (
        <div className={styles.pokemon_card}>
            <div className={styles.pokemon_wrapper}>

                <div className={styles.pokemon_name}>
                    <h3>{pokemon.name}</h3>
                </div>

                <div className={styles.pokemon_meta}>
                    <span className={styles.pokemon_hp}>{pokemon.maxHP}</span>
                    <span className={styles.pokemon_cp}>{pokemon.maxCP}</span>
                </div>
                <div className={styles.pokemon_image}>
                    <img src={pokemon.image} alt={pokemon.name} />
                </div>
                <div className={styles.pokemon_attacks_wrapper}>
                    {pokemon.attacks.special.slice(0, 3).map((attack, index) => (
                        <div key={index} className={styles.pokemon_attacks}>
                            <span className={styles.attack_name}>{attack.name}</span>
                            <span className={styles.attack_damage}>{attack.damage}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Pokemon;