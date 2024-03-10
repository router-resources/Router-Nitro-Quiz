import React,{useState} from 'react'
import './App.css'


const NavBar= () => {
    const [account,setAccount]=useState('Connect Wallet')
const [accountShow,setAccountShow]=useState('')
const [balance,setBalance]=useState(0)
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
    
           
           
          } catch (error) {
            console.log('Error connecting...');
          }
    
        } else {
          alert('Meta Mask not detected');
        }
      }
      async function connectWallet() {
        if(typeof window.ethereum !== 'undefined') {
          await requestAccount();
          const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
          });
          setAccount(accounts[0].substring(0,4)+"...."+accounts[0].substring(38,42));
          setAccountShow(accounts[0])
        }}
          
    
    return (
        <div class="navbar" style={{backgroundColor:'black',height:'5em',color:'white'}}>
           
            <div style={{width:'8em'}}></div>

            <div style={{fontSize:'28px'}}><h1>Router Nitro Quiz</h1></div>
           
          <div>

            <button  style={{backgroundColor:'#bb2765',border:'3px solid black',width:'10em',height:'3em'}}  onClick={
        

        connectWallet}>{localStorage.getItem('account')?localStorage.getItem('account'):account}</button>
                    
                    </div>
        </div>
    )
}

export default NavBar;