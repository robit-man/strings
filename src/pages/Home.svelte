<script>
import { onMount } from "svelte";



</script>

<main>
    
    <div class="wrapper">

        <div class="top">
            <div class="section-padding full-width light">
                <div class="inner-data" style="
                position: relative;
                z-index: 1;">
                    <h1>Decentralized Generative Pre-Trained Transformers</h1>
                    <h3 style="font-weight:00;letter-spacing:1px;margin-bottom:4rem;">DGPT-1 is architected to be the largest non-sparse autoregressive language built through decentralized deep learning models</h3>
                    <a href="https://xiprotocol.io/#/"><button>POWERED BY XI</button></a>
                </div>
                <div class="arrow" style="
                z-index: 1;"><img src="/imgs/71514.png" alt=""></div>
                <canvas style="filter: brightness(0)contrast(5);
                transform: scale(4);
                position: relative;
                z-index: 0;
                " id="dotty"></canvas>
                <script src="https://pointblank.company/network.js"></script>

            </div>
        </div>
        <div class="bottom">
            <div class="section-padding first-half dark">
                <img src="/imgs/eyeclosed.png" alt="logo">

                <div class="inner-data secondary">
                    <h1>DUPT</h1>
                    <h3 style="font-weight:00;letter-spacing:1px;margin-bottom:4rem;">Decentralized Unsupervised Pre-Training </h3>
                    <a href="/about"><button>DUPT DOCUMENTATION</button></a>
                </div>

            </div>
            <div class="section-padding second-half lightgray">
                <div class="inner-data secondary">
                    <h1>DSFT</h1>
                    <h3 style="font-weight:00;letter-spacing:1px;margin-bottom:4rem;">Decentralized Supervised Fine-Tuning </h3>
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
    display:flex;
    flex-flow:column;
    height:100vh;
    width:100vw;
    filter:invert(1);
}
.top{
    display:flex;
    flex-flow:row;
    height:60vh;
    overflow:hidden;
}
.full-width > .inner-data{
    max-width:720px;
    display:flex;flex-flow:column;justify-content:center;

}
.bottom{
    height:40vh;
    display:flex;flex-flow:row;
    background:#d0d0d0;
}
@keyframes morph{
    0%{    clip-path: polygon(15% 0, 0% 100%, 100% 85%);
    }
    30%{    clip-path: polygon(12% 0, 0% 90%, 100% 90%);

    }
    60%{    clip-path: polygon(18% 0, 0% 95%, 100% 80%);
    }

    100%{    clip-path: polygon(15% 0, 0% 100%, 100% 85%);

    }
}
.arrow{
    display:block;
    min-width:calc(60vw - 120px);
    min-height:calc(60vh - 120px);
    position: absolute;
    border-radius:2rem;
    border-top-right-radius:0%;
    border-bottom-right-radius:0%;
    right:60px;
    display:flex;flex-flow:wrap;justify-content:center;
    mix-blend-mode:soft-light;
}
.arrow > img{
    width:50vh;
    height:50vh;
    margin:auto;}
.first-half{
    display:flex;flex-flow:wrap;justify-content:center;
    width:calc(50vw - 120px);border-top-right-radius:2rem;

    /*clip-path: polygon(calc( 100% - 7rem) 1rem, 100% 6rem, 100% 100%, 0 100%, 0 0);*/
}
.first-half > img{width:20vw;height:20vw;margin:auto;mix-blend-mode:soft-light;}
.first-half > .inner-data{
    margin:auto;max-width:720px;
    border-left: 3px solid rgb(48, 48, 48);
    padding-left:60px;

}
.second-half > .inner-data{
    margin:auto;max-width:720px;
    text-align:right!important;    
    border-right: 3px solid rgb(184, 184, 184);
    padding-right:60px;

}
.second-half > img{filter:invert(1);width:20vw;height:20vw;margin:auto;mix-blend-mode: soft-light;}

.second-half{
    display:flex;flex-flow:wrap;justify-content:center;
    width:calc(50vw - 121px);
    border-left: 1px solid #d0d0d0;
    border-top-left-radius:2rem;
    /*clip-path: polygon(6rem 2rem, 100% 0, 100% 100%, 0 100%, 0 6rem);*/
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
}
.secondary h1{
    text-transform:uppercase;
    margin:unset;
    font-size:8vw;
    line-height: 6vw;
    margin-bottom: 78px;
    margin-left: -16px;
}
.secondary h3{
    text-transform:uppercase;
    margin:unset;
    font-size:20px;
}
.light{
    background:#d0d0d0;
    color:#888;
}
.dark{
    background:#727272;
    color:rgb(48, 48, 48);
}
.lightgray{
    background:#969696;
    color:rgb(184, 184, 184);
}
.light button {
	border:1px solid #888;
	border-radius:0.25rem ;
	padding:0.5rem 1rem;
	color: #d0d0d0;
	background-color: #888;
	outline: none;
	letter-spacing:2px;
	transition:background-color 200ms, color 200ms ease;
}
.light button:hover {
	border:1px solid #888;
	border-radius:0.25rem ;
	padding:0.5rem 1rem;
	color: #888;
	background-color: #d0d0d0;
	outline: none;
}
.lightgray button {
	border:1px solid rgb(184, 184, 184);
	border-radius:0.25rem ;
	padding:0.5rem 1rem;
	color: #969696;
	background-color: rgb(184, 184, 184);
	outline: none;
	letter-spacing:2px;
	transition:background-color 200ms, color 200ms ease;
}
.lightgray button:hover {
	border:1px solid rgb(184, 184, 184);
	border-radius:0.25rem ;
	padding:0.5rem 1rem;
	color: rgb(184, 184, 184);
	background-color: #969696;
	outline: none;
}


.dark button {
	border:1px solid rgb(48, 48, 48);
	border-radius:0.25rem ;
	padding:0.5rem 1rem;
	color: #727272;
	background-color: rgb(48, 48, 48);
	outline: none;
	letter-spacing:2px;
	transition:background-color 200ms, color 200ms ease;
}
.dark  button:hover {
	border:1px solid rgb(48, 48, 48);
	border-radius:0.25rem ;
	padding:0.5rem 1rem;
	color: rgb(48, 48, 48);
	background-color: #727272;
	outline: none;
}



</style>