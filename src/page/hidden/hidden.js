import React from 'react'
import { Link } from 'react-router-dom';
import './hidden.css'


function Hidden()
{
    return(
        <div>


<div class="uk-inline uk-width-1-1  " style={{height:"100%"}}>
<a href="/Nav" uk-icon="icon: arrow-left"></a>

   <div class="uk-visible@s" style={{marginBottom:"30%"}}>
   
            <div class=" uk-align-center  h121" >
                 <p>Happily Bonded Shalini & Sreejith</p>
                 <p class="h12">Hidden Photos</p>
            </div>
        <form><div class="uk-margin h131">
        <input class="uk-input uk-form-width-large " type="text" placeholder="Enter PIN to view hidden photos"/>
        </div></form> 
     </div>   



     <div class="uk-hidden@s" style={{marginBottom:"130%"}}>
    <div class=" uk-align-center  h121" >
                 <p>Happily Bonded Shalini & Sreejith</p>
                 <p class="h12">Hidden Photos</p>
            </div>
        <form><div class="uk-margin h131">
        <input class="uk-input uk-form-width-large " type="text" placeholder="Enter PIN to view hidden photos"/>
        </div></form> 
     </div>  


     
    <div class="uk-overlay-primary uk-position-cover"></div>
    <div class="uk-overlay uk-position-center ">
                
<div class="uk-card uk-card-body " style={{backgroundColor:"white"}}>
      
      <p class="p101">PIN</p>
      <form><div class="uk-margin " >
      <input class="uk-input uk-form-width-medium " type="text" placeholder="eg:1234"/>
      </div></form> 
     <span class="sp1">Forgot your PIN? check your email/ask your photographer</span><br/><br/>
     <a href="/Rejected" >
     <button class="uk-button uk-button-default " style={{color:"black",fontWeight:"500"}} >Cancel</button>
     </a>&nbsp;&nbsp;&nbsp;&nbsp;
     <a href="" >
     <button class="uk-button uk-button-default  " style={{color:"white",backgroundColor:"blue",fontWeight:"500"}} >enter</button>
     </a>
     
</div>

    </div>
    </div>

{/* ---------------------------------------------------------------------------- */}





    </div>
    






        );
    }
     export default Hidden;
