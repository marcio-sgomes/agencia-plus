import React, { Component } from "react";

class Portfolio extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    render() {
        return (
            <div>
                <div id='portfolio' className='container-fluid text-center bg-grey'>
                    <h2>Portfolio</h2><br />
                    <h4>Album</h4>
                    <div className='row text-center slideanim '>
                        <div className='col-sm-4'>
                            <div className='thumbnail'>
                                <img src={require('./img_viagens/portifolio/pacotes-de-viagem-para-disney.jpg')} alt='pessoas' />
                                <p><strong>EUA</strong></p>
                                <p>Orlando</p>
                            </div>
                        </div>

                        <div className='col-sm-4'>
                            <div className='thumbnail'>
                                <img src={require('./img_viagens/dubai-marina-thinkstock-477123143.jpg')} alt='dubai' />
                                <p><strong>CATAR</strong></p>
                                <p>Dubai</p>
                            </div>
                        </div>
                        <div className='col-sm-4'>
                            <div className='thumbnail'>
                                <img src={require('./img_viagens/portifolio/pacotes-de-viagens-para-casal-com-tudo-incluso-1024x673.jpg')} alt='dubai' />
                                <p><strong>CATAR</strong></p>
                                <p>Dubai</p>
                            </div>
                        </div>
                        <div className='col-sm-4'>
                            <div className='thumbnail'>
                                <img src={require('./img_viagens/dubai-marina-thinkstock-477123143.jpg')} alt='dubai' />
                                <p><strong>CATAR</strong></p>
                                <p>Dubai</p>
                            </div>
                        </div>
                        <div className='col-sm-4'>
                            <div className='thumbnail'>
                                <img src={require('./img_viagens/irlanda.jpg')} alt='irlanda' />
                                <p><strong>IRLANDA</strong></p>
                                <p>Dublin</p>
                            </div>
                        </div>
                        <div className='col-sm-4'>
                            <div className='thumbnail'>
                                <img src={require('./img_viagens/japan.jpg')} alt='japao' />
                                <p><strong>JAPÃO</strong></p>
                                <p>Ilha de Honshu</p>
                            </div>
                        </div>
                        <div className='col-sm-4'>
                            <div className='thumbnail'>
                                <img src={require('./img_viagens/mercure-maldives-kooddoo-vista-aerea-overwater-villas.jpg')} alt='maldivas' />
                                <p><strong>Ilhas Maldivas</strong></p>
                                <p>Maldivas</p>
                            </div>
                        </div>
                        <div className='col-sm-4'>
                            <div className='thumbnail'>
                                <img src={require('./img_viagens/portifolio/pessoa6.jpg')} alt='pessoas' />
                                <p><strong>Brasil</strong></p>
                                <p>Ilha de Guaratiba - RJ</p>
                            </div>
                        </div>
                        <div className='col-sm-4'>
                            <div className='thumbnail'>
                                <img src={require('./img_viagens/portifolio/pessoa4.jpg')} alt='pessoas' />
                                <p><strong>Brasil</strong></p>
                                <p>Rio de Janeiro</p>
                            </div>
                        </div>
                    </div><br />

                    <h2>O que nossos clientes dizem</h2>
                    <div id='myCarousel' className='carousel slide text-center' data-ride='carousel'>
                        {/* Indicators */}
                        <ol className='carousel-indicators'>
                            <li data-target='#myCarousel' data-slide-to='2' className='active'></li>
                            <li data-target='#myCarousel' data-slide-to='4'></li>
                            <li data-target='#myCarousel' data-slide-to='4'></li>
                            <li data-target='#myCarousel' data-slide-to='4'></li>
                            <li data-target='#myCarousel' data-slide-to='4'></li>
                            <li data-target='#myCarousel' data-slide-to='4'></li>
                            <li data-target='#myCarousel' data-slide-to='4'></li>
                            <li data-target='#myCarousel' data-slide-to='4'></li>
                            <li data-target='#myCarousel' data-slide-to='4'></li>
                            <li data-target='#myCarousel' data-slide-to='4'></li>
                            <li data-target='#myCarousel' data-slide-to='4'></li>
                            <li data-target='#myCarousel' data-slide-to='4'></li>
                        </ol>

                        {/* Wrapper for slides */}
                        <div className='carousel-inner' role='listbox'>
                            <div className='item active'>
                                <h4>'Agradeço a todos os clientes pelos comentários'<br /><span>Márcio Gomes, CEO de +Plus</span></h4>
                            </div>
                            <div className='item'>
                                <div><img src={require('./img_viagens/portifolio/pessoa4.jpg')} alt='pessoas' width='400' height='300' /></div>
                                <h4>'Nossa experiencia foi maravilhosa! Nunca acreditei que poderia realizar um sonho por um bom preço!'<br /><span>Família Lotáro, RJ</span></h4>
                            </div>
                            <div className='item'>
                                <div><img src={require('./img_viagens/portifolio/pessoa2.jpg')} alt='pessoas' width='400' height='300' /></div>
                                <h4>'Nossa viagem foi inesquecivel! Tenho tudo a agradecer a +Plus por essa experiência'<br /><span>Suzana e amigos, RJ</span></h4>
                            </div>
                            <div className='item'>
                                <div><img src={require('./img_viagens/portifolio/pessoa3.jpeg')} alt='pessoas' width='400' height='300' /></div>
                                <h4>'Minha primeira e maravilhsa experiência nas dunas. Obrigado +Plus!'<br /><span>Larissa, MA</span></h4>
                            </div>
                            <div className='item'>
                                <div><img src={require('./img_viagens/portifolio/pessoa5.jpg')} alt='pessoas' width='400' height='300' /></div>
                                <h4>'Minha primeira viagem com minha família para as praias do Rio. Nunca imaginei que poderia encontrar um pacote com tudo incluso sem me procupar com nada!'<br /><span>Érik e sua família, RJ</span></h4>
                            </div>
                            <div className='item'>
                                <div><img src={require('./img_viagens/portifolio/pessoa6.jpg')} alt='pessoas' width='400' height='300' /></div>
                                <h4>'Moro no Rio, mas adorei o pacote que a +Plus fez de acordo com minha ideia e realizou meu desejo de conhecer Ilha de Guaratiba!'<br /><span>Laura, Ilha de Guaratiba - RJ</span></h4>
                            </div>
                            <div className='item'>
                                <div><img src={require('./img_viagens/macarrao-croacia (1)@1x.jpg')} alt='croacia' width='400' height='300' /></div>
                                <h4>'Como eu queria comer esse macarrão! E falam que a Itália é a melhor na massa! Valeu +Plus por me proporcionar um preço legal para provar esse macarrão'<br /><span>DJ Eli Big, Croácia</span></h4>
                            </div>
                            <div className='item'>
                                <div><img src={require('./img_viagens/portifolio/pessoacasal4.jpeg')} alt='pessoas' width='400' height='300' /></div>
                                <h4>'Eu sou grata totalmente a +Plus por além de solucionar um problema, realizou o nosso desejo de uma forma simples e objetiva. Muito Obigrado +Plus, por realizar o meu sonho!'<br /><span>Casamento em Paris, Mária e João</span></h4>
                            </div>
                            <div className='item'>
                                <div><img src={require('./img_viagens/portifolio/pessoacasal3.jfif')} alt='pessoas' width='400' height='300' /></div>
                                <h4>'Meu Marido sempre foi fã de karate Kid e desde criança sempre quis conhecer a terra do Sr Myagi e graças a +Plus ele realizou esse desejo.'<br /><span>Jussara e seu esposo Hélio Benamor, Okinawa</span></h4>
                            </div>
                            <div className='item'>
                                <div><img src={require('./img_viagens/portifolio/pessoacasal2.jpg')} alt='pessoas' width='400' height='300' /></div>
                                <h4>'Nossa! Eu precisa muito de férias. A melhor coisa que fiz foi assinar um pacote básico da +Plus e estou realizada. Ainda conheci uma pessoa especial rs. +Plus I LOVE YOU! '<br /><span>Clarisse e seu amigo, Natal, Genipabu</span></h4>
                            </div>
                            <div className='item'>
                                <div><img src={require('./img_viagens/portifolio/pessoacasal.jpg')} alt='pessoas' width='400' height='300' /></div>
                                <h4>'Nossa! Vim de Saskatoon para conhecer o Rio de Janeiro, conheci a +Plus por um amigo que falou que os preços eram de outro planeta! Realmente o dono é maluco de + kkkk'<br /><span>Laura Crazy e seu namorado Loriz Capirosk, Rio de Janeiro, Angra dos Reis</span></h4>
                            </div>
                            <div className='item'>
                                <div><img src={require('./img_viagens/portifolio/just_rj.jpeg')} alt='pessoas' width='400' height='300' /></div>
                                <h4>'Fui indicado por um amigo que essa agência era boa e não rolava estresse. Estava afim de visitar o RJ e fui! Uma Agência muito boa e sem enrolação. Em breve voltarei com a galera!'<br /><span>Justin B, Rio de Janeiro, Trilha para Praia do Perigoso</span></h4>
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
        );
    }
}

export default Portfolio;