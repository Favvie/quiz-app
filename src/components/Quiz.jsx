import { useState } from 'react'
import '../App.css'
import QuizImage from '../assets/quizImage.jpg'

function Quiz() {
  const questions = [
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Mars", "Venus", "Jupiter", "Saturn"],
      correctAnswer: "Mars"
    },
    {
      question: "Who painted the Mona Lisa?",
      options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"],
      correctAnswer: "Leonardo da Vinci"
    },
    {
      question: "What is the largest ocean on Earth?",
      options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
      correctAnswer: "Pacific Ocean"
    },
    {
      question: "Which element has the chemical symbol 'O'?",
      options: ["Gold", "Oxygen", "Silver", "Iron"],
      correctAnswer: "Oxygen"
    },
    {
      question: "What is the capital of Japan?",
      options: ["Beijing", "Seoul", "Tokyo", "Bangkok"],
      correctAnswer: "Tokyo"
    },
    {
      question: "Who wrote the play 'Romeo and Juliet'?",
      options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
      correctAnswer: "William Shakespeare"
    },
    {
      question: "What is the largest mammal in the world?",
      options: ["African Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
      correctAnswer: "Blue Whale"
    },
    {
      question: "In which year did World War II end?",
      options: ["1943", "1945", "1947", "1950"],
      correctAnswer: "1945"
    },
    {
      question: "What is the capital of Australia?",
      options: ["Sydney", "Melbourne", "Canberra", "Perth"],
      correctAnswer: "Canberra"
    },
    {
      question: "Which of these is not a primary color?",
      options: ["Red", "Blue", "Yellow", "Green"],
      correctAnswer: "Green"
    }
  ];

  const [answers, setAnswers] = useState([])

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const [scoreMessage, setScoreMessage] = useState("You can do better")
  

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      
    } else {
       calculateScore()
    }
  }

  const handlePreviousQuestion = () => {
    setCurrentQuestion(currentQuestion - 1)
  }

  const handleAnswer = (answer) => {
    const newAnswers = [...answers]
    newAnswers[currentQuestion] = answer
    setAnswers(newAnswers)
    
  }


  const calculateScore = () => {
    let score = 0
    answers.forEach((answer, index) => {
      if (answer === questions[index].correctAnswer) {
        score++
      }

      if (score === questions.length) {
        setScoreMessage("You are a genius! 🎉🎉")
      } else if (score === questions.length - 1) {
        setScoreMessage("You are almost there!")
      } else {
        setScoreMessage("You can do better 🌚🌚")
      }

     
    })
    setScore(score)
    setSubmitted(true)
  }
  return (
    <div className='flex flex-col items-center justify-center '>
      <div className='w-full bg-gray-200 flex justify-between items-center fixed top-0 left-0 right-0' >
        <div className='flex w-[90%] px-2 space-x-2'>
          {questions.map((_, index) => (
            <div key={index} className={`flex-grow h-2 min-w-[10px] ${answers[index] ? 'bg-red-500' : 'bg-gray-300'}`}></div>
          ))}
        </div>
        <div className='text-xl bg-gradient-to-r from-[#ca1313] to-[#e94444] py-3 px-2 text-white'>
          Question <br/>{currentQuestion + 1} / {questions.length}
        </div>

        
      </div>
      <div className='w-full h-full flex items-center justify-center mt-3'>
      <div className='w-1/2 hidden lg:block '>
      <img src={QuizImage} alt="logo"  className='w-full h-full object-contain'/>
      </div>
      <div>

{submitted ? <>
<h1>Your Score: {score}/{questions.length}</h1>
<p className='text-xl py-4'>{scoreMessage}</p>
<button onClick={() => 
{
  setSubmitted(false)
  setAnswers([])
  setCurrentQuestion(0)
  setScore(0)
}}>Try Again</button>
</> : (

<div className='w-full flex flex-col space-y-10 '>
  <div>
    <h1 className='text-4xl font-bold mb-4 lg:w-[450px] h-[100px] mt-20 '>{questions[currentQuestion].question}</h1>
    
  </div>
  <ul className='flex flex-col space-y-3 mb-4 items-center'>
    {questions[currentQuestion].options.map((option, index) => (
    <li 
      onClick={() => handleAnswer(option)} 
      key={index} 
      className={`text-black bg-[#f9f9f9] lg:w-[450px] w-full p-2 rounded-md cursor-pointer border hover:border-[#646cff] transition-colors duration-300 ease-in`}
      style={{ borderColor: answers[currentQuestion] === option ? '#646cff' : '' }}
    >
      {option}
    </li>
    ))}
  </ul>

  <div className='flex justify-between'> 
   <button disabled={currentQuestion === 0} className="disabled:opacity-50 bg-gradient-to-r from-[#ca1313] to-[#e94444] text-white outline-none border-none mr-2" onClick={handlePreviousQuestion} >Previous</button>
  <button onClick={handleNextQuestion} className="bg-gradient-to-r from-[#ca1313] to-[#e94444] text-white outline-none border-none">{questions.length - 1 === currentQuestion ? "Submit" : "Next"}</button>
  </div>
</div>
)}
    </div>
    </div>
    </div>
  )
}

export default Quiz
