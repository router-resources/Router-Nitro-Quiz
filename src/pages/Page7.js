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

function Page7() {

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
        setQuiz(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })).filter(obj => obj.module === 7));
        localStorage.setItem("quiz",data.docs.map((doc) => ({ ...doc.data(), id: doc.id })).toString())
      };
  
      getQuiz();
    }, []);
 
  return (
    <div>
      {currentQuestion < quiz.length && <div><h1>Blockchain Quiz</h1>
      <hr />
      <p>Select the best answer for each question.</p></div>}
      
      {currentQuestion < quiz.length && (
        <div>
          <h3>{quiz[currentQuestion].question}</h3>
          <ul>
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
          {currentQuestion <= quiz.length && <button onClick={handleSubmit}>Submit Answer</button> }
          
        </div>
      )}
      {currentQuestion === quiz.length && (
        <div>
          <p>You scored {score} out of {quiz.length}</p>
        </div>
      )}

      
    </div>
  
        
  )
}

export default Page7

   
