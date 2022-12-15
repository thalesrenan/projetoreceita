import './App.css';
import recipesData from './afrodite.json';
import { useState } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import RecipeCard from './components/RecipeCard/RecipeCard';

function App() {

  const [recipesList, setRecipesList] = useState(recipesData);
  const [searchValue, setSearchValue] = useState("");

  // const filteredRecipes = () => {
  //   recipesList.filter((recipe)=>{
  //     recipe.secao[0].conteudo.includes(searchValue)? recipe : "Não Encontrado"
  //   })
  // }
  

  return (
    <div className="App">
      <section className="App-header">
        <header>
          <p>Voltar</p>
          <SearchBar recipes={recipesList} setSearch={setSearchValue}></SearchBar>
        </header>
        <RecipeCard recipes={recipesList}></RecipeCard>
      </section>
    </div>
  );
}

export default App;


/*
<ul className="recipeIngredientsList">                
  {recipe.secao[0].conteudo.map((ingredients, index)=>(
    <li key={index} className="recipeIngredients">{ingredients}</li>
  ))}
</ul>
*/