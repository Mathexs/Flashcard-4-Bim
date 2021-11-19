// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card } from 'react-materialize';
// Importando o component Experience
import Experience from '../experience/experience'
// Importando o avatar da empresa 1
import company_avatar from '../../images/company.png';
// Importando o avatar da empresa 1
import company_avatar2 from '../../images/company2.png';

const Home = () => (
  <Row>
    <Col m={11} s={12}>
        <h5 className="subtitle">Sobre a instituição</h5>
        <Card>
          <div>
            <p><b>Informações</b></p>
            <p>"Possui moderna infraestrutura física e tecnológica, laboratórios de última geração, bibliotecas renovadas constantemente e corpo docente altamente qualificado."</p>
            <br/>
            <p><b>Visão</b></p>
            <p>"Ser uma instituição educacional reconhecida pela excelência nos serviços prestados, pelos seus elevados padrões éticos e pela qualidade pessoal e profissional de seus egressos."</p>
          </div>
        </Card>
        <h5 className="subtitle">Avaliações</h5>
   

        {/* Passando os parâmetros title, company, description e avatar para o component Experience */}
        <Experience title="Nota 5 no MEC"
                    description="Nossa instituição possui nota 5 no MEC, provando a excelência e eficiência de nossa metodologia de ensino"
                    avatar={company_avatar}
        />
        <Experience title="Avaliação de alunos"
                    description="Em média, nossos alunos e ex-alunos classificam nosso campus com nota 4,7, mostrando o nível de satisfação com os professores e os métodos de ensino aplicados"
                    avatar={company_avatar2}                    
        /> 
    </Col>
  </Row>
);

export default Home;