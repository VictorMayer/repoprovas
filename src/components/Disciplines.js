import axios from "axios";
import { useContext } from "react"
import { useHistory } from "react-router-dom";
import styled from "styled-components"
import ExamsContext from "../contexts/ExamsContext"

export default function Disciplines() {

    const {periods, setExams} = useContext(ExamsContext);
    const history = useHistory();

    function getExams(id){
        console.log(id)
        const promisse = axios.get(`http://localhost:4000/disciplines/${id}/exams`);
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
        {periods.map((period, i)=>
            <>
            <p className="period" key={i} >{period.name}</p>
            {period.disciplines.map((discipline, j)=>
                <p onClick={()=>getExams(discipline.id)} className="discipline" key={j}>{discipline.name}</p>
            )}
            </>
        )}
        </List>
    )
}

const List = styled.div`
    .period{
        font-size:17.5px;
        font-weight: bold;
        color:#50A7A3;
        margin: 18px 0px 10px 0px;
        cursor: default;
    }
    
    .discipline{
        padding-top:1px;
        padding-bottom: 1px;
        cursor: default;
        &:hover{
            color:#444;
            font-weight: bold;
        }
    }
`