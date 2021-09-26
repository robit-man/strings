<script>
import { onMount, getContext} from 'svelte';
import { slide, fade } from 'svelte/transition';
import { address, contract, provider, nfts, balances } from '../store';
import { Swiper, SwiperSlide } from 'swiper/svelte';
import "swiper/css/pagination"
import Card from "../cards/dex.svelte"


    //Help import data from opensea and pass into SwiperSlide <3 
    import { 
        initProvider,
    } from '../utils.js';
import 'swiper/css';
async function connectEthProvider(reconnect=false) {
    if(!$address) {
        await initProvider(app, reconnect);
        $address = $address;
    }
}import SwiperCore, {
  Pagination
} from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination]);


function connectWallet(event) {
    connectEthProvider(false);
}   
var metadata = {
     "name": "SpacePepesFTM",
     "description": "STRINGS",
     "image": 'https://spacepepes.com/pepes/',
     "external_url": 'https://spacepepes.com/pepes/'
};
</script>

<main>
  <section class="fw first">
    <div class="constraint hero">
      <h1 class="hero-h1">STRINGS</h1>
      <div class="button-row">
        <button>MINT</button>
        <button>BROWSE</button>
      </div>
    </div>
    <img src="/imgs/wave.svg" class="herobottom" alt="">
<iframe class="stringhero" src="/strings.html" frameborder="0"></iframe>  
</section>
<section class="second">

    <div class="container">
      <div class="box">
        <h1>TITLE</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </div>
      <div class="box"></div>
      <div class="box"></div>
    </div>

</section>
<section class="third">
  <img src="/imgs/arrowbottom.svg" alt="" class="arrowtop">
  <div class="constraint"> 
    <Swiper style="padding-bottom:6rem;height:max-content!important;margin:auto!important;"
    spaceBetween={50}
    slidesPerView={1}
    on:slideChange={() => console.log('slide change')}
    on:swiper={(e) => console.log(e.detail[0])}
  >
  
  <SwiperSlide>  
    <Card  />
    
  </SwiperSlide>
  <SwiperSlide>  
    <Card  />
    
  </SwiperSlide>
  <SwiperSlide>  
    <Card  />
    
  </SwiperSlide>
 
</Swiper></div>
</section>
<section class="fourth">
  <img src="/imgs/footer.svg" alt="" class="arrowtop">
  <div class="constraint"> 
   
  <footer><div class="nav-links">
    <a target="_blank" href="https://twitter.com/spacepepes"><img width="64px" style="filter:invert(1);" src="/imgs/twitter.png" alt="">
    </a>
    <a target="_blank" href="https://discord.gg/5WrhVV5vJA"><img width="64px" style="filter:invert(1);" src="/imgs/discord.png" alt="">
        </a>
  </div>
<h1>STRINGS</h1></footer>
  </div>
</section>
</main>

<style type="text/scss">
  .constraint{padding-top:6rem;margin:auto;max-width:1024px;padding-left:1.5rem;padding-right:1.5rem;}
  .fw{}
  @keyframes glow{
    0%{		text-shadow: 2px 2px 2px rgba(0, 162, 255, 0.5), 2px -2px 5px rgba(255, 208, 0, 0.5), -2px 2px 2px  rgba(255, 0, 0, 0.5);
}   50%{		text-shadow: 2px -2px 5px rgba(0, 162, 255, 0.5), -2px 2px 0px rgba(255, 208, 0, 0.5), 2px -2px 5px  rgba(255, 0, 0, 0.5);
}   100%{		text-shadow: 2px 2px 2px rgba(0, 162, 255, 0.5), 2px -2px 5px rgba(255, 208, 0, 0.5), -2px 2px 2px  rgba(255, 0, 0, 0.5);
}
  }
  .hero-h1{animation:glow 5s ease infinite;font-size: 7rem; letter-spacing:4px;}
  .hero{position:absolute;height:512px;top:calc(50vh - 256px);z-index:5;width:1024px;left:calc(50vw - 512px);}
  .stringhero{position:relative;overflow:hidden;width:100vw;height:100%;min-height:100vh;}
  .first{margin-top: calc(-100px - 2rem);}
  .second{background:#f0f0f0;margin:unset;}
  .third{background:#BABABA;}
  .fourth{background:#222;}
  .box > h1{margin:unset!important;text-align:left;color:#555;}
  .box > p{text-align:left;color:#555;
  }
.nav-links{display:flex;flex-flow:row;justify-content:space-around;}
.nav-links > a{margin:1rem;transition:transform 0.2s ease;}
.icon-box > a{margin:1rem;transition:transform 0.2s ease;}
.nav-links > a:hover{transform:scale(1.1);}
.icon-box > a:hover{transform:scale(1.1);}
  .herobottom{position: absolute;
bottom: -10px;
width: 105vw;
z-index: 8;
left: -3vw;} 
.arrowtop{position: relative;
top: -10px;
width: 105vw;
z-index: 8;
left: -5vw;}
    .container {padding-bottom:6rem;padding-top:3rem;
      background: #f0f0f0;
      box-sizing: border-box;
      display: flex;
      flex-flow:wrap;
      justify-content: center;
      align-items: center;
      width: 100vw;
      height: auto;
    }
    section{min-height:50vh;}
    .box {
      border-radius: 20px;
      padding:2rem;
      margin:2rem;
      color:#333;
      width: 480px;
      min-height:280px;
        height: auto;
        background: #fafafa;
        box-shadow:  40px 40px 40px #cccccc,
                     0 0 0 #ffffff,
                     0 0 0 #cccccc inset,
                     2px 2px 2px #ffffff inset;
      /*animation: anime 3s cubic-bezier(0.16, 1, 0.3, 1) 1s infinite alternate;*/
      /* animation-fill-mode: forwards; */
    }

    @keyframes anime {
      0% {
        width: 60px;
        height: 60px;
        background: #f0f0f0;
        box-shadow:  0 0 0 #cccccc,
                     0 0 0 #ffffff,
                      10px 10px 10px #cccccc inset,
                      -10px -10px 10px #ffffff inset;
      }
      25% {
        width: 60px;
        height: 60px;
        background: #f8f8f8;
        box-shadow:  10px 10px 10px #cccccc,
                     10px 10px 10px #ffffff,
                     0 0 0 #cccccc inset,
                     0 0 0 #ffffff inset;
      }
      50% {
        width: 60px;
        height: 240px;
        background: #f8f8f8;
        box-shadow:  10px 10px 10px #cccccc,
                     10px 10px 10px #ffffff,
                     0 0 0 #cccccc inset,
                     0 0 0 #ffffff inset;
      }
      100% {
        width: 480px;
        height: 240px;
        background: #fafafa;
        box-shadow:  40px 40px 40px #cccccc,
                     0 0 0 #ffffff,
                     0 0 0 #cccccc inset,
                     2px 2px 2px #ffffff inset;
      }
      }
</style>
