
import React from 'react'
import { Link } from 'react-router-dom';
import './sendwish.css'


function Sendwish()
{
    return(
        <div class="" style={{backgroundColor:"#fcbcd7",paddingTop:"5%",paddingBottom:"65%"}}>

<div class="uk-child-width-1-2@s uk-grid-match " style={{marginLeft:"1%",marginRight:"1%"}} >
<div class="uk-card uk-card-default  uk-card-body uk-align-center card1" style={{marginTop:"5%",backgroundColor:"white"}}>
<div class="uk-margin">
            <textarea class="uk-textarea" rows="5" placeholder=""></textarea>
        </div>
        <form>

    <div class="uk-margin">
        <div uk-form-custom>
            <input type="file"/>
            
        </div>
    </div></form>

   
            <div class="">Your name<br/>
            <input class="uk-text" type="text" placeholder="eg. John Doe"></input></div> <br/>
  <a class="uk-visible@s" href="/" >
   <button  class="uk-button uk-button-default   btn2" style={{color:"#ef1372",borderColor:"#ef1372",borderRadius:"20px",textTransform:"initial",marginLeft:"8%",width:"23%",height:"3%"}} href="#">Close</button></a>
   
   <a class="uk-hidden@s" href="/" >
   <button  class="uk-button uk-button-default   btn2" style={{color:"#ef1372",borderColor:"#ef1372",borderRadius:"20px",textTransform:"initial",width:"30%",height:"3%"}} href="#">Close</button></a>
   
<a href="/sendwish" >
   <button class="uk-button uk-button-default   btn1" style={{backgroundColor:"#ef1372",color:"white",borderRadius:"20px",textTransform:"initial",marginLeft:"6%"}} href="#">Send Your Wishes</button>
</a>
        </div>
        </div>

       




        </div>
        );
    }
     export default  Sendwish;