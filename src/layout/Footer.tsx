function Footer() {
    return (
        <footer className="bg-primary text-white h-8 flex justify-center items-center gap-2">
            <p>&copy; {new Date(Date.now()).getFullYear()}</p>
            <p>|</p>
            <p>
                Powered by&nbsp;
                <a href="https://pokeapi.co/" target="_blank" title="Go to PokeAPI" className="hover:underline">PokeAPI</a>
            </p>
        </footer>
    );
}

export default Footer;