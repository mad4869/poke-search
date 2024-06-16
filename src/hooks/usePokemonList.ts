import { useEffect, useState } from "react";
import type { Pokemon } from "../types/custom";

const usePokemonList = (url: string) => {
    const [pokemons, setPokemons] = useState<Pokemon[]>();
    const [prevUrl, setPrevUrl] = useState<string | null>();
    const [nextUrl, setNextUrl] = useState<string | null>();
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const fetchPokemons = async () => {
            setLoading(true);
            const res = await fetch(url);

            if (!res.ok) {
                setPokemons(undefined);
                setPrevUrl(null);
                setNextUrl(null);
                setLoading(false);
                return;
            }

            const { previous, next, results } = await res.json();
            setPokemons(results);
            setPrevUrl(previous);
            setNextUrl(next);
            setLoading(false);
        };

        fetchPokemons();
    }, [url]);

    return { pokemons, prevUrl, nextUrl, isLoading };
};

export default usePokemonList;

