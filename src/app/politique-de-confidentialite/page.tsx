import React from "react";
import Link from "next/link";

const PolitiqueDeConfidentialite: React.FC = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Politique de confidentialité</h1>

      <p>
        Chez <strong>Meio</strong>, nous attachons une grande importance à la
        confidentialité de vos données. Cette politique de confidentialité
        explique quelles informations nous collectons via notre landing page,
        comment elles sont utilisées et les droits dont vous disposez.
      </p>

      <h2>Données collectées</h2>
      <ul>
        <li>
          <strong>Adresse e-mail</strong> : Si vous choisissez de nous contacter
          en nous fournissant votre adresse e-mail, nous utiliserons cette
          information uniquement pour répondre à votre demande.
        </li>
        <li>
          <strong>Données techniques</strong> : L'hébergeur de notre site
          collecte automatiquement des données techniques, telles que l'adresse
          IP et le nom des pages consultées. Ces informations sont anonymes et
          ne sont pas utilisées à des fins de suivi individuel.
        </li>
      </ul>

      <h2>Utilisation des données</h2>
      <ul>
        <li>
          Les adresses e-mail collectées sont exclusivement utilisées pour
          répondre à vos demandes et vous fournir des informations sur{" "}
          <strong>Meio</strong>.
        </li>
        <li>
          Les données techniques anonymes sont utilisées pour améliorer la
          performance de notre site et garantir une navigation fluide.
        </li>
      </ul>

      <h2>Partage des données</h2>
      <p>
        Nous ne partageons aucune de vos données personnelles avec des tiers,
        sauf si la loi l'exige.
      </p>

      <h2>Sécurité</h2>
      <p>
        Nous prenons des mesures raisonnables pour protéger les données
        collectées sur notre site. Toutefois, aucune méthode de transmission sur
        Internet ou de stockage électronique n'est totalement sécurisée, et nous
        ne pouvons garantir une sécurité absolue.
      </p>

      <h2>Vos droits</h2>
      <p>
        Vous avez le droit de demander l'accès à vos données personnelles, leur
        rectification ou suppression. Pour exercer ces droits, veuillez nous
        contacter à l'adresse suivante :{" "}
        <Link
          href={
            "mailto:yann.collindavid@gmail.com?subject=Meio - Exercer mes droits sur mes données personnelles"
          }
        >
          yann.collindavid@gmail.com
        </Link>
        .
      </p>

      <h2>Modifications de la politique de confidentialité</h2>
      <p>
        Cette politique de confidentialité peut être mise à jour de temps à
        autre. Nous vous encourageons à consulter cette page régulièrement pour
        être informé des éventuels changements.
      </p>
    </div>
  );
};

export default PolitiqueDeConfidentialite;
