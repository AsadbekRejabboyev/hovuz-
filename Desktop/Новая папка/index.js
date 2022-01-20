


var natija;

function hisoblash() {
    let a = document.getElementById("a");
    let a1 = document.getElementById("a1");
    let b = document.getElementById("b");
    let b1 = document.getElementById("b1");
    let boyi = document.getElementById("boyi").value;
    let eni = document.getElementById("eni").value;
    let chuqurligi = document.getElementById("chuqurligi").value;

    boyi = Number(boyi);
    eni = Number(eni)
    chuqurligi = Number(chuqurligi)

    let TrapetsiyaBalandligi = 2 / (Math.sqrt(3)) * chuqurligi;
    let ortiqchaQismi = chuqurligi / Math.sqrt(3);


    let boyi2 = boyi - 2 * ortiqchaQismi;
    let eni2 = eni - 2 * ortiqchaQismi;

    boyi22 = boyi2 * 10;
    eni22 = eni2 * 10;

    boyi22 = Math.floor(boyi22)
    eni22 = Math.floor(eni22)

    boyi22 = boyi22 / 10;
    eni22 = eni22 / 10;

    let p1 = 2 * (boyi + eni);
    let p2 = 2 * (boyi2 + eni2);
    let s1 = boyi2 * eni2;
    let s2 = boyi * eni;

    let v = (1 / 3) * chuqurligi * (s1 + Math.sqrt(s1 * s2) + s2);
    v = Math.ceil(v)
    let sYon = ((p1 + p2) / 2) * TrapetsiyaBalandligi;
    let sTola = sYon + s1;
    let ortiqcha = p1 * 1.5
    natija = sTola + ortiqcha;
    natija = Math.ceil(natija)

    if (boyi != 0 && eni != 0 && chuqurligi != 0) {
        document.getElementById("yuza").innerHTML = natija;
        document.getElementById("hajm").innerHTML = v;
    }

    if (boyi != 0 && eni != 0 && chuqurligi != 0) {
        a.innerHTML = "A = " + boyi;
        a1.innerHTML = "A1 = " + boyi22;
        b.innerHTML = "B = " + eni;
        b1.innerHTML = "B1 = " + eni22;
    }

}
function summa() {
    let puli = document.getElementById("narx").value;
    puli = Number(puli);
    if (puli != 0 && natija != 0) {
        let uzunlik = natija / 6;
        let summa = uzunlik * puli
        summa = Math.ceil(summa);
        document.getElementById("summa").innerHTML = summa
    }
}
function hisoblashPages() {
    document.getElementById("hisoblash").style.display = "block";
    document.getElementById("malumot").style.display = "none";
    document.getElementById("rasmlar").style.display = "none";
}
function rasmlarPages() {
    document.getElementById("hisoblash").style.display = "none";
    document.getElementById("malumot").style.display = "none";
    document.getElementById("rasmlar").style.display = "block";
}
function malumotPages() {
    document.getElementById("hisoblash").style.display = "none";
    document.getElementById("malumot").style.display = "block";
    document.getElementById("rasmlar").style.display = "none";
}
