import React from 'react';

export function Image(props){

        return(
            <img className='img-thumbnail' id={props.id} src={props.src} alt={props.name} onClick={() => props.onClick(props.id)} width="100px"/>
            )
}

