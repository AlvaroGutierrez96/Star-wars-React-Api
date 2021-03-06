import React from 'react'
import { useFavouritesContext } from '../../shared/context/FavouritesContext';
import {RiDislikeLine as DeleteBtn} from 'react-icons/ri'

const FavouritesChars = () => {
    const {favChars, eliminateFavChar} = useFavouritesContext();
  return (
    <ul>
        {!favChars.length ? <img className='yodaIMG' src = "https://pngimg.com/uploads/starwars/starwars_PNG32.png" alt= "Yoda"/>
        : favChars.map((char)=>{
            return(
                
                  <li key = {char._id} className='characterCard'>
                  <div className='characters'>
                    <img src={char.image} alt={char.name}/>
                    <p>{char.name}</p>
                  </div>
                <DeleteBtn size= {40} color = "orange" onClick={()=>eliminateFavChar(char)}/>
                </li>
            )
        })}
    </ul>
  )
}

export default FavouritesChars