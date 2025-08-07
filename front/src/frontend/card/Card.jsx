
import { useState } from "react"
import { useEffect } from "react";
export default function Card({image, title, isOpen, toggle, description, buttonText, logo}){
    const [showContent, setShowContent] = useState(false);
    useEffect(() => {
        if (isOpen) {
            setShowContent(true);
        } else {
            const timer = setTimeout(() => setShowContent(false), 1000);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);
    return (
        <div id="2" className={`pl-10 pr-10 pb-10 bg-blue-100 mb-20 w-3/4 md:w-2/3 ${isOpen ? "max-h-[5000px]" : "max-h-[580px]"} transition-all duration-[1000ms] ease-in-out relative overflow-hidden 
        border-2 shadow-lg flex flex-col`}>
                    <img src={image} className="w-full h-[150px] md:h-[200px] lg:h-[280px] mt-5 mb-5 object-cover" />
                    <h1 className="font-bold lg:text-[25px] text-[18px] flex items-center gap-3">{logo} {title}</h1>
                    <div className="h-full flex items-end ">
                    <button className="bg-blue-500 text-white font-semibold p-2 rounded-md text-[20px] w-[200px] mt-5" onClick={toggle}>{buttonText}</button>
                    </div>
                    {showContent && description}
                </div>
    )

}