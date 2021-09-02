<script>
import { onMount } from "svelte";
import { slide, fade } from 'svelte/transition';
import { Router, Link, Route } from "svelte-routing";
import Card from "../cards/dex.svelte"
import { Swiper, SwiperSlide } from 'swiper/svelte';

import 'swiper/css';
</script>

<main>
  <div class="wrapper">
      <header>
        <div class="nav-row">
          <div class="icon-box">
            <img src="" alt="">
          </div>
          <div class="nav-links">
            <a href=""><h5>Twitter</h5></a>
            <a href=""><h5>Discord</h5></a>
          </div>
        </div>
      </header>
        <Swiper style="
        height: max-content!important;
        margin: auto!important;"
        spaceBetween={50}
        slidesPerView={3}
        on:slideChange={() => console.log('slide change')}
        on:swiper={(e) => console.log(e.detail[0])}
      >
      <SwiperSlide>      
        <Card />
      </SwiperSlide>
      <SwiperSlide>      
        <Card />
      </SwiperSlide>
      <SwiperSlide>      
        <Card />
      </SwiperSlide>
      <SwiperSlide>      
        <Card />
      </SwiperSlide>
      <SwiperSlide>      
        <Card />
      </SwiperSlide>
        ...
      </Swiper>
    <footer transition:slide >
     
    </footer>
  </div>
  <div class="stars"></div>

</main>

<style type="text/scss">

$stars: 350;         // Number of start per layer
$depth: 300;         // Depth between star layers
$speed: 3s;          // Number of seconds to transition between layers
$width: 3000;        // Width of the starfield
$height: 960;        // Height of the starfield

html, body {
  height: 100%;
  overflow: hidden;
}
body {
  background: #000;
  perspective: 340px;
}
.nav-row{
  position: absolute;
  height:100px;top:0px;width:calc(100vw - 4rem);
  display:flex;
  flex-flow:row;
  justify-content: space-between;
  margin:auto;padding:1rem 2rem;
}
.wrapper{    
  position: relative;
  height: 100vh;
    display: flex;
}
.nav-links{display:flex;flex-flow:row;justify-content:space-around;}
.nav-links > a{margin:1rem;}
.stars {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 2px;
  height: 2px;
  $box-shadow: ();
  @for $i from 0 through $stars {
    $box-shadow: $box-shadow, (random($width)-$width/2 + px) (random($height)-$height/2 + px) hsl(90,0,75+random(25));
  }
  box-shadow: $box-shadow;
  animation: fly $speed linear infinite;
  transform-style: preserve-3d;
  
  &:before, &:after {
    content: "";
    position: absolute;
    width: inherit;
    height: inherit;
    box-shadow: inherit;
  }
  &:before {
    transform: translateZ(-$depth + px);
    animation: fade1 $speed linear infinite;
  }
  &:after {
    transform: translateZ(-$depth * 2 + px);
    animation: fade2 $speed linear infinite;
  }
}

@keyframes fly {
  from {
    transform: translateZ(0px);
  }
  to {
    transform: translateZ($depth + px);
  }
}

@keyframes fade1 {
  from {
    opacity: .5;
  }
  to {
    opacity: 1;
  }  
}
@keyframes fade2 {
  from {
    opacity: 0;
  }
  to {
    opacity: .5;
  }  
}
</style>