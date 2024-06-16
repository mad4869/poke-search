# PokeSearch

A simple pokemon app, built using Typescript, React, and TailwindCSS

![PokeSearch landing page](./docs/poke-search.png)

## Demo

[poke-search-new.vercel.app](https://poke-search-new.vercel.app/)

## API

This project is using the Pokemon API from [PokeAPI](https://pokeapi.co/).

## Setup

### Initialize NPM

```bash
npm init -y
```

### Install Dependencies

The packages installed here are Typescript, React, TailwindCSS, as well as Parcel as the building tool.

```bash
npm install react react-dom
npm install typescript tailwindcss postcss parcel @types/react @types/react-dom --save-dev
```

### Create Config Files

Config files are created for Typescript (`tsconfig.json`), posscss (`.postcssrc`), and TailwindCSS (`tailwind.config.js`).

## Project Structure

The entry point of the app is `index.html` located in the root of the project. Here we setup the scaffold for the root of the React app.

```html
<body>
    <div id="root"></div>
</body>
```

The source code is located in the `src` directory which are structured as follows:

```md
src/
├── assets/
│   └── (static assets)
├── components/
│   └── (React UI components)
├── hooks/
│   └── (custom React hooks)
├── layout/
│   └── (React layout components)
├── types/
│   └── (custom Typescript types)
├── utils/
│   └── (utility functions)
├── App.tsx (main React component)
├── index.tsx (Entry point of the React app)
└── style.css (main CSS file)
```

In the `index.tsx`, the root React element are created to render `App` component as the main component. In the `App` component, the `Layout` component is used to scaffold the content of the app with `Header` and `Footer` components. `style.css` is the main CSS file, primarily used to store TailwindCSS properties.

## Project Features

There are two main features of this project:

1. Pokemons List
2. Pokemon Detail

Both features are implemented primarily in the `PokeArea` component. The `PokeArea` component consists of `PokeSearchBar` component that would allow the user to input the name of the pokemon they want to get, and `PokeDisplay` that would display the pokemon data.

### Pokemons List

List of pokemons are fetched in the `PokeArea` using `usePokemonList` custom hook that would make an API call to PokeAPI and return the list of pokemons, as well as the previous URL, next URL, and the loading state. The list then tranferred as props to `PokeDisplay`. `PokeDisplay` would render each member of the list in the `PokeCard` component. The previous URL and next URL are used to make another API call to fetch previous or next list of pokemons. The user can access it via previous and next buttons. Loading state is used to render a loading indicator conditionally if the data is not ready yet.

![Pokemon list loading](./docs/list-loading.png)
![Pokemons List](./docs/pokemon-list.png)

### Pokemon Detail

The pokemon details are fetched also in the `PokeArea` using `usePokemonDetail` custom hook that would make an API call and return the detail data of the selected pokemon and the loading state. The detail data are transferred as props to `PokeDetail` that would render the data. The selected pokemon can be determined either by clicking the card inside the pokemon list or by using search bar in `PokeSearchBar`. Loading state is used to render a loading indicator conditionally if the data is not ready yet.

#### Selecting pokemon in the card

![Select pokemon card](./docs/view-detail.png)
![Pokemon list loading](./docs/list-loading.png)
![Pokemon Detail](./docs/detail.png)

#### Searching pokemon in the search bar

![Search pokemon](./docs/search.png)
![Pokemon Detail](./docs/detail-1.png)
