import React, { Component } from "react";

class Rodape extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <footer className='container-fluid text-center'>
        <a href='/' title='To Top'>
          <span className='glyphicon glyphicon-chevron-up'></span>
        </a>
        <p>Agencia <a href='https://www.maisplus.com' title='Visit +Plus'>www.maisplusviagem.com</a></p>
        <pre><i class="fa fa-facebook"></i> <i class="fa fa-instagram"> </i> <i class="fa fa-twitter"> </i> <i class="fa fa-github"> </i> <i class="fa fa-linkedin"></i></pre>
      </footer>
    );
  }
}
export default Rodape;