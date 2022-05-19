import React, {useState,useEffect} from 'react';
import {BsDownload} from "react-icons/bs";
import { ImCross } from "react-icons/im";

function ImageCard(props) {
    const [popup,setPopup] = useState(false);
    const imgWidth = props.result.width;
    const imgHeight = props.result.height; 
    return (
      <>
        <div className= {popup?'popup--card':'popup--hidden'}>
            <div className='popup--container'>
                <div className='popup--header'>
                    <a href={props.result.user.social.portfolio_url} style={{textDecoration:'none'}} target="_blank">
                        <div className="popup--user">
                                <img src={props.result.user.profile_image.large} className="user--img"/>
                                <div style={{paddingTop:"5px"}}>
                                    <p className = "user--name">{`${props.result.user.first_name} ${props.result.user.last_name===null?'':props.result.user.last_name}`}</p>
                                    <p className = "user--userName">{props.result.user.username}</p>
                                </div>
                        </div>
                    </a>
                    <button 
                        className='popup--close' 
                        onClick={()=>{
                            setPopup(false);
                        }}
                    ><ImCross/></button> 
                </div>
                <img src={props.result.urls.full} className={imgWidth/imgHeight>1.3?'landscape':'portrait'}/>
                {/* <p className='img--desc'>{props.result.description}</p> */}
                <div className='popup--footer'>
                    <div className='likes'>
                        <p>Likes</p>
                        <p style={{color:'grey'}}>{props.result.likes}</p>
                    </div>
                    <div className='downloads'>
                        <p>Downloads</p>
                        <p>--</p>
                    </div>
                    <a href={props.result.links.download} target="_blank"><button className="popup--download" download>Download</button></a>
                </div>
            </div>
        </div>
        <div className ="img--card">
            <div className='popup--header mobile' style={{marginTop:"15px"}}>
                <a href={props.result.user.social.portfolio_url} style={{textDecoration:'none'}} target="_blank">
                    <div className="popup--user">
                            <img src={props.result.user.profile_image.large} className="user--img"/>
                            <div style={{paddingTop:"5px"}}>
                                <p className = "user--name">{`${props.result.user.first_name} ${props.result.user.last_name===null?'':props.result.user.last_name}`}</p>
                                <p className = "user--userName">{props.result.user.username}</p>
                            </div>
                    </div>
                </a>
            </div>
            <img 
                src={props.result.urls.small} 
                key ={props.result.id} 
                className="image" 
                onClick={()=>{
                    setPopup(true);
                }}
            />
            <div className="user">
                <img src={props.result.user.profile_image.large} className="user--img"/>
                <div style={{paddingTop:"5px"}}>
                    <p className = "user--name">{`${props.result.user.first_name} ${props.result.user.last_name===null?'':props.result.user.last_name}`}</p>
                    <p className = "user--userName">{props.result.user.username}</p>
                </div>
                <a href={props.result.links.download} target="_blank"><button className="download" download>{<BsDownload/>}</button></a>
            </div>
            {/* <p className="img--desc">{result.description}</p> */}
            <div className='popup--footer mobile'>
                <div className='likes'>
                    <p>Likes</p>
                    <p style={{color:'grey'}}>{props.result.likes}</p>
                </div>
                <div className='downloads'>
                    <p>Downloads</p>
                    <p>--</p>
                </div>
                <a href={props.result.links.download} target="_blank"><button className="mobile--download" download>{<BsDownload/>}</button></a>
                {/* <a href={props.result.links.download} target="_blank"><button className="popup--download" download>Download</button></a> */}
            </div>
        </div>
      </>
    )
}

export default ImageCard