import React from "react";
import {connect} from "react-redux";

const Smurfs = props =>{
    return
    <div>
        <h2></h2>
        <h2></h2>
    </div>
}

const mapStateToProps = state => {
    return {
        name: state.name,
        age: state.age,
        height: state.height,
        id: state.id,

    }
}

export default connect(mapStateToProps, {})(Smurfs);