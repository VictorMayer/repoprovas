import Logo from "../img/logo.jpg";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

export default function Home() {

    const history = useHistory();

    function goToSearch(){
        history.push("/search")
    }

    function goToUpload(){
        history.push("/upload")
    }

    return (
        <>
        <HomeStyle>
        <img src={Logo} alt="logo"></img>
        </HomeStyle>
        <Buttons>
            <button onClick={goToSearch} >Visualizar Provas</button>
            <button onClick={goToUpload} >Enviar Prova</button>
        </Buttons>
        </>
    )
}

const HomeStyle=styled.div`
    margin-top: 100px;
    margin-left: 25px;
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