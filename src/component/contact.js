import React from 'react'
import { Container } from 'react-bootstrap'
import Menu from './navbar'

function Contact ({favorite}){
   
        return (
            <div>
                <Menu favorite={favorite}/>
                <Container fluid className="mt-5">
          
            </Container>   
            </div>
        )

}

export default Contact