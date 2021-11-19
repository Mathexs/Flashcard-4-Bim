// Importantando o React
import React from "react";
// Importantando o component Home
import Home from "./components/home/home";
// Importantando o component Contact
import Cursos from "./components/contact/courses";
// Importando os components necessárias da lib react-materialize
import { Container } from 'react-materialize';
// Importanto o component <Switch /> e <Route /> da nossa Lib de rotas
import { Route, Routes } from 'react-router-dom'
import FormCurso from './components/contact/formularioCurso'
import FormEdit from './components/contact/formularioEdit'

const Main = (props) => (
  <main>
    <Container>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/forms' element={<FormCurso/>}/>
        <Route path='/forms/edit/:colecaoId' element={<FormEdit/>}/>
        <Route path='/cursos' element={<Cursos cursosInfo={props.cursosInfo}/>}/>
      </Routes>
    </Container>
  </main>
);

export default Main;