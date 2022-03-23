import './Cadastro.css';
import React, { Component } from 'react'
import ClienteService from '../Service/ClienteService';

class Cadastro extends Component {
  constructor(props) {
    super(props)

    this.state = {
      // step 2
      id: this.props.match.params.id,
      nome:'',
      cpf: '',
      nascimento: '',
      sexo: '',
      tel1: '',
      tel2: '',
      email: '',
      cep: '',
      rua: '',
	  numero: '',
	  bairro: '',
	  cidade: ''
    }
    this.mudarNome = this.mudarNome.bind(this);
    this.mudarCpf = this.mudarCpf.bind(this);
    this.mudarNascimento = this.mudarNascimento.bind(this);
    this.mudarSexo = this.mudarSexo.bind(this);
    this.mudarTel1 = this.mudarTel1.bind(this);
    this.mudarTel2 = this.mudarTel2.bind(this);
    this.mudarEmail = this.mudarEmail.bind(this);
    this.mudarCep = this.mudarCep.bind(this);
    this.mudarRua = this.mudarRua.bind(this);
    this.mudarNumero = this.mudarNumero.bind(this);
    this.mudarBairro = this.mudarBairro.bind(this);
    this.mudarCidade = this.mudarCidade.bind(this);
    this.saveOrUpdateCliente = this.saveOrUpdateCliente.bind(this);
  }

  // step 3
  componentDidMount() {

    // step 4
    if (this.state.id === '_add') {
      return
    } else {
      ClienteService.getClienteById(this.state.id).then((res) => {
        let cliente = res.data;
        this.setState({
          nome: cliente.nome,
      cpf: cliente.cpf,
      nascimento: cliente.nascimento,
      sexo: cliente.sexo,
      tel1: cliente.tel1,
      tel2: cliente.tel2,
      email: cliente.email,
      cep: cliente.cep,
      rua: cliente.rua,
	  numero: cliente.numero,
	  bairro: cliente.bairro,
	  cidade: cliente.cidade
        });
      });
    }
  }
  saveOrUpdateCliente = (e) => {
    e.preventDefault();
    let cliente = {  nome: this.state.nome,
      cpf: this.state.cpf,
      nascimento: this.state.nascimento,
      sexo: this.state.sexo,
      tel1: this.state.tel1,
      tel2: this.state.tel2,
      email: this.state.email,
      cep: this.state.cep,
      rua: this.state.rua,
      numero: this.state.numero,
      bairro: this.state.bairro,
      cidade: this.state.cidade };
    console.log('cliente => ' + JSON.stringify(cliente));

    // step 5
    if (this.state.id === '_add') {
      ClienteService.createCliente(cliente).then(res => {
        this.props.history.push('/clientes');
      });
    } else {
      ClienteService.updateCliente(cliente, this.state.id).then(res => {
        this.props.history.push('/clientes');
      });
    }
  }

  mudarNome = (event) => {
    this.setState({ nome: event.target.value });
  }

  mudarCpf = (event) => {
    this.setState({ cpf: event.target.value });
  }

  mudarNascimento = (event) => {
    this.setState({ nascimento: event.target.value });
  }

  mudarSexo = (event) => {
    this.setState({ sexo: event.target.value });
  }

  mudarTel1 = (event) => {
    this.setState({ tel1: event.target.value });
  }

  mudarTel2 = (event) => {
    this.setState({ tel2: event.target.value });
  }

  mudarEmail = (event) => {
    this.setState({ email: event.target.value });
  }

  mudarCep = (event) => {
    this.setState({ cep: event.target.value });
  }

  mudarRua = (event) => {
    this.setState({ rua: event.target.value });
  }

  mudarNumero = (event) => {
    this.setState({ numero: event.target.value });
  }

  mudarBairro = (event) => {
    this.setState({ bairro: event.target.value });
  }

  mudarCidade = (event) => {
    this.setState({ cidade: event.target.value });
  }


  cancel() {
    this.props.history.push('/clientes');
  }

  getTitle() {
    if (this.state.id === '_add') {
      return <h3 className="text-center">Adicionar cliente</h3>
    } else {
      return <h3 className="text-center">Editar cliente</h3>
    }
  }
  render() {
    return (
      <div>
        
              {
                this.getTitle()
              }
              
              <form className="form-horizontal">
                    <fieldset>
                        <div className="panel panel-primary">
                            <div className="panel-heading">Cadastro de Cliente</div>
                            <div className="panel-body">
                                <div className="form-group">                             
                                    <div className="col-md-11 control-label">
                                        <p className="help-block"><h11>*</h11> Campo Obrigatório </p>
                                    </div>
                                </div>
                                {/* Text input*/}
                                <div className="form-group">
                                    <label className="col-md-2 control-label" for="Nome">Nome <h11>*</h11></label>
                                    <div className="col-md-8">
                                        <input id="Nome" name="nome" placeholder="" className="form-control input-md" required="" type="text"
                                        value={this.state.nome} onChange={this.mudarNome} />
                                    </div>
                                </div>
                                {/* Text input*/}
                                <div className="form-group">
                                    <label className="col-md-2 control-label" for="Nome">CPF <h11>*</h11></label>
                                    <div className="col-md-2">
                                        <input id="cpf" name="cpf" placeholder="Apenas números" className="form-control input-md" required="" type={'text'} maxlength="11" pattern="[0-9]+$"
                                        value={this.state.cpf} onChange={this.mudarCpf} />
                                   </div>
                                    <label className="col-md-1 control-label" for="Nome">Nascimento<h11>*</h11></label>
                                    <div className="col-md-2">
                                        <input id="dtnasc" name="nascimento" placeholder="DD/MM/AAAA" className="form-control input-md" required="" type="date" maxlength="10" OnKeyPress="formatar('##/##/####', this)" onBlur="showhide()"
                                        value={this.state.nascimento} onChange={this.mudarNascimento} />
                                    </div>
				<div className="form-group">
                                    <label className="col-md-2 control-label" for="prependedtext">Telefone <h11>*</h11></label>
                                    <div className="col-md-2">
                                        <div className="input-group">
                                            <span className="input-group-addon"><i className="glyphicon glyphicon-earphone"></i></span>
                                            <input id="prependedtext" name="tel1" type="tel" className="form-control" placeholder="XX XXXXX-XXXX" required="" maxlength="13" pattern="\[0-9]{2}\ [0-9]{4,6}-[0-9]{3,4}$"
                                                OnKeyPress="formatar('## #####-####', this)"
                                                value={this.state.tel1} onChange={this.mudarTel1} />
                                        </div>
                                   </div>
				<label className="col-md-1 control-label" for="prependedtext">Telefone</label>
                                    <div className="col-md-2">
                                        <div className="input-group">
                                            <span className="input-group-addon"><i className="glyphicon glyphicon-earphone"></i></span>
                                            <input id="prependedtext" name="tel2" className="form-control" placeholder="XX XXXXX-XXXX" type="text" maxlength="13" pattern="\[0-9]{2}\ [0-9]{4,6}-[0-9]{3,4}$"
                                                OnKeyPress="formatar('## #####-####', this)"
                                                value={this.state.tel2} onChange={this.mudarTel2} />
                                        </div>
                                    </div>
                                </div>
				<div className="form-group">
                                    <label className="col-md-2 control-label" for="prependedtext">Email <h11>*</h11></label>
                                    <div className="col-md-5">
                                        <div className="input-group">
                                            <span className="input-group-addon"><i className="glyphicon glyphicon-envelope"></i></span>
                                            <input id="prependedtext" name="email" className="form-control" placeholder="email@email.com" required="" type="text" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" 
                                            value={this.state.email} onChange={this.mudarEmail} />
                                        </div>
                                    </div>
                                </div>
				<div className="form-group">

                    
                                    <label className="col-md-2 control-label" for="CEP">CEP <h11>*</h11></label>
                                    <div className="col-md-2">
                                        <input id="cep" name="cep" placeholder="Apenas números" className="form-control input-md" required="" type="search" maxlength="8" pattern="[0-9]+$"
                                        value={this.state.cep} onChange={this.mudarCep} />
                                    </div>
                                
                                </div>
				<div className="form-group">
                                    <label className="col-md-2 control-label" for="prependedtext">Endereço</label>
                                    <div className="col-md-4">
                                        <div className="input-group">
                                            <span className="input-group-addon">Rua</span>
                                            <input id="rua" name="rua" className="form-control" placeholder="" required=""  type="text"
                                            value={this.state.rua} onChange={this.mudarRua} />
                                        </div>

                                    </div>
				<div className="col-md-2">
                                        <div className="input-group">
                                            <span className="input-group-addon">Nº <h11>*</h11></span>
                                            <input id="numero" name="numero" className="form-control" placeholder="01" required="" type="text"
                                            value={this.state.numero} onChange={this.mudarNumero} />
                                        </div>

                                    </div>

                                    <div className="col-md-3">
                                        <div className="input-group">
                                            <span className="input-group-addon">Bairro</span>
                                            <input id="bairro" name="bairro" className="form-control" placeholder="" required=""  type="text"
                                            value={this.state.bairro} onChange={this.mudarBairro} />
                                        </div>

                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="col-md-2 control-label" for="prependedtext"></label>
                                    <div className="col-md-4">
                                        <div className="input-group">
                                            <span className="input-group-addon">Cidade</span>
                                            <input id="cidade" name="cidade" className="form-control" placeholder="" required=""  type="text"
                                            value={this.state.cidade} onChange={this.mudarCidade} />
                                        </div>

                                    </div>

                                    
                                </div>
				<div className="form-group">
                                    <label className="col-md-2 control-label" for="Cadastrar"></label>
                                    <div className="col-md-8">
                                        <button className="btn btn-success" onClick={this.saveOrUpdateCliente}>Salvar</button>
                                      
                                        <button className="btn btn-danger"  onClick={this.cancel.bind(this)}>Cancelar</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                      </div>
                    </fieldset>         
              </form>   
              </div>
         
    
    )
  }
}

export default Cadastro;