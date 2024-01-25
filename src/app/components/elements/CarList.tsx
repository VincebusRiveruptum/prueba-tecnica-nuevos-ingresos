
import styled from 'styled-components';
import { useDispatch, useSelector } from "react-redux";
import { removeCar } from '../../../state/cars/carsSlice';


export default function CarList(){
    const cars = useSelector(state => state.cars.cars);
    const dispatcher = useDispatch();
    const handleDelete = (id) => {
        dispatcher(removeCar(id));
    } 

    return(
        <Wrapper>  
            <div className='container'>
                <Table>
                    <tr>
                        <th>Nombre</th>
                        <th>Rut vendedor</th>   
                        <th>Patente vehiculo</th>
                        <th>Marca vehiculo</th>
                        <th>Modelo vehiculo</th>
                        <th>Color vehiculo</th>
                        <th>Eliminar</th>
                    </tr>
                    <tr>         
                        {
                            cars.map( car => {

                                console.log(car.name);
                                return (         
                                    <div>
                                        <td>{car.name}</td>
                                        <td>{car.rutv}</td>
                                        <td>{car.serial}</td>
                                        <td>{car.brand}</td>
                                        <td>{car.model}</td>
                                        <td>{car.color}</td>
                                        <td>
                                            <button onClick={() => handleDelete(car.id)} >Delete</button>
                                        </td>
                                    </div>                        
                                )                                   
                            }
                            )
                        }               
                    </tr>
                </Table>

            </div>


        </Wrapper>
    );
}

const Wrapper = styled.section`
    padding:2% 5%;
    display:flex;
    justify-content:center;
`;

const Table = styled.table`
    tr th{ 
        padding:2em 2em;
    }
    tr td{ 
        padding:2em 2em;
    }
`;