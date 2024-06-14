import { useState, useEffect } from 'react'
import ComponentContext from './Component.js'
import Container from './components/Container.jsx'
import '../stylesheets/css/main.css'

function App() {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all')
        const data = await response.json()
        
        setCountries(data)
      } catch (error) {
        console.log(error);
      }
    }
    fetchCountries()
  }, [])



  return (
    <>
      <ComponentContext.Provider value={countries}>
        <Container />
      </ComponentContext.Provider>
    </>
  )
}

export default App
