import React, { Component } from "react";

class Precos extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }
  render() {
  return (
    <div id='pricing' className='container-fluid'>
      <div className='text-center'>
        <h2>Preços</h2>
        <h4>Escolha o pacote que funcione para você</h4>
      </div>
      <div className='row slideanim'>
        <div className='col-sm-4 col-xs-12'>
          <div className='panel panel-default text-center'>
            <div className='panel-heading'>
              <h1>Basico</h1>
            </div>
            <div className='panel-body'>
            <img src={require('./img_viagens/Pacote-de-Viagem-com-tudo-incluso-dstq.png')} alt='pessoas' width='300' height='300' />

              <p><strong>1</strong> - Viagem ida/volta - Regiões do País</p>
              <p><strong>2</strong> - Dias/Noite</p>
              <p><strong>1</strong> - Café/Almoço/Jantar no Local</p>
              <p><strong>1</strong> - Na região</p>
              <p><strong>1</strong> - Foto da viagem em tamanho Tamanho de capa 21,59 × 27,94 cm</p>
              <p><strong>Valores alterão com a quantidade de pessoas e dias</strong></p>
            </div>
            <div className='panel-footer'>
              <h3>R$ 500,00</h3>
              <h4>por mês durante 1 ano</h4>
              <button className='btn btn-lg'>Assinar</button>
            </div>
          </div>
        </div>
        <div className='col-sm-4 col-xs-12'>
          <div className='panel panel-default text-center'>
            <div className='panel-heading'>
              <h1>Pro</h1>
            </div>
            
            <div className='panel-body'>
            <img src={require('./img_viagens/Pacote-de-Viagem-com-tudo-incluso-dstq.png')} alt='pessoas' width='300' height='300' />
            <p><strong>1</strong> - Viagem ida/volta Continente Sulamericano</p>
              <p><strong>2</strong> - Dias/Noite</p>
              <p><strong>1</strong> - Café/Almoço/Jantar no Local</p>
              <p><strong>2</strong> -Por dia na região</p>
              <p><strong>1</strong> - Album de fotografia da viagem em tamanho Tamanho de capa e foto 21,59 × 27,94 cm</p>
              <p><strong>Valores alterão com a quantidade de pessoas e dias</strong></p>
            </div>
            <div className='panel-footer'>
              <h3>R$ 900,00</h3>
              <h4>por mês durante 1 ano</h4>
              <button className='btn btn-lg'>Assinar</button>
            </div>
          </div>
        </div>
        <div className='col-sm-4 col-xs-12'>
          <div className='panel panel-default text-center'>
            <div className='panel-heading'>
              <h1>Premium</h1>
            </div>
            <div className='panel-body'>
            <img src={require('./img_viagens/Pacote-de-Viagem-com-tudo-incluso-dstq.png')} alt='pessoas' width='300' height='300' />
            <p><strong>1</strong> - Viagem ida/volta Qualquer lugar do mundo</p>
              <p><strong>5</strong> - Dias/Noite</p>
              <p><strong>1</strong> - Café/Almoço/Jantar no Local</p>
              <p><strong>3</strong> - Por dia Na região</p>
              <p><strong>1</strong> - Album de fotografia da viagem em tamanho Tamanho de capa 21,59 × 27,94 cm</p>
              <p><strong>Valores alterão com a quantidade de pessoas e dias</strong></p>
            </div>
            <div className='panel-footer'>
              <h3>R$ 2400,98</h3>
              <h4>por mês durante 1 ano</h4>
              <button className='btn btn-lg'>Assinar</button>
            </div>
          </div>
        </div>
        <div className='text-center'>
        <h2>Lembrando!</h2>
        <h4>Escolha o pacote que funcione para você</h4>
        <h3>Monte o seu pacote! Entre em contato conosco e monte a de acordo com o que desejar!</h3>
      </div>
      </div>
    </div>

  );
}
}

export default Precos;