import toTitleCase from "../utils/toTitleCase";
import type { PokemonDetail } from "../types/custom";
import type { Dispatch, SetStateAction } from "react";

type PokeDetailProps = {
    pokemon: PokemonDetail
    selectPokemon: Dispatch<SetStateAction<string | undefined>>
};

const PokeDetail: React.FC<PokeDetailProps> = ({ pokemon, selectPokemon }) => {
    return (
        <div className="flex items-center justify-between flex-1 px-24">
            <div className="flex justify-center gap-8 flex-[0.7]">
                <div className="flex flex-col items-center">
                    <h3 className="px-4 py-1 text-lg font-bold text-white rounded-md bg-primary">Abilities</h3>
                    <ul className="list-disc">
                        {pokemon.abilities.map((ability) => (
                            <li key={ability.ability.name} className="text-base text-primary">
                                {toTitleCase(ability.ability.name)}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex flex-col items-center">
                    <h3 className="px-4 py-1 text-lg font-bold text-white rounded-md bg-primary">Types</h3>
                    <ul className="list-disc">
                        {pokemon.types.map((type) => (
                            <li key={type.type.name} className="text-base text-primary">
                                {toTitleCase(type.type.name)}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="flex flex-col items-center justify-between flex-1">
                <img
                    src={pokemon.sprites.front_default}
                    alt={pokemon.name}
                    className="w-48 h-48" />
                <h2 className="text-4xl font-bold text-primary">{toTitleCase(pokemon.name)}</h2>
            </div>
            <div className="flex-[0.7] text-center">
                <button
                    title="Back to Pokemon List"
                    className="px-4 py-2 text-white rounded-md shadow-md bg-primary hover:bg-primary/90"
                    onClick={() => selectPokemon(undefined)}>
                    Back
                </button>
            </div>
        </div>
    );
};

export default PokeDetail;