import React from 'react'
import PropTypes from 'prop-types';
 const styleimg={   width: '300px' ,height: '300px',margin: '47PX'}
 const stylebody={    display: 'flex' ,fontFamily: 'Times New Roman',fontSize: 'X-LARGE'}
 const stylename={display:'flex',margin:' 1%', textShadow:' black -4px 7px 45px'}
const styleback={    background:' aliceblue'}

function Profile(props) {
    
    return (
        <div style={styleback}>
        <h1 style={stylename}>{props.fullName}</h1>
        <div style={stylebody}>
        <h5>{props.bio}</h5>
        <img style={styleimg} src={props.pic} alt="" onClick={() => alert(props.fullName)}>{props.children}</img>       
        </div>
        </div>
        
    )
   
}
Profile.propTypes = {
    fullName :PropTypes.string ,
    bio:PropTypes.string ,
    pic:PropTypes.string}


 
    


export default Profile
