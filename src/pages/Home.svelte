<script>
import { onMount } from "svelte";
import { slide, fade } from 'svelte/transition';
import { Router, Link, Route } from "svelte-routing";

</script>

<main>
  <div class="wrapper">
      <header>
          <h1 transition:fade datadelay:200 >POINTBLANK</h1>
          <img transition:slide src="/imgs/pointblank.svg" alt="">
      </header>
      <article>
          <p>
              <b transition:fade  >POINTBLANK LLC</b> is a Rapid Prototyping, Consulting, and App Development public benefit company out of Portland Oregon.
          </p>
          
          <p transition:fade >The latest projects we are aiding</p>
          <div class="button-row">
          <a href="https://www.prnewswire.com/news-releases/spacex-to-launch-doge-1-to-the-moon-301287016.html"><button>DOGE-1</button></a>
          <a href="https://dgpt.one/"><button>DGPT-1</button></a>
          <a href="https://noclip.org/"><button>NOCLIP</button></a>
          <a href="https://revest.finance/"><button>REVEST</button></a>
        </div>
    </article>
    <footer transition:slide >
        <div class="row">
        <div class="column">
            <p style="font-size:10px;max-width:128px;">Inquiries will be selected and responses given at our discretion.</p>
            <a href="https://pointblank.company/contact"><button>CONTACT</button></a>
        </div>
        <img class="footer-arrow" src="/imgs/fast-forward.svg" alt="">
        </div>

    </footer>
  </div>
</main>

<style>
.wrapper{max-width:1024px;
    padding:1rem;
    margin: auto;}
header{
    margin-top:6rem;
    background:white;
    width:calc(100% - 2rem);
    padding:1rem;
    max-height:30vh;
    height:256px;
    display: flex;
    flex-flow: row;
    justify-content: flex-end;
    clip-path: polygon(1rem 0, 100% 0, 100% 100%, 0 100%, 0 1rem);
    pointer-events: none;
    border-bottom-right-radius: 700px;
    border-top-right-radius: 700px;
}
header > h1{
    text-align:left;
    margin-top:auto;
    margin-right:auto;
    margin-left:0.5rem;
    margin-bottom: unset;
}
header > img{
    position: absolute;
    height:inherit;

}
footer{
    margin-top: 2rem;
    padding: 2rem;
    border: 10px solid;
    border-image-slice: 1;
    border-width: 5px;    
    width: max-content; 
    border-image-source: linear-gradient(to left, black, black, white);
}
footer > .row p{
    color:white;
    text-align:left;
    margin-top:-4px;
}
article{
    padding:0.5rem 0rem;
    margin-top:2rem;
    max-width:512px;
}
article > p{
    text-align: left;
    color:white;
}
.row{display:flex;flex-flow:row;}
.column{display:flex;flex-flow:column;}
.button-row{
    display: flex;
    flex-flow: wrap;
    max-width: 80vw;
}
.footer-arrow{
    filter: invert(1);
    margin-left: 2rem;
    height: 145px;
    margin-top: -20px;
    margin-bottom: -20px;
}
.button-row > a {margin-right:0.5rem;
margin-bottom:0.5rem;}
@media screen and (max-width: 1600px){

}

</style>