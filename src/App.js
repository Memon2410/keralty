import React, { Component } from 'react'

import logo from './Assets/images/logo_axa.svg'
import logoKeralty from './Assets/images/logo_keralty.svg'

import ScreenOne from './components/screenOne'
import ScreenTwo from './components/screenTwo'
import ScreenThree from './components/screenThree'
import ScreenFour from './components/screenFour'
import ScreenNo from './components/screenNo'
import ScreenYes from './components/screenYes'
import ScreenForm from './components/screenForm'
import ScreenTYP from './components/screenTYP'

import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.screen = 0
    this.yes = 0
    this.no = 0
  }

  updateContent = (event) => {

    event.preventDefault()
    this.screen++

    if (this.screen > 1) {
      event.target.classList.contains('yes--class')
        ? this.yes++
        : this.no++
    }

    let answers = (this.yes > this.no && this.screen < 5) ? 'yes' : 'no'

    switch (this.screen) {
      case 1:
        document.getElementById('screen-1').style.display = 'none'
        document.getElementById('screen-2').style.display = 'flex'
        document.getElementsByClassName('tap___zone')[0].style.display = 'none'
        break
      case 2:
        document.getElementById('screen-2').style.display = 'none'
        document.getElementById('screen-3').style.display = 'flex'
        break
      case 3:
        document.getElementById('screen-3').style.display = 'none'
        document.getElementById('screen-4').style.display = 'flex'
        break
      case 4:
        document.getElementById('screen-4').style.display = 'none'
        document.getElementById('screen-' + answers).style.display = 'block'
        document.getElementsByClassName('tap___zone')[0].style.display = 'block'
        break
      case 5:
        document.getElementsByClassName('retro')[0].style.display = 'none'
        document.getElementsByClassName('retro')[1].style.display = 'none'
        document.getElementsByClassName('tap___zone')[0].style.display = 'none'
        document.getElementById('screen-form').style.display = 'block'
        break
      case 6:
        document.getElementById('screen-form').style.display = 'none'
        document.getElementById('screen-typ').style.display = 'block'        
        break
      default:
    }
  }

  render() {
    return (
      <div className='App'>
        <main className='App--container'>
          <div className='App--content'>

            <ScreenTYP />
            <ScreenForm func={(event) => this.updateContent}/>
            <ScreenYes />
            <ScreenNo />
            <ScreenFour func={(event) => this.updateContent}/>
            <ScreenThree func={(event) => this.updateContent}/>
            <ScreenTwo func={(event) => this.updateContent}/>
            <ScreenOne />

            <button className="tap___zone" onClick={this.updateContent}></button>

          </div>
        </main>

        <footer className='App--footer'>
          <div className='content--footer'>
            <p className='text--footer'>Un buen principio <span>para tu salud</span></p>
            <div className='container--logos__footer'>
              <img src={logo} className='item--logo App--logo__axa' alt='Axa' />
              <img src={logoKeralty} className='item--logo App--logo__keralty' alt='Keralty' />
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
