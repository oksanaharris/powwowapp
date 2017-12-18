import React from 'react';


const sources = {
  search: 'http://bit.ly/2ygeReT',
  return: "http://bit.ly/2eSuUrX",
  end: "http://bit.ly/2BsFouX"
}


export const Result = ({id,i,val}) =>{
  if(val === Object(val)){
    return null;
  }
  else{
    return( <p id={id} key={i} className="result-text">{val}</p> ) 
  }
};

export const SearchField = ({handler,query,active,goBack}) => {
  const source = active ? sources.return : sources.search;

  return (
        <div className="search-temp">
          <img src={source}  alt="icon" onClick={goBack}  className="search-icon-temp"/>

          <input type="text" placeholder="Search" value={query} className="search-input-temp" onChange={handler}/>
          {query ?
          <img src={sources.end} onClick={goBack} alt="icon" className="search-icon-temp"/>
          : null }
        </div>
  )
}