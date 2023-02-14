function obliczModulo(){
    let liczba=parseInt(document.getElementById("liczba").value);
if(liczba%3==0){
    document.getElementById("wynikModulo").value="liczba jest podzielna przez 3";
    }else{
        document.getElementById("wynikModulo").value="liczba NIE JEST podzielana przez 3";

    }

}
function sumacyfrliczby(liczba){
    let sumacyfr=0;
    while(liczba>0){
        sumacyfr=sumacyfr+liczba%10;
        liczba=Math.floor(liczba/10);
    
    }
    return sumacyfr;
    
}
function czyPodzielna(liczba){
    let sumacyfr=sumacyfrliczby(liczba);
    let wynik="liczba nie jest podzielna przez 3 - Rekurencja";
    if(sumacyfr==3 || sumacyfr==6 || sumacyfr== 9){
        wynik="liczba jest podzielna przez 3 - Rekurencja";
    }
    return wynik;
}
function obliczRekurencja(){
    let liczba=parseInt(document.getElementById("liczba").value);
    let sumacyfr=sumacyfrliczby(liczba);
    document.getElementById("wynikRekurecja").value=sumacyfr;
}