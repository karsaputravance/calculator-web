function tambah(a, b) { return a + b; }
function kurang(a, b) { return a - b; }
function kali(a, b) { return a * b; }
function bagi(a, b) {
    if(b === 0) return "Tidak bisa dibagi 0!";
    return a / b;
}

document.getElementById("hitung").addEventListener("click", () => {
    const x = Number(document.getElementById("num1").value); // ganti 'x' jadi 'num1'
    const y = Number(document.getElementById("num2").value); // ganti 'y' jadi 'num2'
    const operasi = document.getElementById("operasi").value;
    
    let hasil;
    if(operasi === "tambah") hasil = tambah(x, y);
    else if(operasi === "kurang") hasil = kurang(x, y);
    else if(operasi === "kali") hasil = kali(x, y);
    else if(operasi === "bagi") hasil = bagi(x, y);
    
    document.getElementById("hasil").innerText = `Hasil: ${hasil}`;
});
