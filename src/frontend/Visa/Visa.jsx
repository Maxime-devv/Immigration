import { useLangage } from "../Context/LangageContext";
import { langageEcritureEn, langageEcritureFr } from "../../Data/LangageEcriture";
import GrandParents from "../../images/grandParents.jpg";
import { FaExclamationTriangle } from "react-icons/fa";
const Visa = () =>{
        const {selected} = useLangage();
        const langageEcriture = selected === "Français" ? langageEcritureFr : langageEcritureEn;
    return (
        <div className="bg-cyan-100 py-8 px-6 rounded-lg shadow-lg min-h-screen flex-grow">
            <h1 className="text-5xl font-extrabold text-blue-800 ml-10">{langageEcriture.textVisa}</h1>
            <div className="flex lg:flex-row flex-col gap-10 items-center justify-center mt-10 ml-10 mr-10">
            <div className="space-y-6 max-w-4xl text-gray-700 text-[20px] text-justify w-full  mr-5">
                <p className=" text-blue-700 font-bold text-[25px]">{langageEcriture.texteVisa1}</p>
                <p className=" text-gray-700">{langageEcriture.texteVisa2}</p>
                <p className=" text-gray-700">{langageEcriture.texteP2} <span className="font-bold text-blue-700">{langageEcriture.texteP3}</span> {langageEcriture.texteVisa3}</p>
                <p className=" mt-10 text-blue-700 font-bold text-[25px]">{langageEcriture.texteVisa4}</p>
                <ul className="space-y-2 list-decimal pl-6 text-[22px] font-semibold">
                    <li className=" text-gray-700">{langageEcriture.texteVisa5}
                        <div className="mt-4 font-normal text-[20px]">
                        <p>{langageEcriture.texteVisa6}</p>
                        <p className="mt-5">{langageEcriture.texteVisa7}</p>
                        <ul className="list-disc pl-6 font-semibold mt-5 space-y-3">
                            <li className=" text-gray-700">{langageEcriture.texteVisa8}</li>
                            <li className=" text-gray-700">{langageEcriture.texteVisa9}</li>
                            <li className=" text-gray-700">{langageEcriture.texteVisa41}</li>
                            <li className=" text-gray-700">{langageEcriture.texteVisa10}</li>
                            <li className=" text-gray-700">{langageEcriture.texteVisa11}</li>
                            <li className=" text-gray-700">{langageEcriture.texteVisa12}</li>
                        </ul>
                        <p className="mt-5">{langageEcriture.texteVisa13}</p>
                         <ul className="list-disc pl-6 font-semibold mt-5 space-y-3">
                            <li className=" text-gray-700">{langageEcriture.texteVisa14}</li>
                            <li className=" text-gray-700">{langageEcriture.texteVisa15}</li>
                            <li className=" text-gray-700">{langageEcriture.texteVisa16}</li>
                        </ul>
                         <p className="mt-5 flex"><FaExclamationTriangle className="text-[20px] shrink-0 mr-4 mt-1"/>{langageEcriture.texteVisa17}</p>

                        </div>
                    </li>
                    <li className=" text-gray-700">{langageEcriture.texteVisa18}
                        <div className="mt-4 font-normal text-[20px]">
                            <p>{langageEcriture.texteVisa19}</p>
                            <p className="mt-5">{langageEcriture.texteVisa20}</p>
                            <ul className="list-disc pl-6 font-semibold mt-5 space-y-3">
                            <li className=" text-gray-700">{langageEcriture.texteVisa21}</li>
                            <li className=" text-gray-700">{langageEcriture.texteVisa22}</li>
                            <li className=" text-gray-700">{langageEcriture.texteVisa23}</li>
                            <li className=" text-gray-700">{langageEcriture.texteVisa24}</li>
                            <li className=" text-gray-700">{langageEcriture.texteVisa25}</li>
                        </ul>
                        <p className="mt-5">{langageEcriture.texteVisa13}</p>
                         <ul className="list-disc pl-6 font-semibold mt-5 space-y-3">
                            <li className=" text-gray-700">{langageEcriture.texteVisa26}</li>
                            <li className=" text-gray-700">{langageEcriture.texteVisa27}</li>
                            <li className=" text-gray-700">{langageEcriture.texteVisa28}</li>
                        </ul>

                        </div>
                    </li>
                </ul>
                
                <p className=" text-blue-700 text-[25px] font-bold">{langageEcriture.texteVisa29}</p>
                
                <ul className="space-y-2 font-semibold list-disc pl-6">
                    <li className=" text-gray-700">{langageEcriture.texteVisa30}</li>
                    <li className=" text-gray-700">{langageEcriture.texteVisa31}</li>
                    <li className=" text-gray-700">{langageEcriture.texteVisa32}</li>
                    <li className=" text-gray-700">{langageEcriture.texteVisa35}</li>
                    <li className=" text-gray-700">{langageEcriture.texteVisa33}</li>
                </ul>
                <p className="font-bold text-blue-700 text-[25px]">{langageEcriture.contact}</p>
                <p className="text-gray-700">{langageEcriture.texteVisa34}</p>
                <p className="font-bold text-blue-700">{langageEcriture.texteVisa40}</p>
            </div>
             <div className="w-full lg:w-1/3 sticky top-20 self-start">
                    <img
                        src={GrandParents}
                        alt="Parrainage"
                        className="w-full h-auto lg:h-[600px] object-cover rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-2xl"
                    />
                </div>
            </div>
        </div>

    )
}

export default Visa;