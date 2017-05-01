import React, { Component } from 'react';
import uuid from 'uuid';

class AddColon extends Component {
  constructor(){
    super();
    this.state = {
      newColon:{}
    }
  }

  handleSubmit(e){
    if(this.refs.title.value === ''){
      alert('Title is required');
    } else {
      this.setState({newColon:{
        colonId: uuid.v4(),
        title: this.refs.title.value
      }}, function(){
        //console.log(this.state);
        this.props.addColon(this.state.newColon);
      });
    }
    e.preventDefault();
  }

  render() {

    const formStyle = {
      marginBottom: "20px"
    }

    return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Title Name" ref="title"></input>
            <span className="input-group-btn">
              <button className="btn btn-default" type="submit">New Colon!</button>
            </span>
          </div>
          </form>
        </div>
      </div>
    </div>
    );
  }
}

AddColon.propTypes = {
  categories: React.PropTypes.array,
  addColon: React.PropTypes.func
}

export default AddColon;