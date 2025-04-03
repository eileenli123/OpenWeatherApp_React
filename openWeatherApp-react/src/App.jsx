import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CityInput from './components/cityInput'
import WeatherDisplay from './components/weatherDisplay'

function App() {
  const [cityList, setCityList] = useState(['Chicago']);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (city) => {
    if (!city.trim()) return; // skip empty input
    setCityList((prevList) => [...prevList, city]); //add new city to list 
    setTimeout(() => setErrorMessage(''), 2000); //clear any error messages after 3 seconds 
  }

  const handleDelete = (delCity) => {
    {
      setCityList(
        cityList.filter((city) => {
          return city != delCity; //only keep cities that is not to be deleted 
        }))
    }
  }

  const today = new Date();
  console.log(today);
  const formattedDate = `${today.getMonth()}/${today.getDate()}/${today.getFullYear()}`;


  return (
    <div className='app-container'>
      <h1 className='app-title'> Today's Weather </h1>
      <p className='date_title'> {formattedDate} </p>
      {errorMessage && <p className='error-message'>{errorMessage}</p>}
      {/* onSubmit prop will be used for CityInput to pass data UP to APP */}
      <CityInput onSubmit={handleSubmit} />


      {/* city prop will be used to pass data DOWN to WeatherDisplay */}
      <div className='weather-cards'>
        {cityList.map((city, index) => (
          // create weather card for every city in the list
          <WeatherDisplay key={index} city={city} onDelete={handleDelete} onError={setErrorMessage} />
        ))}
      </div>

    </div >
  )
}

export default App
