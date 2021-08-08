import React from 'react';
import Sdata from './Api';


function App(props) {
  return (
    <>
      <div className="cards">
      {
        Sdata.map((val)=>{
          return (
            <div className="card">
            <img className='card_image' src={val.image} />
            <div className="card_info">
              <h3 className='card_title'>{val.name}</h3>
              <p className='card_category'>{val.title}</p>

              <a href={val.srcc} target='_blank' className="card_button"> Watch Now </a>
            </div>
          </div>  
          )
        })
      }
           
      </div>
    </>
  );
}

export default App;
