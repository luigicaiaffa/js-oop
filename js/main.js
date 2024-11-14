// creare una classe chiamata "Veicolo" con le seguenti caratteristiche: marca, anno, colore.
class Veicolo {
  marca;
  anno;
  colore;

  constructor(_marca, _anno, _colore) {
    this.marca = _marca;
    this.anno = _anno;
    this.colore = _colore;
  }

  informazioni() {
    return `
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

class Automobile extends Veicolo {
  numeroPorte;
  carburante;

  constructor(_marca, _anno, _colore, _numeroPorte, _carburante) {
    super(_marca, _anno, _colore);
    this.numeroPorte = _numeroPorte;
    this.carburante = _carburante;
  }
}

// Creiamo una nuova istanza di veicolo che rappresenti una Fiat 2019 blu.
const nuovoVeicolo = new Veicolo("Fiat", "2019", "Blu");
console.log(nuovoVeicolo);

// Otteniamo le informazioni della vettura utilizzando il metodo "informazioni()"
console.log(nuovoVeicolo.informazioni());

// Calcoliamo l'età della vettura utilizzando il metodo "calcolaEta()"
console.log(nuovoVeicolo.calcolaEta());

// Istanziamo una nuova Automobile (Opel, 2020, nera, con 4 porte, a benzina)
const nuovaAutomobile = new Automobile("Opel", "2020", "Nera", "4", "Benzina")
console.log(nuovaAutomobile);
