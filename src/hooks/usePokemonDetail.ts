import { useEffect, useState } from "react";
import type { PokemonDetail } from "../types/custom";

const usePokemonDetail = (url: string | undefined) => {
    const [pokemon, setPokemon] = useState<PokemonDetail>();
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        if (!url) {
            setPokemon(undefined);
            setLoading(false);
            return;
        }

        const fetchPokemon = async () => {
            setLoading(true);
            const res = await fetch(url);

            if (!res.ok) {
                setPokemon(undefined);
                setLoading(false);
                return;
            }

            const data = await res.json();
            setPokemon(data);
            setLoading(false);
        };

        fetchPokemon();
    }, [url]);

    return { pokemon, isLoading };
};

export default usePokemonDetail;