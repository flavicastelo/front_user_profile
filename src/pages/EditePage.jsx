import React, { useEffect, useState } from "react";
import Edite from "../components/Edite";
import api from "../utils/api";
import { useNavigate } from "react-router-dom";

export default function EditePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState({});
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const getUser = async () => {
    const idUserStorage = localStorage.getItem('idUser');
    const idUser = parseInt(idUserStorage);
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

  const editUser = async (data) => {
    const idUserStorage = localStorage.getItem('idUser');
    const idUser = parseInt(idUserStorage);
    try {
      const response = await api.put(`user/edituser/${idUser}`, data);
      if (response.status === 200) {
        setUserData(data);
        navigate('/');
        console.log(data.photo);
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Edite handleSubmit={editUser} user={user} />
  );
}