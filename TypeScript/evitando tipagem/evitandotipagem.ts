
//EX1
// o "?" no "copilot?" quer dizer que a propiedade copiloto é opcional, ou seja não é necessário tê-la,
//logo não há problema em inserir ou não um copiloto para tal função

function sendSpaceship(spaceship: {pilot: string, copilot?: string}){
  //...
}

sendSpaceship({ pilot: 'Han solo', copilot: 'Chewbacca'})
sendSpaceship({ pilot: 'Luke'})

//EX2

//o "unknow" representa um tipo desconhecido, logo o TS não reclama quando o input receber uma string ou um number, etc

let input: unknown

input = 'test'
input = 20
input = []

let text: string

//Aqui o TS já reclama, pois o unknown é um tipo desconhecido, porém a variável text é uma string
text = input //Erro: 'unknown' não pode ser atribuido ao tipo string

//O inverso já funciona, pois o unknwon pode receber outros tipos primitivos,
//porém os tipos que já estiverem definidos não podem receber o unknown
input = text

//EX3

//O tipo "never" sinalizá que uma variável que recebe o "never" está errada, ou seja, não deveria existir.

function verification(test) {
  if(test){
    //...
  } else{
    let _check: never
    _check = '' //erro: o tipo string não pode receber 'never'
    
    let text = _check //a variável 'text' vira do tipo 'never'

    text = '' //erro: o tipo string não pode receber 'never'

    return _check
  }
}