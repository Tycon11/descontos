function Desconto() {
    let preco = parseFloat(document.getElementById("Preco").value);
    let desconto = parseFloat(document.getElementById("pa").value);
    let valorDesconto = preco * (desconto / 100);
    let precoFinal = preco - valorDesconto;
    let Nome = document.getElementById("Nome").value;
    alert("Produto '" + Nome + "' com " + desconto + "% de desconto: R$ " + precoFinal.toFixed(2));
}