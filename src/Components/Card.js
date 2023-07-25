import React from "react";
import styles from "./Card.module.css";

const Card = ({ image, name, description, href }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={name} className={styles.image} />
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.description}>{description}</p>
      <a href={href} className={styles.button} target="_blank" rel="noreferrer">
        Go to GITHUB
      </a>
    </div>
  );
};

export default Card;
