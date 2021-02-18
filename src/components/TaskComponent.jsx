import React, {Component} from 'react'
import moment from 'moment'
import { Form, Formik, Field, ErrorMessage } from 'formik'

class TaskComponent extends Component{
    
    constructor(props){
        super(props)
        this.state = {
            id: this.props.match.params.id,
            description: '',
            targetDate: moment(new Date()).format('YYYY-MM-DD')
        }
    }


    componentDidMount(){
    }

    componentDidUpdate(){
    }

    shouldComponentUpdate(nextProps, nextState){
        return true
    }
    
    render(){
       let description = this.state.description;
       let targetDate = this.state.targetDate;
       return (
            <div>
                <h1>Task {this.state.id}</h1>
                    <div className="container">
                        <Formik
                        initialValues={{
                            description: description,
                            targetDate: targetDate,
                        }}
                        onSubmit={this.onSubmit}
                        validate={this.validate}
                        validateOnChange={false}
                        validateOnBlur={false}
                        enableReinitialize={true}
                        >
                            {  
                                (props) => (     
                                    <Form>
                                    <ErrorMessage name = "description" component="div" className="alert alert-danger"/>
                                    <ErrorMessage name = "targetDate" component="div" className="alert alert-danger"/>
                                        <fieldset className="form-group">
                                            <label>Description</label>
                                            <Field className = "form-control" type="text" name="description"/>
                                        </fieldset>
                                        <fieldset className="form-group">
                                            <label>Target Date</label>
                                            <Field className = "form-control" type="date" name="targetDate"/>
                                        </fieldset>
                                        <button className="btn btn-dark" type="submit">Save Changes</button>
                                    </Form>   
                                )
                            }
                        </Formik>
                    </div>
            </div>
       )
    }
}

export default TaskComponent