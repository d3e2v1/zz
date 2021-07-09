import React from 'react'
import { Link } from 'react-router-dom';
import './home.css'
import img1 from '../../assets/image1.webp'
import img2 from '../../assets/image2.jpg'
import img3 from '../../assets/a1.png'
import img4 from '../../assets/f1.png'
import img5 from '../../assets/rose.png'
import img6 from '../../assets/rose1.png'
import ReactPlayer from "react-player";
function Home()
{
    return(
        <div>

{/* ----------------------------------visible in large ---------------------------------- */}


<div class=" uk-visible@s">
<div class="uk-child-width-1-2@l uk-child-width-1-2@m uk-child-width-1-1@s uk-grid">
<div> 
<div class="uk-child-width-1-3@l uk-child-width-1-3@m uk-child-width-1-3@s uk-grid uk-visible@s" style={{marginLeft:"5%"}}>
  <div class="div2" style={{textAlign:"right",paddingRight:"2%",marginTop:"3%"}}>
   <p class="" style={{fontSize:"25px",color:"#ef1372",lineHeight:"28px",marginBottom:"10px"}}>
   SAT<br/>
   7TH NOV<br/>
   2020  <br/>  
   </p>
   <p class="" style={{fontSize:"20px",color:"#ef1372",lineHeight:"7px"}}>
   10:40 a.m.
   </p>
  </div>

  <div style={{borderLeft:"1px solid #ef1372",textAlign:"left",paddingLeft:"1%",fontSize:"55px",color:"#ef1372",width:"20%",marginTop:"3%",marginBottom:"3%"}}>233</div>
  <div style={{textAlign:"left",paddingLeft:"0%",paddingTop:"",marginTop:"5%"}}>
    <p style={{fontSize:"25px",color:"#ef1372",lineHeight:"30px",marginTop:""}}>  
    DAYS<br/>
    AGO
    </p>


  </div>

</div>




<div class="" style={{marginLeft:"20%",marginTop:"7%"}}> 
        <span class="span100">Sreejith</span>
        <span class="span101">&</span><br/>
        <span class="span1">Shalin</span><br/>
        <p class=" uk-card para uk-visible@s">We are delighted to invite you to
        our wedding and be part of our happiness.</p>
       </div>
</div>
<div>
     <img  class=" "  src={img1}/>  
     
</div>


      <div>
      <img class="im1" src={img5}></img>
      <a class="" href="#" >
   <button class="uk-button uk-button-default " style={{color:"#ef1372",borderRadius:"20px",textTransform:"initial",marginLeft:"5%",marginLeft:"30%"}} href="#">Get Direction</button>
   </a>
      <p class=" uk-card  para1">Venue: Pattath (Bride’s residence),<br/>
     Sreekrishnapuram Landmark - KTDC hotel, <br/>Sreekrishnapuram</p>
     <p class="para2  ">Guest contact: 9884682549</p>
     
     <p class="" style={{marginLeft:"15%"}} >
     <ReactPlayer url="https://www.youtube.com/watch?v=6Z22vJvlSe0&t=4s" controls={true} /> 
      </p>
     
      </div>
    </div>




    <div class="uk-child-width-1-2 uk-grid " style={{marginLeft:"4%",height:"80%"}} >
    <div class=""  style={{height:"500px"}}>
    <ReactPlayer url="https://youtu.be/Y-xLqxR7i-M" controls={true} /> 
  </div>

    <div>
    <img class="imgg uk-align-right" style={{height:"500px"}} src={img2}></img><br/>
    <a href="/Nav" >
    <button class="uk-button uk-button-default " style={{color:"#ef1372",borderColor:"#ef1372",borderRadius:"20px",textTransform:"initial",marginLeft:"10%"}} >Our Photos</button>
   </a>
   
   </div>
  </div>

</div>

{/* -------------------------------------visible in large end------------------------------------------- */}


{/* -------------------------------------visible in small ------------------------------------------- */}

<div class="uk-hidden@s">

<div class="uk-child-width-1-2 uk-grid " style={{marginTop:"6%"}}>
  <div class="" style={{textAlign:"right",paddingRight:"2%",marginTop:"2%"}}>
   <p class="" style={{fontSize:"25px",color:"#ef1372",lineHeight:"28px",marginBottom:"10px"}}>
   SAT<br/>
   7TH NOV<br/>
   2020  <br/>  
   </p>
   <p class="" style={{fontSize:"20px",color:"#ef1372",lineHeight:"7px"}}>
   10:40 a.m.
   </p>
  </div>
<div class="uk-child-width-1-2 uk-grid">
  <div class="" style={{borderLeft:"1px solid #ef1372",textAlign:"left",paddingLeft:"1%",fontSize:"45px",color:"#ef1372",width:"20%",marginTop:"3%",marginBottom:"3%"}}>233</div>
  <div class="" style={{textAlign:"left",paddingLeft:"0%",paddingTop:"",marginTop:"8%",marginLeft:"49px"}}>
    <p style={{fontSize:"25px",color:"#ef1372",lineHeight:"30px",marginTop:""}}>  
    DAYS<br/>
    AGO
    </p>
  </div>
</div>
</div>






<div style={{marginTop:"6%"}}>
     <img  class=" "  src={img1}/>  
     <p class="span99">Sreejith & Shalin</p>
     <p class=" uk-card para20  ">We are delighted to invite you<br/> to
        our wedding and be part of<br/> our happiness.</p>
        <img class="im3" src={img6}></img>
        
      <p class=" uk-card  para110">Venue: Pattath (Bride’s residence),<br/>
     Sreekrishnapuram Landmark - KTDC hotel, <br/>Sreekrishnapuram</p>
     <a class="" href="#" >
   <button class="uk-button uk-button-default " style={{color:"#ef1372",borderRadius:"20px",textTransform:"initial",marginLeft:"5%",marginLeft:"30%"}} href="#">Get Direction</button>
   </a>
     <p class="para201 ">Guest contact: 9884682549</p>
    
</div>
<p class="pa1">
     <ReactPlayer url="https://www.youtube.com/watch?v=6Z22vJvlSe0&t=4s" controls={true} width="330px"
            height="200px" /> 
      </p>
      <div class="uk-child-width-1-2 uk-grid uk-grid-collapse">
        <div class="uk-width-2-5">
        <img class="im2" src={img5}></img><br/>
        <a href="/Nav" >
             <button class="uk-button uk-button-default " style={{color:"#ef1372",borderColor:"#ef1372",borderRadius:"20px",textTransform:"initial",marginLeft:"5%"}} >Our Photos</button>
       </a>
        </div>
        <div class="uk-width-3-5">
        <img class=" uk-align-right" style={{height:"230px",width:"280px"}} src={img2}></img><br/>
        </div>
      
      </div>
      <p class="pa1"  >
     <ReactPlayer url="https://youtu.be/Y-xLqxR7i-M" controls={true} width="330px"
            height="200px" /> 
      </p>

  </div>
{/* -------------------------------------visible in small end------------------------------------------- */}
  





{/* slideshow1 */}
 <div class="" > 
        <div uk-slideshow="autoplay: true; autoplay-interval: 30000; max-height: 250 " >
        <div class="uk-position-relative uk-visible-toggle uk-light  uk-padding-remove ">
            <ul class="uk-slideshow-items"  >
          <li>
            <div>
            <div class="uk-card uk-align-center uk-width-1-1@s uk-width-1-2@l uk-width-1-2@m span181 " >
              <span class="ss1">Congratulations on your wedding buddy! 
                  May the love you have for each
                   other continue to grow and blossom with each passing year. May your marriage 
                   be blessed with love, joy, and companionship for all the years of your life.<br/>&nbsp;&nbsp;
                  <svg style={{width:"2%",height:"3%",color:"#ef1372"}} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"><switch><g><path d="M16.143 18.594h-.1c-6.6-2.5-7.4-5.9-7.4-8.6 0-2.5 1.8-4.5 3.9-4.5 1.5 0 2.9.8 3.6 2.1.7-1.3 2.1-2.1 3.6-2.1 2.2 0 3.9 2 3.9 4.5 0 2.7-.8 6.1-7.4 8.6h-.1zm-3.5-12.5s-.1 0 0 0c-1.8 0-3.3 1.7-3.3 3.8 0 2.4.8 5.6 6.8 7.9 6.1-2.4 6.8-5.5 6.8-7.9 0-2.1-1.5-3.8-3.2-3.8-1.5 0-2.9 1-3.3 2.4 0 .1-.2.2-.3.2-.2 0-.3-.1-.3-.3-.4-1.3-1.7-2.3-3.2-2.3zM6.343 8.494h-5.7c-.2 0-.3-.2-.3-.3s.2-.3.3-.3h5.7c.2 0 .3.2.3.3s-.1.3-.3.3zM6.343 12.394h-5.7c-.2 0-.3-.2-.3-.3 0-.2.2-.3.3-.3h5.7c.2 0 .3.2.3.3.1.1-.1.3-.3.3zM6.343 16.194h-2.5c-.2 0-.3-.2-.3-.3s.2-.3.3-.3h2.5c.2 0 .3.2.3.3s-.1.3-.3.3z"></path></g></switch></svg>
                  <a href="/Wish" >
        <p class="uk-align-right p123">Read More...</p></a>
                Smrithi Prasad</span>
          </div>
          </div>
        </li>
       
                
        <li>
            <div>
            <div class="uk-card uk-align-center uk-width-1-1@s uk-width-1-2@l uk-width-1-2@m span11" >
              <span class="ss1">Heartfelt congratulations to you macha! Like today, may every other day of 
        your life be filled with love and compassion! Here's to a beautiful couple and 
        a lifetime of wonderful memories.<br/>&nbsp;&nbsp;
        
        <svg style={{width:"2%",height:"3%",color:"#ef1372"}} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"><switch><g><path d="M16.143 18.594h-.1c-6.6-2.5-7.4-5.9-7.4-8.6 0-2.5 1.8-4.5 3.9-4.5 1.5 0 2.9.8 3.6 2.1.7-1.3 2.1-2.1 3.6-2.1 2.2 0 3.9 2 3.9 4.5 0 2.7-.8 6.1-7.4 8.6h-.1zm-3.5-12.5s-.1 0 0 0c-1.8 0-3.3 1.7-3.3 3.8 0 2.4.8 5.6 6.8 7.9 6.1-2.4 6.8-5.5 6.8-7.9 0-2.1-1.5-3.8-3.2-3.8-1.5 0-2.9 1-3.3 2.4 0 .1-.2.2-.3.2-.2 0-.3-.1-.3-.3-.4-1.3-1.7-2.3-3.2-2.3zM6.343 8.494h-5.7c-.2 0-.3-.2-.3-.3s.2-.3.3-.3h5.7c.2 0 .3.2.3.3s-.1.3-.3.3zM6.343 12.394h-5.7c-.2 0-.3-.2-.3-.3 0-.2.2-.3.3-.3h5.7c.2 0 .3.2.3.3.1.1-.1.3-.3.3zM6.343 16.194h-2.5c-.2 0-.3-.2-.3-.3s.2-.3.3-.3h2.5c.2 0 .3.2.3.3s-.1.3-.3.3z"></path></g></switch></svg>
        <a href="/Wish" >
        <p class="uk-align-right p123">Read More...</p></a>
Tamil</span>
          </div>
          </div>
        </li>



        <li>
            <div>
            <div class="uk-card uk-align-center uk-width-1-1@s uk-width-1-2@l uk-width-1-2@m span12" >
              <span class="ss1">Sreejith!! I need our tanker memories rather than just stories! Hoping that 
        we meet and celebrate this soon 🎉. Wishing you all the best for entering a new chapter 
        of life. Stay blessed and take care you both!<br/> &nbsp;&nbsp;
        
<svg style={{width:"2%",height:"3%",color:"#ef1372"}} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"><switch><g><path d="M16.143 18.594h-.1c-6.6-2.5-7.4-5.9-7.4-8.6 0-2.5 1.8-4.5 3.9-4.5 1.5 0 2.9.8 3.6 2.1.7-1.3 2.1-2.1 3.6-2.1 2.2 0 3.9 2 3.9 4.5 0 2.7-.8 6.1-7.4 8.6h-.1zm-3.5-12.5s-.1 0 0 0c-1.8 0-3.3 1.7-3.3 3.8 0 2.4.8 5.6 6.8 7.9 6.1-2.4 6.8-5.5 6.8-7.9 0-2.1-1.5-3.8-3.2-3.8-1.5 0-2.9 1-3.3 2.4 0 .1-.2.2-.3.2-.2 0-.3-.1-.3-.3-.4-1.3-1.7-2.3-3.2-2.3zM6.343 8.494h-5.7c-.2 0-.3-.2-.3-.3s.2-.3.3-.3h5.7c.2 0 .3.2.3.3s-.1.3-.3.3zM6.343 12.394h-5.7c-.2 0-.3-.2-.3-.3 0-.2.2-.3.3-.3h5.7c.2 0 .3.2.3.3.1.1-.1.3-.3.3zM6.343 16.194h-2.5c-.2 0-.3-.2-.3-.3s.2-.3.3-.3h2.5c.2 0 .3.2.3.3s-.1.3-.3.3z"></path></g></switch></svg>



        <a href="/Wish" >
        <p class="uk-align-right p123">Read More...</p></a>
        Utkarsh (Ut)</span>
       
          </div>
          </div>
        </li>


          
         </ul>
        </div>
      <br/>
     </div>
    </div><br/> 
    <p>
   <a class="uk-visible@s" href="/sendwish" >
   <button class="uk-button uk-button-default " style={{backgroundColor:"#ef1372",color:"white",borderRadius:"20px",textTransform:"initial",marginLeft:"10%",marginLeft:"47%"}} href="#">Send Your Wishes</button>
   </a>
   <a class="uk-hidden@s" href="/sendwish" >
   <button class="uk-button uk-button-default " style={{backgroundColor:"#ef1372",color:"white",borderRadius:"20px",textTransform:"initial",marginLeft:"10%",marginLeft:"30%"}} href="#">Send Your Wishes</button>
   </a>
   </p>
        {/* slideshow1 end */}



<div class="uk-card uk-card-body imgg11 uk-visible@s" >
<span class="imgg41" >EVENTS SHOT BY</span><br/>
    <img class="imgg21 " src={img3}></img> 
    <img class="uk-align-right imgg31" src={img4}></img>
   <span class="uk-align-right imgg51">POWERD BY</span>
    </div>

<div class="uk-card uk-card-body  imgg11 uk-hidden@s" >
<span class="imgg411 uk-align-center" >EVENTS SHOT BY
<img class="imgg211 uk-align-center" src={img3}></img></span> <br/>
<span class=" uk-align-center imgg311">POWERD BY <img class="imgg511 " src={img4}></img></span>
</div>




       


        </div>
        );
    }
     export default Home;