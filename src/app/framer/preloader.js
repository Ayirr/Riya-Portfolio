import React from "react";
import { useEffect } from "react";
import '../page.js'

export default function Preloader(){
    
    return(
        <div className='preloader'>
            <div className="gif w-80">
                <img src="loading.gif"/>
            </div>
        </div>
    )
}