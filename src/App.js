import React from 'react'
import QuestionsList from './components/QuestionsList'

function App() {
  const quizTitle = 'Tell Us Your Favorite Foods And We’ll Guess What Type Of Personality You Have'
  const dataBase = [
    {
      id: 0, question: 'Pick some food:', answers: [
        { name: 'caesar salad', score: 1 }, { name: 'nuggets', score: 2 }, { name: 'burger', score: 3 }, { name: 'chicken sandwich', score: 4 }]
    },
    {
      id: 1, question: 'Pick a healthy choice:', answers: [
        { name: 'fruit', score: 1 }, { name: 'salad', score: 2 }, { name: 'parfait', score: 3 }, { name: 'pasta salad', score: 4 }]
    },
    {
      id: 2, question: 'Pick a movie snack:', answers: [
        { name: 'M&M’s', score: 1 }, { name: 'caramel popcorn', score: 2 }, { name: 'traditional popcorn', score: 3 }, { name: 'ice cream', score: 4 }]
    },
    {
      id: 3, question: 'Pick a fast-food spot:', answers: [
        { name: 'Dunkin’ Donuts', score: 1 }, { name: 'Wendy’s', score: 2 }, { name: 'Burger King', score: 3 }, { name: 'McDonald’s', score: 4 }]
    },
    {
      id: 4, question: 'Pick some more food:', answers: [
        { name: 'pasta', score: 1 }, { name: 'chicken', score: 2 }, { name: 'sandwich', score: 3 }, { name: 'pizza', score: 4 }]
    }
  ]

  return (
    <React.Fragment>
      <div className='container'>
        <h1 className='quizTitle'><span>Quiz:</span> {quizTitle}</h1>
        <QuestionsList dataBase={dataBase} />
      </div>
    </React.Fragment>
  );
}

export default App;