// console.log('JS OK');

/* TRACCIA:
Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
*/


// prendo gli elementi dal DOM
const userName = document.getElementById('username');
const userAge = document.getElementById('userage');
const kmNumber = document.getElementById('km');
const gen = document.getElementById('genera');
const reset = document.getElementById('annulla');
const finalName = document.getElementById('username-final');
const finalTicket = document.getElementById('ticket-final');
const finalVagon = document.getElementById('vagon-final');
const finalPrice = document.getElementById('price-final');

// Bottone
gen.addEventListener('click', function(){
    const userNameElement = userName.value.trim();       
    const kmNumberElement = parseInt(kmNumber.value.trim());
    const userAgeElement = parseInt(userAge.value.trim());


    // Verifico se i dati inseriti sono numeri
    if (isNaN(userAgeElement) || isNaN(kmNumberElement) || userAgeElement <= 0 || kmNumberElement <= 0) {
    alert ('I dati inseriti non sono corretti')

    } else {
    //  Calcolo il costo del biglietto in base ai km indicati dall'utente
        let priceSale = kmNumber * 0.21;

    Flag
    let discount = null;

    // applico il 20% di sconto se minorenne, dando a priceSale il valore del biglietto già scontato
    if (userAge < 18){
        priceSale *= 0.8;
        discount = "20%";
    }

    // applico il 40% di sconto se ha più di 65 anni, dando a priceSale il valore del biglietto già scontato
    else if (userAge > 65){
        priceSale *= 0.6;
        discount = "40%";
    }



    

})
