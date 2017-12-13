import React,{Component} from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'

class TableForm extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            pageSize : "",
            totalRows : "",            
        };
    }
    
    render(){
        return(
            <div className="formContainer">            
                <Form>
                    <Form.Field>
                    <label>Rows Per Page</label>
                    <input placeholder='Page Size' onChange={(e) => this.fieldChanged('pageSize',e)}/>
                    </Form.Field>
                    <Form.Field>
                    <label>Total Rows</label>
                    <input placeholder='Total Rows' onChange={(e) => this.fieldChanged('totalRows',e)}/>
                    </Form.Field>                   
                    <Button type='submit' onClick={this.onSubmit.bind(this)} >Submit</Button>
                </Form>
            </div>
        )
    }

    onSubmit() {
         this.props.onSubmit({
             totalRows : parseInt(this.state.totalRows),
             pageSize : parseInt(this.state.pageSize)
         });   
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
export default TableForm