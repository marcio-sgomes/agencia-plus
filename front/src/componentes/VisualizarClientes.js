import React, { Component } from 'react'
import ClienteService from '../service/ClienteService'

class VisualizarClientes extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: this.props.match.params.id,
      cliente: {}
    }
  }

  componentDidMount() {
    ClienteService.getClienteById(this.state.id).then(res => {
      this.setState({ cliente: res.data });
    })
  }

  render() {
    return (
      <div className='mt-3'>

        <div className="card col-md-6 offset-md-3">
          <h2 className="text-center my-1">Detalhes do Funcionario </h2>
          <div className="card-body">
            <div className="row mb-2">
              <label className='fw-bold'>Primeiro nome: </label>
              <div> {this.state.cliente.firstName}</div>
            </div>
            <div className="row mb-2">
              <label className='fw-bold'> Sobrenome: </label>
              <div> {this.state.cliente.lastName}</div>
            </div>
            <div className="row">
              <label className='fw-bold'> Email: </label>
              <div> {this.state.cliente.emailId}</div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default VisualizarClientes