import React from 'react';


export const Result = ({id,i,val}) =>{
  if(val === Object(val)){
    return null;
  }
  else{
    return( <p id={id} key={i} className="result-text">{val}</p> ) 
  }
};

export const SearchField = ({handler,query}) => (
        <div className="search-temp">
          <img src="http://bit.ly/2ygeReT"  alt="icon"  className="search-icon-temp"/>
          <input type="text" placeholder="Search" value={query} className="search-input-temp" onChange={handler}/>
        </div>
  )