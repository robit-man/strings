<script>
import { onMount } from "svelte";
import { slide } from 'svelte/transition';
import { Router, Link, Route } from "svelte-routing";


</script>

<main>
    
    <div class="wrapper">

        <div class="top">
            <div class="section-padding full-width light">
                <div transition:slide  class="inner-data" style="
                position: relative;
                z-index: 1;">
                    <h1>Decentralized Generative Pre-Trained Transformers</h1>
                    <div class="description">
                    <h3 style="font-weight:200;letter-spacing:1px;margin-bottom:2rem;">DGPT-1 is architected to be the largest non-sparse autoregressive language built through decentralized deep learning models</h3>
                    <Link style="color:white!important;font-weight:700;top: 3px;
                        left: 26px;z-index:5;" to="about"><button>ABOUT DGPT-1</button></Link></div>
                </div>
            

            </div>
        </div>
        <div class="info-center">
            <h1><b >No</b> Rights Reserved</h1><h3>Open Sourced by GeometricLabs Corporation <br><a style="color:white;text-shadow:1px 1px black;" href="https://opensource.org/">Learn More About The Benefits of OpenSource</a></h3>
           
        </div>
        <div class="bottom">
            <div class="section-padding first-half dark">
                <img src="/imgs/eyeclosed.png" alt="logo">

                <div class="inner-data secondary" transition:slide >
                    <h1>DUPT</h1>
                    <h3 style="font-weight:200;letter-spacing:1px;margin-bottom:2rem;">Decentralized Unsupervised Pre-Training </h3>
                    <a href="/about"><button>DUPT DOCUMENTATION</button></a>
                </div>

            </div>
            <div class="section-padding second-half lightgray">
                <div class="inner-data secondary" transition:slide >
                    <h1>DSFT</h1>
                    <h3 style="font-weight:200;letter-spacing:1px;margin-bottom:2rem;">Decentralized Supervised Fine-Tuning </h3>
                    <a href="/about"><button>DSFT DOCUMENTATION</button></a>
                </div>
                <img src="/imgs/eyeopen.png" alt="logo">


            </div>
        </div>

    </div>
<footer></footer>
</main>

<style>

.wrapper{
    overflow:hidden;
    display:flex;
    flex-flow:column;
    background:black;

}
.top{
    min-height:calc(60vh - 60px);
    display:flex;
    flex-flow:row;
    overflow:hidden;
    background:#ff0060;

}
.full-width > .inner-data{
    display:flex;flex-flow:column;justify-content:center;    
    margin:20vw;
}
.bottom{    
    min-height:calc(50vh - 60px);
    display:flex;flex-flow:row;
    background:#000000;
}
@keyframes morph{
    0%{    transform:rotate(0deg);
    }
   
    0%{    transform:rotate(360deg);

    }
}
.full-width{
    clip-path: polygon(100% 0, 100% calc(100% - 4rem), calc(100% - 4rem) 100%, 0 100%, 0 0);
}
.info-center{
	background:white;
    color:black;
    height:10rem;
    display:flex;flex-flow:wrap;justify-content:center;
    right:0px;    
    background:#ff0060;
    z-index:5;
    clip-path: polygon(100% 0, 100% 100%, 4rem 100%, 0 calc(100% - 4rem), 0 0);

}
.info-center > h1{
    text-transform:uppercase;
    font-size:5rem;
    margin:unset;
    line-height:10rem;
    text-shadow: 2px 2px white;
}
.info-center > h3{
    display: flex;
    flex-flow: column;
    justify-content: center;
    text-transform:uppercase;
    margin-left:30px;border-left:3px solid black;
    padding-left:30px;
    text-align:left;
    font-size:20px;
    text-shadow: 1px 1px white;
}
.first-half{
    display:flex;flex-flow:wrap;justify-content:center;
    width:100%;


    clip-path: polygon(calc( 100% - 4rem) 0rem, 100% 4rem, 100% 100%, 0 100%, 0 0);
}
.first-half > .inner-data{
    margin:auto;max-width:800px;
    border-left: 3px solid #ffffff;
    padding-left:30px;margin-left:30px;

}
.second-half > .inner-data{
    margin:auto;max-width:720px;
    text-align:right!important;    
    border-right: 3px solid #000000;
    padding-right:30px;margin-right:30px;

}
.second-half > img{filter:invert(0);width:15vh;height:15vh;margin:auto;margin-left:30px;}
.first-half > img{width:15vh;height:15vh;margin:auto;filter:invert(1);margin-right:30px;}

.second-half{
    display:flex;flex-flow:wrap-reverse;
    width:100%;
    justify-content:center;
    border-left: 1px solid #ffffff;
    border-top-left-radius:2rem;
    clip-path: polygon(4rem 0rem, 100% 0, 100% 100%, 0 100%, 0 4rem);
}
.full-width{
    width:calc(100vw - 60px);
    overflow:hidden;
    display:flex;flex-flow:row;
}
.section-padding{
    padding:30px;
}
.inner-data{
    text-align:left;    
}
.inner-data h1{
    text-transform:uppercase;
    font-size:100px;
    line-height:80px;
    margin-bottom: 2rem;

}
.secondary h1{
    text-transform:uppercase;
    margin:unset;
    font-size:60px;
    line-height: 60px;
    margin-bottom: 2rem;
    margin-left: -8px;
}
.inner-data h3{
    text-transform:uppercase;
    margin:unset;
    font-size:20px;
}
.light{
    background:#000000;
    color:#ffffff;
}
.light > .inner-data > h1{color:#ff0060;}
.dark{
    background:#000000;
    color:#ffffff;
}
.lightgray{
    background:#ffffff;
    color:#000000;
}
.light button {
	border:1px solid #ff0060;
	border-radius:0.24rem ;
	padding:0.4rem 1rem;
	color: #fff;
	background-color: #ff0060;
	outline: none;
	letter-spacing:2px;
	transition:background-color 200ms, color 200ms ease;
}
.light button:hover {
	border:1px solid #ffffff;
	border-radius:0.24rem ;
	padding:0.4rem 1rem;
	color: #ffffff;
	background-color: #000000;
	outline: none;
}
.lightgray button {
	border:1px solid #000000;
	border-radius:0.24rem ;
	padding:0.4rem 1rem;
	color: #ffffff;
	background-color: #000000;
	outline: none;
	letter-spacing:2px;
	transition:background-color 200ms, color 200ms ease;
}
.lightgray button:hover {
	border:1px solid #000000;
	border-radius:0.24rem ;
	padding:0.4rem 1rem;
	color: #000000;
	background-color: #ffffff;
	outline: none;
}


.dark button {
	border:1px solid #ffffff;
	border-radius:0.24rem ;
	padding:0.4rem 1rem;
	color: #000000;
	background-color: #ffffff;
	outline: none;
	letter-spacing:2px;
	transition:background-color 200ms, color 200ms ease;
}
.dark  button:hover {
	border:1px solid #ffffff;
	border-radius:0.24rem ;
	padding:0.4rem 1rem;
	color: #ffffff;
	background-color: #000000;
	outline: none;
}

@media screen and (max-width: 1600px){

    .inner-data h1{
    text-transform:uppercase;
    font-size:50px;
    line-height:50px;
    margin-bottom: 2rem;

}
.info-center > h3{
    display: flex;
    flex-flow: column;
    justify-content: center;
    text-transform:uppercase;
    margin-left:unset;
    border-left:unset;
    padding-left:unset;
    text-align:center;
    font-size:20px;
    text-shadow: 1px 1px white;
}
.full-width > .inner-data{
    display:flex;flex-flow:column;justify-content:center;    
    margin:auto;
}
.info-center{
    height:auto;
}
.info-center > h1{
    text-transform:uppercase;
    font-size:2.5rem;
    margin:unset;
    line-height:5rem;
    text-shadow: 2px 2px white;
}
    .bottom{
    display:flex;flex-flow:wrap;
    background:#000000;
}
}

</style>