let kilo = Number(prompt("KİLONUZU GİRİNİZ"));
let boy = Number(prompt("BOYUNUZU METRE CİNSİNDEN GİRİNİZ"));
let sonuc = kilo / (boy * 2);

if (sonuc < 18.5) {
    console.log("İDEAL KİLONUN ALTINDASINIZ" + " " + sonuc);
} else if (sonuc >= 18.5 && sonuc <= 24.9) {
    console.log("İDEAL KİLODASINIZ" + " " + sonuc);
} else if (sonuc >= 25 && sonuc <= 29.9) {
    console.log("İDEAL KİLONUN ÜZERİNDESİNİZ" + " " + sonuc);
} else if (sonuc >= 30 && sonuc <= 39.9) {
    console.log("İDEAL KİLONUN ÇOK ÜZERİNDESİNİZ(OBEZ)" + " " + sonuc);
} else if (sonuc >= 40) {
    console.log("İDEAL KİLONUN ÇOK ÜZERİNDESİNİZ(MORBİD OBEZ" + " " + sonuc);
}