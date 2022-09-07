import connection from "./connection";

const criarTabelaUsuarios = async () => {
  try {
    await connection.raw(`
      CREATE TABLE IF NOT EXISTS Usuarios (
        id BIGINT PRIMARY KEY AUTO_INCREMENT,
        nome VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL
      )
    `)
    console.log('Tabela Usuarios criada com sucesso.');
  } catch (error: any) {
    console.log('Erro ao criar a Tabela Usuarios')
    console.log(error.sqlMessage)
  }
}

const popularTabelaUsuarios = async () => {
  try {
    await connection.raw(`
      INSERT INTO Usuarios(id, nome, email)
      VALUES 
      (1,"Mario", "mario@labenu.com"),
      (2,"Roberto", "roberto@labenu.com"),
      (3,"Carla", "carla@labenu.com"),
      (4,"Julia", "julia@labenu.com"),
      (5,"Rodolfo", "rodolfo@labenu.com")
    `)
    console.log('Tabela Usuarios populada com sucesso.');
  } catch (error:any) {
    console.log('Erro ao popular tabela Usuarios');
    console.log(error.sqlMessage)
  }
}

criarTabelaUsuarios()
.then(() => popularTabelaUsuarios())
.finally(() => process.exit())