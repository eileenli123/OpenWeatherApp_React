import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CityInput from './components/cityInput'
import WeatherDisplay from './components/weatherDisplay'

function App() {
  const [submittedCity, setSubmittedCity] = useState('Chicago');

  const handleSubmit = (city) => {
    setSubmittedCity(city);
  }

  const today = new Date();
  console.log(today);
  const formattedDate = `${today.getMonth()}/${today.getDate()}/${today.getFullYear()}`;


  return (
    <div className='app-container'>
      <h1 className='app-title'> Today's Weather </h1>
      <p className='date_title'> {formattedDate} </p>
      {/* onSubmit prop will be used for CityInput to pass data UP to APP */}
      <CityInput onSubmit={handleSubmit} />
      {/* city prop will be used to pass data DOWN to WeatherDisplay */}
      <WeatherDisplay city={submittedCity} />
    </div >
  )
}

export default App
