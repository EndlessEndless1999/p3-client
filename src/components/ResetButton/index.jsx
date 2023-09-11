import React from 'react'

const ResetButton = (props) => {

    const handleClick = (e) => {
        e.preventDefault();
        props.setValue('')
    }



    return (
        <button className="editor__btn editor__reset" onClick={handleClick}>Reset {'>'}</button>
    )
}

export default ResetButton