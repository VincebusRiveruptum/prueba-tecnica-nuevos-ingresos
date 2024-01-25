import Button from '../elements/button/button';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

export default function Header(){
    return(
        <Wrapper>
            <div className="container"> 
                <HeaderLinks>
                    <Link to="/formulario" >
                        <Button text="Formulario" type="gray"/>
                    </Link>
                
                    <Link to="/Listaformulario" >
                        <Button text="Lista Formulario" type="gray"/>
                    </Link>
                </HeaderLinks>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1   ), 0 2px 10px 0 rgba(0, 0, 0, 0.01);
    
    .container{
        display:flex;
        justify-content:flex-end;
        
    }
`;


const HeaderLinks = styled.div`
    margin:10px;
`;  

