import React from 'react';
import CharCard from '../Components/CharCard'
import Form from '../Components/Form'

class CharContainer extends React.Component {

    daState = this.props.imageArr
    state = { characters: this.daState }



    renderChar = () => {
        return(
            this.state.characters.map (imageObj =>
            <CharCard image = {imageObj}/>
            )
        )
    }

    submitHandler = (obj) => {
        let newArray = [...this.state.characters, obj]
        this.setState({characters: newArray})
        console.log("new State" , newArray)
    }

    render(){
        console.log("daState", this.state)

       return (
            <>
                <Form submitHandler={this.submitHandler}/>
                {this.renderChar()}
            </>
        );
    }
}

export default CharContainer;

