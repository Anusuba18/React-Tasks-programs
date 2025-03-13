const WordCount=()=>{
    const para="No matter how hard he tried, he couldn't give her a good explanation about what had happened. It didn't even really make sense to him"
    const arr=para.split(" ");
    const num=arr.length;
    return(
        <h1>Number of Words in the paragraph {num}</h1>
    )
}
export default WordCount;