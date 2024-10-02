import React from "react";
import Link from "next/link";

const MentionsLegales: React.FC = () => {
  return (
    <div style={{ padding: "20px", minHeight: "75vh" }}>
      <h1>Mentions Légales</h1>
      <p>
        <strong>Nom du site : Meio</strong>
        <br />
        Propriétaire du site et responsable de la publication : Yann David
        <br />
        Adresse de contact :{" "}
        <Link
          style={{ textDecoration: "underline" }}
          href={
            "mailto:yann.collindavid@gmail.com?subject=Meio - Question de publication"
          }
        >
          yann.collindavid@gmail.com
        </Link>
        <br />
      </p>

      <p>
        <strong>Hébergeur :</strong> <br />
        Ce site est hébergé par la société Vercel Inc., située 340 S Lemon Ave
        #4133 Walnut, CA 91789, et joignable au (559) 288-7060.
      </p>
      <p>
        <strong>Conditions d'utilisation :</strong>
        <br />
        L'utilisation de ce site implique l'acceptation pleine et entière des
        conditions générales d'utilisation décrites ci-après. Ces conditions
        d'utilisation sont susceptibles d'être modifiées ou complétées à tout
        moment.
      </p>

      <p>
        <strong>Protection des données personnelles :</strong>
        <br />
        L'adresse IP et la référence des pages visitées sont enregistrées
        automatiquement sur le serveur hébergeant ce site. Ces données peuvent
        être utilisées exclusivement pour diagnostiquer d'éventuels problèmes
        techniques. Elles ne seront jamais partagées avec des tiers et sont
        automatiquement supprimées après usage. Pour toute question ou demande
        relative aux données personnelles, nous vous invitons à nous{" "}
        <Link
          style={{ textDecoration: "underline" }}
          href={
            "mailto:yann.collindavid@gmail.com?subject=Meio - Données personnelles"
          }
        >
          contacter par e-mail.
        </Link>
      </p>
    </div>
  );
};

export default MentionsLegales;
