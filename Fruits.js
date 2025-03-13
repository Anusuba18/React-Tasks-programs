//Markup js to jsx task1
// const Fruits=()=>{
//     return(
//         <div>
//             <h1>My Favourite Fruits</h1>
//             <ul>
//                 <li>Mango</li>
//                 <li>Orange</li>
//                 <li>Pomogranate</li>
//             </ul>
//         </div>
//     )
// }


//Markup js to jsx task2
const Fruits=()=>{
    return(
        <div>
            <h1>My Favourite Fruits</h1>
            <ul>
                <li>
                    <img src="./mango.jpg" alt="Mango" style={{width:'25px',height:'25px',marginRight:'8px'}}/>
                    Mango
                </li>
                <li>
                    <img src="./orange.jpg" alt="Orange" style={{width:'25px',height:'25px',marginRight:'8px'}}/>
                    Orange
                </li>
                <li>
                    <img src="./pom.jpg" alt="Pomogranete" style={{width:'25px',height:'25px',marginRight:'8px'}}/>
                    Pomogranate
                </li>
            </ul>
        </div>
    )
}
export default Fruits;