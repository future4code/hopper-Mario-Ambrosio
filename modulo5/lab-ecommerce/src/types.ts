//USUÁRIOS
export type user = {
  id: string,
  name: string,
  email: string,
  password: string,
  purchases: Array<string>
}

//PRODUTOS
export type products = {
  id: string,
  name: string,
  price: number | string,
  image: string
} 

//REGISTRO DOS CRIENTES
export type register = {
  id: string,
  user_id: string,
  product_id: string,
  quantity: number,
  total_price: number 
}