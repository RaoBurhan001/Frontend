import React, { Component } from "react";
import { connect } from "react-redux";
import { createSubjectiveQuestion } from "../actions/subjective";
import { createObjectiveQuestion } from "../actions/objective";
import store from "../store";





class AddSubjective extends Component {
  constructor(props) {
    super(props);
    // this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeOption1 = this.onChangeOption1.bind(this);
    this.onChangeOption2 = this.onChangeOption2.bind(this);
    this.onChangeOption3 = this.onChangeOption3.bind(this);
    this.onChangeOption4 = this.onChangeOption4.bind(this);
    this.onChangeTeacher = this.onChangeTeacher.bind(this);
    this.onChangeCourse = this.onChangeCourse.bind(this);
    this.onChangeCode = this.onChangeCode.bind(this);
    this.saveTutorial = this.saveTutorial.bind(this);
    this.newTutorial = this.newTutorial.bind(this);

    this.state = {
      id: null,

      description: "",
      option1:"",
      option2:"",
      option3:"",
      option4:"",
      teacher:"Burhan",
      course:"Algorithm",
      code:"qwerty"
  //    published: false,

   // submitted: false,
    };
  }

  onChangeAnswer(e) {
    this.setState({
      answer: e.target.value,
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }
  onChangeOption1(e) {
    this.setState({
      option1: e.target.value,
    });
  }

  onChangeOption2(e) {
    this.setState({
      option2: e.target.value,
    });
  }

  onChangeOption3(e) {
    this.setState({
      option3: e.target.value,
    });
  }

  onChangeOption4(e) {
    this.setState({
      option4: e.target.value,
    });
  }

  onChangeTeacher(e) {
    this.setState({
      teacher: e.target.value,
    });
  }

  onChangeCourse(e) {
    this.setState({
      course: e.target.value,
    });
  }

  onChangeCode(e) {
    this.setState({
      code: e.target.value,
    });
  }





  saveTutorial() {
    const { description,option1,option2,option3,option4, code,teacher,course } = this.state;
    console.log(description,option1,option2,option3,option4,code,teacher,course)
    this.props
      .createObjectiveQuestion(description,option1,option2,option3,option4, teacher,code,course)
      .then((data) => {
        this.setState({
          id: data.id,
          description: data.description,
          option1: data.option1,
          option2: data.option2,
          option3: data.option3,
          option4: data.option4,
          teacher:data.teacher,
          course:data.course,
          code:data.code
         // published: data.published,

        //   submitted: true,
        });
        console.log(data);
      })
      .catch((e) => {
        console.log(e.message);
      });
      this.props.history.push("/objective");
  }
  newTutorial() {
    this.setState({
      id: null,

      description: "",
      option1:"",
      option2:"",
      option3:"",
      option4:"",        
      teacher:"Burhan",
      course:"Algorithm",
      code:"qwerty"
      //published: false,

     // submitted: false,
    });
  }

  render() {
    return (
        <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newTutorial}>
              Add
            </button>
          </div>
        ) : (
          <div>
<div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                required
                value={this.state.description}
                onChange={this.onChangeDescription}
                name="description"
              />
            </div>

            <div className="form-group">
              <label htmlFor="option1">Option 1</label>
              <input
                type="text"
                className="form-control"
                id="option1"
            
                value={this.state.option1}
                onChange={this.onChangeOption1}
                name="option1"
              />
            </div>

            <div className="form-group">
              <label htmlFor="title">Option 2</label>
              <input
                type="text"
                className="form-control"
                id="option2"
            
                value={this.state.option2}
                onChange={this.onChangeOption2}
                name="option2"
              />
            </div>

            <div className="form-group">
              <label htmlFor="title">Option 3</label>
              <input
                type="text"
                className="form-control"
                id="option3"
            
                value={this.state.option3}
                onChange={this.onChangeOption3}
                name="option3"
              />
            </div>

            <div className="form-group">
              <label htmlFor="title">Option 4</label>
              <input
                type="text"
                className="form-control"
                id="option4"
            
                value={this.state.option4}
                onChange={this.onChangeOption4}
                name="option4"
              />
            </div>

            
            <div className="form-group">
              <label htmlFor="title">Teacher</label>
              <input
                type="text"
                className="form-control"
                id="teacher"
            
                value={this.state.teacher}
                onChange={this.onChangeTeacher}
                name="option4"
              />
            </div>

            
            <div className="form-group">
              <label htmlFor="title">Course</label>
              <input
                type="text"
                className="form-control"
                id="course"
            
                value={this.state.course}
                onChange={this.onChangeCourse}
                name="course"
              />
            </div>

            
            <div className="form-group">
              <label htmlFor="title">Code</label>
              <input
                type="text"
                className="form-control"
                id="code"
            
                value={this.state.code}
                onChange={this.onChangeCode}
                name="code"
              />
            </div>

            <button onClick={this.saveTutorial} className="btn btn-success">
              Submit
            </button>
            </div>
            )}
      </div>
    );
  }
}


export default connect(null, { createObjectiveQuestion })(AddSubjective);


// export default AddSubjective;