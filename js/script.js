//array lista spesa
let listaSpesa = [
    'Scamorza',
    'Funghi',
    'Piadine',
    'Zucchine',
    'Carote',
    'Hummus',
    'Pasta',
    'Porro',
    'Sughi',
    'Pomodorini'
];
console.log(listaSpesa)

//recupero ul dal documento
let lista = document.getElementById('lista');
console.log(lista)

//ciclo while con aggiunta li e visualizzazione a video con append
let i = 0 
while(i < listaSpesa.length) {
    console.log(listaSpesa[i]);
    
    let item = listaSpesa[i];
    
    let list_item = document.createElement('li');
    list_item.innerText = item;
    i++;
    
    lista.append(list_item);

}
    




