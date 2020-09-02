import React from 'react';


export default function ItemInfo(props){

    return(
        <a className ="project-menu" href={props.item.src} target={props.selected}><li>{props.item.name}</li></a>
    )
}

