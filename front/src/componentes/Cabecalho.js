import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Cabecalho extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }
    render() {
        return (

            <div>
                <nav className='navbar navbar-default navbar-fixed-top'>
                    <div className='container'>
                        <div className='navbar-header'>
                            <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='#myNavbar'>
                                <span className='icon-bar'></span>
                                <span className='icon-bar'></span>
                                <span className='icon-bar'></span>
                            </button>
                            {/*falta concertar a altura da img e colocar trasparente 
                        <div className='imagen_logo'>
                        <Link className='navbar-brand' to='/'> <img src={require('')} alt='Paris'/></Link>
                        </div>*/}
                        </div>
                        <div className='collapse navbar-collapse' id='myNavbar'>
                            <ul className='nav navbar-nav navbar-right'>
                                <li><Link to='/'><span className='glyphicon glyphicon-home	
                                '></span>INICIO</Link></li>
                                <li><Link to='/servicos'><span className='glyphicon glyphicon-briefcase	
                                '></span>SERVIÇOS</Link></li>
                                <li><Link to='/portfolio'><span className='	glyphicon glyphicon-user
                                '></span>PORTFOLIO</Link></li>
                                <li><Link to='/precos'><span className='glyphicon glyphicon-usd	
                                '></span>PREÇOS</Link></li>
                                <li><Link to='/cadastro'><span className='glyphicon glyphicon-floppy-disk	
                                '></span>CADASTRO</Link></li>
                                <li><Link to='/contato'><span className='	glyphicon glyphicon-phone-alt
                                '></span>CONTATO</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div className='jumbotron text-center'>
                    <img src={require('./img_viagens/logo-removebg-preview.png')} alt='logo' />
                    <p>+plus, sua agência que criar + do que você espera!</p>
                    <form>
                        <div className='input-group'>
                            <input type='buscar' className='form-control' size='50' placeholder='Buscar' required />
                            <div className='input-group-btn'>
                                <button type='button' className='btn btn-info'><span className='glyphicon glyphicon-search 	
                            '></span> Buscar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        );
    }
}

export default Cabecalho;