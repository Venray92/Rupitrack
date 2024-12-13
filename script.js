function hitungSisaUang() {
    // Ambil nilai dari input
    let uangBank = parseFloat(document.getElementById('uang_bank').value) || 0;
    let profit = parseFloat(document.getElementById('profit').value) || 0;
    let hutang = parseFloat(document.getElementById('hutang').value) || 0;

    // Hitung sisa uang
    let sisaUang = uangBank + profit - hutang;

    // Tampilkan hasil
    document.getElementById('hasil').innerText = sisaUang.toFixed(2);
}
