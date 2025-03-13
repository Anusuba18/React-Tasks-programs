const RandomQuotes=()=>{
    const quotes=["Everything you've ever wanted is sitting on the other side of fear",
                  "The question isn't who is going to let me; it's who is going to stop me",
                  "Every strike brings me closer to the next home run",
                  "Don't worry about failure; you only have to be right once"
                 ];
    let random=Math.floor(Math.random()*(quotes.length+1));
    return (
        <i>{quotes.at(random)}</i>
    )
}
export default RandomQuotes;