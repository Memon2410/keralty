import React, { Component } from 'react'
import yes from '../Assets/images/yes.svg';

class ScreenForm extends Component {

  render () {
    return (
      <div className='row' id='screen-form'>

        <div className='row' >
          <div className='column'>
            <div className='container--answer'>
              <img src={yes} alt='No' className='emoji__question' />
            </div>
          </div>
        </div>

        <div className='row'>
          <p className='App--text text__question'>Proporciónanos tus datos, para recibir<br />una valoración médica SIN COSTO </p>
        </div>

        <form >
          <div className='row'>
            <label>Nombre:</label>
            <input
              type="text"
              name="name"
            />
          </div>

          <div className='row'>
            <label>Correo:</label>
            <input
              type="email"
              name="email"
            />
          </div>

          <div className='row'>
            <label>Tel:</label>
            <input
              type="tel"
              name="phone"
            />
          </div>

          <div className='row container--button'>
            <input type="submit" value="Guardar" onClick={this.props.func()} />
          </div>
        </form>

      </div>
    )
  }
}

export default ScreenForm;
