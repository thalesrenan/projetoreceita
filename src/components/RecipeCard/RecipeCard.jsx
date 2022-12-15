const RecipeCard = ({recipes}, id) => {
    
    return(
        <div>
          {recipes.map((recipe, index)=>(
            <div key={index} className="recipes">
              <p className="recipeName">{recipe.nome}</p>
              <p>Ingredientes</p>
              <p>Modo de preparo</p>
              <p>Mais informações</p>
            </div>
          ))}
        </div>
    )
}

export default RecipeCard;