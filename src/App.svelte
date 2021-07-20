<script>
    import { Router, Route, Link } from "svelte-routing";
    import Home from "./pages/Home.svelte";
    import About from "./pages/About.svelte";
    import Four from "./pages/Four.svelte";
    export let url = "";
    import { createEventDispatcher, getContext, onMount } from 'svelte';
    import { setContext } from 'svelte';
</script>

<div class="main">
	
    <Router url="{url}">

        <Route path="/"><Home /></Route>
        <Route path="about" ><About /></Route>
        <Route path="/*"><Four /></Route>

    </Router>
	
    <script type="text/javascript" src="/script.js"></script>
</div>>
<style>
	.main {
		text-align: center;
		padding: 0rem;
		width:100vw;
		margin: 0 auto;
	}

</style>