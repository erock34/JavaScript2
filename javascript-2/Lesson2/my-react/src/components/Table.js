import React from "react";
import Columns from "./Columns";
import HeaderColumns from "./HeaderColumns";

function Table(){
    return(
        <>
        <table>
            <thead>
                <HeaderColumns/>
            </thead>
            <tbody>
                <tr>
                    <Columns/>
                </tr>
                
            </tbody>
                </table>
                </>
    )
}
export default Table;