import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLangage } from "../Context/LangageContext";
import { langageEcritureEn, langageEcritureFr } from "../../Data/LangageEcriture";
import ReCAPTCHA from "react-google-recaptcha";

const Form = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [date, setDate] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [raison, setRaison] = useState("");
  const [dateError, setDateError] = useState(false);
  const [dateError2, setDateError2] = useState(false);
  const [messageErreur, setMessageErreur] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { selected } = useLangage();
  const [captchaValue, setCaptchaValue] = useState(null);
  const captchaRef = useRef();
  const langageEcriture = selected === "Français" ? langageEcritureFr : langageEcritureEn;

  const phoneRegex = /^[0-9]{10}$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleDate = (e) => {
    const selectedDate = new Date(e.target.value);
    const day = selectedDate.getDay();
    const hours = selectedDate.getHours();
    if (day > 0 && day < 6 && hours >= 11 && hours < 16) {
      setDate(e.target.value);
      setDateError(false);
    } else {
      setDateError(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!phoneRegex.test(phone) || !emailRegex.test(email) || dateError || !captchaValue) {
      if (!date) setDateError(true);
      if (!phoneRegex.test(phone) || !emailRegex.test(email)) {
        setDateError2(true);
        if (!phoneRegex.test(phone) && emailRegex.test(email)) {
          setMessageErreur(langageEcriture.texteErreur);
        } else if (phoneRegex.test(phone) && !emailRegex.test(email)) {
          setMessageErreur(langageEcriture.texteErreur2);
        } else {
          setMessageErreur(langageEcriture.texteErreur3);
        }
      }
      return;
    }

    setDateError2(false);
    setIsSubmitting(true);

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

    try {
      const backendUrl = process.env.REACT_APP_BACKEND_URL || "http://localhost:3000/api/";
      const response = await fetch(`${backendUrl}send-emails`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          from: email,
          subject: "Prise de rendez-vous Immigration Inc",
          text: bodyText,
          captcha: captchaValue,
        }),
      });

      if (!response.ok) {
        throw new Error("Réponse serveur non OK");
      }

      toast.success(langageEcriture.texteTOAST);
      setName("");
      setLastName("");
      setDate("");
      setEmail("");
      setPhone("");
      setMessage("");
      setRaison("");
      setCaptchaValue(null);
      captchaRef.current.reset();
    } catch (error) {
      console.error("Erreur d'envoi:", error);
      toast.error(
        selected === "Français"
          ? "Une erreur est survenue, veuillez réessayer."
          : "Something went wrong, please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex justify-center items-center py-12 px-5 bg-stone-50">
      <ToastContainer />
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full lg:w-1/2 rounded-xl shadow-md border border-stone-200 p-8 md:p-10 flex flex-col gap-6"
      >
        <div className="text-center mb-2">
          <h2 className="text-2xl font-semibold text-stone-800">
            {langageEcriture.texteReserver}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-stone-600">{langageEcriture.textePrenom}</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="border border-stone-300 rounded-md px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-stone-500 transition"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-stone-600">{langageEcriture.texteFamille}</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              className="border border-stone-300 rounded-md px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-stone-500 transition"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-stone-600">{langageEcriture.texteCourriel}</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border border-stone-300 rounded-md px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-stone-500 transition"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-stone-600">{langageEcriture.texteTelephone}</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="border border-stone-300 rounded-md px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-stone-500 transition"
            />
          </div>
        </div>
        {dateError2 && <p className="text-red-500 text-sm text-center -mt-3">{messageErreur}</p>}

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-stone-600">{langageEcriture.texteReservez}</label>
          <input
            type="datetime-local"
            lang="en"
            value={date}
            onChange={handleDate}
            min={new Date().toISOString().slice(0, 16)}
            required
            className="border border-stone-300 rounded-md px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-stone-500 transition w-full md:w-64"
          />
          {dateError && <p className="text-red-500 text-sm">{langageEcriture.texteErreur4}</p>}
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="choix" className="text-sm font-medium text-stone-600">
            {langageEcriture.texteRaison}
          </label>
          <select
            id="choix"
            value={raison}
            onChange={(e) => setRaison(e.target.value)}
            required
            className="border border-stone-300 rounded-md px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-stone-500 transition w-full md:w-64"
          >
            <option value="" disabled>Veuillez choisir / Please select</option>
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

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-stone-600">{langageEcriture.texteMessage}</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="h-32 w-full border border-stone-300 rounded-md px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-stone-500 transition resize-none"
          />
        </div>

        <div className="flex justify-center">
          <ReCAPTCHA
            ref={captchaRef}
            sitekey={process.env.REACT_APP_CLE_DU_SITE}
            onChange={(value) => setCaptchaValue(value)}
            onExpired={() => {
              setCaptchaValue(null);
              toast.warn(
                selected === "Français"
                  ? "Le captcha a expiré, veuillez le recocher."
                  : "Captcha expired, please check it again."
              );
            }}
          />
        </div>

        <button
          type="submit"
          disabled={!captchaValue || isSubmitting}
          className="bg-stone-700 hover:bg-stone-800 disabled:bg-stone-300 disabled:cursor-not-allowed text-white font-medium rounded-md py-3 transition"
        >
          {isSubmitting
            ? (selected === "Français" ? "Envoi en cours..." : "Sending...")
            : langageEcriture.texteReserver}
        </button>
      </form>
    </div>
  );
};

export default Form;