import PokeDisplay from "./PokeDisplay";
import PokeSearchBar from "./PokeSearchBar"
import usePokemonList from "../hooks/usePokemonList";
import usePokemonDetail from "../hooks/usePokemonDetail";
import { useState } from "react";

const PokeArea = () => {
    const BASE_URL = 'https://pokeapi.co/api/v2/pokemon'
    const [currentUrl, setCurrentUrl] = useState<string>(BASE_URL)
    const [selectedPokemon, setSelectedPokemon] = useState<string>()

    const { pokemons, prevUrl, nextUrl, isLoading: isListLoading } = usePokemonList(currentUrl)
    const { pokemon, isLoading: isDetailLoading } = usePokemonDetail(
        selectedPokemon ? `${BASE_URL}/${selectedPokemon}` : undefined
    )

    return (
        <div className="container flex flex-col items-center justify-between gap-8">
            <PokeSearchBar setSelectedPokemon={setSelectedPokemon} />
            <PokeDisplay
                pokemons={pokemons}
                pokemon={pokemon}
                prevUrl={prevUrl ?? BASE_URL}
                nextUrl={nextUrl ?? BASE_URL}
                isListLoading={isListLoading}
                isDetailLoading={isDetailLoading}
                setCurrentUrl={setCurrentUrl}
                setSelectedPokemon={setSelectedPokemon}
            />
        </div>
    )
}

export default PokeArea;