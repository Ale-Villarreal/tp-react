
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cards from '../cards/Cards';

//Obtener datos a mostrar
const urlRyM = "https://rickandmortyapi.com/api/character";


const Main = () => {

  const [personajes, setPersonajes] = useState([])


  useEffect(() => {
    
    const getData = async () => {
      try {
        const { data } = await axios.get(urlRyM);

        setPersonajes(data.results);

      } catch (error) {
        alert('Se produjo un error', error);
      }
    };
    getData()
  }, []);

  return (
    <div className='container'>
      <h1 className='text-center'>Rick and Morty</h1>
      <div className='row d-flex mt-5 justify-content-center'>
        { personajes.length === 0 && <p>Cargando...</p>}
        {
          personajes.map((personas,index) => <Cards pers={personas} />)
        }
      </div>

    </div>
  )
}

export default Main