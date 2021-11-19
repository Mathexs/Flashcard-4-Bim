import React, { useState } from "react";
import { Row, Col, Input, Button } from 'react-materialize'
import { NavLink, useParams } from 'react-router-dom'
import api from "../../api"
const FormEdit = () => {
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const {colecaoId} = useParams('');
    const atualizar = async () =>{
		await api.put("/" + colecaoId, {nome:nome,descricao:descricao});
	}
    return (
        <Row>
            <Input placeholder="Digite o nome do curso:" label="Nome do curso"
                onChange={event => setNome(event.target.value)} s={12} />
            <Input placeholder="Digite a descrição do curso:" label="Descrição"
                onChange={event => setDescricao(event.target.value)} s={12} />
            <Col s={12} m={12}>
                <NavLink to="/cursos"><Button onClick={atualizar} waves='light' className="right darken-2">Editar</Button></NavLink>
            </Col>
        </Row>
    );
}
export default FormEdit;