import React,{Component} from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'

class UserForm extends Component { 
    constructor(props) {
        super(props);                        
    }
  
    render(){
        return(
            <div className="formContainer">            
                <Form onSubmit={this.props.onSubmit} >
                    <Form.Field>
                        <label>First Name</label>
                        <input placeholder='First Name' required={true} value={this.props.firstName} onChange={(e) => this.props.fieldChanged('firstName',e.target.value)}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Last Name</label>
                        <input placeholder='Last Name' required={true} value={this.props.lastName} onChange={(e) => this.props.fieldChanged('lastName',e.target.value)}/>
                    </Form.Field>
                    <Form.Field>
                        <Button.Group>
                            <Button positive={this.props.gender === 'male'}  onClick={(e) => {
                                e.preventDefault(); 
                                this.props.fieldChanged('gender', 'male')}
                            }>Male</Button>
                        <Button.Or />
                            <Button positive={this.props.gender === 'female'}  onClick={(e)=> {
                                e.preventDefault(); 
                                this.props.fieldChanged('gender', 'female')}
                            }>Female</Button>
                         </Button.Group>
                    </Form.Field>
                    <Form.Field>
                        <label>Projects</label>
                        <input placeholder='Number of projects' required={true} value={this.props.projects}  onChange={(e) => this.props.fieldChanged('projects',e.target.value)}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Comments</label>
                        <input placeholder='Comments and discussions' required={true} value={this.props.comments} onChange={(e) => this.props.fieldChanged('comments',e.target.value)}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Favorites</label>
                        <input placeholder='Marked as favorites' required={true} value={this.props.favorites} onChange={(e) => this.props.fieldChanged('favorites',e.target.value)}/>
                    </Form.Field>
                    <Form.Field>    
                        <label>Clients</label>
                        <input placeholder='Number of clients' required={true} value={this.props.clients} onChange={(e) => this.props.fieldChanged('clients',e.target.value)}/>
                    </Form.Field>
                        <Button type='submit'>Submit</Button>
                </Form>
            </div>
        )
    }    
}
export default UserForm