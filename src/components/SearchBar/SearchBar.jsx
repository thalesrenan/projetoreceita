
const SearchBar = (recipes, {setSearchValue}) => {
    
    //recipes[i].secao[0].conteudo

    /* 

    for(let i = 0; i < recipes.length; i++){
        recipes[i].secao[0].conteudo.contains(value)
        return recipes[i]
    }

    */

    const getInput = (value) => {
        value ? setSearchValue(value) : setSearchValue("");
      };
    
    return(
        <input type="text" placeholder="Search" onChange={(e)=>getInput(e.target.value)} ></input>
    )
}

export default SearchBar;