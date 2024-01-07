

import api from './api/axiosComfig';
import { useState, useEffect } from 'react';

function App() {
const [recipes, setRecipes] = useState();
const getRecipes = async () =>{
    
  try
  {
    const response = await api.get("/api/v1/recipes");
    console.log(response.data);
    setRecipes(response.data);
  } 
  catch(err)
  {
    console.log(err);
  }
}

useEffect (() => {
  getRecipes();
},[])

  return (
    <div className="App">

    </div>
  );
}

export default App;
