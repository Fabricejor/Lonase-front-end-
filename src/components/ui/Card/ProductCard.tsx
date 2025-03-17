import React from "react";
import { poppins } from "@/style/font";
const Badge = ({ text, color }: { text: string; color: string }) => {
  return (
    <span className={`px-3 py-1 text-white text-xs rounded-md ${color}`}>
      {text}
    </span>
  );
};

const Card = () => {
  return (
        <div className={`w-72 p-4 bg-black text-white rounded-3xl px-11 relative overflow-hidden ${poppins.className} `}>
      {/* Image de fond avec filtre noir transparent */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://s3-alpha-sig.figma.com/img/d81f/92cd/5711c9e15b725e272029a15af44b6758?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=cCtK7NnyOyD447A4B8Ct~SeFCbNzxRfhH83egeR0YVYBjBwOpWyH6CA2mCSXckYnSQ3Rby0S~MmN3olG2hE7YoMi5oosEEM0CNVWFsjHUB9oAC5GdovnuLATLTU~UeyfPe4-11Cj7vfraxPRc0K7xBh0Vbx3ttcpbaCIiGG1iOk5cfBQBpwYrbZlbitV7eE2LFAKk-VRd74rwc9LmQbrqYga9zGuoa4uItxtoUOopG3bzkk~Isv0kek5shrAp3d75Y1QkMbb1BULttn5O1rA3OG40vtPmlCW6bo8jXxFMxIdkqmawlz-aITMsguiS-cbZBWRrjJZmhwc5WntIcqCAQ__')" }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      {/* Contenu de la carte */}
      <div className="relative z-10">
        {/* Statut */}
        <div className="bg-orange-500 text-white px-3 py-1 text-xs rounded-full w-fit mx-auto mb-0">
          🔴 En Cours
        </div>

        {/* Titre */}
        <h2 className="text-base font-bold text-center">FESTIVAL DE LA CULTURE</h2>

        {/* Badges */}
        <div className="flex justify-center gap-2 my-2">
          <Badge text="Culture" color="bg-green-500" />
          <Badge text="Sport" color="bg-red-500" />
        </div>

        {/* Informations */}
        <div className="text-xs  text-start space-y-2">
          <p>Type d’organisation: <span className="font-bold">Association</span></p>
          <p>Localisation : <span className="font-bold">DAKAR</span></p>
          <p>Types d’évènement :</p>
          <div className="flex gap-2 items-center justify-center">
            <Badge text="Festival" color="bg-yellow-500" />
            <Badge text="Competition" color="bg-orange-600" />
          </div>
          
        </div>

        {/* Montant demandé */}
        <div className="bg-green-600 right  float-end text-white text-xs px-3 py-2 rounded-lg w-fit mt-4">
          Montant demandé <br />
          <span className="font-bold text-xs">3.000.000 FCFA</span>
        </div>

        {/* Bouton */}
        <button  type="button" className="mt-5 w-full bg-green-700 text-sm py-3 rounded-full text-white font-semibold hover:bg-green-800 transition">
          Voir les détails
        </button>
      </div>
    </div>
  );
};

export default Card;
