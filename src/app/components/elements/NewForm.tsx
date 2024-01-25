import Button from './button/button';
import styled from 'styled-components';
import { Car } from '../../../state/cars/cars';
import { useDispatch, useSelector } from 'react-redux';
import { addCar, carsSlice, removeCar} from '../../../state/cars/carsSlice';

export default function NewForm(){
    const dispatch = useDispatch();
    const cars = useSelector(state => state.cars.cars);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const newCar: Car = {
            id: cars.length as number ,
            name: formData.get('name') as string,
            rutv: formData.get('rutv') as string,
            serial: formData.get('serial') as string,
            brand: formData.get('brand') as string,
            model: formData.get('model') as string,
            color: formData.get('color') as string,
        };
        console.log(newCar);
        dispatch(addCar(newCar));
    };
    
    return(
        <Wrapper>
            <FormContainer onSubmit={handleSubmit}>
            <Title>
                <h2> Nuevo formulario</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </p>
            </Title>
            <h4>Datos del vendedor:</h4>
                <DatosVendedor>
                    <InputDatos>
                    <label>
                        <input name="name" type="text"></input>
                        <p>Nombre completo</p>
                    </label>
                    </InputDatos>
                    <InputDatos>
                    <label>
                        <input name="rutv" type="text"></input>
                        <p>Rut Vendedor</p>
                    </label>
                    </InputDatos>

                </DatosVendedor>
                <hr/>
                <h4>Datos del vehiculo: </h4>
                <DatosVehiculo>
                    <InputDatos>
                    <label>
                        <input name="serial" type="text"></input>
                        <p>Patente del vehiculo</p>
                    </label>
                    </InputDatos>
                    <InputDatos>
                        <label>
                            <input name="brand" type="text"></input>
                            <p>Marca del vehiculo</p>
                        </label>
                    </InputDatos>
                    <InputDatos>
                        <label>
                            <input name="model" type="text"></input>
                            <p>Modelo del vehiculo</p>
                        </label>
                    </InputDatos>
                    <InputDatos>
                        <label>
                            <input name="color" type="text"></input>
                            <p>Color del vehiculo</p>
                        </label>
                    </InputDatos>                    
                </DatosVehiculo>
                    <hr/>
                <SubmitBtn>
                    <input type="submit" text="Enviar"/>
                    
                </SubmitBtn>
            </FormContainer>       
        </Wrapper>
    );
}


const InputDatos = styled.div`   
margin-bottom: 15px;
    label {
        padding:7px;
        
        position: relative;
    }
    label input{

        font-size: 1rem;
        color: #0050ff;
        background: transparent;
        padding: 1rem 1.2rem;
        min-width: 15rem;
        border-radius: 0.5rem; 
        border: 2px solid #0050ff;
        transition: border-color 0.2s;
        
    }

    p {
        color: #0050ff;
        font-size: 1rem;
        user-select: none;
        position:absolute;
        top: -100%;
        margin-left: 0.8rem;
        padding: 0 0.4rem;
        background: #ffffff;
        transition: top 0.2s, font-size 0.2s, color 0.2s;
        pointer-events: none;
      }

`;


const Wrapper = styled.section`   
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    padding-bottom:100px;
`;

const Title = styled.div`   
      padding:1em 0;      
`;



const SubmitBtn = styled.div`   
    display:flex;
    justify-content:flex-end;
`;


const FormContainer = styled.form`   
    width:75%;
`;

const DatosVendedor = styled.div`
      display:flex;
      justify-content:flex-start;      
      flex-wrap:wrap;
`;

const DatosVehiculo = styled.div`
      display:flex; 
      justify-content:flex-start;      
      flex-wrap: wrap;
`;

