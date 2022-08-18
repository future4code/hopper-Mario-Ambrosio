//---------------------------- EXERCICIO 01 ------------------------------------

const dadosUsuario = (nome: string, dataNascimento: string) => {
  const separadorDeNascimento = dataNascimento.split('/')
  // console.log(separadorDeNascimento)
  return `Olá me chamo ${nome}, nasci no dia ${separadorDeNascimento[0]} do mês de ${separadorDeNascimento[1]} do ano de ${separadorDeNascimento[2]}`
}

// console.log(dadosUsuario('MARIO', '18/10/2001'));


//---------------------------- EXERCICIO 02 ------------------------------------

const valorQualquer = (valor: unknown) => {
  return typeof valor;
}

// console.log(valorQualquer('Olá mundo'))


//---------------------------- EXERCICIO 03 ------------------------------------
enum GENERO {
  ACAO = "ação",
  DRAMA = "drama",
  COMEDIA = "comédia",
  ROMANCE = "romance",
  TERROR = "terror"
}

type Filme = {
  nome: string,
  anoDeLançamento: number,
  generoFilme: GENERO
}

type Pontuacao = {
  pontuacaoDaResenha?: number
}

type dadosDoFilme = Filme & Pontuacao

const avaliacaoDosFilmes: dadosDoFilme = {
  nome: 'Batman',
  anoDeLançamento: 2022,
  generoFilme: GENERO.ACAO,
  // pontuacaoDaResenha: 4.8
}

// console.log(avaliacaoDosFilmes)

//---------------------------- EXERCICIO 04 ------------------------------------
enum SETORES {
  MARKETING = 'Marketing',
  VENDAS = 'Vendas',
  FINANCEIRO = 'Financeiro'
}

const arrayDeFuncionarios = [
  { nome: "Marcos", salário: 2500, setor: SETORES.MARKETING, presencial: true },
  { nome: "Maria", salário: 1500, setor: SETORES.VENDAS, presencial: false },
  { nome: "Salete", salário: 2200, setor: SETORES.FINANCEIRO, presencial: true },
  { nome: "João", salário: 2800, setor: SETORES.MARKETING, presencial: false },
  { nome: "Josué", salário: 5500, setor: SETORES.FINANCEIRO, presencial: true },
  { nome: "Natalia", salário: 4700, setor: SETORES.VENDAS, presencial: true },
  { nome: "Paola", salário: 3500, setor: SETORES.MARKETING, presencial: true }
]

type funcionarios = {
  nome: string,
  salário: number,
  setor: SETORES,
  presencial: boolean
}


const filtroDeFuncionarios = (array: funcionarios[]) => {
  // for (let i = 0; i < array.length; i++) {
  //   if (array[i].setor === SETORES.MARKETING && array[i].presencial === true) {
  //     console.log(array[i])
  //   }
  // }

  array.filter((array) => {
    if (array.setor === SETORES.MARKETING && array.presencial === true) {
      console.log(array)
    }
  })
}

// filtroDeFuncionarios(arrayDeFuncionarios)


//---------------------------- EXERCICIO 05 ------------------------------------
const arrayDeUsuarios = [
  { name: "Rogério", email: "roger@email.com", role: "user" },
  { name: "Ademir", email: "ademir@email.com", role: "admin" },
  { name: "Aline", email: "aline@email.com", role: "user" },
  { name: "Jéssica", email: "jessica@email.com", role: "user" },
  { name: "Adilson", email: "adilson@email.com", role: "user" },
  { name: "Carina", email: "carina@email.com", role: "admin" }
]

type Usuarios = {
  name: string,
  email: string,
  role: string
}

const filtroDeAdmin = (array: Usuarios[]) => {
  let arrayFiltrado: string[] = []
  array.filter((array) => {
    if (array.role === 'admin') {
      arrayFiltrado.push(array.email)
      arrayFiltrado.map(() => {
        return arrayFiltrado
      })
    }
  })
  console.log(arrayFiltrado)
}

// filtroDeAdmin(arrayDeUsuarios)



//---------------------------- EXERCICIO 06 ------------------------------------
const arrayDeClientes = [
  { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

type Clientes = {
  cliente: string,
  saldoTotal: number,
  debitos: number[]
}


const saldoDebitado = arrayDeClientes.map((array): Clientes => {
  let initialValue = 0;
  return {
    cliente: array.cliente,
    saldoTotal: array.saldoTotal - array.debitos.reduce((previousValue, currentValue) => previousValue + currentValue, initialValue),
    debitos: []
  }
})

const clientesNegativados = saldoDebitado.filter((array) => {
  if (array.saldoTotal < 0) {
    return array
  }
})

// console.log(clientesNegativados);


//---------------------------- EXERCICIO 07 ------------------------------------

const estoqueAtual = [
  { nome: "MacMugffin", quantidade: 37, valorUnitario: 51.040 },
  { nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0 },
  { nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5 },
  { nome: "O precioso", quantidade: 1, valorUnitario: 9181.923 },
  { nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17 },
  { nome: "Plumbus", quantidade: 13, valorUnitario: 140.44 },
  { nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915 }
];

type Estoque = {
  nome: string,
  quantidade: number,
  valorUnitario: number | string
}


const ajustaPreco = (preco: number): string => {
  const valorAjustado: string = preco.toFixed(2).replace('.', ',')
  return "R$ " + valorAjustado
}

const estoqueOrdenado = estoqueAtual.map((array): Estoque => {
  return {
    nome: array.nome,
    quantidade: array.quantidade,
    valorUnitario: ajustaPreco(array.valorUnitario)
  }
})

console.log(estoqueOrdenado);

//---------------------------- EXERCICIO 08 ------------------------------------


const scannerDeCarteira = (nascimento: string, emissao: string) => {
  const anoAtual: number = new Date().getFullYear();

  const dataNascimento: string[] = nascimento.split('/')
  const anoNascimento: number = Number(dataNascimento[2])
  // console.log(anoNascimento);

  const dataEmissao: string[] = emissao.split('/')
  const anoEmissao: number = Number(dataEmissao[2])

  const idadeDoUsuario: number = anoAtual - anoNascimento
  const idadeDaCarteira: number = anoAtual - anoEmissao

  if (idadeDoUsuario <= 20) {

    if (idadeDaCarteira < 5) {
      return false
    } else {
      return true
    }

  } else if (idadeDoUsuario > 20 || idadeDoUsuario <= 50) {

    if (idadeDaCarteira < 10) {
      return false
    } else {
      return true
    }

  } else if (idadeDoUsuario > 50) {

    if (idadeDaCarteira < 15) {
      return false
    } else {
      return true
    }
  }

}

// console.log(scannerDeCarteira('24/04/1993','07/11/2012'));

//---------------------------- EXERCICIO 09 ------------------------------------

// const anagrama = (palavra: string) => {
//   const conteiner = palavra.split("")

// }

// console.log(anagrama('aaf'));

