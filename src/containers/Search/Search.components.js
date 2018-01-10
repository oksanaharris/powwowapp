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

export const SearchField = ({handler,query,active,goBack,beginSearch}) => {
  const source = active ? sources.return : sources.search;
  console.log(active);
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


export const MarkerPopup = ({art,handler}) => {
  console.log(art.name);
  return (
        <div className="marker-artist-popup">
          <div className="marker-artist-popup-photo">
            <img src={art.url} alt=""/>
          </div>
          <div className="marker-artist-popup-details">
            <h4>{art.title}</h4>
            <p>{art.artistName}</p>
            <p>likes go here</p>
          </div>
          <div className="marker-artist-popup-directions-button">
            <p>0.1 mi</p> {/*TODO: needs to be dynamic*/}
            <button
              onClick={(e)=>handler(e,art)} 
              className="marker-artist-popup-directions-button">
              Directions
            </button>
          </div>
        </div>
    )
}