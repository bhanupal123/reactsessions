import React,{Component} from 'react';
import { Icon, Label, Menu, Table } from 'semantic-ui-react'

 let columns = [
     {
         field : 'firstName',
         header: 'First Name',
         render : (data, row) => {
            return (
               <Label>
                   <Icon name='user' /> {data}
               </Label>
            );
        }
     },
     {
         field : 'lastName',
         header: 'Last Name'
     },
     {
         field : 'age',
         header : 'Age',         
     }
 ]


 let data = [
     {
         firstName : 'eric',
         lastName : 'banna',
         age: 46
     },
     {
         firstName: 'megan',
         lastName: 'fox',
         age: 26
     },
     {
         firstName: 'kevin',
         lastName: 'bacon',
         age: 59
     }
 ];

var mapTimes = (n, fn) => new Array(n).fill(0).map((d,i) => fn(i));

class MyTable extends Component{
    constructor(props) {
        super(props);
        this.state = {
            currentPage : 1,
            data : data,
            columnInfo : columns,            
        }
    } 

    render(){
        return (
            <div className='formContainer'>
                <Table celled>
                    <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Header</Table.HeaderCell>
                        <Table.HeaderCell>Header</Table.HeaderCell>
                        <Table.HeaderCell>Header</Table.HeaderCell>
                    </Table.Row>
                    </Table.Header>

                    <Table.Body>
                    <Table.Row>
                        <Table.Cell>
                        <Label ribbon>First</Label>
                        </Table.Cell>
                        <Table.Cell>Cell</Table.Cell>
                        <Table.Cell>Cell</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Cell</Table.Cell>
                        <Table.Cell>Cell</Table.Cell>
                        <Table.Cell>Cell</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Cell</Table.Cell>
                        <Table.Cell>Cell</Table.Cell>
                        <Table.Cell>Cell</Table.Cell>
                    </Table.Row>
                    </Table.Body>

                    <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='3'>
                        <Menu floated='right' pagination>
                            <Menu.Item as='a' icon>
                            <Icon name='left chevron' />
                            </Menu.Item>
                            <Menu.Item as='a'>1</Menu.Item>
                            <Menu.Item as='a'>2</Menu.Item>
                            <Menu.Item as='a'>3</Menu.Item>
                            <Menu.Item as='a'>4</Menu.Item>
                            <Menu.Item as='a' icon>
                            <Icon name='right chevron' />
                            </Menu.Item>
                        </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                    </Table.Footer>
                </Table>
            </div>
        )
    }

    pageChanged(pageNo) {
        console.log(`page changed to ${pageNo}`);
    }
}


/*function render(row, columnInfo) {
    //debugger;
    var field = columnInfo.field;
    /*if(columnInfo.render) {
        return columnInfo.render(row[field], row);
    }else {
        return row[field];
    }

    return row[field];
}*/

export default MyTable
