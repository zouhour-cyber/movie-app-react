import React from 'react'
import Menu from './navbar'
import { Container } from 'react-bootstrap'


const Favoris =({favorite}) => {
   
        return (
            <div>
                <Menu favorite={favorite}/>
                <Container fluid>
                <h2 className="mt-5"> mes favoris </h2>
                </Container>
            </div>
        )

}

export default Favoris