import React from "react";
import { connect } from "react-redux";
import { DataTable } from "primereact/datatable";
import { Toast } from "primereact/toast";
import { InputText } from "primereact/inputtext";
import { InputNumber } from 'primereact/inputnumber';
import { Password } from 'primereact/password';
import {createStructuredSelector} from 'reselect';
import {
  
} from "./selector";
import { Button } from "primereact/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import {
  setloginCredential
} from "./action";
import TopNav from "../TopNav";
class UserLogin extends React.Component {
  constructor() {
    super();
    this.state = {
      conditional: true,
      password: '',
      email: '',
      setErrorMessage: ''
    };
  }
  emailHandler = (evt)=>{
    this.setState({email: evt.target.value})
  }
  passwordHandler = (evt)=>{
    this.setState({password: evt.target.value});
  }
  loginHandler = (evt)=>{
    let ids = {email: this.state.email , password: this.state.password};
    this.props.onChangeloginHandler(ids); //Passed data to the action
  }
  render() {
    return (
      <div className="grid">
        <Toast ref={(el) => (this.toast = el)} />
        <div className="col-12">
          <TopNav />
          <h1>User Login</h1>
          <div className="grid col-6 ">
              <div className="col-12 md:col-12">
                <div className="p-inputgroup">
                  <span className="p-inputgroup-addon"><i className="pi pi-envelope" /></span>
                  <InputText
                    placeholder="Enter email"
                    onChange={this.emailHandler}
                    className={this.state.setErrorMessage}
                  />
                </div>
              </div>
              <div className="col-12 md:col-12">
                <div className="p-inputgroup">
                  <span className="p-inputgroup-addon"><i className="pi pi-unlock" /></span>
                  <Password 
                  value={this.state.password} 
                  onChange={this.passwordHandler} 
                  toggleMask
                  placeholder="Enter your password"
                  />
                </div>
              </div>
              <div className="col-12 md:col-12">
                <div className="p-inputgroup">
                  <Button
                    label="Submit"
                    icon="pi pi-check"
                    iconPos="right"
                    onClick={this.loginHandler}
                  />
                </div>
              </div>
              </div>
            </div>
        </div>
    );
  }
}
UserLogin.propTypes = {
  onChangeloginHandler: PropTypes.func,
  setloginCredential: PropTypes.func,
};
const mapStateToProps = createStructuredSelector({
  
});

const mapDispatchToProps = (dispatch)=>{
    return {
      dispatch,
      onChangeloginHandler: (e)=>{
        dispatch(setloginCredential(e))
      }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserLogin);
