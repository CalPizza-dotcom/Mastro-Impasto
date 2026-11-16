const btnSalvaRicetta = document.getElementById('btn-salva-ricetta');

btnSalvaRicetta.addEventListener('click', () => {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  // --- Recupera i dati dalla pagina ---
  // Esempio (adatta i selettori agli ID che hai usato nel tuo HTML):
  const idratazione = document.getElementById('idratazione').value;
  const farinaTotale = document.getElementById('farina-totale').textContent;
  const acqua = document.getElementById('acqua').textContent;
  const lievito = document.getElementById('lievito').textContent;
  const sale = document.getElementById('sale').textContent;
  const tempoTotale = document.getElementById('tempo-totale').textContent;
  const metodoImpasto = document.getElementById('metodo-impasto').value;

  // --- Scrivi nel PDF ---
  doc.setFontSize(22);
  doc.text('Ricetta MastroImpasto', 105, 20, { align: 'center' });

  doc.setFontSize(16);
  doc.text(`IDRATAZIONE: ${idratazione}%`, 20, 40);

  doc.setFontSize(12);
  doc.text('INGREDIENTI:', 20, 55);
  doc.text(`- Farina Totale: ${farinaTotale}g`, 30, 65);
  doc.text(`- Acqua: ${acqua}g`, 30, 75);
  doc.text(`- Lievito: ${lievito}g`, 30, 85);
  doc.text(`- Sale: ${sale}g`, 30, 95);

  doc.text('PROCEDIMENTO:', 20, 115);
  doc.text(`- Metodo Impasto: ${metodoImpasto}`, 30, 125);
  doc.text(`- Tempo Totale: ${tempoTotale}`, 30, 135);

  // --- Salva il file ---
  doc.save('ricetta-mastroimpasto.pdf');
});