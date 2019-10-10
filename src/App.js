import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './componentes/Navbar';
import Home from './componentes/Home';
import Cadastro from './componentes/Cadastro/Cadastro';
import Contador from './Contador/Contador';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
    <Contador />
      <Route exact path="/" component={Home} />
      <Route path="/cadastro" component={Cadastro} />
    </BrowserRouter>
  )
}
export default App;