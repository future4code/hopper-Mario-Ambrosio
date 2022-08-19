//-------------------------- EXERCICIO 02 -------------------------------------
export enum Afazer {
  COMPLETO = "completo",
  INCOMPLETO = "incompleto"
}

//-------------------------- EXERCICIO 03 -------------------------------------
export const afazeres = [
  {
    id: '1',
    title: "Lavar o carro",
    afazer: Afazer.INCOMPLETO
  },
  {
    id: '2',
    title: "Lavar a louça",
    afazer: Afazer.COMPLETO
  },
  {
    id: '3',
    title: "Varrer a casa",
    afazer: Afazer.INCOMPLETO
  },
  {
    id: '4',
    title: "Dobrar as roupas",
    afazer: Afazer.INCOMPLETO
  },
  {
    id: '5',
    title: "Fazer exercicíos do curso",
    afazer: Afazer.INCOMPLETO
  },
  {
    id: '6',
    title: "Fazer a comida",
    afazer: Afazer.INCOMPLETO
  },
  {
    id: '7',
    title: "Ir busca o irmão na escola",
    afazer: Afazer.COMPLETO
  },
  {
    id: '8',
    title: "Ir compra comida",
    afazer: Afazer.COMPLETO
  },
  {
    id: '9',
    title: "Comer",
    afazer: Afazer.COMPLETO
  },
  {
    id: '10',
    title: "Limpar o computador",
    afazer: Afazer.COMPLETO
  },
]

export const afazerUser = [
  {
    user: "mario_ambrosio_hopper",
    tarefas: [
      {
        id: '1',
        title: "Lavar o carro",
        afazer: Afazer.INCOMPLETO
      },
      {
        id: '2',
        title: "Lavar a louça",
        afazer: Afazer.COMPLETO
      },
      {
        id: '3',
        title: "Varrer a casa",
        afazer: Afazer.INCOMPLETO
      },
      {
        id: '4',
        title: "Dobrar as roupas",
        afazer: Afazer.INCOMPLETO
      },
      {
        id: '5',
        title: "Fazer exercicíos do curso",
        afazer: Afazer.INCOMPLETO
      },
    ]
  },
  {
    user: "mario_neto_hopper",
    tarefas: [
      {
        id: '6',
        title: "Fazer a comida",
        afazer: Afazer.INCOMPLETO
      },
      {
        id: '7',
        title: "Ir busca o irmão na escola",
        afazer: Afazer.COMPLETO
      },
      {
        id: '8',
        title: "Ir compra comida",
        afazer: Afazer.COMPLETO
      },
      {
        id: '9',
        title: "Comer",
        afazer: Afazer.COMPLETO
      },
      {
        id: '10',
        title: "Limpar o computador",
        afazer: Afazer.COMPLETO
      },
    ]
  },


]