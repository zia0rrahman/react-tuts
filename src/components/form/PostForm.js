import React, { Component } from 'react'

class PostForm extends Component {

    state = {
        name: '',
        email: '',
        password: '',
        bio: '',
        country: '',
        gender: '',
        skills: []
    }

    changeHandler = (event) => {
        if(event.target.type === 'checkbox'){
            // if checked
            if(event.target.checked){
                this.setState({
                    ...this.state,
                    skills: this.state.skills.concat(event.target.value)
                })
            }else{
                this.setState({
                    ...this.state,
                    skills: this.state.skills.filter(skill => skill !== event.target.value)
                })
            }
        }else{
            this.setState({
                //select name from form and get value
                [event.target.name]: event.target.value
            })
        }
    }

    submitHandler = (event) => {
        event.preventDefault()
        console.log(this.state)

        // clearing the value from input
        this.setState({
            name: '',
            email: '',
            password: '',
            bio: '',
            skills: ''
        })
    }

    render() {
        return (
            <div className="container col-sm-8">
                <form onSubmit={this.submitHandler}>
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Your name"
                            className="form-control"
                            name="name"
                            id="name"
                            value={this.state.name}
                            onChange={this.changeHandler}
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Your email"
                            className="form-control"
                            name="email"
                            id="email"
                            value={this.state.email}
                            onChange={this.changeHandler}
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="password"
                            placeholder="Your password"
                            className="form-control"
                            name="password"
                            id="password"
                            value={this.state.password}
                            onChange={this.changeHandler}
                        />
                    </div>

                    <div className="form-group">
                        <textarea
                            type="text"
                            placeholder="Give your short bio"
                            className="form-control"
                            name="bio"
                            id="bio"
                            value={this.state.bio}
                            onChange={this.changeHandler}
                        />
                    </div>

                    {/* select */}
                    <div className="form-group">
                        <select onChange={this.changeHandler} className="form-control" name="country">
                            <option>Select Country</option>
                            <option value="Bangladesh">Bangladesh</option>
                            <option value="India">India</option>
                            <option value="Pakistan">Pakistan</option>
                            <option value="Australia">Australia</option>
                        </select>
                    </div>

                    {/* checkbox */}
                    <div className="form-group">
                        <div className="form-check">
                            <input onChange={this.changeHandler} type="radio" name="gender" value="Male" />Male
                        </div>
                        <div className="form-check">
                            <input onChange={this.changeHandler} type="radio" name="gender" value="Female" />Female
                        </div>
                    </div>

                    {/* select */}
                    <div className="form-group">
                        <div className="form-check">
                            <input onChange={this.changeHandler} name="skills" type="checkbox" value="Javascript" className="form-check-input"/> Javascript
                        </div>
                        <div className="form-check">
                            <input onChange={this.changeHandler} name="skills" type="checkbox" value="PHP" className="form-check-input"/> PHP
                        </div>
                        <div className="form-check">
                            <input onChange={this.changeHandler} name="skills" type="checkbox" value="Python" className="form-check-input"/> Python
                        </div>
                    </div>

                    <button className="btn btn-primary" type="submit">Submit</button>
                </form>
                <br />
            </div>
        )
    }
}
export default PostForm\\