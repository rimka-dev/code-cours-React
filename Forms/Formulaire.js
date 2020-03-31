import React, {useState} from 'react';
import { Link } from 'react-router-dom';



const Formulaire = (props) => {
    const [post, setPost] = useState( { id:0, userId: 0, title: "", body: ""})
    const [id, setId] = useState (0);
    const [userId, setUsetId] = useState(1);
    const [title, setTitel] = useState("");
    const [body, setBody] = useState("");
    const gestionaireAjout =(id, userId, title, body) =>{
        console.log(id);
        setPost(post => {return {id, userId, title, body}})
        console.log(post);
    }
    return (
        <div>
            <label>iD</label>
            <input type="text" name="id" id="id" value={id} onChange={(e) => setId(e.target.value)}></input>
            <label>idUser</label>
            <input type="text" name="userId" id="userId" value={userId} onChange={(e) => setUsetId(e.target.value)}></input>
            <label>Titre</label>
            <input type="text" name="title" id="title" value={title} onChange={(e) => setTitel(e.target.value)}></input>
            <br/>
            <br/>
            <label type="text" name="body" id="body" value={body} onChange={(e) => setBody(e.target.value)}>body</label>
            <textarea></textarea>
            <br />
            <br />
            <button onClick={()=>console.log(post)}>afficher le post courent</button>
            <button onClick={()=>gestionaireAjout(id, userId, title, body)}> ajouter post  </button> 
        </div>
    );
};

export default Formulaire;