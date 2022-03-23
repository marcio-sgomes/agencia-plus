import React, { Component } from "react";

class Contato extends Component {
    constructor(props) {
        super(props)
    
        this.state = {}
    }
    render() {
    return (
        <div id='contact' className='container-fluid bg-grey'>
            <h2 className='text-center'>CONTATO</h2>
            <div className='row'>
                <div className='col-sm-5'>
                <p>Entre em contato conosco e entraremos em contato com você em 24 horas.</p>
                <p><span className='glyphicon glyphicon-map-marker'></span> Rio de Janeiro, BR</p>
                    <p><span className='glyphicon glyphicon-phone'></span> +55 21 2255-7365</p>
                    <p><span className='glyphicon glyphicon-envelope'></span> maisplusviagem@.com.br</p>
                    <i class="fa fa-facebook"> Agencia+Plus</i>
                    <br/>
                    <i class="fa fa-linkedin"> Agencia+Plus</i>
                    <br/>
                    <i class="fa fa-github"> Agencia+Plus</i>
                    <br/>
                    <i class="fa fa-twitter"> #Agencia+Plus</i>
                    <br/>
                    <i class="fa fa-instagram"> @Agencia+Plus</i>
                    
                </div>
                <div className='col-sm-7 slideanim'>
                    <div className='row'>
                        <div className='col-sm-6 form-group'>
                            <input className='form-control' id='name' name='name' placeholder='Nome' type='text' required />
                        </div>
                        <div className='col-sm-6 form-group'>
                            <input className='form-control' id='email' name='email' placeholder='Email' type='email' required />
                        </div>
                    </div>
                    <textarea className='form-control' id='comments' name='comments' placeholder='Comente' rows='5'></textarea><br />
                    <div className='row'>
                        <div className='col-sm-12 form-group'>
                            <button className='btn btn-default pull-right' type='submit'>Mandar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
}

export default Contato;