import React,{useState,useEffect} from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { db } from "../firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import './App.css'

function Page6() {

    const [quiz,setQuiz]=useState([])
  
    const quizCollectionRef = collection(db, "quiz");

    const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);

  const handleOptionChange = (event) => {
    setSelectedAnswer(event.target.value);
  };

  const handleSubmit = () => {
    if (selectedAnswer === quiz[currentQuestion].answer) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion <= quiz.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedAnswer(null);
    } else {
      // Quiz completed, display score
    }
  };
  
    useEffect(() => {
      const getQuiz = async () => {
        const data = await getDocs(quizCollectionRef);
        setQuiz(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })).filter(obj => obj.module === 6));
        localStorage.setItem("quiz",data.docs.map((doc) => ({ ...doc.data(), id: doc.id })).toString())
      };
  
      getQuiz();
    }, []);
 
  return (
    <div>
     
      <div class='options' style={{fontSize:'24px', color:'white'}}>
      {currentQuestion < quiz.length && <div>
     
      <b>
      <p>Select the best answer for each question.</p></b></div>}
    <br></br>
      
      {currentQuestion < quiz.length && (
        <div>
          <h3>{quiz[currentQuestion].question}</h3>
          <ul >
            {quiz[currentQuestion].options.map((option, index) => (
              <li key={index}>
                <input
                  type="radio"
                  name="answer"
                  value={option}
                  checked={selectedAnswer === option}
                  onChange={handleOptionChange}
                />
                {option}
              </li>
            ))}
          </ul>
          <br></br>
          {currentQuestion <= quiz.length && <button style={{backgroundColor:'#bb2765',border:'3px solid black'}} onClick={handleSubmit}>Submit </button> }
          
        </div>

      )}
      {currentQuestion === quiz.length && (
        <div>
          <p>You scored {score} out of {quiz.length}</p>
        </div>
      )}
      </div>
      
      

      
    </div>
  
        
  )
}

export default Page6

   
