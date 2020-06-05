function fetchIBGE(url) {
    return fetch(url)
        .then(res => res.json())
}

function PopulateUFs() {

    const ufSelect = document.querySelector("select[name=uf]");
    const url = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';

    fetchIBGE(url)
        .then(ufs => {
            ufs.forEach(uf => {
                ufSelect.innerHTML += `<option value=${uf.id}>${uf.nome}</option>`
            });
        })

}

PopulateUFs()

function getCities(event) {
    const citySelect = document.querySelector("select[name=city]");
    const stateInput = document.querySelector("input[name=state]");

    const ufValue = event.target.value;


    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`;

    citySelect.innerHTML = `<option value = "">Selecione a Cidade</option>`
    citySelect.disabled = true

    fetchIBGE(url)
        .then(cities => {

            cities.forEach(city => {
                citySelect.innerHTML += `<option value=${city.nome}>${city.nome}</option>`
            })
            citySelect.disabled = false
        })
}

document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCities)