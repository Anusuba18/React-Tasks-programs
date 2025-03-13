const UserProfile=({user})=>{
    return(
        <>
        <h3>User Name:{user.name}</h3>
        <h3>User Age:{user.age}</h3>
        <h3>User Gender:{user.gender}</h3>
        <h3>User is Married:{user.isMarried===true?"Yes":"No"}</h3>
        </>
    )
}
export default UserProfile;