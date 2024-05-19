import React from "react";
import { InputContainer, InputField, Label } from "./styles";

export default function InputText({ placeholder, width, height, value, onChange, maxLength, ref, id }) {
    return (
      <InputContainer>
      {id && <Label for={id}>{id}</Label>} 
      <InputField type="text" id={id} placeholder={placeholder} height={height} width={width} value={value} onChange={onChange} maxLength={maxLength} ref={ref}/>
    </InputContainer>
    );

}