import React from "react";
import { ContainerLayout, ContainerSection, ContainerText, Photo} from "./styles";
import TextComponent from "../TextComponent";
import { colors } from "../../utils/colors";
import Title from "../Title";
import ButtonComponent from "../ButtonComponent";
import { useNavigate } from "react-router";

export default function InfoSection({ user }) {
    const navigate = useNavigate();
    const name = user.name;
    const end = user.street + ", " + user.neighborhood;
    const idade = user.age + " anos";
    const state = user.state;
    const photo = user.photo;
    const handleSubmit = () => {
        navigate('/edit');
    }

    return (
        <ContainerSection>
            <Photo src={photo} alt="Imagem de Perfil" />
            <ContainerLayout>
                    <Title text={name} color={colors.primary} size="2rem" />
                    <ContainerText>
                        <TextComponent text={idade} color={colors.secundary}  />
                        <TextComponent text={end} color={colors.secundary}  />
                        <TextComponent text={state} color={colors.secundary}  />
                    </ContainerText>
                    <ButtonComponent type="submit" text="Editar" textColor={colors.bgcolor} bgcolor={colors.primary} onClick={handleSubmit} width="auto" />    
            </ContainerLayout>
        </ContainerSection>
    );
}
