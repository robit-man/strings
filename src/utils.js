//import { web3resolver } from './web3resolver.js'
import { ethers } from 'ethers';
import { 
    web3Loaded,
    address,
    contract,
    provider,
    network,
    nfts,
    alreadyMinted,
    etherLoading
    } from './store.js';
import { abi } from './abis/SpacePepe.json';
import { get } from 'svelte/store'

const NFT_CONTRACT_ADDRESS = '0x0253D4Cf2049a5E0D9f99706074DCe5E7F296e52'
export async function initProvider(app, reconnect = false) {
    var signer, addr, p;
    try {
        p = new ethers.providers.Web3Provider(window.ethereum);
        await window.ethereum.send("eth_requestAccounts", []);

        signer = p.getSigner();
        addr = await signer.getAddress();
    }
    catch (error) {
        console.log(error)
        throw new Error('Provider not connected.');
    }

    var nid = await p.getNetwork()
    nid = nid.chainId;
    var nftContract = new ethers.Contract(NFT_CONTRACT_ADDRESS, abi, signer);
    var minted = await nftContract.minted(addr)
    address.set(addr)
    contract.set(nftContract);
    network.set(nid);
    provider.set(p);
    alreadyMinted.set(minted);

    var totalSupply = await nftContract.currentTokenId();
    var baseURI = await nftContract.baseTokenURI();

    var resp = await fetch('/.netlify/functions/get_gallery', {
        method: 'POST',
        body: JSON.stringify({})
    })
    resp = await (await (resp).json())
    console.log(resp)
    nfts.set(resp);
    app = app;
    // Subscribe to accounts change
    window.ethereum.on("accountsChanged", onAccountsChanged);
    window.ethereum.on("chainChanged", onChainChanged);
    window.ethereum.on("connect", onConnect);
    window.ethereum.on("disconnect", onDisconnect);

    web3Loaded.set(1);
}

export async function mintPepe() {
    const p = get(provider);
    const nftContract = get(contract)
    const signer = p.getSigner();
    try {
        const resp = await nftContract.mint({ value: ethers.utils.parseEther('1') });
        etherLoading.set(true);

        await resp.wait().then(
            receipt => {
                console.log(receipt);
            },
            error => {
                throw new Error('Mint Failed: ' + error);
            })
    } catch (e) {
        etherLoading.set(false);
        return false;
    }
    etherLoading.set(false);
    alreadyMinted.set(true);
}

function setProviderWithLocal(q) {
    if (isWeb3 == 1) {
        provider = new ethers.providers.JsonRpcProvider();
    } else {
        provider = new ethers.providers.Web3Provider(q)
    }
}
function onAccountsChanged() {
    address.set(undefined)
    nfts.set(undefined)
    console.log("onAccountsChanged");
}

function onChainChanged() {
    address.set(undefined)
    nfts.set(undefined)    
    console.log("Chain Changed");
}

function onConnect() {
    console.log("onConnect");
}

function onDisconnect() {
    address.set(undefined)
    nfts.set(undefined)    
    console.log("onDisconnect");
}