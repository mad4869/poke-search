import toTitleCase from "../utils/toTitleCase";

type PokeCardProps = {
    pokemonName: string;
    selectPokemon: React.Dispatch<React.SetStateAction<string | undefined>>
};

const PokeCard: React.FC<PokeCardProps> = ({ pokemonName, selectPokemon }) => (
    <div
        title={`View ${toTitleCase(pokemonName)} details`}
        className="flex flex-col items-center justify-center p-4 transition-transform bg-white rounded-lg shadow-md cursor-pointer text-primary shadow-primary/20 max-w-fit hover:scale-110"
        onClick={() => selectPokemon(pokemonName)}>
        <p className="font-bold">{toTitleCase(pokemonName)}</p>
    </div>
);

export default PokeCard;