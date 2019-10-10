import React, { Component } from 'react'
import yes from '../Assets/images/yes.svg';
import no from '../Assets/images/no.svg';

class ScreenFour extends Component {

  render () {
    return (
      <div className='row' id='screen-4'>

        <div className='row'>
          <p className='App--text text__question'>¿Tu última revisión<br />médica fue hace un<br />mes?</p>
        </div>

        <div className='row' >

          <div className='column'>
            <div className='container--answer yes--class' onClick={this.props.func()}>
              <img src={yes} alt='Si' className='emoji__question yes--class' />
              <p className='App--text text__question yes--class'>SÍ</p>
            </div>
          </div>

          <div className='column'>
            <div className='container--answer no--class' onClick={this.props.func()}>
              <img src={no} alt='No' className='emoji__question no--class' />
              <p className='App--text text__question no--class'>NO</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ScreenFour;
