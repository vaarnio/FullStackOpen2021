import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [filter, setFilter] = useState('')
  const [data, setData] = useState([])

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setData(response.data)
      })
  }, [])

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
    //console.log(filter)
  }

  return (
    <div className="App">
      find countries <input value={filter} onChange={handleFilterChange}/>
      <Results data={data} filter={filter}/>
    </div>
  );
}

const Results = ({data, filter}) => {
  let filteredData = data.filter(country => country.name.toLowerCase().includes(filter.toLowerCase()))
  let results = []

  filteredData.length > 10 ? results= 'Too many matches, specify another filter'
  : filteredData.length === 1 ? results = <Details data={filteredData[0]}/>
  : results = filteredData.map(country => <Country key={country.name} country={country}/>)

  //console.log(results)

  return(
    <div>
      {results}
    </div>
  )
}

const Country = ({country}) => {
  const [moreInfo, setMoreInfo] = useState(false)
  return(
    <div>
      {country.name}
      <button onClick={() => moreInfo ? setMoreInfo(false) : setMoreInfo(true)}>
        {moreInfo ? 'hide' : 'show'}
      </button>
      {moreInfo ? <Details data={country}/> : null}
    </div>
  )
}

const Details = ({data}) => {
  const languages = data.languages.map(language => <li key={language.name}>{language.name}</li>)
  return(
    <div>
      <h2>{data.name}</h2>
      capital {data.capital}<br></br>
      population {data.population}
      <h3>languages</h3>
      <ul>
        {languages}
      </ul>
      <img src={data.flag} width='100px' alt='flag'/>
      <Weather city={data.capital}/>
    </div>
  )
}

const Weather = ({city}) => {
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
  console.log(url)
  const [temp, setTemp] = useState(null)
  const [wind, setWind] = useState(null)
  const [icon, setIcon] = useState('')

  useEffect(() => {
    axios
    .get(url)
    .then(response => {
      setTemp(response.data.main.temp)
      setWind(response.data.wind.speed)
      setIcon(response.data.weather[0].icon)
    })
  }, [])
  
  return(
    <div>
      <b>temperature: </b> {temp} <br></br>
      <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} width='100px' alt='flag'/><br></br>
      <b>wind: </b> {wind} m/s 
    </div>
  )
}

export default App;