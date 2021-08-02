import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import {GlobalStyles} from "./GlobalStyle";
import Home from "./components/Home.js";
import Exams from "./components/Exams.js";
import Upload from "./components/Upload.js";
import Search from "./components/Search.js";
import ExamsContext from './contexts/ExamsContext';
import React from "react";
import axios from "axios";
import "./reset.css"


export default function App() {

    const [exams, setExams] = React.useState(null);
    const [periods, setPeriods] = React.useState(null);
    const [professors, setProfessors] = React.useState(null);
    const [categories, setCategories] = React.useState(null);

    React.useEffect(()=>{
        const firstPromisse = axios.get("https://infoprovas.herokuapp.com/disciplines");
        firstPromisse.then((answer)=>{
            console.log(answer.data);
            setPeriods(answer.data);
        }).catch(answer=>console.log(answer.response));
        const secondPromisse = axios.get("https://infoprovas.herokuapp.com/professors");
        secondPromisse.then((answer)=>{
            console.log(answer.data);
            setProfessors(answer.data);
        }).catch(answer=>console.log(answer.response));
        const thirdPromisse = axios.get("https://infoprovas.herokuapp.com/categories");
        thirdPromisse.then((answer)=>{
            console.log(answer.data);
            setCategories(answer.data);
        }).catch(answer=>console.log(answer.response));
    },[]);

    return(
        <ExamsContext.Provider value={{periods, setPeriods, professors, setProfessors, categories, setCategories, exams, setExams}}>
            <Router>
                <GlobalStyles/>
                <Switch>
                    <Route path="/" exact component={Home} />
                </Switch>
                <Switch>
                    <Route path="/upload" exact component={Upload} />
                </Switch>
                <Switch>
                    <Route path="/search" exact component={Search} />
                </Switch>
                <Switch>
                    <Route path="/exams" exact component={Exams} />
                </Switch>
            </Router>
        </ExamsContext.Provider>
    )
}