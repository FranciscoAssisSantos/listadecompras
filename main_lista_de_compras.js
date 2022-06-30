//alert("ola");

function somar(){
    var soma1 = document.querySelector("#n1");
    var soma2 = document.querySelector("#n2");
    var num1 = parseFloat(soma1.value);
    var num2 = parseFloat(soma2.value);



    var total = (num1) + (num2);
    const v_total = total.toLocaleString('pt-BR', {style:'currency', currency:'BRL'});
    document.querySelector("#res").innerHTML=v_total;
    document.querySelector("#h1-total").innerHTML="TOTAL: " + v_total;

}
// ⇓⇓⇓⇓ SCRIPT EM FASE DE TESTE ⇓⇓⇓⇓⇓
