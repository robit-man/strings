<script>
    import { onMount } from "svelte";
    import { slide } from 'svelte/transition';
    import { Router, Link, Route } from "svelte-routing"; 
    
    </script>
    
    <main>
        <div class="main-wrapper">
            <div class="text-wrapper" transition:slide >
                <h1>DGPT-1</h1>
                <p>GeometricLabs Corporation, a Calgary-based decentralized computing company announced on July 17, 2021 that it is developing decentralized generative pre-trained transformers for which no company will have an exclusive license and so that everyone has access to the underlying code for the benefit of all. DGPT-1 is an autoregressive language model that uses deep learning to produce human-like text. It is the first-generation language prediction model in the DGPT-n series, which intends to be the first NLP with trillion(s) of machine learning parameters, enabled through outsourced distributed computing.</p>
                <p>
                    Decentralized Generative Pre-Trained Transformers (DGPT) are constructed through Decentralized Deep Learning (DDL) models resulting from multi-agent distributed consensus of Decentralized Unsupervised Pre-Training (DUPT) followed by Decentralized Supervised Fine-Tuning (DSFT) in the XI Computational Model (XCM).</p>
<p>XI users who participate in DUPT can then participate in DSFT for contributing to DGPT-1 then are rewarded with XI for each byte-pair encoded token contributed to DGPT-1.</p>
<p>DGPT-1 intends to be the largest non-sparse language model with increased capacity and higher number of parameters than any other system including GPT-3 and Turing NLG, the next largest NLP models. DGPT-1 has a weighted average across a finite set of data or compressed data such as </p>
<h3>Common Crawl byte-pair-encoded tokens. </h3>
<h3>WebText2 byte-pair-endcoded tokens. </h3>
<h3>Books1/Books2 byte-pair-endcoded tokens. </h3>
<h3>Wikipedia article byte-pair-endcoded tokens. </h3>
<h3>XI Protocol (meta)oracles and oracle arbiters. </h3>
<p>DGPT-1 will be trained on trillions of words and will be capable of coding in CSS, JSX, Python, and other programming languages, and is designed to eliminate toxic language, which can perform zero-shot, few-shot and one-shot learning.</p>
<Link style="font-weight:700;" to="/"><div class="button">HOME</div></Link>
<div class="team">
    <h3>Geometric Energy Corporation
    </h3>
        <p>Back-End/Architecture </p>
        
        <h3>Defy Development Corp
        </h3>        
        <p>Middleware</p>
        <h3>POINTBLANK LLC</h3>
        
        <p>Front-End UI/UX</p>
        <h3>Data Syndicate LLC</h3>
        
        <p>Data Wizardry</p>
</div>
</div>
        </div>
    </main>
    
    <style>
        h3, h1{color:#ff0060}
        .main-wrapper{
            height:100vh;width:100vw;position:fixed;
            display: flex;
            flex-flow:wrap;
            justify-content:center;
            overflow-y:scroll;
            background:black;
        }
        .text-wrapper{
            padding:30px;
            color:white;
            text-align:left;max-width:512px;
        }
            
        .button {
            border:1px solid #ffffff;
            border-radius:0.25rem ;
            padding:0.5rem 1rem;
            color: #000000!important;
            background-color: #ffffff;
            outline: none;
            letter-spacing:2px;
            transition:background-color 200ms, color 200ms ease;
        }
        .button:hover {
            filter:invert(1);
            border:1px solid #000000;

        }
    </style>