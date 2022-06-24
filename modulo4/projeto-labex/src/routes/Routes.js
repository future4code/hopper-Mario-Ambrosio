import { HomePage } from "../pages/homePage/HomePage";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ListTripsPage } from "../pages/listTripsPage/ListTripsPage";
import { ApplicationFormPage } from "../pages/applicationFormPage/ApplicationFormPage";
import { LoginPage } from "../pages/loginPage/LoginPage";
import { AdminHomePage } from "../pages/adminHomePage/AdminHomePage"
import { CreateTripPage } from "../pages/createTripPage/CreateTripPage";
import { TripDetailsPage } from "../pages/tripDetailsPage/TripDetailsPage"
export const Router = () => {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/ListaDeViagens"} element={<ListTripsPage />} />
        <Route path={"/CadastroDeViagem"} element={<ApplicationFormPage />} />
        <Route path={"/Login"} element={<LoginPage />} />
        <Route path={"/AreaDoAdmin"} element={<AdminHomePage/>} />
        <Route path={"/CriarViagem"} element={<CreateTripPage/>} />
        <Route path={"/DetalhesDaViagem"} element={<TripDetailsPage/>} />
      </Routes>
    </BrowserRouter>
  )
}