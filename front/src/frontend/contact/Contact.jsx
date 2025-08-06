import Form from "../form/Form";
import { useLangage, } from "../Context/LangageContext";
import CISR from "../../images/cisr.png";
import IRB from "../../images/irb.png";
import { langageEcritureFr, langageEcritureEn } from "../../Data/LangageEcriture";
const Contact = () => {
    const {selected} = useLangage();
    const langageEcriture = selected === "Français" ? langageEcritureFr : langageEcritureEn;
    return (
        <div className=" min-h-screen flex-grow ">
            <div className="bg-stone-200 flex flex-col items-center justify-center text-black max font-bold
             h-[300px]">
                <h1 className="md:text-[30px] text-[20px]">{langageEcriture.texteConsultation}</h1>
                <a href={selected === "Français" ? "https://registre.college-ic.ca/Public-Register-FR/Licensee/Profile.aspx?ID=20635" : "https://register.college-ic.ca/Public-Register-EN/Licensee/Profile.aspx?ID=20635"}><img src={selected === "Français" ? CISR : IRB} alt="CISR" className="mt-3"/></a>
            </div>
            <div className="flex  flex-col items-center justify-center font-bold md:text-[27px] mt-3 text-[20px]">
                <h1>📞 1-514-604-4786</h1>
                <h1 className="mt-2 md:text-[24px] text-[15px]">📧<a href="mailto:info@routesimmigration.ca" className="underline">info@routesimmigration.ca </a> 
                {langageEcriture.texteOu} <a href="mailto:info@routesimmigration.com" className="underline">info@routesimmigration.com</a></h1>
            </div>
            <Form/>
        </div>
    );
}
export default Contact;