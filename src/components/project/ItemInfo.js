import React from 'react';
import {
    Link
  } from "react-router-dom";



export default function ItemInfo(props){

    return(
        <Link className ="project-menu" to={props.item.src} target={props.selected}><li>{props.item.name}</li></Link>
    )
}

