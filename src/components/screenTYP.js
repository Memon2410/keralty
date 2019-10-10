import React, { Component } from 'react'
import yes from '../Assets/images/yes.svg';

class ScreenTYP extends Component {

  render () {
    return (
      <div className='row' id="screen-typ">

        <div className='row' >
          <div className='column'>
            <div className='container--answer'>
              <img src={yes} alt='No' className='emoji__question' />
            </div>
          </div>
        </div>

        <div className='row'>
          <p className='App--text text__question' id="typ__text">¡Muchas gracias por<br />participar!</p>
        </div>

      </div>
    )
  }
}

export default ScreenTYP;
