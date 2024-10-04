const PropsChild1=(props)=>{
    console.log(props);
    let {data:{data,arr}} =props;
    return (
        <div>
            <h2>Props Child 1 {data}</h2>
        </div>
    );
};
export default PropsChild1;