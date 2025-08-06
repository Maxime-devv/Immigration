import { langageEcritureEn, langageEcritureFr } from "../../../Data/LangageEcriture";
import { useLangage } from "../Context/LangageContext";
import { FaCheck } from "react-icons/fa";
import Prng from "../../images/parrainage.jpg";
const Parrainage = () =>{
    const {selected} = useLangage();
    const langageEcriture = selected === "Français" ? langageEcritureFr : langageEcritureEn;
    return (
        <div className="bg-red-100 shadow-l p-7 min-h-screen flex-grow">
            <h1 className="text-5xl text-center lg:text-start font-bold text-red-700 ml-10 mb-4">{langageEcriture.texteParrainage}</h1>
            <div className="flex lg:flex-row flex-col items-center justify-center  gap-10  mt-10">

            <div className="text-gray-700 space-y-3 mt-4 mb-10 w-full lg:w-1/2 lg:mr-5 lg:ml-0 ml-20 mr-20 text-[20px] text-justify">
                <p>{langageEcriture.texteP1}</p>
                <p>{langageEcriture.texteP2} <span className="font-bold text-red-700">{langageEcriture.texteP3}</span>{langageEcriture.texteP4}</p>
                <p className="text-[25px] pt-10 font-semibold text-red-700">{langageEcriture.texteP5}</p>
                <p>{langageEcriture.texteP6}</p>
                <ul className="list-disc list-inside font-semibold space-y-2">
                    <li>{langageEcriture.texteP7}</li>
                    <li>{langageEcriture.texteP8}</li>
                    <li>{langageEcriture.texteP9}</li>
                    <li>{langageEcriture.texteP10}</li>
                </ul>

                <p className="text-[25px] pt-10 font-semibold text-red-700">{langageEcriture.texteP11}</p>

                <p>{langageEcriture.texteP12}</p>
                <ul className="list-disc list-inside font-semibold space-y-2 ">
                    <li>{langageEcriture.texteP13}</li>
                    <li>{langageEcriture.texteP14}</li>
                    <li>{langageEcriture.texteP15}</li>
                    <li>{langageEcriture.texteP16}</li>
                    <li>{langageEcriture.texteP17}</li>
                </ul>

                <p className="text-[25px] pt-10 font-semibold text-red-700">{langageEcriture.texteP18}</p>

                <p>{langageEcriture.texteP19}</p>
                <ul className="list-disc list-inside font-semibold space-y-2 ">
                    <li>{langageEcriture.texteP20}</li>
                    <li>{langageEcriture.texteP21}</li>
                    <li>{langageEcriture.texteP22}</li>
                </ul>
                <p>{langageEcriture.texteP23}</p>
                <p className="text-[25px] pt-10 font-semibold text-red-700">{langageEcriture.texteP24}</p>

                <p>{langageEcriture.texteP25}</p>
                <ul className="font-semibold space-y-2 ">
                    <li className="flex items-center gap-2"><FaCheck className="text-[20px] shrink-0 text-red-600 "/> {langageEcriture.texteP26}</li>
                    <li className="flex items-center gap-2"><FaCheck className="text-[20px] shrink-0 text-red-600 "/> {langageEcriture.texteP27}</li>
                    <li className="flex items-center gap-2"><FaCheck className="text-[20px] shrink-0 text-red-600 "/> {langageEcriture.texteP28}</li>
                    <li className="flex items-center gap-2"><FaCheck className="text-[20px] shrink-0 text-red-600 "/> {langageEcriture.texteP29}</li>
                </ul>
                <p>{langageEcriture.texteP30}</p>

                <p className="text-[25px] pt-10 font-semibold text-red-700">{langageEcriture.texteP31}</p>
                <ul className="list-disc list-inside font-semibold space-y-2 ">
                    <li>{langageEcriture.texteP32}</li>
                    <li>{langageEcriture.texteP33}</li>
                    <li>{langageEcriture.texteP34}</li>
                    <li>{langageEcriture.texteP35}</li>
                </ul>

                <p className="text-[25px] pt-10 font-semibold text-red-700">{langageEcriture.contact}</p>
                <p>{langageEcriture.texteP36}</p>
                <p>{langageEcriture.texteP37} <span className="font-bold text-red-700">{langageEcriture.texteP3}</span> {langageEcriture.texteP38}</p>
                <p className="font-bold text-red-700">{langageEcriture.texteP39}</p>
            </div>
            <div className="w-full lg:w-1/3 sticky top-20 self-start lg:inline flex justify-center">
                    <img
                        src={Prng}
                        alt="Parrainage"
                        className="lg:w-full w-3/4 h-auto lg:h-[600px] object-cover rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-2xl"
                    />
                </div>
            </div>
        </div>
    )
}

export default Parrainage;