import React, { useEffect } from "react";
import {connect} from "react-redux";
import { getSmurfs } from "../actions/index"

const Smurfs = ({ getSmurfs, name, age, height, id, isFetching, error }) =>{
    useEffect(() => {
    // run action creator when the component mounts
    getSmurfs();
    }, [getSmurfs]);
    
    if(isFetching) {
        return <h3>Getting Smufs</h3>;
    }

    return (
    <div>
     <h2>Name: {name} </h2>
     <h2>Age: {age}</h2>
     <h2>Height: {height}</h2>

     <input 
        className="title-input"
        type="text"
        name="newTitleText"
      />
        <input 
        className="title-input"
        type="text"
        name="newTitleText"
      />
        <input 
        className="title-input"
        type="text"
        name="newTitleText"
      />

    </div>
    );
};

const mapStateToProps = state => {
    return {
        name: state.name,
        age: state.age,
        height: state.height,
        id: state.id,

    }
}

export default connect(mapStateToProps, { getSmurfs })(Smurfs);