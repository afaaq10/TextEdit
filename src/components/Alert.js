import React from 'react'
// import { FirstName } from '../App'
import Home from './Home'




function Alert(props) {

    return (

        <>


            <ul key={props.key} style={{ listStyle: "none", color: 'blue' }}>
                <li >{props.id}</li>
                <li>{props.Name}</li>
                <li>{props.Age}</li>
            </ul>

            {/* <FirstName.Consumer>
                {

                    (f) => {
                        return (

                            <>
                                <h1>Alert{f}</h1>
                            </>
                        )


                    }

                }

            </FirstName.Consumer> */}



        </>





    )
}

export default Alert




// import React from 'react'
// import { FirstName } from './App.js'

// function com() {
//     return (
//         <>
//             <FirstName.Consumer>
//                 {(fname) => {
//                     return (
//                         <h1>{fname}</h1>
//                     )
//                 }}

//             </FirstName.Consumer>
//         </>
//     )
// }

// export default com
{/* <div style={{ height: "30px" }}>
            {props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong> {props.alert.type}</strong> {props.alert.msg}

            </div>}
        </div> */}



