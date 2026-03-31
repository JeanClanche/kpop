document.addEventListener('DOMContentLoaded', async function(){
    const produits = await fetch('data/produits.json')
    console.log(JSON.parse(await produits.text()))
})