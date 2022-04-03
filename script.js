function verificar() {
  var data = new Date() //cria a data que será manipulada
  var ano = data.getFullYear()
  var fano = document.getElementById('txtano')
  var res = document.querySelector('div#res')
  if (fano.value.length == 0 || fano.value > ano) {
    window.alert('[Erro] Verifique os dados e tente novamente!')
  } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var gênero = ''
    var img = document.createElement('img') // cria uma tag dinamicamente, nesse caso uma img
    img.setAttribute('id', 'foto') //coloca um atributo, no caso na imagem criada 
    if (fsex[0].checked) {
      gênero = 'Homem'
      if (idade >= 0 && idade < 10) {
        //criança
        img.setAttribute('src', 'bb-menino.png')
      } else if (idade < 21) {
        //jovem
        img.setAttribute('src', 'homem-jovem.png')
      } else if (idade < 50) {
        //adulto
        img.setAttribute('src', 'homem-adulto.png')
      } else {
        //idoso
        img.setAttribute('src', 'homem-idoso.png')
      }
    } else if (fsex[1].checked) {
      gênero = 'Mulher'
      if (idade >= 0 && idade < 10) {
        //criança
        img.setAttribute('src', 'bb-menina.png')
      } else if (idade < 21) {
        //jovem
        img.setAttribute('src', 'mulher-jovem.png')
      } else if (idade < 50) {
        //adulto
        img.setAttribute('src', 'mulher-adulta.png')
      } else {
        //idoso
        img.setAttribute('src', 'mulher-idosa.png')
      }
    }
    res.style.textalign = 'Center'
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
    res.appendChild(img)
  }
}