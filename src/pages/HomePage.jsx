import React, { useState, useEffect } from "react";
import api from "../utils/api";
import Home from "../components/Home";

export default function HomePage() {
  const [user, setUser] = useState({});
  const [userData, setUserData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const idUser = 6;

  const getUser = async () => {
    try {
      const response = await api.get(`/user/getuser/${idUser}`);
      const data = response.data.user;
      if (response.status === 200) {
        localStorage.setItem('idUser', String(data.id));
        setUser(data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  const updateUserBio = async (data) => {
    const idUserStorage = localStorage.getItem('idUser');
    const idUser = parseInt(idUserStorage);
    try {
      const response = await api.put(`user/edituser/${idUser}`, data);
      if (response.status === 200) {
        setUserData(data);
        console.log("EDITOU");
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Home updateUserBio={updateUserBio}  user={user} />
  );
}