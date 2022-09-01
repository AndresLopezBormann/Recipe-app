import React , {useEffect , useState} from 'react';
import './App.css';
import Recipe from './Recipe';

const App = () => {

  const APP_ID = "e2df42bf"
  const APP_KEY = "4f8cd0d37f11141a1996c013be5b89ee"

  const [recipes,setRecipies] = useState([]);
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('')

  useEffect(() => {
    getRecipes();
    
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json();
    setRecipies(data.hits);
    console.log(data.hits)
  };

  const UpdateSearch = e => {
    setSearch(e.target.value)
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("")
  };

  return(
    <div className='App'>
      <form onSubmit={getSearch} className='search-form'>
        <input className = 'search-bar' type="text" value ={search} onChange={UpdateSearch}/>
        <button  className = 'search-button' type="submit" >
          Search
        </button>
      </form>
      <div className='recipes'>
      {recipes.map(recipes => 
      <Recipe title={recipes.recipe.label} 
      cals = {recipes.recipe.calories} 
      image = {recipes.recipe.image} 
      ingredients = {recipes.recipe.ingredients}
      link = {recipes.recipe.url}
      />
      )}
      </div>
    </div>
  );
}

export default App;
