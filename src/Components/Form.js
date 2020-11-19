import React from 'react'

function Form (props) {
    return (
        <form onSubmit= {(e) => {
            e.preventDefault()
            console.log("clicked")
            props.submitHandler({name: e.target[0].value})
        }}>
            <input type="text" placeholder="Enter New Char" />
            <input type="submit" value="create char" />
        </form>
    )
}

export default Form;

