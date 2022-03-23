import React, { Component } from "react";

class Servicos extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return(
<div id='services' className='container-fluid text-center'>
  <h2>SERVIÇOS</h2>
  <h4>O que nós oferecemos</h4>
  <br/>
  <div className='row slideanim'>
    <div className='col-sm-4'>
      <span className='glyphicon glyphicon-off logo-small'></span>
      <h4>LIGAR</h4>
      <p>Ligar a diversão na sua vida..</p>
    </div>
    <div className='col-sm-4'>
      <span className='glyphicon glyphicon-heart logo-small'></span>
      <h4>AMOR</h4>
      <p>+ Amor com o que desejar..</p>
    </div>
    <div className='col-sm-4'>
      <span className='	glyphicon glyphicon-time logo-small'></span>
      <h4>TEMPO</h4>
      <p>+ Tempo para sua vida..</p>
    </div>
  </div>
  <br/><br/>
  <div className='row slideanim'>
    <div className='col-sm-4'>
      <span className='glyphicon glyphicon-leaf logo-small'></span>
      <h4>VERDE</h4>
      <p>+ Verde para sua vida..</p>
    </div>
    <div className='col-sm-4'>
      <span className='glyphicon glyphicon-map-marker logo-small'></span>
      <h4>MAPA</h4>
      <p>Escolha para onde ir..</p>
    </div>
    <div className='col-sm-4'>
      <span className='glyphicon glyphicon-refresh logo-small'></span>
      <h4>Renovar</h4>
      <p>Renovar suas forças..</p>
    </div>
  </div>
</div>
    );
}
}
export default Servicos;