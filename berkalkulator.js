/*function hehexd() {
    let xd = document.getElementById("salary").value;


    if (xd <= 500) {
        alert("Kérlek megfelelő összeget adj meg!");
        return;
    }

    let brutto = Number(document.getElementById("salary").value) + Number(document.getElementById("other").value);
    let szja = Math.floor(brutto * 0.15);
    let tb = Math.floor(brutto * 0.185);
    document.getElementById("szjaO").innerHTML =  szja;
    document.getElementById("tbO").innerHTML = tb;
    
    let netto = Math.floor(brutto - szja - tb);
    document.getElementById("netto").innerHTML = netto;


}


személyi jövedelemadó: 15% 
egészségügyi járulék: 7%
nyugdíjbiztosítási járulék: 10%
munkaerőpiaci járulék: 1,5%
*/


function nothehe() {
    let brutto = parseInt(document.getElementById("salary").value);
    if (brutto <= 500) {
        alert("Kérlek megfelelő összeget adj meg!");
        return;
    }

    if (document.getElementById("other").value) {
        brutto = brutto + parseInt(document.getElementById("other").value);
    }

    let szja = Math.floor(brutto * 0.15);
    let tb = Math.floor(brutto * 0.185);
    document.getElementById("szjaO").innerHTML = szja + " Ft";
    document.getElementById("tbO").innerHTML = tb + " Ft";

    let netto = Math.floor(brutto - szja - tb);
    document.getElementById("netto").innerHTML = netto + " Ft";


}












