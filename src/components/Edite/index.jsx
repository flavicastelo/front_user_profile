import React, { useState, useEffect } from "react";
import { ContainerAux, ContainerButton, ContainerForm, ContainerPageEdit, ContainerTitle, FormEdit, IconBack } from "./styles";
import Title from "../Title";
import { colors } from "../../utils/colors";
import InputText from "../InputText";
import ButtonComponent from "../ButtonComponent";
import { useNavigate } from "react-router-dom";

export default function Edite({ handleSubmit, user }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [street, setStreet] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [state, setState] = useState('');
  const [photo, setPhoto] = useState('');
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  }
  const submitForm = (e) => {
    e.preventDefault();

    const data = {
      name,
      age,
      street,
      neighborhood,
      state,
      photo,
    };

    handleSubmit(data);
  }
  return (
    <ContainerPageEdit>
      <ContainerForm>
        <ContainerTitle>
          <ContainerButton onClick={handleBack}>
            <IconBack size="2rem" />
          </ContainerButton>
          <Title text="Edite suas informações" color={colors.primary} size="1.5rem" />
          <ContainerAux />
        </ContainerTitle>
        <FormEdit onSubmit={submitForm}>
          <InputText
            width='100%'
            placeholder={user.name}
            id="Nome"
            onChange={(e) => { setName(e.target.value) }}
          />
          <InputText
            width='100%'
            placeholder={user.age}
            id="Idade"
            onChange={(e) => { setAge(e.target.value) }}
          />
          <InputText
            width='100%'
            placeholder={user.street}
            id="Rua"
            onChange={(e) => { setStreet(e.target.value) }}
          />
          <InputText
            placeholder={user.neighborhood}
            id="Bairro"
            onChange={(e) => { setNeighborhood(e.target.value) }}
          />
          <InputText
            placeholder={user.state}
            id="Estado"
            onChange={(e) => { setState(e.target.value) }}
          />
          <InputText
            placeholder={user.photo}
            id="Url da foto"
            onChange={(e) => { setPhoto(e.target.value) }}
          />
          {/* <TextareaField
          placeholder={user.bio}
          id="Biografia"
          onChange={(e) => { setBio(e.target.value) }}
        /> */}
          <ButtonComponent type="submit" text="Enviar" textColor={colors.secundary} bgcolor={colors.primary} onClick={submitForm} size="2rem" />
        </FormEdit>
      </ContainerForm>
    </ContainerPageEdit>
  );
}