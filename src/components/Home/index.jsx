import React, { useState, useEffect } from "react";
import api from "../../utils/api";
import BioSection from "../BioSection";
import Header from "../Header";
import InfoSection from "../InfoSection";
import { ContainerAux, ContainerBody, ContainerHomePage } from "./styles";

export default function Home({ user, updateUserBio }) {
  console.log("home", user.bio);
  return (
    <ContainerHomePage>
      <Header />
      <ContainerBody>
      <InfoSection user={user} />
        {/* <ContainerAux /> */}
        <BioSection user={user} updateUserBio={updateUserBio} />
      </ContainerBody>
    </ContainerHomePage>
  );
}