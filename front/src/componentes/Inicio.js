import React, { Component} from "react";

class Inicio extends Component {
    constructor(props) {
      super(props)
  
      this.state = {
  
      }
    }
    render(){
    return (
            
        <div id='pricing' className='container-fluid'>
        
        <div>
            <div id='portfolio' className='container-fluid text-center bg-grey'>
                <h2>Curta suas viagens com + Emoção</h2><br/>
                <h3>Organizamos tudo para você da maneira que quiser</h3>
                <h3>Além de suas viagens organizamos:</h3>
                <h3><strong>EVENTOS | FESTAS | VIAGENS | CAMPEONATOS | CONCURSOS</strong></h3>
                <h3>E tudo o que desejar</h3>
                <div id='myCarousel' className='carousel slide text-center' data-ride='carousel'>
                    {/* Indicators */}
                    <ol className='carousel-indicators'>
                        <li data-target='#myCarousel' data-slide-to='2' className='active'></li>
                        <li data-target='#myCarousel' data-slide-to='2'></li>
                        <li data-target='#myCarousel' data-slide-to='2'></li>
                        <li data-target='#myCarousel' data-slide-to='2'></li>
                        <li data-target='#myCarousel' data-slide-to='2'></li>
                        <li data-target='#myCarousel' data-slide-to='2'></li>
                        <li data-target='#myCarousel' data-slide-to='2'></li>
                        <li data-target='#myCarousel' data-slide-to='2'></li>
                        <li data-target='#myCarousel' data-slide-to='2'></li>
                        <li data-target='#myCarousel' data-slide-to='2'></li>
                        <li data-target='#myCarousel' data-slide-to='2'></li>
                    </ol>

                    {/* Wrapper for slides */}
                    <div className='carousel-inner' role='listbox'>
                        <div className='item active'>
                        <div><img src={require('./img_viagens/Ousadas Escapadas Fotos Montagem/1.jpg')} alt='pessoas' width='700' height='500' /></div>
                        <br/><br/><br/>
                        </div>                     
                        <div className='item'>
                        <div><img src={require('./img_viagens/Ousadas Escapadas Fotos Montagem/2.jpg')} alt='pessoas' width='700' height='500' /></div>
                        <br/><br/><br/>
                        </div>
                        <div className='item'>
                        <div><img src={require('./img_viagens/Ousadas Escapadas Fotos Montagem/3.jpg')} alt='pessoas' width='700' height='500' /></div>
                        <br/><br/><br/>
                        </div>
                        <div className='item'>
                        <div><img src={require('./img_viagens/Ousadas Escapadas Fotos Montagem/4.jpg')} alt='pessoas' width='700' height='500' /></div>
                        <br/><br/><br/>
                        </div>
                        <div className='item'>
                        <div><img src={require('./img_viagens/Ousadas Escapadas Fotos Montagem/5.jpg')} alt='pessoas' width='700' height='500' /></div>
                        <br/><br/><br/>
                        </div>
                        <div className='item'>
                        <div><img src={require('./img_viagens/Ousadas Escapadas Fotos Montagem/6.jpg')} alt='pessoas' width='700' height='500' /></div>
                        <br/><br/><br/>
                        </div>
                        <div className='item'>
                        <div><img src={require('./img_viagens/Ousadas Escapadas Fotos Montagem/7.jpg')} alt='pessoas' width='700' height='500' /></div>
                        </div>
                        <div className='item'>
                        <div><img src={require('./img_viagens/Ousadas Escapadas Fotos Montagem/8.jpg')} alt='pessoas' width='700' height='500' /></div>
                        <br/><br/><br/>
                        </div>
                        <div className='item'>
                        <div><img src={require('./img_viagens/Ousadas Escapadas Fotos Montagem/9.jpg')} alt='pessoas' width='700' height='500' /></div>
                        <br/><br/><br/>
                        </div>
                        <div className='item'>
                        <div><img src={require('./img_viagens/Ousadas Escapadas Fotos Montagem/10.jpg')} alt='pessoas' width='700' height='500' /></div>
                        <br/><br/><br/>
                        </div>
                        <div className='item'>
                        <div><img src={require('./img_viagens/Pacote-de-Viagem-com-tudo-incluso-dstq.png')} alt='pessoas' width='700' height='500' /></div>
                        <br/><br/><br/>
                        </div>
                    </div>

                    {/* Left and right controls */}
                    <a className='left carousel-control' href='#myCarousel' role='button' data-slide='prev'>
                        <span className='glyphicon glyphicon-chevron-left' aria-hidden='true'></span>
                        <span className='sr-only'>Previous</span>
                    </a>
                    <a className='right carousel-control' href='#myCarousel' role='button' data-slide='next'>
                        <span className='glyphicon glyphicon-chevron-right' aria-hidden='true'></span>
                        <span className='sr-only'>Next</span>
                    </a>
                </div>
            </div>

        </div>
       
                <div className='row'>
                    <div className='col-sm-4'>
                        <span className='glyphicon glyphicon-globe logo slideanim'></span>
                    </div>
                    <div className='col-sm-8'>
                        <h2>Nossos Valores</h2><br />
                        <h4><strong>MISSÃO:</strong> Levar para você  + seguraça, + diverção, + alegria, + emoção, + economia</h4><br />
                        <p><strong>Visão:</strong> +Plus tem a missão de cumprir e mudar a ideia de viajar. A ideia é proporcionar + tempo para todos que querem poder viajar sem ter que fazer + coisas além do que deveria.<br/>
                        Nossa ideia é juntar tudo o que precisa para nós ou seja, alugar carro, hospedagem, passeios, café, almoço, jantar e tudo o que desejar.<br/>
                        Basta entrar em contato conosco e montar o seu pacote de viagem. Além dos que já tem em nosso site.</p>
                        <img src={require('./img_viagens/logo-removebg-preview.png')} alt='logo'/>
                    </div>
                   
                </div>
            </div>
    );
}
}

export default Inicio;