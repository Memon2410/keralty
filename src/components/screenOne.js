import React, { Component } from 'react'
import model from '../Assets/images/model.png';

class ScreenOne extends Component {
  render () {
    return (
      <div className='row' id='screen-1'>

        <div className='column'>
          <p className='App--text texts__intro'>
            ¿Quieres ganarte
            <br />una valoración médica
            <br />sin costo?
          </p>
        </div>

        <div className='column'>
          <img src={model} alt='Modelo' className='model__intro' />
        </div>

        <div className='column'>
          <p className='App--text texts__intro'>
            Participa
            <br />respondiendo
            <br />estas tres simples
            <br />preguntas y  obtenla
            <br />con Planmed®.
          </p>
        </div>
      </div>
    )
  }
}

export default ScreenOne;
