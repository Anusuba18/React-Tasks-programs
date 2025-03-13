export default function DefaultMovie({title,year,rating=10}){
    return(
     <>
     <h3>The Movie Title <section style={{color:'blue'}}>{title}</section></h3>
     <h3>Year of released <section style={{color:'blue'}}>{year}</section></h3>
     <h3>Rating <section style={{color:'blue'}}>{rating}</section></h3>
     </>
    )
 }