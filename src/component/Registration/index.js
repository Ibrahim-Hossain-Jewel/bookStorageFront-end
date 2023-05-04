import React from "react";
import { connect } from "react-redux";
import { DataTable } from "primereact/datatable";
import { Toast } from "primereact/toast";
import { InputText } from "primereact/inputtext";
import { InputNumber } from 'primereact/inputnumber';
import {createStructuredSelector} from 'reselect';
import {
  
} from "./selector";
import { Button } from "primereact/button";
import { Calendar } from 'primereact/calendar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { Checkbox } from 'primereact/checkbox';
import {

} from "./action";
import TopNav from "../TopNav";
class UserRegistration extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      Pname : '',
      age: 0,
      date: '',
      page: 0,
      bookType: {sci_fi: false, drama: false, novel: false},
      conditional: true,
      setErrorMessage: ''
    };
  }
  bNameHandler = (evt)=>{
    console.log("hit on book name")
  }
  submitBook = (evt)=>{
    console.log("hit on submit book")
  }
  ageHandler = (evt) =>{
    console.log("age handler");
  }
  pNameHandler = (evt)=>{
    console.log("pname");
  }
  setDateHandler = (evt)=>{
    console.log("set date handler")
  }
  pageNumberHanlder = ()=>{
    console.log("page number handler");
  }
  scientificHandler = ()=>{
    console.log("scientific handler");
  }
  dramaHandler = ()=>{
    console.log("scientific handler");
  }
  novelHandler = ()=>{
    console.log("scientific handler");
  }
  render() {
    return (
      <div className="grid">
        <Toast ref={(el) => (this.toast = el)} />
        <div className="col-12">
          <TopNav />
          <h1>Add Book</h1>
          <div className="grid col-6 ">
              <div className="col-12 md:col-12">
                <div className="p-inputgroup">
                  <InputText
                    placeholder="Enter book name"
                    onChange={this.bNameHandler}
                    className={this.state.setErrorMessage}
                  />
                </div>
              </div>
              <div className="col-12 md:col-12">
                <div className="p-inputgroup">
                  <InputText
                    placeholder="Enter product name"
                    onChange={this.pNameHandler}
                    className={this.state.setErrorMessage}
                  />
                </div>
              </div>
              
              <div className="col-12 md:col-12">
                <div className="p-inputgroup">
                  <InputNumber onValueChange={this.ageHandler} min={1} max={100} placeholder="Enter age" />
                </div>
              </div>
              <div className="col-12 md:col-12">
                <div className="p-inputgroup">
                <Calendar onChange={this.setDateHandler} placeholder="Select date"/>
                </div>
              </div>
              <div className="col-12 md:col-12">
                <div className="p-inputgroup">
                  <InputNumber onValueChange={this.pageNumberHanlder} min={1} max={100} placeholder="Enter total page number" />
                </div>
              </div>
              <div className="col-12 md:col-12">
                <div className="p-inputgroup">
                  {/* <Checkbox onChange={e => setChecked(e.checked)} checked={checked} /> */}
                </div>
              </div>
              <div className="col-12 md:col-12">
                <div className="p-inputgroup">
                  <Button
                    label="Submit"
                    icon="pi pi-check"
                    iconPos="right"
                    onClick={this.submitBook}
                  />
                </div>
              </div>
              </div>
        </div>
      </div>
    );
  }
}
UserRegistration.propTypes = {
  
};
const mapStateToProps = createStructuredSelector({
  
});

const mapDispatchToProps = (dispatch)=>{
    return {
      dispatch,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserRegistration);
