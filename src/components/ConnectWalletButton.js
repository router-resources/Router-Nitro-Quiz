import React from 'react'
import { useState } from 'react';
import { ethers } from 'ethers';


const ConnectWalletButton = () => {
  const [connected, setConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");
  const [account,setAccount]=useState('Connect Wallet')
  const [accountShow,setAccountShow]=useState('')
  const [balance,setBalance]=useState(0)

  async function connectWallet() {
    if (!connected) {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const _walletAddress = await signer.getAddress();
      setConnected(true);
      setWalletAddress(_walletAddress);
    } else {
      window.ethereum.selectedAddress = null;
      setConnected(false);
      setWalletAddress("");
    }
  }
  async function requestAccount() {
    console.log('Requesting account...');

    // ❌ Check if Meta Mask Extension exists 
    if(window.ethereum) {
      console.log('detected');

      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        
        localStorage.setItem('account',accounts[0].substring(0,4)+"...."+accounts[0].substring(38,42))
        setAccount(accounts[0].substring(0,4)+"...."+accounts[0].substring(38,42));
        setAccountShow(accounts[0])

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const balanc=await provider.getBalance(accounts[0]);
        setBalance(ethers.utils.formatEther(balanc))
      } catch (error) {
        console.log('Error connecting...');
      }

    } else {
      alert('Meta Mask not detected');
    }
  }



  return (
    <div className="app">
      <div className="main">
        <div className="content">
          <button className="btn" onClick={connectWallet}>
            {connected ? "Disconnect Wallet" : "Connect Wallet"}
          </button>
          {/* <h3>Address</h3> */}
          {/* <h4 className="wal-add">{walletAddress}</h4> */}
          {console.log({walletAddress})}
        </div>
      </div>
    </div>
  );

}

export default ConnectWalletButton