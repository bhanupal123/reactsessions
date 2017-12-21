import React,{Component} from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'

class UserForm extends Component { 
    constructor(props) {
        super(props);
        this.state = {
           
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
                        <Button.Group>
                            <Button positive={false}>Male</Button>
                            <Button.Or />
                            <Button positive={true}>Female</Button>
                         </Button.Group>
                    </Form.Field>
                    <Form.Field>
                        <label>Projects</label>
                        <input placeholder='Number of projects' onChange={(e) => this.fieldChanged('lastName',e)}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Comments</label>
                        <input placeholder='Comments and discussions' onChange={(e) => this.fieldChanged('lastName',e)}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Favorites</label>
                        <input placeholder='Marked as favorites' onChange={(e) => this.fieldChanged('lastName',e)}/>
                    </Form.Field>
                    <Form.Field>    
                        <label>Clients</label>
                        <input placeholder='Number of clients' onChange={(e) => this.fieldChanged('lastName',e)}/>
                    </Form.Field>
                        <Button type='submit' onClick={() => this.props.onSubmit(this.state)}  >Submit</Button>
                </Form>
            </div>
        )
    }    
}
export default UserForm