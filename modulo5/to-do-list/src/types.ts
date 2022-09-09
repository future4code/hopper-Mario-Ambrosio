export type Usuario = {
  name: string,
  nickname: string,
  email: string
}

export type Tarefas = {
  id: number,
  title: string,
  description: string,
  limit_date: string,
  creator_user_id: string
}