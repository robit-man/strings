<script>
    import { Router, Route, Link } from "svelte-routing";
    import Home from "./pages/Home.svelte";
    import Mint from "./pages/Mint.svelte";
    import About from "./pages/About.svelte";
    import Four from "./pages/Four.svelte";
    export let url = "";
    import { createEventDispatcher, getContext, onMount } from 'svelte';
    import { setContext } from 'svelte';
</script>

<div class="main">
	<header>
        <div class="nav-row">
          <div class="icon-box">
          </div>
          <div class="nav-links">
            <a target="_blank" href="https://twitter.com/spacepepes"><img width="64px" style="filter:invert(1);" src="/imgs/twitter.png" alt="">
            </a>
            <a target="_blank" href="https://discord.gg/5WrhVV5vJA"><img width="64px" style="filter:invert(1);" src="/imgs/discord.png" alt="">
                </a>
          </div>
        </div>
      </header>
    <Router url="{url}">
        
        <Link style="top:0px;left:opx;position:fixed;z-index:6;" to="/mint"><img style="margin:2.5rem;" height="48px" src="/imgs/mint.png" alt=""></Link>

        <Route path="/"><Home /></Route>
        <Route path="/mint" component={Mint}><Mint /></Route>
        <Route path="/about" component={About}><About /></Route>
        <Route path="/*"><Four /></Route>

    </Router>

    <script type="text/javascript" src="/script.js"></script>
    <footer style="position:absolute;bottom:0px;left:0px;width:100vw;height:auto;">
        <a href="/"><h1 style="width:100vw;text-align:center;font-size:5rem;">SPACEPEPES</h1></a>
    </footer>
</div>
<style>
	.main {
		text-align: center;
		padding: 0rem;
		margin: 0 auto;
	}
    header{z-index:5;position:absolute;}
    .nav-row{
  position: fixed;
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
.nav-links > a{margin:1rem;transition:transform 0.2s ease;}
.icon-box > a{margin:1rem;transition:transform 0.2s ease;}
.nav-links > a:hover{transform:scale(1.1);}
.icon-box > a:hover{transform:scale(1.1);}
</style>