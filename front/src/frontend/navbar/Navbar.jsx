import "./Navbar.css";
import routeImm from "../../images/route-imm.png";
import Langage from "../language/Langage";
import { langageEcritureEn, langageEcritureFr } from "../../Data/LangageEcriture";
import { useLangage } from "../Context/LangageContext";
import { useState, useEffect, useRef } from "react";
import "./Navbar.css";
const Navbar = () => {
    let page = window.location.pathname;
    const [side, setSide] = useState(false);
    const [menu, setMenu] = useState(false);
    let bgNav = 'bg-[#DEEAF6]';
    let textC = 'text-black';
    let hoverBg = 'hover:bg-blue-200'
    if (page ==='/contact'){
        bgNav = 'bg-stone-200';
        textC = 'text-black'
        hoverBg = 'hover:bg-stone-500';
    }else if(page === '/permanent-status' || page === '/temporary-status'){
        bgNav = 'bg-blue-50';
    }else if (page === '/parrainage-famille'){
        bgNav = 'bg-red-100';
        textC = 'text-black'
        hoverBg = 'hover:bg-red-300';
    }else if (page === "/visa"){
        bgNav = 'bg-cyan-100';
        textC = 'text-black'
        hoverBg = 'hover:bg-cyan-300';
    }else if(page === "/aides"){
        bgNav = 'bg-orange-100';
        textC = 'text-black'
        hoverBg = 'hover:bg-orange-300';
    }else if(page === "/citoyenneteCanadienne"){
        bgNav = 'bg-purple-100';
        textC = 'text-black'
        hoverBg = 'hover:bg-purple-300';
    }else if(page === "/about"){
        bgNav = 'bg-amber-100';
        textC = 'text-black'
        hoverBg = 'hover:bg-amber-300';
    }else if(page === "/demandeur-asile"){
        bgNav = 'bg-[#DCCCAF]';
        textC = 'text-black'
        hoverBg = 'hover:bg-[#ceb890]';
    }
    const {selected} = useLangage();
    const langageEcriture = selected === "Français" ? langageEcritureFr : langageEcritureEn;
    const menuRef = useRef(null);
    const openRef = useRef(null);
    const handleClick = (e) => {
        console.log('click anywhere');
        if (menuRef.current && openRef.current && !menuRef.current.contains(e.target) && !openRef.current.contains(e.target)) {
            setMenu(false);
        }
    }
    useEffect(() => {
        document.addEventListener('click', handleClick );

        return () => {
            document.removeEventListener('click', handleClick);
        }
    }, []);
    return(
        <div className={`flex h-fit ${bgNav} justify-between items-center ${textC} px-4 py-2 w-full`}>
    {/* Conteneur des liens avec scroll horizontal si besoin */}
    <div className="flex items-center h-full space-x-4 w-full">
        {/* Logo qui ne rétrécit pas */}
        <a href="/" className="shrink-0 w-[200px] md:w-auto mr-10">
            <img src={routeImm} className="w-auto h-14 md:h-16" />
        </a>
        <div className="items-center h-full space-x-2 w-full hidden lg:flex md:flex-wrap pr-5 justify-center">
        <a href="/permanent-status" className={`h-full flex items-center px-3 py-2 text-base ${hoverBg} shrink-0 whitespace-nowrap`}>
            {langageEcriture.pStatus}
        </a>
        <a href="/temporary-status" className={`h-full flex items-center px-3 py-2 text-base ${hoverBg} shrink-0 whitespace-nowrap`}>
            {langageEcriture.tStatus}
        </a>
        <a href="/parrainage-famille" className={`h-full flex items-center px-3 py-2 text-base ${hoverBg} shrink-0 whitespace-nowrap`}>
            {langageEcriture.texteParrainage}
        </a>
        <a href="/aides" className={`h-full flex items-center px-3 py-2 text-base ${hoverBg} shrink-0 whitespace-nowrap`}>
            {langageEcriture.texteAide}
        </a>
        <a href="/citoyenneteCanadienne" className={`h-full flex items-center px-3 py-2 text-base ${hoverBg} shrink-0 whitespace-nowrap`}>
            {langageEcriture.texteCitoyennete}
        </a>
        <a href="/demandeur-asile" className={`h-full flex items-center px-3 py-2 text-base ${hoverBg} shrink-0 whitespace-nowrap`}>
            {langageEcriture.texteDemandeur}
        </a>
        <a href="/visa" className={`h-full flex items-center px-3 py-2 text-base ${hoverBg} shrink-0 whitespace-nowrap`}>
            {langageEcriture.textVisa}
        </a>
         <a href="/contact" className={`h-full flex items-center px-3 py-2 text-base ${hoverBg} shrink-0 whitespace-nowrap`}>
            {langageEcriture.contact}
        </a>
        <a href="/about" className={`h-full flex items-center px-3 py-2 text-base ${hoverBg} shrink-0 whitespace-nowrap`}>
            {langageEcriture.texteAbout}
        </a>
        </div>
        <div className="lg:hidden flex flex-col items-center h-full pr-4 justify-center hover:cursor-pointer"
            onClick={()=> setSide(true)}>
            <span className=" w-7 h-1 bg-black"/>
            <span className=" w-7 h-1 bg-black mt-1"/>
            <span className=" w-7 h-1 bg-black mt-1"/>
        </div>
    </div>
    {side && (
     <div className={`lg:hidden w-1/2 h-screen bg-gray-950 text-white font-semibold right-0 
        top-0 z-10 fixed transition-transform duration-700 ease-in-out ${
          side ? "translate-x-0" : "translate-x-full"
        }`}>
        <button onClick={()=>setSide(false)} className="absolute top-0 right-0 p-2 text-[30px]">
            X
        </button>
        <div className="mt-20 flex flex-col">
        <a href="/about" className={`h-full flex items-center px-3 py-2 text-base ${hoverBg} shrink-0 whitespace-nowrap`}>
            {langageEcriture.texteAbout}
        </a>
        <a href="/permanent-status" className={`h-full flex items-center px-3 py-2 text-base ${hoverBg} shrink-0 whitespace-nowrap pt-3`}>
            {langageEcriture.pStatus}
        </a>
        <a href="/temporary-status" className={`h-full flex items-center px-3 py-2 text-base ${hoverBg} shrink-0 whitespace-nowrap pt-3`}>
            {langageEcriture.tStatus}
        </a>
        <a href="/parrainage-famille" className={`h-full flex items-center px-3 py-2 text-base ${hoverBg} shrink-0 whitespace-nowrap pt-3`}>
            {langageEcriture.texteParrainage}
        </a>
        <a href="/visa" className={`h-full flex items-center px-3 py-2 text-base ${hoverBg} shrink-0 whitespace-nowrap pt-3`}>
            {langageEcriture.textVisa}
        </a>
        <a href="/aides" className={`h-full flex items-center px-3 py-2 text-base ${hoverBg} shrink-0 whitespace-nowrap pt-3`}>
            {langageEcriture.texteAide}
        </a>
        <a href="/citoyenneteCanadienne" className={`h-full flex items-center px-3 py-2 text-base ${hoverBg} shrink-0 whitespace-nowrap pt-3`}>
            {langageEcriture.texteCitoyennete}
        </a>
        <a href="/demandeur-asile" className={`h-full flex items-center px-3 py-2 text-base ${hoverBg} shrink-0 whitespace-nowrap pt-3`}>
            {langageEcriture.texteDemandeur}
        </a>
        <a href="/contact" className={`h-full flex items-center px-3 py-2 text-base ${hoverBg} shrink-0 whitespace-nowrap pt-3`}>
            {langageEcriture.contact}
        </a>
        </div>
    </div>)}
    {side && (
        <div className="fixed inset-0 bg-gray-600 opacity-50 z-9 md:hidden"></div>
      )}
    <Langage />
</div>


    );
}
export default Navbar