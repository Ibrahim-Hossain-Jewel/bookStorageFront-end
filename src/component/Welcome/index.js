import React from "react";
import TopNav from "../TopNav";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { makeSelectAllPublicData } from "./selector";
import { Image } from 'primereact/image';
import PropTypes from 'prop-types'
class Welcome extends React.Component{
    constructor(){
        super();
        this.state={
          imagename : "",
        }
    }
    render(){  
        return (
          <div className="grid">
            <div className="col-12">
              <TopNav />
              <h2>Welcome Book Store</h2>
              <div>
                <div className="card">
                </div>
            </div>
          </div>
        </div>
        );
    }
}
Welcome.propTypes ={
  allPublicData:PropTypes.any,

};
const mapStateToProps = createStructuredSelector({
  allPublicData : makeSelectAllPublicData(),
});

const mapDispatchToProps = (dispatch)=>{
  return{
    dispatch,
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Welcome);