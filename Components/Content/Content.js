import React from 'react';
import styles from './Content.module.css';
import Card from '../Card/Card';
import { useParams } from 'react-router-dom';
import Formulaire from '../../Forms/Formulaire';



const Content = ({ data }) => {
    const { idCard } = useParams();

    const cardFromIdCard = (idCard) => {
        const item = data.find((item) => item.id == idCard);
        return <Card titre={item.id + ' ' + item.title} contenu={item.body} id={item.id} estSeule />;
    };

    return (
        <div className={styles.content}>
            {idCard ? (
                cardFromIdCard(idCard)
            ) : (
                <div>
            <Formulaire></Formulaire>
              {  data.map((item) => {
                    return <Card titre={item.id + ' ' + item.title} contenu={item.body} id={item.id} />;
            })}
                
            </div>)
        } 
        </div>
    );
};

export default Content;
