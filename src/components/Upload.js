import Logo from "../img/logo.jpg";
import styled from "styled-components";
import React, { useContext }  from "react";
import { useHistory } from "react-router-dom";
import ExamsContext from "../contexts/ExamsContext";
import axios from "axios";

export default function Upload() {

    const history = useHistory();
    const {periods, professors, categories }  = useContext(ExamsContext);
    const [name, setName] = React.useState("");
    const [url, setUrl] = React.useState("");
    const [choosenCategory, setChoosenCategory] = React.useState(0);
    const [choosenProfessor, setChoosenProfessor] = React.useState(0);
    const [choosenDiscipline, setChoosenDiscipline] = React.useState(0);

    function saveExam() {
        if(name.length === 0 || url.length === 0 || choosenProfessor === 0 || choosenDiscipline === 0 || choosenCategory === 0){
            return alert("Os campos não podem estar vazios");
        }
        console.log(name, url, choosenCategory, choosenDiscipline, choosenProfessor);
        const body = {
            name: name,
            disciplines: choosenDiscipline,
            categories: choosenCategory,
            professor: choosenProfessor,
            url: url
        }
        axios.post("http://localhost:4000/exams",body).then((answer)=>console.log(answer.data)).catch((answer)=>console.log(answer.response));
    }

    return(
        <>
        <LogoStyle>
        <img onClick={()=>{history.push("/")}} src={Logo} alt="logo"></img>
        </LogoStyle>
        <Form>
        <div className="title-label" >Enviando uma nova prova</div>
            <input onChange={(e)=>setName(e.target.value)} value={name} required placeholder="Nome da Prova" type="text"></input>
            <input onChange={(e)=>setUrl(e.target.value)} value={url} required placeholder="URL com Link da Prova" type="url"></input>
            <div className="form-selection">
                <label for={choosenCategory}>Escolha um categoria </label>
                <select value={choosenCategory} onChange={(e)=>setChoosenCategory(e.target.value)} required className="selection">
                    <option value="">Escolha</option>
                    {categories?.map((category, i)=>
                        <option key={i} value={category.id} >{category.name}</option>
                    )}
                </select>
            </div>
            <div className="form-selection">
                <label>Escolha um professor </label>
                <select onChange={(e)=>setChoosenProfessor(e.target.value)} value={choosenProfessor} required className="selection">
                    <option value="">Escolha</option>
                    {professors?.map((professor, i)=>
                        <option key={i} value={professor.id}>{professor.name}</option>
                    )}
                </select>
            </div>
            <div className="form-selection">
                <label>Escolha um disciplina </label>
                <select onChange={(e)=>setChoosenDiscipline(e.target.value)} value={choosenDiscipline} required className="selection">
                <option value="">Escolha</option>
                    {periods?.map((period, i)=>
                        <optgroup key={i} label={period.name}>
                            {period?.disciplines.map((discipline, j)=>
                                <option key={j} value={discipline.id}>{discipline.name}</option>
                            )}
                        </optgroup>    
                    )}
                </select>
            </div>
            <button onClick={saveExam}>Salvar Prova</button>
        </Form>
        </>
    )
}

const Form = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 8px;

    .form-selection{
        margin-left: 40px;
        font-size: 16px;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        .selection{
            width:180px;
        }
    }

    input{
        width: 300px;
        height:30px;
        background: #ddd;
        color:black;
        outline: none;
        font-size: 14px;
        border-width: 2px;
        border-radius: 4px;
        padding-left: 8px;
        border-width: 0.2px;
        &::placeholder{
            color:#444;
        }
    }

    button{
        margin-top:10px;
        width: 150px;
        height: 30px;
        border-radius: 4px;
        border-width: 0.2px;
        background: #ddd;
    }

    .title-label{
        margin-bottom: 20px;
        display: flex;
        align-items: center;
        margin-left: 10px;
        padding-bottom: 2px;
        padding-left: 10px;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        font-size: 20px;
        background: black;
        color: #dedede;
        width: 252px;
        height:23px;
        border-radius: 2.2px;
    }
`
const LogoStyle=styled.div`
    margin-bottom: 20px;
    
`