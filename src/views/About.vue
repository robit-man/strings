<template>
  <div class="full-wrapper">
    
  
      <div class="about-wrap">
         <vh-copy class=" copy-button"
      :data="'0xE30385Bb725EDD1C26C083Ef56fe60E3b5528C5d'"
      :confirm_dialog="'buefy'"
      @copied="copiedData">
      Sale Address
</vh-copy><br><br>
         <vh-copy class=" copy-button"
      :data="'0x295B42684F90c77DA7ea46336001010F2791Ec8c'"
      :confirm_dialog="'buefy'"
      @copied="copiedData">
      Contract Address
</vh-copy><br><br>
<p>

THE XI PROTOCOL IS COMPRISED OF MINTING XI UTILITY TOKENS TO BE EXCHANGED WITH ETH, AND STAKING FOR AN EVENTUALLY CORRECT METAORACLE WITH XI UTILITY TOKENS ONCE COUNTDOWN ENDS

<br><br> ETH EXCHANGED FOR XI AFTER MINTING WILL, OVER THE DURATION OF THE COUNTDOWN, BE ALLOCATED:

<br>
50% SWAP ETH/XI on UNISWAP<br>
50% TEAM</p>    <br>    <router-link :to="{ name: 'home' }" >
     <img src="~/@/assets/xi_token_icon_v0.1-48.png" style="height:64px;filter:invert(1);" alt="">
    </router-link></div>

  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
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
  },
};
</script>
<style scoped>
.hasEffect {
  cursor: pointer;
}
</style>

