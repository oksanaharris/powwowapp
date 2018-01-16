import React from 'react';


export const RegisterChoice = ({choice}) => {
  return(
      <div>
        <div  className="facebook-register">
          <img  onClick={(e)=>choice(e)} name="facebook" src="http://bit.ly/2D71wc6" alt=""/>
        </div>
        <div className="internal-register">
          <img onClick={(e)=>choice(e)} name="internal" src="http://bit.ly/2FHnX9s" alt=""/>
        </div>
      </div>
      )
}

export const GoBack = ({choice}) => {
  return ( <button onClick={(e)=>choice(e)} name="undefined" className="goback-registration">goback</button>)
}

export const FaceBook = () => {
  return (<div>FaceBook</div>)
}

export const Internal = ({handleEmail,handlePassword, handleSubmit}) => {
  return (
      <div className="internal-form">
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={handleEmail} placeholder="email"/>
          <input type="password" onChange={handlePassword} placeholder="password"/>
          <input
            type="submit"
            className="button"
            value="register"/>
        </form>
      </div>
    )
}