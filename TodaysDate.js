const TodaysDate=()=>{
    const date=new Date();
    const d=date.toDateString();
    return(
        <h1>{d}</h1>
    )
}
export default TodaysDate;