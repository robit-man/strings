<template>
  <div class="full-wrapper">
 

<div class="about-wrapper">
  <div class="about-text">
       <router-link :to="{ name: 'about' }" >
      <h1 style="color:white;">XI PROTOCOL <img src="~/@/assets/paper.png" style="height:24px;filter:invert(1);" alt="">
      </h1>
    </router-link>
    </div>

    <div class="logo-center-wrapper" style="">
<div class="siblings greek-icons">
  <a target="_blank" href="https://gammaprotocol.io">
<img src="~/@/assets/gamma-26.png" alt="" class="sibling-icon">
</a>
  <a target="_blank" href="https://betaprotocol.io">
<img src="~/@/assets/beta-13.png" alt="" class="middle-1 sibling-icon">
</a>
  <a target="_blank" href="https://kappaprotocol.io">
<img src="~/@/assets/kappa-36.png" alt="" class="middle-2 sibling-icon">
</a>
  <a target="_blank" href="https://rhoprotocol.io">
<img src="~/@/assets/rho_icon-06.png" alt="" class="sibling-icon">
</a>
</div>

      <vh-copy class="para-desktop copy-button"
      :data="'0x295B42684F90c77DA7ea46336001010F2791Ec8c'"
      :confirm_dialog="'buefy'"
      @copied="copiedData">

<jj-parallax-card class="" lightColor="transparent" style="filter:invert(1);margin:auto; width: 512px; height: 512px;" @click="click">
      <div slot="front">
      <img src="~/@/assets/xi_token_icon_v0.1-48.png" width="512px;" height="512px;" class="img-top" alt="">
      </div>
</jj-parallax-card>

      </vh-copy>

      <vh-copy class="para-mobile copy-button"
      :data="'0x295B42684F90c77DA7ea46336001010F2791Ec8c'"
      :confirm_dialog="'buefy'"
      @copied="copiedData">

<jj-parallax-card class="" lightColor="transparent" style="filter:invert(1);margin:auto; width: 300px; height: 300px;" @click="click">
      <div slot="front">
      <img src="~/@/assets/xi_token_icon_v0.1-48.png" width="300px;" height="300px;" class="img-top" alt="">
      </div>
</jj-parallax-card>

      </vh-copy>
 
<div class="siblings">
  <a target="_blank" href="https://app.uniswap.org/#/swap?outputCurrency=0x295B42684F90c77DA7ea46336001010F2791Ec8c">
<img src="~/@/assets/uniswap.png" alt="" class="sibling-icon">
</a>
  <a target="_blank" href="https://etherscan.io/address/0x295B42684F90c77DA7ea46336001010F2791Ec8c">
<img src="~/@/assets/etherscan.png" alt="" class="middle-3 sibling-icon">
</a>
  <a target="_blank" href="https://kek.tools/t/0x295b42684f90c77da7ea46336001010f2791ec8c">
<img src="~/@/assets/kek.png" alt="" class="middle-4 sibling-icon">
</a>
  <a target="_blank" href="https://app.uniswap.org/#/add/0x295B42684F90c77DA7ea46336001010F2791Ec8c/ETH">
<img src="~/@/assets/liquidity.png" alt="" class="sibling-icon">
</a>
</div>

</div>  
<div class="about-text">

      <vh-copy class="copy-button"
      :data="'0xE30385Bb725EDD1C26C083Ef56fe60E3b5528C5d'"
      :confirm_dialog="'buefy'"
      @copied="copiedData">
<h1 style="display:inline;border:1px solid white; border-radius:0.25rem;width:max-content;max-width:330px;margin:auto;padding:0.5rem 1rem"> SALE ADDRESS  </h1>      </vh-copy>
     <br>
     <br>
    <Countdown deadline="June 1, 2022"></Countdown>

    </div>


    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import JJParallaxCard from 'jj-parallax-card'
import Countdown from 'vuejs-countdown'
export default {
  data() {
    return {
      form: {
        quantity: ''
      },
      modalLoginOpen: false,
      modalMakepotionOpen: false
    };
  },
 components: {
   Countdown,
  'jj-parallax-card':JJParallaxCard,
    
  },
};
</script>
<style scoped>
.hasEffect {
  cursor: pointer;
}
</style>

