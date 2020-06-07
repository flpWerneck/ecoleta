function fetchIbge(url) {
    return fetch(url)
        .then(res => res.json())
}

function PopulateUFs() {

    const ufSelect = document.querySelector("select[name=uf]");
    const url = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';

    fetchIbge(url)
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

    const indexOfSelectedState = event.target.selectedIndex;
    stateInput.value = event.target.options[indexOfSelectedState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`;

    citySelect.innerHTML = `<option value = "">Selecione a Cidade</option>`
    citySelect.disabled = true

    fetchIbge(url)
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

// Itens de coleta

const itemsToCollect = document.querySelectorAll(".items-grid li");

itemsToCollect.forEach(item => {
    item.addEventListener("click", handleSelectedItem)
});


let selectedItems = []

const collectedItems = document.querySelector("input[name=items]")

function handleSelectedItem(event) {

    const itemLi = event.target

    itemLi.classList.toggle("selected")

    const itemId = itemLi.dataset.id

    //checa se o item dentro do array selectedItems é igual ao itemLi (clicado no site),
    const alreadySelected = selectedItems.findIndex(item => item == itemId) //-1 se não encontrar, [indice] se encontrar


    //verifica se está selecionado e tira do array
    if (alreadySelected != -1) {
        const filteredItems = selectedItems.filter(item => item != itemId) //se der false exclui o itemId do array.
        selectedItems = filteredItems
    } else selectedItems.push(itemId) //add no array

    console.log(selectedItems)

    collectedItems.value = selectedItems

}