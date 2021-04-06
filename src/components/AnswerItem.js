import React from 'react'

function AnswerItem({ answer, name }) {
    return (
        <React.Fragment>
            <div className='answerItem'>
                <label>
                    <input type='radio' name={name} value={answer.score} />
                    {answer.name}
                </label>
            </div>
        </React.Fragment>
    )
}

export default AnswerItem;