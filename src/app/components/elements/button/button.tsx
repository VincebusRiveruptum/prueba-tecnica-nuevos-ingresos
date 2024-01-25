import styled from "styled-components";

export default function Button({text, type}){
    var buttontype;
    switch(type){
        case 'gray':
                buttontype  = <GrayButton>{text}</GrayButton>;
            break;
        case 'blue':
                buttontype  = <BlueButton >{text}</BlueButton>;
            break;
            
        default:
            buttontype  = <BlueButton>{text}</BlueButton>;
            break;
    }
    return(
        <>
            {buttontype}
        </>
    )
}


const GrayButton = styled.button`
    color:#002EFF;
    font-size:1em;  
    margin:10px;
    padding:10px;
    border: none;
    outline: none;
    background-color:#F3F5FF;
    border-radius: 30px;
  

    :hover {
      background-color: ${(props) => (props.border ? "transparent" : "#aa3050")};
      color: ${(props) => (props.border ? "#7620ff" : "#fff")};
    }   
`;

const BlueButton = styled.button`
    color:#FFFFFF;
    font-size:1em;  
    padding:15px 40px;   
    border: none;
    outline: none;
    background-color:#002EFF;
    border-radius: 30px;
  

    :hover {
      background-color: ${(props) => (props.border ? "transparent" : "#aa3050")};
      color: ${(props) => (props.border ? "#7620ff" : "#fff")};
    }   
`;