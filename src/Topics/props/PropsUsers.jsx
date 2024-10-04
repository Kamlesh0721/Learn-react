const PropsUsers=({users})=>{
    console.log(users);
    return(
        <div>
            <h1>Users Prop</h1>
            
        {users.map(({id,name,designation,company},i)=>{
            return(
            <section key={id}>
                <h3>Name:{name}</h3>
                <h4>Designation:{designation}</h4>
                <h4>company:{company}</h4>
            </section>      
            );
        })}
        </div>
    )
};      

export default PropsUsers;