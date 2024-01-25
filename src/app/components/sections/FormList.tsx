import styled from "styled-components";
import CarList from '../elements/CarList';

export default function FormList(){

    return(
        <Wrapper>
            <div className="container">
                <Title>
                    <h1>Lista formulario</h1>   
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum non consectetur a erat nam at lectus urna.
                    </p>
                </Title>
                <CarList/>                
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    padding:0 5%;
    display:flex;    
    justify-content:center;

    h1{
        color:#191919;
        font-size:2em;
    }

    .container{
        
    }
`;

const Title = styled.div`
    
`;