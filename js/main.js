// creare una classe chiamata "Veicolo" con le seguenti caratteristiche: marca, anno, colore.
class Veicolo {
  marca;
  anno;
  colore;

  constructor(marcaVeicolo, annoVeicolo, coloreVeicolo) {
    this.marca = marcaVeicolo;
    this.anno = annoVeicolo;
    this.colore = coloreVeicolo;
  }

  informazioni() {
    return `Veicolo: Auto
    Marca: ${this.marca} 
    Anno: ${this.anno} 
    Colore: ${this.colore}`;
  }

  calcolaEta() {
    const data = new Date();
    const annoAttuale = data.getFullYear();
    const etaVeicolo = annoAttuale - this.anno;
    return `Il Veicolo ha ${etaVeicolo} anni`;
  }
}

// Creiamo una nuova istanza di veicolo che rappresenti una Fiat 2019 blu.
const fiat = new Veicolo("Fiat", "2019", "Blu");
console.log(fiat);

// Otteniamo le informazioni della vettura utilizzando il metodo "informazioni()"
console.log(fiat.informazioni());

// Calcoliamo l'età della vettura utilizzando il metodo "calcolaEta()"
console.log(fiat.calcolaEtà());
