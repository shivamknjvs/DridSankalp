import React, { Component } from "react";
import "./Noteschema.css";

export default class Noteschema extends Component {
    constructor(){
        super();
            this.state={
                addTextBox:[{}]
            }  
    }

    addBox(){
      this.setState((
        {
          addTextBox:[...this.state.addTextBox,{}]
        }
      ))
    }

    delBox(i){
      this.state.addTextBox.splice(i,1);
      this.setState({})
    }
  render() {
    return (
      <>
        <div className="noteschema-form-main">
          <div class="container container-noteschema">
            <div class="wrapper">
              <div class="title">
                <span>Notes Data</span>
              </div>
              <form action="#">
                <div class="row">
                  <i class="fa-solid fa-fingerprint"></i>
                  <input type="text" placeholder="Id" required />
                </div>
                <div class="row">
                  <i class="fa-solid fa-clipboard-check"></i>
                  <input type="text" placeholder="Topic" required />
                </div>
                <div class="row">
                  <i class="fa-solid fa-book"></i>
                  <input type="text" placeholder="Subject" required />
                </div>
                <div class="row">
                  <i class="fa-solid fa-indian-rupee-sign"></i>
                  <input type="text" placeholder="Price" required />
                </div>
                <div class="row">
                  <i class="fa-solid fa-circle-info"></i>
                  <input type="text" placeholder="About" required />
                </div>
                
                  {this.state.addTextBox.map((index)=>(
                <div className="noteschema">
                  <div class="row">
                    <i class="fa-solid fa-chalkboard"></i>
                    <input type="text" placeholder="What you learn" required />
                  </div>
                  <br/>
                  {
                    index?
                  <button onClick={()=>this.delBox(index)}><strong>-</strong></button>
                  :null
                  }
                  
                  <button onClick={()=>this.addBox()}><strong>+</strong></button>
                </div>
                ))}
                <div class="row">
                  <i class="fa-solid fa-pen"></i>
                  <input type="text" placeholder="Course Content" required />
                </div>
                <div class="row">
                  <i class="fa-solid fa-link"></i>
                  <input type="text" placeholder="Notes Link" required />
                </div>
                <div class="row button last-button">
                  <input type="submit" value="Save" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}
