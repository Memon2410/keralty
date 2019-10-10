import React, { useCallback, useEffect, useState } from 'react'
import yes from '../Assets/images/yes.svg';

const ScreenForm = () => {

  const [names, setNames] = useState({ name: '', email: '', phone: '' })

  useEffect(() => {
    const request = window.indexedDB.open('FormDatabase', 1)

    request.onsuccess = function(event) {
      const db = event.target.result
      const transaction = db.transaction('formData', 'readwrite')
      const dataStore = transaction.objectStore('formData')

      dataStore.get('name').onsuccess = function(event) {
        const { result } = event.target
        if (result && result.value) {
          setNames(prevNames => ({ ...prevNames, name: result.value }))
        }
      }

      dataStore.get('email').onsuccess = function(event) {
        const { result } = event.target
        if (result && result.value) {
          setNames(prevNames => ({ ...prevNames, email: result.value }))
        }
      }

      dataStore.get('phone').onsuccess = function(event) {
        const { result } = event.target
        if (result && result.value) {
          setNames(prevNames => ({ ...prevNames, phone: result.value }))
        }
      }
    }

    // log any errors
    request.onerror = function(event) {
      console.log('[onerror]', request.error)
    }

    request.onupgradeneeded = function(event) {
      const db = event.target.result
      db.createObjectStore('formData', { keyPath: 'id' })
    }
  }, [])

  const setName = useCallback(
    id => value => {
      const request = window.indexedDB.open('FormDatabase', 1)

      request.onsuccess = function(event) {
        const db = event.target.result
        const transaction = db.transaction('formData', 'readwrite')
        const dataStore = transaction.objectStore('formData')
        dataStore.put({ id, value }).onsuccess = function(event) {
          window.indexedDB.open('FormDatabase', 1)
        }
        setNames(prevNames => ({ ...prevNames, [id]: value }))
      }

      request.onerror = function(event) {
        console.log('[onerror]', request.error)
      }

      request.onupgradeneeded = function(event) {
        const db = event.target.result
        db.createObjectStore('formData', { keyPath: 'id' })
      }
    },
    []
  )

  const handleSetName = useCallback(id => e => setName(id)(e.target.value), [])

  const handleSubmit = useCallback(e => {
    e.preventDefault()
    setName('name')('')
    setName('email')('')
    setName('phone')('')
  }, [])

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

        <form onSubmit={handleSubmit} >
          <div className='row'>
            <label>Nombre:</label>
            <input
              type="text"
              name="name"
              value={names.name}
              onChange={handleSetName('name')}
            />
          </div>

          <div className='row'>
            <label>Correo:</label>
            <input
              type="email"
              name="email"
              value={names.email}
              onChange={handleSetName('email')}
            />
          </div>

          <div className='row'>
            <label>Tel:</label>
            <input
              type="tel"
              name="phone"
              value={names.phone}
              onChange={handleSetName('phone')}
            />
          </div>

          <div className='row container--button'>
            <input type="submit" value="Guardar" />
          </div>
        </form>

      </div>
  )
}

export default ScreenForm
