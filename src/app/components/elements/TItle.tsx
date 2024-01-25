import styled from "styled-components";
import laptop from "../../../assets/Laptop.svg";

export default function Title(){
    return(
        <Wrapper>
            <div className="container">
                <TextDiv>
                    <h1>Formulario <b>de Prueba</b></h1>
                </TextDiv>
                <ImgDiv>
                    <img src={laptop}></img>
                </ImgDiv>
            </div>
            <hr/>
        </Wrapper>
    )

}

const Wrapper = styled.section` 
    .container{
        display:flex;
        justify-content:center;
        width:100%;
        height:100%;
    }
`;

const ImgDiv = styled.div` 
    img{
        position: relative;
        width: 30vw;
    }
`;


const TextDiv = styled.div`
    padding:10% 2%;
    
    h1{
        font-size:4vw;
    }
    h1 b{
        color:blue;
        
    }
`;