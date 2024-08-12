import './App.css';
import React from 'react';
import { useState } from 'react';


function App() {
  let [city,setCity] = useState('');
  let [wDetails,setwDetails] = useState();

  let getData = (event) =>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9b5c41f70536dfa3e0ab5d6a374810c0&units=metric`)
    .then((res)=>res.json())
    .then((finalRes)=>{
      if (finalRes.cod == '404')
      {
        setwDetails(undefined);
      }
      else
      {
        setwDetails(finalRes);
        //console.log(finalRes);
      }
      
      
    })

    event.preventDefault();
    setCity('');
    //console.log(city);
  }

  return (
    
    <div className='main ' >
      
    {/* header */}
    
      <div className='max-w-md mx-auto'> 
        <h1 className="mb-6 mt-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 	from-sky-400">City Weather</span> </h1>
      </div>

          {/* Search bar with button */}
        <form onSubmit={getData}>
          <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-md flex items-center justify-center m-auto">
           <div className="flex items-center border-b border-gray-300 pb-4">
            <input value={ city } onChange={(e)=> setCity(e.target.value)} type="text" placeholder="City..." className="w-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 border-none py-2 px-4 rounded-md"/>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 ml-4 rounded-md transition duration-300">Search</button>
          </div>
        </div>
      </form>

      {/* weather view box */}

      {
        (wDetails != undefined)
        ?
        <>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0 place-items-center flex items-center justify-center m-auto">
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base text-2xl font-semibold text-gray-600">
                  {
                    wDetails.name
                  }
                </p>
                <p className='text-1xl'>
                  {
                    wDetails.sys.country
                  }
                </p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">
                    {
                      wDetails.main.temp
                    }
                  </span>
                  <span className="text-sm text-2xl font-semibold leading-6 tracking-wide text-gray-600 font-bold">'C</span>
                </p>
                <img src={`http://openweathermap.org/img/w/${wDetails.weather[0].icon}.png`}/>
               
                <p className="mt-6 text-xs leading-5 text-gray-600 text-2xl">
                  {
                    wDetails.weather[0].description
                  }
                </p>
              </div>
            </div>
          </div>
        </>
        :
        <p className='text-2xl text-center mt-5'> No data found</p>
      }
      
      
    </div>

    
  );
 
}

export default App;
