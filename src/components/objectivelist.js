import React, { Component } from "react";
import { connect } from "react-redux";
import { retrieveObjectives } from '../actions/objective'; 
import { Link } from 'react-router-dom'
require('dotenv').config()
    class ObjectiveList extends Component {
      constructor(props) {
        super(props);
        // this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
        // this.refreshData = this.refreshData.bind(this);
        // this.setActiveTutorial = this.setActiveTutorial.bind(this);
        // this.findByTitle = this.findByTitle.bind(this);
        // this.removeAllTutorials = this.removeAllTutorials.bind(this);
    
        this.state = {
          currentObjective: null,
          currentIndex: -1,
          searchTitle: "",
        };
      }
    
      componentDidMount() {
        this.props.retrieveObjectives();
      }
    
    //   onChangeSearchTitle(e) {
    //     const searchTitle = e.target.value;
    
    //     this.setState({
    //       searchTitle: searchTitle,
    //     });
    //   }
    
      refreshData() {
        this.setState({
          currentObjective: null,
          currentIndex: -1,
        });
      }
    
      setActiveTutorial(objective, index) {
        this.setState({
          currentObjective: objective,
          currentIndex: index,
        });
      }
    
    //   removeAllTutorials() {
    //     this.props
    //       .deleteAllTutorials()
    //       .then((response) => {
    //         console.log(response);
    //         this.refreshData();
    //       })
    //       .catch((e) => {
    //         console.log(e);
    //       });
    //   }
    
    //   findByTitle() {
    //     this.refreshData();
    
    //     this.props.findTutorialsByTitle(this.state.searchTitle);
    //   }
    
      render() {
        const { searchTitle, currentObjective, currentIndex } = this.state;
        //const { description, option1 ,option2 , option3 , option4 } = this.props;
        const { objective } = this.props
        console.log(objective)
        console.log("current" , currentObjective)
        console.log(process.env.REACT_APP_BACKEND_URL)
        return (
            <div className="list row">
              <div className="col-md-8">
                {/* <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search by title"
                    value={searchTitle}
                    onChange={this.onChangeSearchTitle}
                  />
                  <div className="input-group-append">
                    <button
                      className="btn btn-outline-secondary"
                      type="button"
                      onClick={this.findByTitle}
                    >
                      Search
                    </button>
                  </div>
                </div> */}
              </div>
              <div className="col-md-6">
                <h4>Questions</h4>
      
                  <ul className="list-group">
            {objective &&
              objective.map((des, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveTutorial(des, index)}
                  key={index}
                >
                  {des.description}
                  
                  
                </li>
              ))}
          </ul>

      
                {/* <button
                  className="m-3 btn btn-sm btn-danger"
                  onClick={this.removeAllTutorials}
                >
                  Remove All
                </button> */}
              </div>
              <div className="col-md-6">
                {currentObjective ? (
                  <div>
                    <h4>Objective</h4>
                    <div>
                      <label>
                        <strong>Description:</strong>
                      </label>{" "}
                      {currentObjective.description}
                    {/* //  {currentObjective.teach} */}
                    </div>
                    <div>
                      <label>
                        <strong>Option1:</strong>
                      </label>{" "}
                      {currentObjective.option1}
                    </div>

                    <div>
                      <label>
                        <strong>Option2:</strong>
                      </label>{" "}
                      {currentObjective.option2}
                    </div>

                    <div>
                      <label>
                        <strong>Option3:</strong>
                      </label>{" "}
                      {currentObjective.option3}
                    </div>

                    <div>
                      <label>
                        <strong>Option4:</strong>
                      </label>{" "}
                      {currentObjective.option4}
                    </div>
                    {/* <div>
                      <label>
                        <strong>Option2:</strong>
                      </label>{" "}
                      {currentObjective.published ? "Published" : "Pending"}
                    </div> */}
      
                    <Link
                      to={"/objective/" + currentObjective._id}
                    //   className="badge badge-warning"
                    >
                      Edit
                    </Link>

                  </div>
                ) : (
                  <div>
                    <br />
                    <p>Please click on a Question...</p>
                  </div>
                )}
              </div>
            </div>
          );
      }
    }


    
const mapStateToProps = (state) => {
    return {
      objective: state.objective,
    };
  };
  
  export default connect(mapStateToProps, { retrieveObjectives})(ObjectiveList);


// export default ObjectiveList;