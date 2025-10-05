// Arquivo: pokemon-detail.js

function convertPokemonToDetailHtml(pokemon) {
    return `
    <section class="pokemon-detail-page ${pokemon.type}">
        <div class="header">
            <div class="nav">
                <a href="index.html">
                    <img src="assets/img/arrow_back_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg" alt="Voltar">
                </a>
                <img src="assets/img/favorite_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg" alt="Favoritar">
            </div>

            <div class="pokemon-identity">
                <span class="name">${pokemon.name}</span>
                <span class="number">#${String(pokemon.number).padStart(3, '0')}</span>
            </div>

            <ol class="types">
                ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
            </ol>
        </div>

        <img class="pokemon-image" src="${pokemon.photo}" alt="${pokemon.name}">

        <div class="details-card">
            <ul class="tabs">
                <li class="active">About</li>
                <li>Base Stats</li>
                <li>Evolution</li>
                <li>Moves</li>
            </ul>

            <div class="info-section">
                <span class="label">Species</span>
                <span class="value">${pokemon.species}</span>

                <span class="label">Height</span>
                <span class="value">${pokemon.height * 10} cm</span>

                <span class="label">Weight</span>
                <span class="value">${pokemon.weight / 10} kg</span>

                <span class="label">Abilities</span>
                <span class="value">${pokemon.abilities.join(', ')}</span>
            </div>

            <h3>Breeding</h3>
            <div class="info-section">
                <span class="label">Gender</span>
                <span class="value">♂ 87.5% ♀ 12.5%</span>

                <span class="label">Egg Groups</span>
                <span class="value">Monster</span>

                <span class="label">Egg Cycle</span>
                <span class="value">Grass</span>
            </div>
        </div>
    </section>
    `;
}


// Função principal para carregar o Pokémon
function loadPokemonDetail() {
    // Pega os parâmetros da URL
    const urlParams = new URLSearchParams(window.location.search);
    const pokemonId = urlParams.get('id');

    if (!pokemonId) {
        // Redireciona ou mostra erro se não houver ID
        window.location.href = 'index.html'; 
        return;
    }

    const content = document.getElementById('pokemonDetailContent');

    // Busca os detalhes do Pokémon
    pokeApi.getPokemon(pokemonId).then((pokemon) => {
        const newHtml = convertPokemonToDetailHtml(pokemon);
        content.innerHTML = newHtml;

        // Muda a cor de fundo do body
        document.body.className = pokemon.type;
    }).catch((error) => {
        console.error("Não foi possível carregar os detalhes do Pokémon:", error);
        content.innerHTML = `<p>Erro ao carregar os detalhes. Tente novamente.</p>`;
    });
}

// Inicia o carregamento ao abrir a página
loadPokemonDetail();