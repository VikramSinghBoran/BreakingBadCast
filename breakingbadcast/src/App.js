import logo from './logo.svg';
import './App.css';
import React, {useState,useEffect} from 'react'
import axios from 'axios'
import CharacterGrid from './Components/Content/CharacterGrid';
import TopHead from './Components/TopHead/TopHead';
import Search from './Components/Search/Search';

const App = () => {
  const [characters,setCharacters]  = useState([]);
  const [query,setQuery] = useState('');
  const [loading,setLoading] = useState(true);
  
  useEffect(()=>{
    const fetchCharacters = async () =>{
      const fetchedAPI = await axios.get(`https://www.breakingbadapi.com/api/characters?name=${query}`)
      setCharacters(fetchedAPI.data);  
      setLoading(false);
    }
    fetchCharacters();
    
  },[query])

  return (
    <div className='mainContainer'>
      <TopHead></TopHead>
      <Search getQuery={(q)=>{setQuery(q)}}></Search>
      <CharacterGrid characters={characters} status={loading}></CharacterGrid>         
      
    </div>
  );
}

export default App;
