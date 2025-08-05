import { langageEcritureEn, langageEcritureFr } from "../../Data/LangageEcriture";
import { useLangage } from "../Context/LangageContext";
import Leaf from "../../images/leaf.png";
const Profile = () =>{
    const {selected} = useLangage();
    const langageEcriture = selected === "Français" ? langageEcritureFr : langageEcritureEn;
    return (
        <div className="bg-gradient-to-r from-amber-200 to-amber-100 min-h-screen flex flex-col items-center py-12 px-6">
            {/* Titre */}
            <h1 className="text-5xl font-bold text-center text-amber-800 mb-6">{langageEcriture.texteAbout}</h1>

            {/* Contenu principal */}
            <div className="bg-yellow-100 p-8 rounded-lg shadow-xl w-full max-w-4xl space-y-6">
                <img src={Leaf} className="w-[50px] h-[50px]"/>
                <p className="text-gray-800 text-lg font-bold">{langageEcriture.textePro1}</p>
                <p className="text-gray-800 text-lg">{langageEcriture.textePro2}
                <span className="font-bold text-red-500">Routes Immigration Inc.,</span> {langageEcriture.textePro3}
                <a className="font-bold underline" href={selected === "Français" ? "https://registre.college-ic.ca/Public-Register-FR/Licensee/Profile.aspx?ID=20635" : "https://register.college-ic.ca/Public-Register-EN/Licensee/Profile.aspx?ID=20635"}>{langageEcriture.textePro4}</a>
                {langageEcriture.textePro5}
                </p>
                <p className="text-gray-800 text-lg font-bold">{langageEcriture.textePro6}</p>
                <p className="text-gray-800 text-lg">{langageEcriture.textePro7}</p>
                <p className="text-gray-800 text-lg font-bold">{langageEcriture.textePro8}</p>
                <p className="text-gray-800 text-lg">{langageEcriture.textePro9}</p>

                <p className="text-gray-800 text-lg font-bold">{langageEcriture.textePro10}</p>
                <p className="text-gray-800 text-lg">{langageEcriture.textePro11}</p>
                <ul className="text-gray-800 text-lg pl-5">
                    <li className="list-disc">{langageEcriture.textePro12}</li>
                    <li className="list-disc">{langageEcriture.textePro13}</li>
                    <li className="list-disc">{langageEcriture.textePro14}</li>
                    <li className="list-disc">{langageEcriture.textePro15}</li>
                </ul>
                <p className="text-gray-800 text-lg">{langageEcriture.textePro16}</p>
                <p className="text-gray-800 text-lg font-bold">{langageEcriture.textePro17}</p>
                <p className="text-gray-800 text-lg">{langageEcriture.textePro2}
                <span className="font-bold text-red-500">Routes Immigration Inc.,</span>{langageEcriture.textePro18}<br/>{langageEcriture.texte19}</p>
                <div className="flex justify-end">
                    <img src={Leaf} className="w-[50px] h-[50px]" />
                </div>
            </div>
        </div>
    )
}
export default Profile;