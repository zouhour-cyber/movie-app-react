import React  from 'react'
import { Container } from 'react-bootstrap'
import Menu from './navbar'

function About(){
   
        return (
            <div>
                <Menu/>
                <Container fluid>
                <h2 className="mt-5"> page About us </h2>
                </Container>
            </div>
        )
    }

export default About
