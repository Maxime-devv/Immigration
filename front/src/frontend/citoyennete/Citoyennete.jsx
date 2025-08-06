import { useLangage } from "../Context/LangageContext";
import { langageEcritureEn, langageEcritureFr } from "../../../Data/LangageEcriture";
import CC from "../../images/cc.jpg"
const Citoyennete = () =>{
    const {selected} = useLangage();
    const langageEcriture = selected === "Français" ? langageEcritureFr : langageEcritureEn; 
    return (
        <div className="bg-gradient-to-r from-purple-200 to-purple-100 min-h-screen flex-grow p-6">
            {/* Titre */}
            <h1 className="text-5xl font-semibold text-center text-purple-800 mb-6">{langageEcriture.texteCitoyennete}</h1>

            <div className="flex flex-col lg:flex-row items-center justify-center mb-10 space-y-6 lg:space-y-0  gap-10">

                {/* Texte */}
                <div className="space-y-6 max-w-3xl text-gray-700 text-[20px]  text-justify">
                    <p className="font-bold text-purple-600 text-[25px]">{langageEcriture.texteCC1}</p>
                    <p>{langageEcriture.texteCC2}</p>
                    <p className="font-bold text-purple-600 text-[25px]">{langageEcriture.texteCC3}</p>
                    <p>{langageEcriture.texteCC4}</p>
                    <ul className="list-inside font-semibold list-disc">
                        <li>{langageEcriture.texteCC5}</li>
                        <li>{langageEcriture.texteCC6}</li>
                        <li>{langageEcriture.texteCC7}</li>
                        <li>{langageEcriture.texteCC8}</li>
                        <li>{langageEcriture.texteCC9}</li>
                        <li>{langageEcriture.texteCC10}</li>
                    </ul>
                    <p className="font-bold text-purple-600 text-[25px]">{langageEcriture.texteCC11}</p>
                     <ul className="list-inside font-semibold list-disc">
                        <li>{langageEcriture.texteCC11}</li>
                        <li>{langageEcriture.texteCC12}</li>
                        <li>{langageEcriture.texteCC13}</li>
                        <li>{langageEcriture.texteCC14}</li>
                    </ul>
                    <p className="font-bold text-purple-600 text-[25px]">{langageEcriture.texteCC15}</p>
                    <p>{langageEcriture.texteP2} <span className="font-bold text-purple-600">{langageEcriture.texteP3}</span>{langageEcriture.texteCC16}</p>
                    <ul className="list-inside font-semibold list-disc">
                        <li>{langageEcriture.texteCC17}</li>
                        <li>{langageEcriture.texteCC18}</li>
                        <li>{langageEcriture.texteCC19}</li>
                        <li>{langageEcriture.texteCC20}</li>
                    </ul>
                    <p className="font-bold text-purple-600 ">{langageEcriture.texteCC21}</p>
                    <p className="font-bold text-purple-600 ">{langageEcriture.texteCC22}</p>
                </div> 

                {/* Image */}
                <div className="w-full flex justify-center lg:w-1/3 sticky top-20 self-start">
                    <img
                        src={CC}
                        alt="Parrainage"
                        className="lg:w-full w-[70%] h-auto lg:h-[600px] object-cover rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-2xl"
                    />
                </div>

            </div>
        </div>

    )
}
export default Citoyennete;