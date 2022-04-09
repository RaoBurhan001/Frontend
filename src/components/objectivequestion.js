import React, { Component } from "react";
import { connect } from "react-redux";
import { updateObjective , deleteObjective } from "../actions/objective";
import objectiveService from "../services/objective-service";
//import ObjectiveDataService from "../services/objective-service";


class Objective extends Component {
    constructor(props) {
      super(props);
      this.onChangeOption1 = this.onChangeOption1.bind(this);
      this.onChangeOption2 = this.onChangeOption2.bind(this);
      this.onChangeOption3 = this.onChangeOption3.bind(this);
      this.onChangeOption4 = this.onChangeOption4.bind(this);
      this.onChangeDescription = this.onChangeDescription.bind(this);
      this.getObjective = this.getObjective.bind(this);
      this.updateStatus = this.updateStatus.bind(this);
      this.updateContent = this.updateContent.bind(this);
      this.removeObjective = this.removeObjective.bind(this);
  
      this.state = {
        currentObjective: {
          id: null,

          description: "",
          option1:"",
          option2:"",
          option3:"",
          option4:"",
          teacher:"Burhan",
          course:"Algorithm",
          code:"qwerty"
        },
        message: "",
      };
    }
  
    componentDidMount() {
      this.getObjective(this.props.match.params.id);
    }
  
    onChangeOption1(e) {
      const option1 = e.target.value;
  
      this.setState(function (prevState) {
        return {
          currentObjective: {
            ...prevState.currentObjective,
            option1: option1,
          },
        };
      });
    }
  
      onChangeOption2(e) {
        const option2 = e.target.value;
    
        this.setState(function (prevState) {
          return {
            currentObjective: {
              ...prevState.currentObjective,
              option2: option2,
            },
          };
        });
      }
      onChangeOption3(e) {
        const option3 = e.target.value;
    
        this.setState(function (prevState) {
          return {
            currentObjective: {
              ...prevState.currentObjective,
              option3: option3,
            },
          };
        });
      }


      onChangeOption4(e) {
        const option4 = e.target.value;
    
        this.setState(function (prevState) {
          return {
            currentObjective: {
              ...prevState.currentObjective,
              option4: option4,
            },
          };
        });
      }


    onChangeDescription(e) {
      const description = e.target.value;
  
      this.setState((prevState) => ({
        currentObjective: {
          ...prevState.currentObjective,
          description: description,
        },
      }));
    }
  
    getObjective(id) {
      objectiveService.get(id)
        .then((response) => {
          this.setState({
            currentObjective: response.data,
          });
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  
    updateStatus() {
      console.log(this.state.currentObjective._id)
      var data = {
        id: this.state.currentObjective._id,
        option1:this.state.currentObjective.option1,
        option2:this.state.currentObjective.option2,
        option3:this.state.currentObjective.option3,
        option4:this.state.currentObjective.option4,
        description: this.state.currentObjective.description,
        teacher:"Burhan",
        course:"Algorithm",
        code:"qwerty"
      };
  
      this.props
        .updateObjective(this.state.currentObjective.id, data)
        .then((reponse) => {
          console.log(reponse);
  
          this.setState((prevState) => ({
            currentObjective: {
              ...prevState.currentObjective,
              teacher:"Burhan",
              course:"Algorithm",
              code:"qwerty",
            },
          }));
  
          this.setState({ message: "The status was updated successfully!" });
        })
        .catch((e) => {
          console.log(e);
        });
    }
  
    updateContent() {
      this.props
        .updateObjective(this.state.currentObjective._id, this.state.currentObjective)
        .then((reponse) => {
          console.log(reponse);
          
          this.setState({ message: "The tutorial was updated successfully!" });
        })
        .catch((e) => {
          console.log(e);
        });
    }
  
    removeObjective() {
      this.props
        .deleteObjective(this.state.currentObjective._id)
        .then(() => {
          this.props.history.push("/objective");
        })
        .catch((e) => {
          console.log(e);
        });
    }
  
    render() {
      const { currentObjective } = this.state;
  
      return (
        <div>
          {currentObjective ? (
            <div className="edit-form">
              <h4>Tutorial</h4>
              <form>
                <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <input
                    type="text"
                    className="form-control"
                    id="description"
                    value={currentObjective.description}
                    onChange={this.onChangeDescription}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="title">Option1</label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    value={currentObjective.option1}
                    onChange={this.onChangeOption1}
                  />
                </div>

                
                <div className="form-group">
                  <label htmlFor="title">Option2</label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    value={currentObjective.option2}
                    onChange={this.onChangeOption2}
                  />
                </div>

                
                <div className="form-group">
                  <label htmlFor="title">Option3</label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    value={currentObjective.option3}
                    onChange={this.onChangeOption3}
                  />
                </div>

                
                <div className="form-group">
                  <label htmlFor="title">Option4</label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    value={currentObjective.option4}
                    onChange={this.onChangeOption4}
                  />
                </div>
  
                {/* <div className="form-group">
                  <label>
                    <strong>Status:</strong>
                  </label>
                  {currentObjective.published ? "Published" : "Pending"}
                </div> */}
              </form>
  
              {/* {currentObjective.published ? (
                <button
                  className="badge badge-primary mr-2"
                  onClick={() => this.updateStatus(false)}
                >
                  UnPublish
                </button>
              ) : (
                <button
                  className="badge badge-primary mr-2"
                  onClick={() => this.updateStatus(true)}
                >
                  Publish
                </button>
              )} */}
  
              <button
                // className="badge badge-danger mr-2"
                onClick={this.removeObjective}
              >
                Delete
              </button>
  
              <button
                type="submit"
                // className="badge badge-success"
                onClick={this.updateContent}
              >
                Update
              </button>
              <p>{this.state.message}</p>
            </div>
          ) : (
            <div>
              <br />
              <p>Please click on a Tutorial...</p>
            </div>
          )}
        </div>
      );
    }
  }
  
  export default connect(null, { updateObjective, deleteObjective })(Objective);