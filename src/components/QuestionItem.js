import React, { useState, useContext } from 'react'
import Context from '../context'
import AnswerItem from './AnswerItem'

function QuestionItem(props) {
    const { count } = useContext(Context)
    let [check, setCheck] = useState(false)
    let [counter, setCounter] = useState(0)

    function change(e) {
        if (check) {
            count(+e.target.value)
            count(-1 * counter)
            setCounter(counter = +e.target.value)
        }
        else {
            count(+e.target.value)
            setCheck(check = true)
            setCounter(counter = +e.target.value)
        }
    }

    return (
        <form className='questionItem' onChange={(event) => { change(event) }} >
            <h2>{props.index + 1}) {props.item.question}</h2>
            {!check && <div className='attentionMessage'>Make a choice!</div>}
            <div className='answerContainer'>
                {props.item.answers.map((answer, index) => { return <AnswerItem key={index} answer={answer} name={props.item.id} /> })}
            </div>
        </form>
    )
}

export default QuestionItem;