var quotes = [
  'Confrontati con il te stesso di ieri, non con il qualcun altro di oggi',
  'Sii proattivo: non prendere solo iniziativa ma fai accadere le cose che desideri',
  'Non confrontare il tuo Capitolo 1 con il Capitolo 20 di altri',
  'So che ti senti piu indietro degli altri, e\' normale fare paragoni, ma stai facendo un ottimo lavoro',
  'Il fallimento in realta\' e\' un successo: si impara da ogni esperienza, anche brutta',
  'Stai avendo paura di non farcela come l\'ultima volta, quando ce l\'hai fatta',
  'Lavora sul tuo io interiore per poi lavorare bene all\'esterno: scrivi qualche obiettivo personale',
  'Fermati un secondo: stai solamente avendo troppi pensieri da riordinare su un foglio',
  'La ricerca della perfezione a volte non aiuta a concludere un compito, fallo e basta',
  'L\'incertezza e le preoccupazioni che hai derivano dalla confusione: fai una mappa mentale delle informazioni che hai a disposizione',
]
function newQuote() {
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
