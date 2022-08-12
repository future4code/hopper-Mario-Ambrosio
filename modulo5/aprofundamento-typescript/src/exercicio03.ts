//-------------------------------- Questão A --------------------------------------

type Post = [
  {
    autor: string,
    texto: string
  },
  {
    autor: string,
    texto: string
  },
  {
    autor: string,
    texto: string
  },
  {
    autor: string,
    texto: string
  },
  {
    autor: string,
    texto: string
  },
]


const posts: Post = [
  {
    autor: "Alvo Dumbledore",
    texto: "Não vale a pena viver sonhando e se esquecer de viver"
  },
  {
    autor: "Severo Snape",
    texto: "Menos 10 pontos para Grifinória!"
  },
  {
    autor: "Hermione Granger",
    texto: "É levi-ô-sa, não levio-sá!"
  },
  {
    autor: "Dobby",
    texto: "Dobby é um elfo livre!"
  },
  {
    autor: "Lord Voldemort",
    texto: "Avada Kedavra!"
  }
]

//-------------------------------- Questão B --------------------------------------

function buscarPostsPorAutor(posts: Post, autorInformado: string) {
  return posts.filter(
    (post) => {
      return post.autor === autorInformado
    }
  )
}

console.log(buscarPostsPorAutor(posts, 'Hermione Granger'))

//A ENTRADA DA FUNÇÃO É O ARRAY UTILIZADO NA QUESTÃO A E O NOME DO AUTOR QUE ESTÁ PROCURANDO
//A SAIDA É O FILTRO DO OBJETO COM O AUTOR E O TEXTO ESCRITO POR ELE/ELA