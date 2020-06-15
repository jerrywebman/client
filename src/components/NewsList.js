import React from 'react'
import {Container} from 'reactstrap'
import News from './News'

class NewsList extends React.Component{
    render(){
        return(
            <Container>
               <News />
            </Container>
        );
    }
}

export default NewsList;