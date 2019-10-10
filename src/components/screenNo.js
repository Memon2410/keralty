import React, { Component } from 'react'
import cry from '../Assets/images/cry.svg';

class ScreenNo extends Component {

  render () {
    return (
      <div className='row retro' id='screen-no'>

        <div className='row' >
          <div className='column'>
            <div className='container--answer'>
              <img src={cry} alt='No' className='emoji__question' />
            </div>
          </div>
        </div>

        <div className='row'>
          <p className='App--text text__question'>Empieza hoy a cuidar tu salud.<br /><span>Te brindamos</span> una valoración<br />médica sin costo.</p>
        </div>

      </div>
    )
  }
}

export default ScreenNo;
