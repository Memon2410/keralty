import React, { Component } from 'react'
import kiss from '../Assets/images/kiss.svg';

class ScreenYes extends Component {

  render () {
    return (
      <div className='row retro' id='screen-yes'>

        <div className='row' >
          <div className='column'>
            <div className='container--answer'>
              <img src={kiss} alt='No' className='emoji__question' />
            </div>
          </div>
        </div>

        <div className='row'>
          <p className='App--text text__question'>Porque cuidas tu salud.<br /><span>Te brindamos</span> una valoración<br />médica sin costo.</p>
        </div>

      </div>
    )
  }
}

export default ScreenYes;
