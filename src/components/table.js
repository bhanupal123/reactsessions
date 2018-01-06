import React,{Component} from 'react';
import { Icon, Label, Menu, Table } from 'semantic-ui-react'



class MyTable extends Component{
    constructor(props) {
        super(props);        
    } 

    render(){
        console.log(this.props);
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
                        <Table.Cell>Cell</Table.Cell>
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
                            <Menu.Item as='a' tag="-1" icon>
                            <Icon name='left chevron' />
                            </Menu.Item>
                            <Menu.Item as='a' tag="1">1</Menu.Item>
                            <Menu.Item as='a' tag="2">2</Menu.Item>
                            <Menu.Item as='a' tag="3">3</Menu.Item>
                            <Menu.Item as='a' tag="4">4</Menu.Item>
                            <Menu.Item as='a' tag="+1" icon>
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

export default MyTable
