import imageIm from "../../images/paysage.jpg"
import Canada from "../../images/canada.jpg"
import "./Acceuil.css"
import { langageEcritureFr, langageEcritureEn } from "../../Data/LangageEcriture"
import { useLangage } from "../Context/LangageContext"
import Leaf from "../../images/leaf.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";

const Acceuil = () =>{
    const {selected} = useLangage();
    const langageEcriture = selected === "Français" ? langageEcritureFr : langageEcritureEn;
    return(
        <div className="bg-[#DEEAF6] text-black min-h-screen flex-grow">
        <div className="relative h-fit">
            
            <img src={imageIm} alt="Immigration" className="w-full object-cover h-[550px] rounded-lg shadow-lg"/>
            <div className="absolute top-0 left-0 right-0 bottom-0 hover:bg-black hover:bg-opacity-40 rounded-lg transition-colors duration-400 ease-in-out">
            <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white text-[30px]">
                {langageEcriture.texte1}
            </h2></div> 
        </div>
        <div className="w-full lg:flex justify-between items-center">
        <div className="flex flex-col transition-transform lg:w-[65%] w-full pl-10 pr-10 lg:pl-0 lg:pr-0">
        <h2 className="m-10 text-[34px] font-bold">{langageEcriture.texte2}</h2>
        <img src={Leaf} className="w-[50px] h-[50px] ml-10"/>
        <p className="ml-10 text-[20px]"><strong className="text-red-500">Routes Immigration Inc.</strong>
        {langageEcriture.texte3}</p><br/>
         <p className="ml-10 text-[20px]">{langageEcriture.texte4}</p><br/>
            <ul className="ml-10 text-[20px]"><strong>{langageEcriture.texte5} :</strong><br/>
            <li className="ml-10 text-[20px] mt-3 list-disc"><strong>{langageEcriture.texte61}</strong>{langageEcriture.texte6}</li>
            <li className="ml-10 text-[20px] mt-3 list-disc"><strong>{langageEcriture.texte71}</strong>{langageEcriture.texte7}</li>
            <li className="ml-10 text-[20px] mt-3 list-disc"><strong>{langageEcriture.texte81}</strong>{langageEcriture.texte8}</li>
            <li className="ml-10 text-[20px] mt-3 list-disc"><strong>{langageEcriture.texte91}</strong>{langageEcriture.texte9}</li>
            <li className="ml-10 text-[20px] mt-3 list-disc"><strong>{langageEcriture.texte101}</strong>{langageEcriture.texte10}</li>
            </ul><br/>
            <p className="ml-10 text-[20px]">{langageEcriture.texte11}</p>
             <div className=" flex justify-end"><img src={Leaf} className="w-[50px] h-[50px] mb-3"/></div>
        </div>
        <img src={Canada} alt="canada" className="lg:w-[30%] mr-10" />
        </div>
        <hr className="border-t border-gray-300 my-4 ml-10 mr-10" />
        <div className="flex items-center ml-10 mr-10  justify-center">
        <div className="bg-[#cce5fc] h-fit  w-[600px] mb-3 flex-col flex justify-center items-center">
            <p className="text-[35px]  font-semibold pt-3">{langageEcriture.texteContact1}</p>
            <p className="text-[15px] font-semibold p-5">{langageEcriture.texteContact2}</p>
            <a href="/contact" className="text-[25px] text-blue-500 font-semibold">{langageEcriture.texteContact3}</a>
            <p className="text-[15px] font-semibold p-5 text-center">{langageEcriture.texteContact4} <br/>{langageEcriture.texteContact5}</p>
            <div className="flex">
            <a href="https://www.facebook.com/people/Routes-Immigration-Inc/100031897046610/#"><FontAwesomeIcon icon={faFacebook} className="pr-3 text-[50px]" /></a>
            <a href="https://x.com/i/flow/login?redirect_after_login=%2Finfo_routes"><FontAwesomeIcon icon={faXTwitter} className="pl-3 text-[50px] pb-4" /></a>
            </div>
        </div></div>
    </div>
         
    )
}
export default Acceuil;