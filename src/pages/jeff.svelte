<script>
    import { Router, Link, Route, link } from "svelte-routing";
    import { slide } from 'svelte/transition';
    import Speedometer from "svelte-speedometer";

    let kia = 0;
    function kiaSoul(event) {
        kia = kia + 99;
    }
</script>

<main>
<div class="greg" >
    <h1 transition:slide >
        hell
    </h1>
    <p transition:slide >kjsfhaigh suifhjskd sakj hlksjfh skfjghksjfhgjdkfhg dfkghfdksfhg kfhgdjfhg kdkjdfhs gkjsdhf gkjhdkfg hdkfg jhdkfjhg dkfjhgkdjhgkdshrudhgsi4hesheruh8754 83 iuerhg73hhg</p>
    <Link  to="/"><button>jifg</button></Link>
    <button on:click={kiaSoul}>{kia} kias</button>
    Speedometer <Speedometer />
</div>

</main>

<style>
.greg {
    width: 100vw;
    height:50vh;
    background-color: yellow;
}
button {
	border:1px solid black;
	border-radius:0.25rem ;
	padding:0.5rem 1rem;
	margin:unset;
	color: white;
	background-color: black;
	outline: none;
	letter-spacing:2px;
	transition:background-color 200ms, color 200ms ease;
}
button:hover {
	border:1px solid black;
	border-radius:0.25rem ;
	padding:0.5rem 1rem;
	color: black;
	background-color: white;
	outline: none;
}
.greg > h1{
    color: tomato;
}

</style>
