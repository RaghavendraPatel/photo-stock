import axios from 'axios';
import React, {useState,useEffect} from 'react';
import UnsplashAPI from "./UnsplashAPI";
export default function Collections(){
    const [collections,setCollection] = useState([]);
    const clientId = UnsplashAPI.API.clientId;
    const APIurl = UnsplashAPI.API.url;
    useEffect(()=>{
        const url =`${APIurl}collections?client_id=${clientId}`;
        axios.get(url)
            .then((data)=>
                console.log(data.data)
                // setCollection(data.data)
            )
            // console.log(collections)
    },[]);
    return (
        <>
            <h1>This is Collections</h1>
        </>
    )
}