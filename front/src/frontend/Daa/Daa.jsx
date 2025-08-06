import { useLangage } from "../Context/LangageContext";
import { langageEcritureEn, langageEcritureFr } from "../../Data/LangageEcriture";
import demandeur from "../../images/demandeur.jpg";
const Daa = () =>{
    const {selected} = useLangage();
    const langageEcriture = selected === "Français" ? langageEcritureFr : langageEcritureEn; 
    return (
        <div className="bg-[#f3e1c1] min-h-screen flex flex-col items-center py-10 px-6">
            
            {/* Titre */}
            <h1 className="text-5xl font-bold text-[#ae966b] text-center mb-8 pb-2 w-fit">
                {langageEcriture.texteDemandeur}
            </h1>

            {/* Contenu */}
            <div className="flex flex-col lg:flex-row items-center  w-full gap-10 justify-center mt-10">
                {/* Texte */}
                <div className="space-y-5 text-gray-700 text-[20px] w-full lg:w-1/2">
                    <p>{langageEcriture.texteAA1}</p>
                    <p className="font-bold text-[#ae966b] text-[25px] mt-5">{langageEcriture.texteAA2}</p>
                    <ul className="list-disc font-semibold pl-6 space-y-3">
                        <li>{langageEcriture.texteAA3}</li>
                        <li>{langageEcriture.texteAA4}</li>
                        <li>{langageEcriture.texteAA5}</li>
                        <li>{langageEcriture.texteAA6}
                            <ul className="list-[circle] mt-1 font-semibold pl-6 space-y-2">
                                <li>{langageEcriture.texteAA7}</li>
                                <li>{langageEcriture.texteAA8}</li>
                            </ul>
                        </li>
                        <li>{langageEcriture.texteAA9}</li>
                    </ul>
                    <p className="font-bold text-[#ae966b] text-[25px] mt-5">{langageEcriture.texteAA10}</p>
                    <p>{langageEcriture.texteAA11}</p>
                    <p>{langageEcriture.texteAA12}</p>
                    <ul className="list-disc font-semibold pl-6 space-y-3">
                        <li>{langageEcriture.texteAA13}</li>
                        <li>{langageEcriture.texteAA14}</li>
                        <li>{langageEcriture.texteAA15}</li>
                        <li>{langageEcriture.texteAA16} </li>
                        <li>{langageEcriture.texteAA17}</li>
                    </ul>
                    <p className="font-bold text-[#ae966b]">{langageEcriture.texteAA18}</p>
                    <p>{langageEcriture.texteAA19}</p>
                    <p className="font-bold text-[#ae966b]">{langageEcriture.texteAA20}</p>
                </div>

                {/* Image */}
                <div className="w-full lg:w-1/3 sticky top-20 self-start">
                    <img
                        src={demandeur}
                        alt="Parrainage"
                        className="w-full h-auto lg:h-[600px] object-cover rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-2xl"
                    />
                </div>
            </div>
        </div>
    )
}
export default Daa;