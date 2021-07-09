import React from 'react'
import { Link } from 'react-router-dom';
import './nav.css'
import img1 from '../../assets/a1.png'

function Nav()
{
    return(
        <div class=" ">
<div class="nav1 uk-align-right" style={{marginTop:"2%"}}>
<i class="share icon"></i>
<span uk-icon="forward"></span>
<a class="nav12" href="#">share</a>&nbsp;&nbsp;
<a class="nav12" href="#">more</a>&nbsp;&nbsp;
<div class="uk-inline">

    <button class="uk-button "   uk-icon="more-vertical" type="button"></button>
    <div uk-drop="mode: click">
    <a href="/hidden" >
        <div class="uk-button  uk-button-default btn01" style={{textTransform:"initial"}}>View hidden photos</div></a>
    </div>
</div>
</div><br/>


<div class=""><img class="uk-align-center imgg22" style={{marginRight:"46%"}} src={img1}></img>
<p class="para33 " >Happily Bonded Shalini & Sreejith</p>
<hr/>
</div>


        </div>
        );
    }
     export default  Nav;