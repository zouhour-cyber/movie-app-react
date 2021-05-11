import React from 'react'
import Menu from './navbar'
import { Container } from 'react-bootstrap'


const Favoris =(props) => {
   
        return (
            <div>
                <Menu/>
                <Container fluid>
                <h2 className="mt-5"> mes favoris </h2>
                </Container>
            </div>
        )

}

export default Favoris