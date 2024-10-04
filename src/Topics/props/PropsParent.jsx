import PropsChild1 from "./PropsChild1";
import PropsUsers from "./PropsUsers";
const PropsParent=()=>{
    // let data="Hello Universe";
    // let arr=[10,20,30,40,50];
    let users=[
        {id:1,name:"Raj",company:"tcs",designation:"developer"},
        {id:2,name:"Varun",company:"google",designation:"tester"},
        {id:3,name:"Ajay",company:"wipro",designation:"developer"},
        {id:4,name:"Sahil",company:"meta",designation:"manager"},
        {id:5,name:"Vijay",company:"amazon",designation:"engineer"},
        {id:6,name:"Sandeep",company:"oracle",designation:"intern"},
    ]
    return (
        <div>
            <h1>Props example</h1>
            {/* <PropsChild1 data={{data,arr}}/> */}
            <PropsUsers users={users}/>
        </div>
    );
};
export default PropsParent;