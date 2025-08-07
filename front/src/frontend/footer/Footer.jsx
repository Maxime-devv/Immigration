import { langageEcritureEn, langageEcritureFr } from "../../Data/LangageEcriture"
import { useLangage } from "../Context/LangageContext"
const Footer = () =>{
    const {selected} = useLangage();
    const langageEcriture = selected === "Français" ? langageEcritureFr : langageEcritureEn;
    return(

        <div className="bg-black h-[70px] flex justify-center items-center">
            <p className="text-[22px] text-white text-center">{langageEcriture.texteFooter}</p>
        </div>
    )
}
export default Footer;