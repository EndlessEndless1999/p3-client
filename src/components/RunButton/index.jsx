import React from 'react'

const RunButton = () => {

    const onClick = (e) => {
        e.preventDefault();
        console.log('Hello World. I am the RunButton.');
    }


    return (
        <button className="editor__btn editor__run" onClick={onClick}>Run {'>'}</button>
    )
}

export default RunButton