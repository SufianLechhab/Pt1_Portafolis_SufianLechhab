// Relotge en temps real
function actualitzaRellotge() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('ca-ES', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    document.getElementById('rellotge').textContent = timeString;
}
setInterval(actualitzaRellotge, 1000);

// Data al footer i dies des del 16 de setembre de 2024 com fica a l'anunciat
function actualitzaFooterData() {
    const today = new Date();

    const footerDate = today.toLocaleDateString('ca-ES', { year: 'numeric', month: 'long', day: 'numeric' });

    const startDate = new Date('2024-09-16');
    const daysPassed = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));


    document.getElementById('footer-data').textContent = `Avui és ${footerDate}. Han passat ${daysPassed} dies des del 16 de setembre de 2024.`;
}

actualitzaFooterData();
