function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formAno = document.getElementById('formAno')
    var resultado = document.getElementById('res')
    if (formAno.value.length == 0 || formAno.value > ano) {
        window.alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(formAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 12) {
                //Criança
                img.setAttribute('src', 'crianca_homem.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'jovem_homem.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'adulto_homem.png')
            } else {
                //Idoso
                img.setAttribute('src', 'idoso_homem.png')
            }
        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade < 12) {
                //Criança
                img.setAttribute('src', 'crianca_mulher.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'jovem_mulher.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'adulto_mulher.png')
            } else {
                //Idoso
                img.setAttribute('src', 'idoso_mulher.png')
            }
        }
        resultado.style.textAlign = 'center'
        resultado.innerHTML = `Você é ${genero} com ${idade} anos.`
        resultado.appendChild(img)
    }
}