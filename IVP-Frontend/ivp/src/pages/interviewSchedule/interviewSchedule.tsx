import React  from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { Card, Col, Row, Container } from 'react-bootstrap';
import SideBar from '../../components/sideBar/sideBar';
import question from '../../images/question.png';
import A from '../../images/A.png'
import B from '../../images/B.png'

function InterviewSchedule() {
    return (
        <>
            
              <SideBar/>
              <Container>
                  <h1>Question</h1>
                <Row style={{marginLeft:"150px"}}>
                 

                    <Col md={4}  style={{marginTop:"100px",marginLeft:"-10px"}}>
                        <Card style={{ marginTop: 20, backgroundColor: "#F9F0F0",width:"250px" }}>
                        <Card.Img variant="top" src={A} height="200px" />
                            <Card.Body  className='cardTextTile'>
                                <Card.Text onClick={(event:any)=>{
                                   
                                }}>
                                Question
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                  
                </Row>
                </Container>
          
            <br></br>
        </>
    );
}

export default InterviewSchedule;