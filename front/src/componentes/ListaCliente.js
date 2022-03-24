import React, { Component } from 'react'
import ClienteService from '../Service/ClienteService'

class ListaCliente extends Component {
  constructor(props) {
    super(props)

    this.state = {
      clientes: []
    }
    this.addCliente = this.addCliente.bind(this)
    this.editCliente = this.editCliente.bind(this)
    this.deleteCliente = this.deleteCliente.bind(this)
  }

  deleteCliente(id) {
    ClienteService.deleteCliente(id).then(res => {
      this.setState({
        clientes: this.state.clientes.filter(cliente => cliente.id !== id)
      })
    })
  }
  viewCliente(id) {
    this.props.history.push(`/cliente/${id}`)
  }
  editCliente(id) {
    this.props.history.push(`/cadastro/${id}`)
  }

  componentDidMount() {
    //ClienteService.getClientes().then(res => {
    ClienteService.getCliente().then(res => {
      console.log(res.data);
      this.setState({ clientes: res.data })
    })
  }

  addCliente() {
    this.props.history.push('/cadastro/_add')
  }

  render() {
    return (
      <div className='container w-75 mt-5'>
        <h2 className="text-center">Lista de Clientes</h2>
        <div className="row">
          <button className="btn btn-primary my-1" onClick={this.addCliente}>
            Adicionar Cliente
          </button>
        </div>

        <div className="row mt-2">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th className='text-center'> Nome </th>
                <th className='text-center'> Nascimento</th>
                <th className='text-center'> Sexo</th>
                <th className='text-center'> Telefone</th>
                <th className='text-center'> Telefone</th>
                <th className='text-center'> Email</th>
                <th className='text-center'> CEP</th>
                <th className='text-center'> Rua</th>
                <th className='text-center'> Numero</th>
                <th className='text-center'> Bairro</th>
                <th className='text-center'> Cidade</th>
              </tr>
            </thead>
            <tbody>
              {this.state.clientes.map(cliente => (
                <tr key={cliente.id}>
                  <td> {cliente.nome} </td>
                  <td> {cliente.Nascimento}</td>
                  <td> {cliente.te1}</td>
                  <td> {cliente.te2}</td>
                  <td> {cliente.email}</td>
                  <td> {cliente.cep}</td>
                  <td> {cliente.rua}</td>
                  <td> {cliente.numero}</td>
                  <td> {cliente.bairro}</td>
                  <td> {cliente.cidade}</td>
                  <td>
                    <button
                      onClick={() => this.editCliente(cliente.id)}
                      className="btn btn-info m-1"
                    >
                      Alterar{' '}
                    </button>
                    <button
                      onClick={() => this.deleteCliente(cliente.id)}
                      className="btn btn-danger m-1"
                    >
                      Deletar{' '}
                    </button>
                    <button
                      onClick={() => this.viewCliente(cliente.id)}
                      className="btn btn-info m-1"
                    >
                      Visualizar{' '}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default ListaCliente
