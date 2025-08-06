import "./Temporaire.css";
import { ChevronUp } from "lucide-react";
import { FaBriefcase, FaGraduationCap, FaMapMarkedAlt, FaUserTie, FaCheck } from "react-icons/fa";
import Etudiant from "../../images/readBook.jpg";
import Travailleur from "../../images/travailleur.jpg";
import Tourist from "../../images/plane.jpg";
import { useState } from "react";
import { useLangage } from "../Context/LangageContext";
import { langageEcritureEn, langageEcritureFr } from "../../../Data/LangageEcriture";
import Card from "../card/Card";
import "./Temporaire.css";
const Temporaire = () => {
    const [textG, setTextG] = useState(false);
    const [textT, setTextT] = useState(false);
    const [textQ, setTextQ] = useState(false);
    const [textP, setTextP] = useState(false);
    const { selected } = useLangage();
    const langageEcriture = selected === "Français" ? langageEcritureFr : langageEcritureEn;

    return (
        <div className="bg-blue-50 min-h-screen flex-grow">
            <div id="permanent" className="p-20 w-full flex flex-col items-center justify-center">
                <h1 className="font-bold text-[30px]">{langageEcriture.tStatus}</h1>
                <p className="font-semibold text-center mt-5 w-full text-[20px]">{langageEcriture.texteT1}</p>
                <p className="font-semibold text-center mt-5 w-full text-[20px]">{langageEcriture.texteT2}</p>
                <p className="font-semibold text-center mt-5 w-full text-[20px]">{langageEcriture.texteT3}</p>
            </div>
            <div className="lg:grid lg:grid-cols-2 place-items-center flex flex-col items-center lg:items-start mt-10 h-fit">
                <Card 
                                    image={Etudiant}
                                    title= {langageEcriture.texteF}
                                    isOpen={textG}
                                    toggle={() => setTextG(!textG)}
                                    description={<>
                                            <p className="font-semibold text-[20px] mt-5">{langageEcriture.texteF1}</p><br />
                                            <p className="font-bold text-[20px] mt-5">{langageEcriture.texteF2}</p><br />
                                            <ul className="font-semibold text-[20px]">
                                                <li className="list-disc">{langageEcriture.texteF3}</li>
                                                <li className="list-disc">{langageEcriture.texteF4}</li>
                                                <li className="list-disc">{langageEcriture.texteF5}</li>
                                                <li className="list-disc">{langageEcriture.texteF6}</li>
                                                <li className="list-disc">{langageEcriture.texteF7}</li>
                                            </ul>
                                        </>}
                                        buttonText={langageEcriture.texteSavoir}
                                        logo={<FaGraduationCap className="text-[30px] shrink-0" />}
                                />
                <Card 
                                    image={Travailleur}
                                    title= {langageEcriture.texteFW}
                                    isOpen={textT}
                                    toggle={() => setTextT(!textT)}
                                    description={<>
                                            <p className="font-semibold text-[20px] mt-5">{langageEcriture.texteFW1}</p><br />
                                            <p className="font-bold text-[20px] mt-5">{langageEcriture.texteFW2}</p><br />
                                            <ul className="font-semibold text-[20px]">
                                                <li className="list-disc">{langageEcriture.texteFW3}</li>
                                                <li className="list-disc">{langageEcriture.texteFW4}</li>
                                            </ul>
                                            <p className="font-bold text-[20px] mt-5">{langageEcriture.texteFW5}</p><br />
                                            <ul className="font-semibold text-[20px]">
                                                <li className="list-disc">{langageEcriture.texteFW6}</li>
                                                <li className="list-disc">{langageEcriture.texteFW7}</li>
                                                <li className="list-disc">{langageEcriture.texteFW8}</li>
                                                <li className="list-disc">{langageEcriture.texteFW9}</li>
                                                <li className="list-disc">{langageEcriture.texteFW10}</li>
                                            </ul>
                                            <p className="font-bold text-[22px] mt-5">{langageEcriture.texteFW11}</p><br />
                                            <p className="font-semibold text-[20px]">{langageEcriture.texteFW12}</p><br />
                                            <ul className="font-semibold text-[20px]">
                                                <li className="flex display-flex items-center"><FaCheck className="text-[20px] shrink-0 mr-2"/>{langageEcriture.texteFW13}</li>
                                                <li className="flex display-flex items-center"><FaCheck className="text-[20px] shrink-0 mr-2"/>{langageEcriture.texteFW14}</li>
                                                <li className="flex display-flex items-center"><FaCheck className="text-[20px] shrink-0 mr-2"/>{langageEcriture.texteFW15}</li>
                                                <li className="flex display-flex items-center"><FaCheck className="text-[20px] shrink-0 mr-2"/>{langageEcriture.texteFW16}</li>
                                            </ul>
                                             <p className="font-bold text-[24px] mt-5">{langageEcriture.texteFW17}</p><br />
                                            <p className="font-semibold text-[20px]">{langageEcriture.texteFW18}</p><br />
                                            <p className="font-bold text-[24px] mt-5">{langageEcriture.texteFW19}</p><br />
                                            <p className="font-semibold text-[20px]">{langageEcriture.texteFW20}</p><br />
                                            <ul className="font-semibold text-[20px]">
                                                <li className="list-disc">{langageEcriture.texteFW21}</li>
                                                <li className="list-disc">{langageEcriture.texteFW22}</li>
                                                <li className="list-disc">{langageEcriture.texteFW23}</li>
                                            </ul>
                                            <p className="font-bold text-[24px] mt-5">{langageEcriture.texteFW24}</p><br />
                                            <p className="font-semibold text-[20px]">{langageEcriture.texteFW25}</p><br />
                                            <p className="font-semibold text-[20px]">{langageEcriture.texteFW26}</p><br />
                                        </>}
                                        buttonText={langageEcriture.texteSavoir}
                                        logo={<FaBriefcase className="text-[30px] shrink-0" />}
                                />
            </div>
            <div className="lg:grid lg:grid-cols-2 place-items-center flex flex-col items-center lg:items-start mt-10 h-fit pb-20">
               <Card 
                                    image={Tourist}
                                    title= {langageEcriture.texteV}
                                    isOpen={textP}
                                    toggle={() => setTextP(!textP)}
                                    description={<>
                                            <p className="font-semibold text-[20px] mt-5">{langageEcriture.texteV1}</p><br />
                                            <p className="font-semibold text-[20px] mt-5">{langageEcriture.texteV2}</p><br />
                                            <p className="font-bold text-[20px] mt-5">{langageEcriture.texteV3}</p><br />
                                            <ul className="font-semibold text-[20px]">
                                                <li className="list-disc">{langageEcriture.texteV5}</li>
                                                <li className="list-disc">{langageEcriture.texteV6}</li>
                                                <li className="list-disc">{langageEcriture.texteV7}</li>
                                            </ul>
                                            <p className="font-semibold text-[20px] mt-5">{langageEcriture.texteV8}</p><br />
                                            <p className="font-bold text-[20px] mt-5">{langageEcriture.texteV9}</p><br />
                                            <ul className="font-semibold text-[20px]">
                                                <li className="list-disc">{langageEcriture.texteV10}</li>
                                                <li className="list-disc">{langageEcriture.texteV11}</li>
                                                <li className="list-disc">{langageEcriture.texteV12}</li>
                                                <li className="list-disc">{langageEcriture.texteV13}</li>
                                                <li className="list-disc">{langageEcriture.texteV14}</li>
                                            </ul>
                                        </>}
                                        buttonText={langageEcriture.texteSavoir}
                                        logo={<FaUserTie className="text-[30px] shrink-0" />}
                                />
            </div>

            <div className="fixed bottom-[70px] right-0 z-9 mr-[25px] bg-blue-500 
    rounded-full p-2 flex items-center justify-center text-white r-[moveY_2s_linear_infinite]">
                <a href="#permanent" className="h-fit w-fit"><ChevronUp size={32} /></a>
            </div>
        </div>
    )
}
export default Temporaire;