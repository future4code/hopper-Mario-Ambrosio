import { connection } from "./connection";

const createTableUser = async () =>{
  try {
    await connection.raw(`
      CREATE TABLE ListUser(
        id INT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(255) NULL,
        nickname VARCHAR(255) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL
      );
    `)
    console.log("Tabela ListUser criada com sucesso.");
  } catch (error : any) {
    console.log("Erro ao criar a tabela ListUser.")
    console.log(error.message)
  }
}

// const createTableTasks = async () =>{
//   try {
//     await connection.raw(`
//       CREATE TABLE ListTasks (
//         id VARCHAR(255) PRIMARY KEY,
//         title VARCHAR(255) NOT NULL,
//         description TEXT NOT NULL,
//         status ENUM('to_do','doing','done') NOT NULL DEFAULT 'to_do',
//         limit_date DATE NOT NULL,
//         creator_user_id VARCHAR(255) NOT NULL,
//         FOREIGN KEY (creator_user_id) REFERENCES ListUser(id)
//       );
//     `)
//     console.log("Tabela ListTasks criada com sucesso.");
//   } catch (error : any) {
//     console.log("Erro ao criar a tabela ListTasks.")
//     console.log(error.message)
//   }
// }

// const createTableResponsibleUser = async () =>{
//   try {
//     await connection.raw(`
//       CREATE TABLE ListResponsibleUserTaskRelation(
//         task_id VARCHAR(255),
//         responsible_user_id VARCHAR(255),
//         FOREIGN KEY (task_id) REFERENCES ListTasks(id),
//         FOREIGN KEY (responsible_user_id) REFERENCES ListUser(id)
//       );
//     `)
//     console.log("Tabela ListResponsibleUserTaskRelation criada com sucesso.");
//   } catch (error : any) {
//     console.log("Erro ao criar a tabela ListResponsibleUserTaskRelation.")
//     console.log(error.message)
//   }
// }

const listUserData = async () => {
  try {
    await connection.raw(`
      INSERT INTO ListUser (id, name, nickname, email)
      VALUES (1, 'Mario','Marito','mario@labenu.com'),
             (2, 'Carlos','Carlinhos','carlos@labenu.com'),
             (3, 'Julia','Ju','julia@labenu.com'),
             (4, 'Pedro','Pedrito','pedro@labenu.com'),
             (5, 'Sandra','Maria','sandra@labenu.com')
    `)
    console.log("Dados passados com sucesso para a tabela ListUser")
  } catch (error : any) {
    console.log("Erro ao passa os dados para a ListUser")
    console.log(error.message)
  }
}

createTableUser()
// createTableTasks()
// createTableResponsibleUser()
.then(() => listUserData())
.finally(() => process.exit())

