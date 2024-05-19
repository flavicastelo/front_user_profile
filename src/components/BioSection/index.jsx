import React, { useState } from "react";
import { ContainerBio, ContainerButton, ContainerTitle, IconCancel, IconEdit, IconSave, TextareaField } from "./styles";
import { colors } from "../../utils/colors";
import Title from "../Title";

export default function BioSection({ user, updateUserBio }) {
    console.log("antes", user.bio);
    const bioValue = user.bio;
    const [disabled, setDisabled] = useState(true);
    const [editable, setEditable] = useState(false);
    const [bio, setBio] = useState(bioValue);
    console.log("depois", bio);
    const handleEditable = () => {
        setDisabled(!disabled);
        setEditable(!editable);
    }
    const submit = (e) => {
        e.preventDefault();
        const data = {
            bio
        };
        console.log("bio depois", bio);
        setDisabled(true);
        setEditable(false);
        updateUserBio(data);
    }
    return (
        <ContainerBio>
            <Title text="Biografia" color={colors.primary} size="2rem" />
            <ContainerTitle>
                {editable ? (<><ContainerButton onClick={submit}>
                    <IconSave />
                </ContainerButton><ContainerButton onClick={handleEditable}> <IconCancel /></ContainerButton></>) : (<ContainerButton onClick={handleEditable}>
                    <IconEdit />
                </ContainerButton>)}
            </ContainerTitle>
            <TextareaField disabled={disabled} value={bio} onChange={(e) => { setBio(e.target.value) }} />
        </ContainerBio>
    );
}
