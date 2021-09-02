<script>
    export let nftlink = 'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/42177050677546159779710000316165471247211713436920374376455667151256854462465';
    export let nftimage = 'https://lh3.googleusercontent.com/gzNYAoekV_UlhEn47l7UIaQ5Bs3Rsgz9QL5ITQ8BN53SP5NSlU2CjfHQXGzGhVw1JJ2dy7qUHVqcbyQs21jEF5YnO8_sAqAS_mRH=w600';
    export let nfttitle = 'Space Pepe #1';
    export let desc = '11 SpacePepes from the planet Serpo are on a Space Expedition from the star system Zeta Reticuli. ';
    export let protocol = 'ERC-1155';
    export let owner = 'CA785C';
    export let ownerlink = 'https://opensea.io/0xca785ccb00933e6760130432757ac6ee6428db6e';
</script>

<div class="card-wrapper">

    <div class="card">
        <div class="row">
            <div class="nft-image">
                <img src="{nftimage}" alt="">
            </div>
            <div class="links">
                <a href="{nftlink}"><img width="64px" height="64px" src="/imgs/external-link.svg" alt=""></a>
            </div>
        </div>
        <div class="desc">
            <h1>{nfttitle}</h1>
            <div style="margin:0.5rem 0rem;height:3px;width:4rem;margin-right:calc(100% - 4rem);background:white;"></div>
            <p>{desc}</p>
            <p>OWNED BY: <a style="display:inline;" href="{ownerlink}"><b>{owner}</b></a></p>
            <p>PROTOCOL: <b>{protocol}</b></p>
        </div>
    </div>

</div>

<style>
    .card{
        text-align: left;
        background: linear-gradient(45deg, #004a43, #420533);
        width: 410px;
        min-height: 480px;
        box-shadow: 0px 15px 35px -5px rgba(50, 88, 130, 0.32);
        border-radius: 15px;
        padding: 30px;
    }
    .nft-image{
        display: flex;
        align-items: flex-start;
        position: relative;
        z-index: 4;
    }
    .nft-image > img{
        width: 300px;
        height: 300px;
        margin-left: -70px;
        flex-shrink: 0;
        position: relative;
        z-index: 2;
        border-radius: 15px;
        z-index: 1;        
        box-shadow: 0px 15px 35px -5px rgba(50, 88, 130, 0.32);

    }
    .row{display:flex;flex-flow:row;}
    .links{    
        flex: 1;
        padding-left: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;}
    .card-wrapper{
        display: flex;
    flex-flow: wrap;
    justify-content: center;
max-width:512px;margin:auto;
    }
</style>