import React,{Component} from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'

class LoginForm extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            firstName : "",
            lastName : "",
            agreed : false,
        };
    }
    
    render(){
        return(
            <div className="formContainer">            
                <Form>
                    <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' onChange={(e) => this.fieldChanged('firstName',e)}/>
                    </Form.Field>
                    <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' onChange={(e) => this.fieldChanged('lastName',e)}/>
                    </Form.Field>
                    <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions' onChange={(e, data) => this.fieldChanged('agreed',e, data)}/>
                    </Form.Field>
                    <Button type='submit' onClick={() => this.props.onSubmit(this.state)} >Submit</Button>
                </Form>
            </div>
        )
    }

    fieldChanged(field, e, data) {
        this.setState({
            ...this.state,
            [field] : (field === 'agreed') ? data.checked : e.target.value
        });
        console.log(`${field} changed`);
        //console.log(e);
    }
}
export default LoginForm