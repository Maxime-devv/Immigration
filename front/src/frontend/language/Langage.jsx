import { useState } from "react";
import  { useLangage } from "../Context/LangageContext";
import "./Langage.css"
const Langage = () =>{
    const {selected, setSelected} = useLangage();

    return(
        <div className="w-36 flex justify-center items-center pr-3">       
            <select
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
            className="w-[100px] h-[40px] p-2 border rounded-full  cursor-pointer text-[15px] 
            focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-blue-200
            transition-colors duration-300 ease-in-out text-black">
                <option value="Français" className="cursor-pointer">Français</option>
                <option  value="English" className="cursor-pointer">English</option>
            </select>
        </div>
    )
}

export default Langage;