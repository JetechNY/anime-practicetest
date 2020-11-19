import React from 'react';

class CharCard extends React.Component {

    render(){
        const {name, img, show} = this.props.image;
        return (
            <>
                <h2>{name}</h2>
                {/* <img alt= {show} src= {img} /> */}
            </>
        );
    };
}

export default CharCard;
