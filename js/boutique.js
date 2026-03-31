document.addEventListener('DOMContentLoaded', async function(){
    const json = await fetch('data/produits.json')
    const produits = JSON.parse(await json.text())
    remplirBoutique(await produits)
})

function remplirBoutique(arr){
    const affichage = document.getElementById('affichage')

    arr.forEach(e => {
        const card = document.createElement('div')
        card.classList.add('card', 'm-3')
        card.setAttribute('style', 'width : 18rem;')

        const img = document.createElement('img')
        img.classList.add('card-img-top')
        img.setAttribute('src', e['pic'])

        const body = document.createElement('div')
        body.classList.add('card-body')

        const titre = document.createElement('h5')
        titre.textContent = e['nom']
        titre.classList.add('card-title')

        const prix = document.createElement('span')
        prix.textContent = e['prix']
        prix.classList.add('fw-bold')

        const desc = document.createElement('p')
        desc.textContent = e['desc']
        desc.classList.add('card-text')

        body.append(titre, prix, desc)
        card.append(img, body)

        affichage.append(card)
    });
}