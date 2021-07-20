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
                    <h1 >Decentralized Generative Pre-Trained Transformers</h1>
                    <div class="description">
                    <h3 style="font-weight:200;letter-spacing:1px;margin-bottom:2rem;">DGPT-1 is architected to be the largest non-sparse autoregressive language built through decentralized deep learning models</h3>
                    <a href="https://xiprotocol.io/#/"><button>POWERED BY XI</button></a></div>
                </div>
                <div class="arrow"><img src="/imgs/hyper.gif" alt=""></div>
                <canvas style="filter: brightness(10)contrast(1);
                position: absolute;
                z-index: 0;
                " id="dotty"></canvas>
                <script src="https://pointblank.company/network.js"></script>

            </div>
        </div>
        <div class="info-center">
            <h1>No Rights Reserved</h1>
            <div class="about">
                <Link style="color:white!important;font-weight:700;top: 3px;
                position: absolute;
                left: 26px;z-index:5;" to="about">ABOUT</Link>
            </div>
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
    height:100vh;
    width:100vw;
}
.top{
    display:flex;
    flex-flow:row;
    height:60vh;
    overflow:hidden;
}
.full-width > .inner-data{
    display:flex;flex-flow:column;justify-content:flex-start;    
    max-width:calc(50vw - 60px);

}
.bottom{
    height:40vh;
    display:flex;flex-flow:row;
    background:#000000;
}
@keyframes morph{
    0%{    transform:rotate(0deg);
    }
   
    0%{    transform:rotate(360deg);

    }
}

.info-center{
	background:white;
    color:black;
    width:25rem;
    left:calc(50vw - 17.25rem);
    top:50vh;
    height:7rem;
    display:flex;flex-flow:wrap;justify-content:center;
    transform:rotate(45deg);
    position:absolute;    z-index:5;

}
.info-center > h1{
    margin:auto;
    text-transform:uppercase;
}
.info-center > .about{
    position:absolute;transform:rotate(-90deg);top:calc(2.4rem - 1px);left:-4.5rem;
    border:3px solid white;width:calc(7rem - 6px);height:2rem;

}
.secondary{
    z-index:1;
}
.arrow{
    display:block;
    min-width:calc(60vw - 120px);
    min-height:calc(60vh - 120px);
    position: absolute;
    border-radius:2rem;
    border-top-right-radius:0%;
    border-bottom-right-radius:0%;
    right:0px;
    display:flex;flex-flow:wrap;justify-content:center;
}
.arrow > img{
    filter:invert(1);
    width:50vh;
    height:50vh;
    margin:auto;
    animation: morph 100s linear infinite;
}
.first-half{
    display:flex;flex-flow:wrap;justify-content:center;
    width:calc(50vw - 120px);border-top-right-radius:2rem;

    /*clip-path: polygon(calc( 100% - 7rem) 1rem, 100% 6rem, 100% 100%, 0 100%, 0 0);*/
}
.first-half > img{width:15vw;height:15vw;margin:auto;filter:invert(1);}
.first-half > .inner-data{
    margin:auto;max-width:720px;
    border-left: 3px solid #ffffff;
    padding-left:60px;

}
.second-half > .inner-data{
    margin:auto;max-width:720px;
    text-align:right!important;    
    border-right: 3px solid #000000;
    padding-right:60px;

}
.second-half > img{filter:invert(0);width:15vw;height:15vw;margin:auto;}

.second-half{
    display:flex;flex-flow:wrap;justify-content:center;
    width:calc(50vw - 121px);
    border-left: 1px solid #ffffff;
    border-top-left-radius:2rem;
    clip-path: polygon(5rem 0rem, 100% 0, 100% 100%, 0 100%, 0 5rem);
}
.full-width{
    width:calc(100vw - 120px);
    overflow:hidden;
    display:flex;flex-flow:row;
}
.section-padding{
    padding:60px;
}
.inner-data{
    text-align:left;    
}
.inner-data h1{
    text-transform:uppercase;
    font-size:60px;
    margin-bottom: 2rem;

}
.secondary h1{
    text-transform:uppercase;
    margin:unset;
    font-size:120px;
    line-height: 120px;
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
.dark{
    background:#000000;
    color:#ffffff;
}
.lightgray{
    background:#ffffff;
    color:#000000;
}
.light button {
	border:1px solid #ffffff;
	border-radius:0.25rem ;
	padding:0.5rem 1rem;
	color: #000000;
	background-color: #ffffff;
	outline: none;
	letter-spacing:2px;
	transition:background-color 200ms, color 200ms ease;
}
.light button:hover {
	border:1px solid #ffffff;
	border-radius:0.25rem ;
	padding:0.5rem 1rem;
	color: #ffffff;
	background-color: #000000;
	outline: none;
}
.lightgray button {
	border:1px solid #000000;
	border-radius:0.25rem ;
	padding:0.5rem 1rem;
	color: #ffffff;
	background-color: #000000;
	outline: none;
	letter-spacing:2px;
	transition:background-color 200ms, color 200ms ease;
}
.lightgray button:hover {
	border:1px solid #000000;
	border-radius:0.25rem ;
	padding:0.5rem 1rem;
	color: #000000;
	background-color: #ffffff;
	outline: none;
}


.dark button {
	border:1px solid #ffffff;
	border-radius:0.25rem ;
	padding:0.5rem 1rem;
	color: #000000;
	background-color: #ffffff;
	outline: none;
	letter-spacing:2px;
	transition:background-color 200ms, color 200ms ease;
}
.dark  button:hover {
	border:1px solid #ffffff;
	border-radius:0.25rem ;
	padding:0.5rem 1rem;
	color: #ffffff;
	background-color: #000000;
	outline: none;
}
@media screen and (max-width: 1600px) {
    
.full-width > .inner-data{
    min-width:calc(100vw - 120px);
    display:flex;flex-flow:row;justify-content:space-between;

}
.first-half{flex-flow:column-reverse;}
.second-half{flex-flow:column;}
.first-half > .inner-data{
    margin:auto;max-width:720px;
    border-left: 0px solid #ffffff;
    padding-left:0px;    
    border-bottom: 3px solid #ffffff;
    padding-bottom:60px;


}
.second-half > .inner-data{
    margin:auto;max-width:720px;
    border-right: 0px solid #000000;
    padding-right:0px;

    border-bottom: 3px solid #000000;
    padding-bottom:60px;

}
.inner-data > .description{
    padding-left:60px;
    text-align:right;
    width:40vw;
    margin-top: 1rem;
    border-left: 3px solid white;
}
.top .inner-data > h1{margin-top: unset; padding-right:60px;max-width:60vw;}
.top{
    display:flex;
    flex-flow:row;
    height:50vh;
    overflow:hidden;
}
.top > .section-padding{
    padding-bottom:0px;

}
.arrow{
    display:block;
    min-width:calc(20vw - 120px);
    min-height:calc(20vh - 120px);
    position: absolute;
    border-radius:2rem;
    border-top-right-radius:0%;
    border-bottom-right-radius:0%;
    right:60px;
    top:35vh;
    display:flex;flex-flow:wrap;justify-content:center;
}
.arrow > img{
    filter:invert(1);
    width:10vh;
    height:10vh;
    margin:auto;
    animation: morph 100s linear infinite;
}
.bottom{
    height:50vh;
    display:flex;flex-flow:row;
    background:#000000;
}
.info-center{top:40vh;}
}


</style>