<template>
<div id="metamask-section">
  <div id="content">
    <div>
      <h1>How to use MetaMask</h1>
      <img id="header" src="../../assets/img/metamask/header.png" />
      <p>MetaMask is an essential part of the Hercules Platform web experience. Having this extension will allow your web2 browser to function as a web3 browser and work with many facets of our decentralized application ecosystem. Whats best about this is
        that you don't have to download the blockchain to work with our Smart Contracts! Follow these steps to install Metamask and begin your Value Chain Legend with HERC!</p>
    </div>
    <div class="p-space">
      <h1>Part 1 - Installing MetaMask</h1>
      <p>| <strong>Step 1: </strong>Click <a href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn">here</a> to go to the Chrome Webstore and get the MetaMask plugin.</p>
      <p>| <strong>Step 2: </strong>Click <strong>"Add to Chrome" </strong>to install MetaMask as Google Chrome extension.</p>
      <img class="pic-space" src="../../assets/img/metamask/1-1.png"/>
      <p>| <strong>Step 3: </strong>Click <strong>"Add Extension" </strong> to confirm and MetaMask will be added.</p>
      <img class="pic-space" src="../../assets/img/metamask/1-2.png"/>
      <p>You can see that MetaMask is added by the little fox logo that shows up on the top right corner.</p>
    </div>
    <div class="p-space">
      <h1>Part 2 - Creating a new wallet</h1>
      <p>| <strong>Step 1: </strong>Click the MetaMask logo.</p>
      <img class="pic-space" src="../../assets/img/metamask/1.png"/>
      <p>| <strong>Step 2: </strong>Read and agree to the MetaMask Terman and Conditions.</p>
      <img class="pic-space" src="../../assets/img/metamask/2.png"/>
      <img class="pic-space" src="../../assets/img/metamask/3.png"/>
      <p>| <strong>Step 3: </strong> Click <strong>"Create" </strong> after typing your personal password two times.</p>
      <img class="pic-space" src="../../assets/img/metamask/4.png"/>
      <p>| <strong>Step 4: </strong> MetaMask will now show you your seed. It is very important that you copy and store those 12 words, without them you can't restore your wallet.</p>
      <img class="pic-space" src="../../assets/img/metamask/5.png"/>
      <p>Your account is now created! It's possible that 1 Ether shows up on your balance. That's because you're on the testnet.</p>
      <img class="pic-space" src="../../assets/img/metamask/6.png"/>
    </div>
    <div class="p-space">
      <h1>Part 3 - Changing to the Mainnet & Funding your account</h1>
      <p>| <strong>Step 1: </strong>Click <strong>"Modern Testnet"</strong></p>
      <img class="pic-space" src="../../assets/img/metamask/7.png"/>
      <p>| <strong>Step 2: </strong>Choose <strong>"Main Ethereum Network"</strong></p>
      <img class="pic-space" src="../../assets/img/metamask/8.png"/>
      <p>| <strong>Step 3: </strong>Click the <strong>"copy address to clipboard"</strong> to get your wallet address. Then all you have to do is send Ether to it from your favorite exchange or wallet.</p>
      <img class="pic-space" src="../../assets/img/metamask/9.png"/>
    </div>
    <div class="p-space">
      <h1>Part 4 - Sending Ether</h1>
      <p>Now that your MeteMask account is funded you can easily send Ether.</p>
      <p>| <strong>Step 1: </strong>Click <strong>"Send"</strong></p>
      <img class="pic-space" src="../../assets/img/metamask/10.png"/>
      <p>| <strong>Step 2: </strong>Enter the wallet address to where you want to send Ether to (1), enter the amount of Ether you want to send (2) and click <strong>"Send" (3)</strong></p>
      <img class="pic-space" src="../../assets/img/metamask/11.png"/>
      <p>| <strong>Step 3: </strong>Click the transaction data and click
        <strong>"Accept".</strong></p>
      <img class="pic-space" src="../../assets/img/metamask/12.png"/>
      <p>And that's it! You can now send and recieve Ether on your MetaMask wallet. Furthermore, you'll also be able to visit Ethereum Dapps thanks to this awesome extension.</p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'MetamaskSection'
}
</script>

<style scoped>
#metamask-section {
  padding-top: 85px;
  padding-bottom: 53px;
  background-color: #fafafa;
}

#metamask-section h1 {
  font-size: 50px;
  color: #ebbc19;
  margin-bottom: 5%;
  text-align: center;
}

#metamask-section p {
  line-height: 1.7em;
}

#header {
  width: 90%;
  margin: auto;
  margin-bottom: 5%;
}

#content {
  width: 80%;
  margin: auto;
}

#content div {
  margin-bottom: 5%;
}

.p-space {
  text-align: left;
  margin-bottom: 2%;
}

.pic-space {
  margin-top: 2%;
  margin-bottom: 2%;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
}
</style>
