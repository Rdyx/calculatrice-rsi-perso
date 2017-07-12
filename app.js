function calcul(){
var CA = document.getElementById("CA").value;
var elec = document.getElementById("elec").value;
var RSI;
var chiffreMoinsElec;
var total;

chiffreMoinsElec = CA - elec;
RSI = (chiffreMoinsElec/4);
total = CA - RSI - elec;

return alert("CA = " + CA + "\nElec = " + elec + "\nChiffre post-electricite = " + chiffreMoinsElec + "\nRSI (25% de chiffre post-elec) = " + RSI + "\nTotal = " + total);
};