import Logo from "../img/logo.jpg";
import styled from "styled-components";
import React  from "react";
import Disciplines from "./Disciplines";
import Professors from "./Professors";
import { useHistory } from "react-router-dom";

export default function Search() {

    const [showDisciplines, setShowDisciplines] = React.useState(false);
    const [showProfessors, setShowProfessors] = React.useState(false);
    const history = useHistory(); 

    return(
        <>
        <img onClick={()=>history.push("/")} src={Logo} alt="logo"></img>
        <Buttons>
            <button onClick={()=> {setShowDisciplines(!showDisciplines);setShowProfessors(false)}} >Disciplinas</button>
            <button onClick={()=> {setShowProfessors(!showProfessors);setShowDisciplines(false)}} >Professores</button>
        </Buttons>
        <Content>
            {showDisciplines||showProfessors ? showProfessors? <Professors /> : <Disciplines /> : <></> }
        </Content>
        </>
    )
}

const Content = styled.div`
margin-top: 30px;
padding-left:30px;
padding-bottom: 100px;
`

const Buttons=styled.div`
    margin-top: 50px;
    display: flex;
    justify-content:center;
    button{
        width:250px;
        background:black;
        font-size: 16px;
        color:lightgrey;
    }

`