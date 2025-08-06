import "./Permanent.css";
import { ChevronUp } from "lucide-react";
import { FaBriefcase, FaGraduationCap, FaMapMarkedAlt, FaUserTie, FaTools } from "react-icons/fa";
import Business from "../../images/business.jpg";
import Candidat from "../../images/candidat.jpg";
import Diplome from "../../images/diplome.jpg";
import TQ from "../../images/TQ.jpg";
import metierr from "../../images/métiers.jpg";
import province from "../../images/province.jpg";
import Fed from "../../images/fed.jpg";
import Ord from "../../images/ordinateur.jpg";
import Vieux from "../../images/vieuxQ.jpg";
import { useState } from "react";
import Card from "../card/Card";
import { useLangage } from "../Context/LangageContext";
import { langageEcritureEn, langageEcritureFr } from "../../../Data/LangageEcriture";
const Permanent = () => {
    const [textG, setTextG] = useState(false);
    const [textT, setTextT] = useState(false);
    const [textQ, setTextQ] = useState(false);
    const [textP, setTextP] = useState(false);
    const [textC, setTextC] = useState(false);
    const [textM, setTextM] = useState(false);
    const [textPeq, setTextPeq] = useState(false);
    const { selected } = useLangage();
    const langageEcriture = selected === "Français" ? langageEcritureFr : langageEcritureEn;

    return (
        <div className="bg-blue-50 min-h-screen flex-grow">
            <div id="permanent" className="lg:p-20 p-10 w-full flex flex-col items-center justify-center ">
                <h1 className="font-bold text-[30px]">{langageEcriture.texteResidence}</h1>
                <p className="font-semibold  w-full text-center mt-5 text-[20px]">{langageEcriture.texteR}</p>
            </div>
            <div className="lg:grid lg:grid-cols-2 place-items-center flex flex-col items-center lg:items-start mt-10 h-fit">
                <Card 
                    image={Business}
                    title= {langageEcriture.texteR8}
                    isOpen={textG}
                    toggle={() => setTextG(!textG)}
                    description={<>
                            <p className="font-semibold text-[20px] mt-5">{langageEcriture.texteG1}</p><br />
                            <p className="font-bold text-[20px] mt-5">{langageEcriture.texteG2}</p><br />
                            <p className="font-semibold text-[20px] mt-5">{langageEcriture.texteG3}</p><br />
                            <ul className="font-bold text-[20px]">
                                <li><span className="text-red-500 font-bold">{langageEcriture.texteR9}</span></li><br />
                                <p className="font-semibold text-[20px] mt-5">{langageEcriture.texteG4}</p><br />
                                <p className="font-semibold text-[20px] mt-5">{langageEcriture.texteG5}</p><br />
                                <ul>
                                    <li className="list-disc pl-5">{langageEcriture.texteG6}</li>
                                    <li className="list-disc pl-5">{langageEcriture.texteG7}</li>
                                    <li className="list-disc pl-5">{langageEcriture.texteG8}</li>
                                    <li className="list-disc pl-5">{langageEcriture.texteG9}</li>
                                </ul><br />
                                <li><span className="text-red-500 font-bold">{langageEcriture.texteR10}</span></li><br />
                                <p className="font-semibold text-[20px] mt-5">{langageEcriture.texteG10}</p><br />
                                <p className="font-semibold text-[20px] mt-5">{langageEcriture.texteG11}</p><br />
                                <ul>
                                    <li className="list-disc pl-5">{langageEcriture.texteG12}</li>
                                    <li className="list-disc pl-5">{langageEcriture.texteG13}</li>
                                    <li className="list-disc pl-5">{langageEcriture.texteG14}</li>
                                    <li className="list-disc pl-5">{langageEcriture.texteG15}</li>
                                    <li className="list-disc pl-5">{langageEcriture.texteG17}</li>
                                </ul><br />
                                <li><span className="text-red-500 font-bold">{langageEcriture.texteR11}</span></li>
                                <p className="font-semibold text-[20px] mt-5">{langageEcriture.texteG16}</p><br />
                            </ul>
                        </>}
                        buttonText={langageEcriture.texteSavoir}
                        logo={<FaBriefcase className="text-[30px] shrink-0" />}
                />
                <Card 
                image={TQ}
                title={langageEcriture.texteR2}
                isOpen={textT}
                toggle={() => setTextT(!textT)}
                description={<>
                            <p className="font-semibold text-[20px] mt-5">{langageEcriture.texteTq1}</p><br />
                            <p className="font-semibold text-[20px]"><span className="font-bold">{langageEcriture.texteObj}</span>{langageEcriture.texteTq2}</p><br />
                        </>}
                        buttonText={langageEcriture.texteSavoir}
                        logo={<FaUserTie className="text-[30px] shrink-0" />}
                />
            </div>
            <div className="lg:grid lg:grid-cols-2 place-items-center flex flex-col items-center lg:items-start mt-20 h-fit">
                <Card 
                    image={Ord}
                    title={langageEcriture.texteR6}
                    isOpen={textQ}
                    toggle={() => setTextQ(!textQ)}
                    description={<><p className="font-semibold text-[20px] mt-5">{langageEcriture.textePstq1}</p><br />
                            <p className="font-semibold text-[20px]">{langageEcriture.textePstq2}</p><br />
                            <p className="font-semibold text-[20px]">{langageEcriture.textePstq3}</p><br/>
                            <p className="font-semibold text-[20px]">{langageEcriture.textePstq4}</p><br/>
                            <ul className="font-semibold text-[20px]">
                                <li className="list-disc pl-5">{langageEcriture.textePstq5}</li>
                                <li className="list-disc pl-5">{langageEcriture.textePstq6}</li>
                                <li className="list-disc pl-5">{langageEcriture.textePstq7}</li>
                                <li className="list-disc pl-5">{langageEcriture.textePstq8}</li>
                            </ul></>}
                    buttonText={langageEcriture.texteSavoir}
                    logo={<FaUserTie className="text-[30px] shrink-0" />}
                />
                <Card 
                image={province}
                title={langageEcriture.texteR5}
                isOpen={textP}
                toggle={() => setTextP(!textP)}
                description={<><p className="font-semibold mt-5 text-[20px]">{langageEcriture.textePcp1}</p><br />
                             <p className="font-semibold mt-5 text-[20px]">{langageEcriture.textePcp2}</p><br />
                             <ul className="font-semibold text-[20px]">
                                <li className="list-disc pl-5"><span className="font-bold">{langageEcriture.textePcp3}</span>{langageEcriture.textePcp4}</li>
                                <li className="list-disc pl-5"><span className="font-bold">{langageEcriture.textePcp5}</span>{langageEcriture.textePcp6}</li>       
                                </ul><br/>
                            <p className="font-bold text-[20px]">{langageEcriture.textePcp7}</p><br /></>}
                    buttonText={langageEcriture.texteSavoir}
                    logo={<FaMapMarkedAlt className="text-[30px] shrink-0" />}
                />
            </div>

            <div className="lg:grid lg:grid-cols-2 place-items-center flex flex-col items-center  lg:items-start mt-20 h-fit pb-20">
               <Card 
                image={Diplome}
                title={langageEcriture.texteR4}
                isOpen={textC}
                toggle={() => setTextC(!textC)}
                description={<><p className="font-semibold text-[20px] mt-5">{langageEcriture.texteCec1}</p><br />
                            <p className="font-semibold text-[20px]"><span className="font-bold">{langageEcriture.texteObj}</span>{langageEcriture.texteCec2}</p><br /></>}
                buttonText={langageEcriture.texteSavoir}
                logo={<FaGraduationCap className="text-[35px] shrink-0" />}
               /> 
               <Card 
                image={Fed}
                title= {langageEcriture.texteR7}
                isOpen={textPeq}
                toggle={() => setTextPeq(!textPeq)}
                description={<>
                            <p className="font-semibold mt-5  text-[20px]">{langageEcriture.textePeq1}</p><br />
                            <p className="font-semibold text-[20px]">{langageEcriture.textePeq2}</p><br />
                            <ul className="font-semibold text-[20px]">
                                <li className="list-disc pl-5">{langageEcriture.textePeq3}</li><br></br>
                                <p className="font-semibold text-[20px]">{langageEcriture.textePeq4}</p><br />
                                <p className="font-semibold text-[20px]">{langageEcriture.textePeq5}</p><br />
                                <ul className="font-semibold text-[20px]">
                                    <li className="relative pl-6 list-none before:content-['›'] before:absolute before:left-0 before:top-0.5 before:text-black">{langageEcriture.textePeq6}</li>
                                    <li className="relative pl-6 list-none before:content-['›'] before:absolute before:left-0 before:top-0.5 before:text-black">{langageEcriture.textePeq7}</li>
                                    <li className="relative pl-6 list-none before:content-['›'] before:absolute before:left-0 before:top-0.5 before:text-black">{langageEcriture.textePeq8}</li>
                                    <li className="relative pl-6 list-none before:content-['›'] before:absolute before:left-0 before:top-0.5 before:text-black">{langageEcriture.textePeq9}</li>
                                </ul><br/>
                                <li className="list-disc pl-5">{langageEcriture.textePeq10}</li><br/>
                                <p className="font-semibold text-[20px]">{langageEcriture.textePeq11}</p><br />
                                <p className="font-semibold text-[20px]">{langageEcriture.textePeq12}</p><br />
                                <ul className="font-semibold text-[20px]">
                                    <li className="relative pl-6 list-none before:content-['›'] before:absolute before:left-0 before:top-0.5 before:text-black">{langageEcriture.textePeq13}</li>
                                    <li className="relative pl-6 list-none before:content-['›'] before:absolute before:left-0 before:top-0.5 before:text-black">{langageEcriture.textePeq14}</li>
                                    <li className="relative pl-6 list-none before:content-['›'] before:absolute before:left-0 before:top-0.5 before:text-black">{langageEcriture.textePeq15}</li>
                                </ul>
                            </ul>
                        </>}
                buttonText={langageEcriture.texteSavoir}
                logo={<FaBriefcase className="text-[30px] shrink-0" />}
               />
            </div>

             <div className="lg:grid lg:grid-cols-2 place-items-center flex flex-col items-center  lg:items-start mt-20 h-fit pb-20">
                <Card 
                    image={metierr}
                    title={langageEcriture.texteR3}
                    isOpen={textM}
                    toggle={() => setTextM(!textM)}
                    description={ <>
                            <p className="font-semibold text-[20px] mt-5">{langageEcriture.texteM1}</p><br />
                            <p className="font-semibold text-[20px]"><span className="font-bold">{langageEcriture.texteObj}</span>{langageEcriture.texteM2}</p><br />
                        </>}
                    buttonText={langageEcriture.texteSavoir}
                    logo={<FaTools className="text-[30px] shrink-0" />}
                />
            </div>            <div className="fixed bottom-[70px] right-0 z-9 mr-[25px] bg-blue-500 
    rounded-full p-2 flex items-center justify-center text-white animate-[moveY_2s_linear_infinite]">
                <a href="#permanent" className="h-fit w-fit"><ChevronUp size={32} /></a>
            </div>
        </div>
    )
}
export default Permanent;