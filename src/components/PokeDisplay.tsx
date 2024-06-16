import PokeCard from "./PokeCard";
import PokeDetail from "./PokeDetail";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import type { Pokemon, PokemonDetail } from "../types/custom";

type PokeDisplayProps = {
    isListLoading: boolean;
    isDetailLoading: boolean;
    pokemons: Pokemon[] | undefined
    pokemon: PokemonDetail | undefined
    prevUrl: string
    nextUrl: string
    setCurrentUrl: React.Dispatch<React.SetStateAction<string>>
    setSelectedPokemon: React.Dispatch<React.SetStateAction<string | undefined>>
};

const PokeDisplay: React.FC<PokeDisplayProps> = ({
    pokemons, pokemon, prevUrl, nextUrl, isListLoading, isDetailLoading, setCurrentUrl, setSelectedPokemon
}) => {
    return (
        <div className="flex items-center justify-between w-full min-h-72 lg:h-72">
            {!pokemon &&
                <FaCircleArrowLeft
                    type="button"
                    title="Previous List"
                    className="text-4xl transition-transform cursor-pointer text-primary hover:-translate-y-1"
                    onClick={() => setCurrentUrl(prevUrl)} />
            }
            {(isListLoading || isDetailLoading) &&
                <div className="flex items-center justify-center flex-1 h-full">
                    <AiOutlineLoading3Quarters className="text-4xl text-primary animate-spin" />
                </div>
            }
            {(!pokemon && !isDetailLoading) && <div className="grid grid-flow-col grid-rows-10 sm:grid-rows-8 sm:gap-x-4 md:gap-x-16 lg:grid-rows-4 gap-y-8">
                {(!isListLoading && !pokemons) && <p className="text-2xl text-primary">No Pokemon Found</p>}
                {(!isListLoading && pokemons) && pokemons.map((pokemon) => (
                    <PokeCard key={pokemon.name} pokemonName={pokemon.name} selectPokemon={setSelectedPokemon} />
                ))}
            </div>
            }
            {(pokemon && !isDetailLoading) && <PokeDetail pokemon={pokemon} selectPokemon={setSelectedPokemon} />}
            {!pokemon &&
                <FaCircleArrowRight
                    type="button"
                    title="Next List"
                    className="text-4xl transition-transform cursor-pointer text-primary hover:-translate-y-1"
                    onClick={() => setCurrentUrl(nextUrl)} />
            }
        </div>
    );
};

export default PokeDisplay;