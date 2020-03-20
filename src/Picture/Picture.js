import React from 'react';
import './Picture.css'

const picture = (props) => {
    return  <div className="Picture">
    <figure>
        <img src={props.url} name={props.name} alt={props.alt}></img>
        <figcaption>{props.name}</figcaption>
    </figure>
    </div>
}

export default picture;