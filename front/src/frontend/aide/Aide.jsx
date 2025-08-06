import { useLangage } from "../Context/LangageContext";
import { langageEcritureEn, langageEcritureFr } from "../../../Data/LangageEcriture";
import aideV from "../../images/aide.jpg"
import { FaCheck, FaBullseye,FaThumbtack   } from "react-icons/fa";
const Aide = () =>{
    const {selected} = useLangage();
    const langageEcriture = selected === "Français" ? langageEcritureFr : langageEcritureEn; 
    return (
        <div className="bg-orange-50 min-h-screen flex flex-col items-center py-10 px-6">
            {/* Titre */}
            <h1 className="text-5xl font-bold text-gray-900 text-center mb-8 border-b-4 border-orange-400 pb-2 w-fit">
                {langageEcriture.texteAide}
            </h1>

            {/* Contenu */}
            <div className="flex flex-col lg:flex-row items-center  w-full gap-10 justify-center mt-10">
                {/* Texte */}
                <div className="space-y-5 text-gray-700 text-[20px] w-full lg:w-1/2">
                    <p className="font-bold text-orange-600 text-[25px]">{langageEcriture.texteA1}</p>
                    <p>{langageEcriture.texteA2}</p>
                    <p>{langageEcriture.texteP2}<span className="font-bold text-orange-600">{langageEcriture.texteP3}</span>{langageEcriture.texteA3}</p>
                    <p className="font-bold text-orange-600 text-[25px] mt-5">{langageEcriture.texteA4}</p>
                    <p>{langageEcriture.texteA5}</p>
                    <p>{langageEcriture.texteA6}</p>
                    <p className="flex items-center"><FaBullseye className="text-[20px] shrink-0 mr-2"/>{langageEcriture.texteA7}</p>
                    <p>{langageEcriture.texteA8}</p>
                    <p className="font-semibold">{langageEcriture.texteA9}</p>
                    <ul className="list-decimal font-semibold pl-6">
                        <li>{langageEcriture.texteA10}
                        </li>
                        <li>{langageEcriture.texteA11}</li>
                    </ul>
                    <p className="font-bold text-orange-600 text-[25px] mt-5">{langageEcriture.texteA12}</p>
                    <p>{langageEcriture.texteA13}</p>
                    <ul className="list-disc font-semibold pl-6">
                        <li>{langageEcriture.texteA14}</li>
                        <li>{langageEcriture.texteA15}</li>
                        <li>{langageEcriture.texteA16}</li>
                        <li>{langageEcriture.texteA17}</li>
                        <li>{langageEcriture.texteA18}</li>
                    </ul>
                    <p className="flex items-center"><FaThumbtack  className="text-[20px] shrink-0 mr-2"/>{langageEcriture.texteA19}</p>
                    <p className="font-bold text-orange-600 text-[25px] mt-5">{langageEcriture.texteA20}</p>
                    <ul className=" font-semibold pl-1">
                        <li className="flex items-center"><FaCheck className="text-orange-600 mr-2 shrink-0" />{langageEcriture.texteA21}</li>
                        <li className="flex items-center"><FaCheck className="text-orange-600 mr-2 shrink-0" />{langageEcriture.texteA22}</li>
                        <li className="flex items-center"><FaCheck className="text-orange-600 mr-2 shrink-0" />{langageEcriture.texteA23}</li>
                        <li className="flex items-center"><FaCheck className="text-orange-600 mr-2 shrink-0" />{langageEcriture.texteA24}</li>
                        <li className="flex items-center"><FaCheck className="text-orange-600 mr-2 shrink-0" />{langageEcriture.texteA25}</li>
                    </ul>
                    <p className="font-bold text-orange-600 text-[25px] mt-5">{langageEcriture.texteA26}</p>
                     <ul className="list-disc font-semibold pl-6">
                        <li>{langageEcriture.texteA27}</li>
                        <li>{langageEcriture.texteA28}</li>
                        <li>{langageEcriture.texteA29}</li>
                        <li>{langageEcriture.texteA30}</li>
                        <li>{langageEcriture.texteA31}</li>
                        <li>{langageEcriture.texteA32}</li>
                    </ul>
                    <p className="font-bold text-orange-600 text-[25px] mt-5">{langageEcriture.texteA33}</p>
                    <p>{langageEcriture.texteA34}</p>
                     <ul className="list-disc font-semibold pl-6">
                        <li>{langageEcriture.texteA35}</li>
                        <li>{langageEcriture.texteA36}</li>
                        <li>{langageEcriture.texteA37}</li>
                    </ul>
                    <p className="font-bold text-orange-600 text-[25px] mt-5">{langageEcriture.texteA38}</p>
                        <p>{langageEcriture.texteA39}</p>
                     <ul className="list-disc font-semibold pl-6">
                        <li>{langageEcriture.texteA40}</li>
                        <li>{langageEcriture.texteA41}</li>
                        <li>{langageEcriture.texteA42}</li>
                    </ul>
                    <p className="font-bold text-orange-600">{langageEcriture.texteA43}</p>

                </div>

                {/* Image */}
                <div className="w-full lg:w-1/3 sticky top-20 self-start">
                    <img
                        src={aideV}
                        alt="Parrainage"
                        className="w-full h-auto lg:h-[600px] object-cover rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-2xl"
                    />
                </div>
            </div>
        </div>
    )
}
export default Aide;