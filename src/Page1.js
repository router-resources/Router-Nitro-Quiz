import React,{useState,useEffect} from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { db } from "./firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import './App.css'

function Page1() {

    const [quiz,setQuiz]=useState([])
  
    const quizCollectionRef = collection(db, "quiz");
  
    useEffect(() => {
      const getQuiz = async () => {
        const data = await getDocs(quizCollectionRef);
        setQuiz(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })).filter(obj => obj.module === 1));
        localStorage.setItem("quiz",data.docs.map((doc) => ({ ...doc.data(), id: doc.id })).toString())
      };
  
      getQuiz();
    }, []);
 
  return (
    <div>



         {quiz.map((doc)=>{
        return(
          <div>{doc.question}
          <br></br>
          {doc.options.map((o)=>{
            return(
              <div>
                {o}
              </div>
            )
          })}



          </div>
        )
      })}


   
    </div>
  )
}

export default Page1

   
