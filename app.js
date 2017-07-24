function calcul(){
var CA = parseInt(document.getElementById("CA").value);
var elec = parseInt(document.getElementById("elec").value);
chiffreMoinsElec = CA - elec;
RSI = (chiffreMoinsElec/4);
total = CA - RSI - elec;

alert("CA = " + CA + "\nElec = " + elec + "\nChiffre post-electricite = " + chiffreMoinsElec + "\nRSI (25% de chiffre post-elec) = " + RSI + "\nTotal = " + total);
};
