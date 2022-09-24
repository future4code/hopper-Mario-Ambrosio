import { app } from "./app";

import { getUsers } from "./endpoints/Users";
import { getProducts } from "./endpoints/Products";
import { getPurchases } from "./endpoints/Purchases";

import { postCreateUser } from "./endpoints/CreateUser";
import { postCreateProducts } from "./endpoints/CreateProducts";
import { postCreatePucharses } from "./endpoints/CreatePucharses";


//GETS
app.get("/users", getUsers)
app.get("/products", getProducts)
app.get("/users/:user_id/purchases", getPurchases)

//POST
app.post("/users", postCreateUser)
app.post("/products", postCreateProducts)
app.post("/purchases", postCreatePucharses)
