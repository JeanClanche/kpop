document.addEventListener('DOMContentLoaded', function(){
    remplirBoutique()
})

async function remplirBoutique(){

    const affichage = document.getElementById('affichage')

    const spin = document.createElement('div')
    spin.classList.add('spinner-border')
    spin.setAttribute('id', 'spin')
    spin.setAttribute('style', 'width: 10rem; height: 10rem;')

    clearBoutique()
    affichage.append(spin)

    const arr = await getProduits()
    
    affichage.removeChild(spin)

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

        const note = document.createElement('div')
        const txtNote = document.createElement('span')
        if(typeof((e['note']) == "number") && (e['note']>=0) && (e['note'] <= 5)){
            for(let i = 0 ; i < 5 ; i++){
                const star = document.createElement('i')
                star.classList.add('fa-star')
                if(i < e['note']){
                    star.classList.add('fa-solid')
                }else{
                    star.classList.add('fa-regular')
                }
                txtNote.append(star)
            }
            note.append(txtNote)
        }

        const prix = document.createElement('span')
        prix.textContent = e['prix']
        prix.classList.add('fw-bold')

        const desc = document.createElement('p')
        desc.textContent = e['desc']
        desc.classList.add('card-text')

        body.append(titre, note, prix, desc)
        card.append(img, body)

        affichage.append(card)
    });
}

function clearBoutique(){
    const boutique = document.getElementById('affichage')
    while(boutique.lastChild){
        boutique.removeChild(boutique.lastChild)
    }
}

async function getProduits() {
    const json = await fetch('data/produits.json')
    const produits = JSON.parse(await json.text())

    return await produits
}