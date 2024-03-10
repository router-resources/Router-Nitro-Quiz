import { useState,useEffect } from 'react'

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
import Page5 from './pages/Page5';
import Page6 from './pages/Page6';
import Page7 from './pages/Page7';
import Page8 from './pages/Page8';
import Page9 from './pages/Page9';
import { db } from "./firebase-config";


import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import './pages/App.css'
import NavBar from './components/Navbar';
import Footer from './components/Footer';

function App() {

  const [quiz,setQuiz]=useState([])
  
  const quizCollectionRef = collection(db, "quiz");


  const createUser = async () => {

    const data = [
      {
        'question': 'What is the primary purpose of the checkAndSetAllowance function in the context of Router Nitro?',
        'options': [
          'a) To retrieve the current balance of the user\'s wallet.',
          'b) To verify and potentially configure allowances for token transfers.',
          'c) To generate a unique widget ID for the user\'s dApp integration.',
          'd) To directly initiate the cross-chain transfer of tokens.'
        ],
        'answer': 'b) To verify and potentially configure allowances for token transfers.'
      },
      {
        'question': 'Under what circumstance does the checkAndSetAllowance function NOT require any execution?',
        'options': [
          'a) When the allowance for the token is already sufficient for the desired transfer.',
          'b) When the user has insufficient balance for the desired token transfer.',
          'c) When the destination chain does not support the ERC20 token standard.'
        ],
        'answer': 'a) When the allowance for the token is already sufficient for the desired transfer.'
      },
      {
        'question': 'What information does the erc20_abi variable in the code snippet represent?',
        'options': [
          'a) The private key of the user\'s cryptocurrency wallet.',
          'b) The interface definition for interacting with ERC20 token contracts.',
          'c) The specific parameters required for the getQuote function.'
        ],
        'answer': 'b) The interface definition for interacting with ERC20 token contracts.'
      }
    ];
    
    data.forEach(async (obj) => {
      const optionsArray = JSON.stringify(obj.options); // Convert options array to a string
    
      await addDoc(quizCollectionRef, { module: 8, question: obj.question , options: obj.options , answer:obj.answer});
     
    });
    
    
  };

  
  useEffect(() => {
    const getQuiz = async () => {
      const data = await getDocs(quizCollectionRef);
      setQuiz(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      localStorage.setItem("quiz",data.docs.map((doc) => ({ ...doc.data(), id: doc.id })).toString())
    };

    getQuiz();
  }, []);

  return (
    <>
    

<NavBar/>

<br></br><br></br>

<br></br>
<br></br>
<br></br>


<Router>
      <Routes>
        
        <Route path="/page1" element={<Page1/>} />
        <Route path="/page2" element={<Page2/>} />
        <Route path="/page3" element={<Page3/>} />
        <Route path="/page4" element={<Page4/>} />
        <Route path="/page5" element={<Page5/>} />
        <Route path="/page6" element={<Page6/>} />
        <Route path="/page7" element={<Page7/>} />
        <Route path="/page8" element={<Page8/>} />
        <Route path="/page9" element={<Page9/>} />
      
        {/* Add more routes as needed */}
      </Routes>
    </Router>
   
     
     <br></br>
     <br></br> <br></br> <br></br> <br></br> 
<Footer/>
     {/* <button onClick={createUser}>Send to Database</button> */}
    </>
  )
}

export default App
