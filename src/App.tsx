

import styled from "styled-components";
import AddForm from "./app/components/sections/AddForm";
import Header from "./app/components/nav/Header";
import FormList from "./app/components/sections/FormList";
import { BrowserRouter as Router} from "react-router-dom";
import {Routes, Route} from 'react-router-dom';

const App = () => {
  return  (
    <Router>
      <Header/>
      <Routes>
        <Route path='/formulario' element={<AddForm/>}/>
        <Route path='/listaFormulario' element={<FormList/>}/>
      </Routes>
    </Router>

  )
}

export default App;

