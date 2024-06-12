import React from "react";
import { Formulario, Mapa, UsersCard } from "../../components";
import "./styles.scss";


export const Home = () => {
  return (
    <div className="home-body">
      <div className="title-line">
        <h1> Projeto Hávira</h1>
        <hr />
      </div>
      <div className="home-screen">
        <div className="maps-body">
          <Mapa />
        </div>
        <div className="user-body">
          <UsersCard />
        </div>
      </div>
      <Formulario />
    </div>
  );
};
