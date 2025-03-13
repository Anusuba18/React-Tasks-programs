export default function Movie(props){
    const title=props.title;
    const year=props.year;
    const rating=props.rating;
    return(
     <>
     <h3>The Movie Title <section style={{color:'blue'}}>{title}</section></h3>
     <h3>Year of released <section style={{color:'blue'}}>{year}</section></h3>
     <h3>Rating <section style={{color:'blue'}}>{rating}</section></h3>
     </>
    )
 }