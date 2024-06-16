import { useState } from "react";
import { FaSearchengin } from "react-icons/fa6";

type PokeSearchBarProps = {
    setSelectedPokemon: React.Dispatch<React.SetStateAction<string | undefined>>
};

const PokeSearchBar: React.FC<PokeSearchBarProps> = ({ setSelectedPokemon }) => {
    const [inputValue, setInputValue] = useState('')

    const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            setSelectedPokemon(inputValue);
            e.currentTarget.value = '';
        }
    };

    return (
        <div className="flex items-center justify-center overflow-hidden border border-primary/50 rounded-lg sm:w-[32rem] h-12 sm:h-16">
            <input
                type="text"
                placeholder="Your favorite pokemon..."
                className="flex-1 px-4 py-1 font-bold sm:text-2xl text-primary focus:outline-none placeholder:text-primary/50 placeholder:font-normal"
                onChange={(e) => setInputValue(e.target.value.toLowerCase())}
                onKeyDown={handleEnter} />
            <button
                title="Search Pokemon"
                className="h-full px-4 text-lg text-white rounded-l-lg sm:text-2xl bg-primary"
                onClick={() => setSelectedPokemon(inputValue)}>
                <FaSearchengin />
            </button>
        </div>
    );
};

export default PokeSearchBar;