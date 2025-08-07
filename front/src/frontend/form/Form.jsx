import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLangage } from "../Context/LangageContext";
import { langageEcritureEn, langageEcritureFr } from "../../Data/LangageEcriture";
import ReCAPTCHA from "react-google-recaptcha";
const Form = () => {
const[name, setName] = useState("");
const[lastName, setLastName] = useState("");
const[date, setDate] = useState("");
const[email, setEmail] = useState("");
const[phone , setPhone] = useState("");
const[message, setMessage] = useState("");
const [raison, setRaison] = useState("");
const[dateError, setDateError] = useState(false);
const[dateError2, setDateError2] = useState(false);
const[messageErreur, setMessageErreur] = useState("");
const {selected} = useLangage();
const [captchaValue, setCaptchaValue] = useState(null);
const captchaRef = useRef();
const langageEcriture = selected === "Français" ? langageEcritureFr : langageEcritureEn;
    const phoneRegex = /^[0-9]+/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const handleDate = (e) =>{
        const selectedDate = new Date(e.target.value);
        const day = selectedDate.getDay();
        const hours = selectedDate.getHours();
        if (day > 0 && day < 6 && hours >= 11 && hours < 16) {
            setDate(e.target.value);
            setDateError(false);
          } else {
            setDateError(true)
          }
    };
    const handleSubmit = async (e) =>{
        e.preventDefault();
        const phoneS = phone.toString().replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
        const dateS = date.toString().replace("T", " à ");

        const bodyText = 
  `Bonjour,\n\n` +
  `${name} ${lastName} a réservé un rendez-vous le **${dateS}**.\n\n` +
  `📧 Courriel : ${email}\n` +
  `📞 Téléphone : ${phoneS}\n` +
  `Raison de la demande : ${raison}\n` +
  (message ? `💬 Message de la demande : ${message}\n\n` : "Aucun message n'a été ajouté.\n\n") +
  `Langue parlée : ${selected}\n\n` +
  `Merci de bien vouloir confirmer cette prise de rendez-vous.\n\n` +
  `Cordialement,\n` +
  `L'équipe d'Immigration Inc`;


        if(phoneRegex.test(phone) && emailRegex.test(email) && !dateError && captchaValue){
            setDateError2(false);
            setName("");
            setLastName("");
            setDate("");
            setEmail("");
            setPhone("");
            setMessage("");
            setRaison("");
            setCaptchaValue(null);
            captchaRef.current.reset();
            toast.success(langageEcriture.texteTOAST);
            const backendUrl = process.env.REACT_APP_BACKEND_URL || "http://localhost:3000/api/";
            const response = await fetch(
                `${backendUrl}send-emails`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    from: email,
                    subject: "Prise de rendez-vous Immigration Inc",
                    text: bodyText,
                    captcha: captchaValue
                }),
            });
        }else{
            if(!dateError){
                setDateError(true);
            }
            if(!phoneRegex.test(phone) || !emailRegex.test(email)){
            setDateError2(true);
           
            if(!phoneRegex.test(phone) && emailRegex.test(email)){
                setMessageErreur(langageEcriture.texteErreur);
            }else if(phoneRegex.test(phone) && !emailRegex.test(email)){
                setMessageErreur(langageEcriture.texteErreur2);
            }else{
                setMessageErreur(langageEcriture.texteErreur3);
            } }
            
        }
    }
    return(
        <div className=" flex justify-center items-center mt-8 mb-8 ml-5 mr-5 border-r-3">
        <ToastContainer />
            <form method="post" className="bg-stone-200 w-full lg:w-1/2 p-6 gap-5 flex flex-col justify-center items-center"
                onSubmit={handleSubmit} >
            <div className="flex w-full items-center justify-between">
            <input type="text" placeholder={langageEcriture.textePrenom}
                value={name}
                onChange={(e)=> setName(e.target.value)}
                required
                className="pt-3 pb-3 pl-1 pr-1  mb-3 mr-3 w-[45%]"
            />
            <input type="text" placeholder={langageEcriture.texteFamille}
                value={lastName}
                onChange={(e)=> setLastName(e.target.value)}
                required
                className="pt-3 pb-3 pl-1 pr-1 ml-3 mb-3 w-[45%]"
            /></div>
            <div className="flex w-full flex-col items-center justify-center">
            <div className="flex w-full items-center justify-between">
            <input type="text" placeholder={langageEcriture.texteCourriel}
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                required
                className="pt-3 pb-3 pl-1 pr-1 mr-3 mb-3 w-[45%]"
            />
        
            <input type="tel" placeholder={langageEcriture.texteTelephone}
                value={phone}
                onChange={(e)=> setPhone(e.target.value)}
                required
                className={`pt-3 pb-3 pl-1 pr-1 ml-3 mb-3 w-[45%]`}
            />
            </div>
            {dateError2 && <p className="text-red-500 text-center mb-2">{messageErreur}</p> }
            </div>
            <div className="flex flex-col w-full items-center justify-center gap-y-5">
            <div className="flex flex-col lg:flex-row gap-5 items-center justify-between w-[70%]">
            <label className="text-[18px] ">{langageEcriture.texteReservez}</label>
            <input type="datetime-local"
                lang="en"
                value={date}
                onChange={handleDate}
                min={new Date().toISOString().slice(0, 16)}
                required
                className="pt-3 pb-3 pl-1 w-64"
            /> </div>
                {dateError && <p className="text-red-500">{langageEcriture.texteErreur4}</p> }
           </div>
            <div className="flex flex-col w-full items-center justify-center gap-y-5">
                <div className="flex flex-col lg:flex-row  gap-5 items-center justify-between w-[70%]">
                    <label className="text-[18px]" for="choix">{langageEcriture.texteRaison} :</label>
                    <select id="choix" value={raison} onChange={(e) => setRaison(e.target.value)} 
                    className="pt-3 pb-3 pl-1 pr-1 mb-3 w-64" required>
                        <option value="" disabled selected>Veuillez choisir / Please select</option>
                        <option value="parrainage">{langageEcriture.texteParrainage}</option>
                        <option value="temporaire">{langageEcriture.tStatus}</option>
                        <option value="permanent">{langageEcriture.pStatus}</option>
                        <option value="aides familiaux">{langageEcriture.texteAide}</option>
                        <option value="Citoyenneté Canadienne">{langageEcriture.texteCitoyennete}</option>
                        <option value="Demandeur d'asile">{langageEcriture.texteDemandeur}</option>
                        <option value="parents et grands-parents">{langageEcriture.textVisa}</option>
                        <option value="autre">{langageEcriture.texteAutre}</option>
                    </select>
                </div>
            </div>
            <label className="mt-3 text-[18px]">{langageEcriture.texteMessage} </label>
            <textarea value={message}  onChange={(e) => setMessage(e.target.value)} 
            className="h-40 w-full flex items-start mt-2"/>
             <ReCAPTCHA
                ref={captchaRef}
                sitekey={process.env.REACT_APP_CLE_DU_SITE}
                onChange={(value) => setCaptchaValue(value)}
                className="mt-3"
            />
            <button type="submit"  disabled={!captchaValue} className="mt-3 bg-stone-500 p-3 w-40 hover:bg-stone-600 text-[18px]">{langageEcriture.texteReserver}</button>
            </form>
            
        </div>
    );
}

export default Form;