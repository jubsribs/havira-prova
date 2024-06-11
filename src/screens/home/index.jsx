import React from "react";
import { Mapa } from "../../components";
import "./styles.scss";
import { Users } from "../users";

export const Home = () => {
  return (
    <div className="home-body">
      <div className="home-screen">
        <div className="maps-body">
          <Mapa />
        </div>
        <div className="user-body">
          <Users />
        </div>


      </div>
    </div>
  );
};
