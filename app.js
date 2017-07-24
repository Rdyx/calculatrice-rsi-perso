function calcul(CA, elec){

chiffreMoinsElec = CA - elec;
RSI = (chiffreMoinsElec/4);
total = CA - RSI - elec;

return alert("CA = " + CA + "\nElec = " + elec + "\nChiffre post-electricite = " + chiffreMoinsElec + "\nRSI (25% de chiffre post-elec) = " + RSI + "\nTotal = " + total);
};

calcul(parseInt(document.getElementById("CA").value), parseInt(document.getElementById("elec").value));
