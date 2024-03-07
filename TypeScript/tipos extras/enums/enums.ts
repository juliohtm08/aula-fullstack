//enums(enumeração) são um tipo de dados que permite definir um conjunto nomeado de constantes
//com valores associados.
//os enums são úteis quando você tem um conjunto de valores que são mais significativos
//quando rotulados em nomes, ao invés de valores numéricos ou strings.

enum planets{
  MERCURIO, //planets.MERCURIO = 0
  VENUS, //planets.VENUS = 1
  TERRA, //planets.TERRA = 2
  MARTE //planets.MARTE = 3
}

planets.TERRA //planets.TERRA = 2

//Pode-se usar para trabalhar com diferentes perfis de permissão

enum roles{
  ADMIN = 'admin',
  USER = 'user'
}

roles.ADMIN //roles.ADMIN = "admin"

//dias da semana

enum DiaDaSemana {
  Segunda,
  Terca,
  Quarta,
  Quinta,
  Sexta,
  Sabado,
  Domingo
}

//Estados de um pedido ou processo: Imagine que você esteja construindo um sistema de gerenciamento 
//de pedidos. Você pode usar um enum para representar os diferentes estados 
//que um pedido pode ter, como "Pendente", "Em andamento", "Concluído", etc.

enum EstadoPedido {
  Pendente,
  EmAndamento,
  Concluido
}
