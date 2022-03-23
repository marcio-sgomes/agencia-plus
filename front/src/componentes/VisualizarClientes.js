import React, { Component } from 'react'
import ClienteService from '../Service/ClienteService'

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
          <h2 className="text-center my-1">Detalhes do Cliente </h2>
          <div className="card-body">
            <div className="row mb-2">
              <label className='fw-bold'>Nome: </label>
              <div> {this.state.cliente.name}</div>
            </div>
            <div className="row mb-2">
              <label className='fw-bold'> CPF: </label>
              <div> {this.state.cliente.cpf}</div>
            </div>
            <div className="row">
              <label className='fw-bold'> Nascimento: </label>
              <div> {this.state.cliente.nascimento}</div>
            </div>
            <div className="row">
              <label className='fw-bold'> sexo: </label>
              <div> {this.state.cliente.sexo}</div>
            </div>
            <div className="row">
              <label className='fw-bold'> Telefone: </label>
              <div> {this.state.cliente.tel1}</div>
            </div>
            <div className="row">
              <label className='fw-bold'> Telefone 2: </label>
              <div> {this.state.cliente.tel2}</div>
            </div>
            <div className="row">
              <label className='fw-bold'> Email: </label>
              <div> {this.state.cliente.email}</div>
            </div>
            <div className="row">
              <label className='fw-bold'> CEP: </label>
              <div> {this.state.cliente.cep}</div>
            </div>
            <div className="row">
              <label className='fw-bold'> Rua: </label>
              <div> {this.state.cliente.rua}</div>
            </div>
            <div className="row">
              <label className='fw-bold'> Nº: </label>
              <div> {this.state.cliente.numero}</div>
            </div>
            <div className="row">
              <label className='fw-bold'> Bairro: </label>
              <div> {this.state.cliente.bairro}</div>
            </div>
            <div className="row">
              <label className='fw-bold'> Cidade: </label>
              <div> {this.state.cliente.cidade}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default VisualizarClientes