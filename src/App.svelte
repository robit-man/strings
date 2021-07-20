<script>
    import { Router, Route, Link } from "svelte-routing";
    import Home from "./pages/Home.svelte";
    import About from "./pages/About.svelte";
    export let url = "";
    import { createEventDispatcher, getContext, onMount } from 'svelte';
    import { setContext } from 'svelte';
</script>

<main>
	
    <Router url="{url}">

        <nav>
         
        </nav>

        <Route path="/"><Home /></Route>
        <Route path="about" ><About /></Route>

    </Router>

    <div class="section" style="margin-top: -100px">
        <div class="container">
            <div class="linebreak"></div>
        </div>
    </div>

    <div class="footer">
        <div class="socials">
        </div>
    </div>


    <script type="text/javascript" src="/script.js"></script>
</main>

<style>
	main {
		text-align: center;
		padding: 0rem;
		width:100vw;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>