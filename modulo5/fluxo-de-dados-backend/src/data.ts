export interface ListaDeProdutos {
  id: string,
  name: string,
  price: number
}

export const Produtos: Array<ListaDeProdutos> = [
  {
    id: '1',
    name: 'Banana',
    price: 2
  },
  {
    id: '2',
    name: 'Manga',
    price: 4
  },
  {
    id: '3',
    name: 'Morango',
    price: 10
  }
]