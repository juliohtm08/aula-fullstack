const form = document.getElementById("orderForm")

form.addEventListener("submit", function (ev) {
  ev.preventDefault() //Cancela o comportamento padrão de um evento, neste caso a att da página

  const name = document.querySelector("input[name='name']").value //retorna o nome inserido no input
  const address = document.querySelector("input[name='address']").value //retorna o endereço escrito  no input
  const breadType = document.querySelector("select[name='breadType']").value //retorna o valor da opção marcada no select
  const main = document.querySelector("input[name='main']:checked").value //retorna o valor da opção marcada no input
  const observations = document.querySelector("textarea[name='observations']").value //retorna o valor escrito no observations

  let salad = ""
  //retorna o valor de todos dos itens selecionados no input 
  document.querySelectorAll("input[name='salad']:checked").forEach(function (item) {
    salad += " - " + item.value + "\n"
  })

  console.log({
    name,
    address,
    breadType,
    main,
    salad,
    observations
  })

    alert(
      "Pedido Realizado!" +
      "\nNome do cliente: " + name +
      "\nEndereço de entrega: " + address +
      "\nTipo de pão: " + breadType +
      "\nRecheio: \n - " + main + "\n" + salad +
      "Observações: " + observations
    )

})