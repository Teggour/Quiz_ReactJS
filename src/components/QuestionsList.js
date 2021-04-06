import React, { useState } from 'react'
import Context from '../context'
import QuestionItem from './QuestionItem'

function QuestionsList(props) {
    let [counter, setCounter] = useState(0)
    let result = ''

    function count(score) {
        return setCounter(counter += score)
    }

    function getResult(score) {
        if (4 <= score && score < 8) {
            result = 'Stern - You’re a very serious person!'
        }
        else if (8 <= score && score < 12) {
            result = 'Funny - You have a wicked sense of humour!'
        }
        else if (12 <= score && score < 16) {
            result = 'Outgoing - You’re a perfect mix of funny, chill, and intelligence!'
        }
        else if (16 <= score && score <= 20) {
            result = 'Shy - You’re shy and reserved!'
        }
        else {
            result = 'ERROR! Make a choice in all questions!'
        }
    }

    function defineHandler() {
        getResult(counter)
        if (window.confirm(result)) {
            window.location.reload()
        }
    }

    return (
        <Context.Provider value={{ count: count }}>
            <React.Fragment>
                <div className='questionContainer'>
                    {props.dataBase.map((item, index) => {
                        return <QuestionItem key={item.id} index={index} item={item} />
                    })}
                </div>

                <div className='btnContainer'>
                    <button className='defineBtn' onClick={event => defineHandler()}>Define</button>
                </div>

            </React.Fragment>
        </Context.Provider>
    )
}

export default QuestionsList;