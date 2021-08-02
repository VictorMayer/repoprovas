import Logo from "../img/logo.jpg";
import styled from "styled-components";
import ExamsContext from "../contexts/ExamsContext";
import { useContext } from "react";
import { useHistory } from "react-router";

export default function Exams() {

    const {exams} = useContext(ExamsContext);
    const history = useHistory();
    return(
        <>
        <HeaderStyles>
            <img onClick={()=>history.push("/")} src={Logo} alt="logo"></img>
            <div className="title-label" >Visualizar Provas</div>
        </HeaderStyles>
        <Content>
            {exams?.map((exam, i)=>
                <p><a href={exam.url} target='_blank' rel="noreferrer">{exam.name+" - - - "}</a><span>{exam.disciplines.name+" - - - "}</span><span>{exam.professor.name}</span></p>
            )}
        </Content>
        </>
    )
}

const Content=styled.div`

`

const HeaderStyles=styled.div`
    .title-label{
        margin-bottom: 20px;
        display: flex;
        align-items: center;
        margin-left: 60px;
        padding-bottom: 2px;
        padding-left: 10px;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        font-size: 20px;
        background: black;
        color: #dedede;
        width: 180px;
        height:23px;
        border-radius: 2.2px;
    }
`