import React from 'react'

const InlineCssExample=()=>{
    return(
        <nav 
        style={
            {
                height:"70px",
                width:"100%",
                backgroundColor:"aqua",
                display:"flex",

            }
        }
        >
            <aside>logo</aside>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contacts</li>
            </ul>
        </nav>
        // <div>
        //     <h1>Inline Css example</h1>
        // </div>
    )
}

export default InlineCssExample