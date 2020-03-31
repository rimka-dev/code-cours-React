import React from 'react';
import styles from './Card.module.css';
import { Link } from 'react-router-dom';

const Card = ({ titre, contenu, id, estSeule }) => {
    return (
        <div className={styles.card}>
            <div>{titre}</div>
            <br />
            <div>{contenu}</div>
            <br />
            <br />
            <br />
            {estSeule ? null : <Link to={`/contenu/${id}`}>Plus de détails</Link>}
            <br/>
            {estSeule ? null : <Link to={`/formulaire`}>Ajouter article</Link>}
        </div>
    );
};

export default Card;
