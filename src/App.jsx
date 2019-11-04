import React, { useState } from 'react';
// import GCD from "./gcd"


const App = () => {
    const [val1, setval1] = useState("");
    const [val2, setval2] = useState("");
    const [res, setres] = useState("");

    const gcd = (val1, val2) => {
        console.log(val1, val2);
        if (!val2) {
            return val1;

        }
        gcd(val2, val1 % val2);
        setres(val1);
        setval1("");
        setval2("");
    }
    return (<div><center><table>
        <tr>
            <td> Enter the 1st value:</td>
            <td><input type="text" onChange={(e) => { setval1(e.target.value) }}></input></td></tr>
        <br></br><tr>
            <td> Enter the 2nd value:</td>
            <td><input type="text" onChange={(e) => { setval2(e.target.value) }}></input></td></tr>
        <br></br>
        <tr>
            <td></td>
            <td><button onClick={() => { gcd(val1, val2) }}>GCD</button></td></tr>
        <br></br>
        <tr >
            <td> <span>The GCD is <b><i>{res}</i></b></span></td>
            <td></td></tr></table>
       </center>


    </div>
    )
}

export default App;