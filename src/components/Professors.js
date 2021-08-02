import { useContext } from "react"
import styled from "styled-components"
import ExamsContext from "../contexts/ExamsContext"
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function Professors() {

    const {professors, setExams} = useContext(ExamsContext);
    const history = useHistory();

    function getExams(id){
        console.log(id)
        const promisse = axios.get(`http://localhost:4000/professors/${id}/exams`);
        promisse.then((answer)=>{
            console.log(answer.data);
            setExams(answer.data);
            history.push("/exams");
        }).catch((answer)=>{
               console.log(answer.response);
               alert("Nenhuma prova cadastrada!")
        });
    }

    return(
        <List>
        {professors.map((professor, i)=>
            <p onClick={()=>getExams(professor.id)} className="professor" key={i} >{professor.name}</p>
        )}
        </List>
    )
}

const List=styled.div`
text-align: center;
    .professor{
        font-size:17px;
        padding-top:1px;
        padding-bottom: 1px;
        cursor: default;
        &:hover{
            color:#444;
            font-weight: bold;
        }
    }
`