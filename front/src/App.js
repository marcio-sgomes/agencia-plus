import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
 

import Cabecalho from './componentes/Cabecalho';
import Inicio from './componentes/Inicio';
import Servicos from './componentes/Servicos';
import Portfolio from './componentes/Portfolio';
import Precos from './componentes/Precos';
import Contato from './componentes/Contato';
import Rodape from './componentes/Rodape';
import Cadastro from './componentes/Cadastro';
import ListaCliente from './componentes/ListaCliente';
import VisualizarClientes from './componentes/VisualizarClientes';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Cabecalho />
        <Route path='/' exact component={Inicio} />
        <Route path='/servicos' component={Servicos} />
        <Route path='/portfolio' component={Portfolio} />
        <Route path='/precos' component={Precos} />
        <Route path='/contato' component={Contato} />
        <Route path='/cadastro-clientes/:id' component={Cadastro} />
        <Route path='/visualizar-clientes/:id' component={VisualizarClientes} />
        <Route path='/lista-clientes/:id' component={ListaCliente} />

        <Rodape />
      </div>
    </BrowserRouter>
  );
}


export default App;
