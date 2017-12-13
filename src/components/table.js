import React,{Component} from 'react';
import { Icon, Label, Menu, Table } from 'semantic-ui-react'


/**
 * 
 * props- > 
 * 
 *  columns : {
 *      [ 
 *          {
 *              field : 'fieldName',
 *              label : 'FieldName,
 *              render : (data, row)
 *          },
 *          {
 *              field : 'fieldName1',
 *              label : 'FieldName,
 *              render : (data, row)
 *          },
 *      ]
 *  } 
 * 
 * data : [ {
 *      fieldName : 'fieldValue00',
 *      fieldName1 : 'fieldValue10
 *  },
 * {
 *      fieldName: 'fieldValue11',
 *      fieldName : 'fieldValue20
 * }]
 */


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
 ]

 let pageSize = 10;

 var record = i => {
     return {    
        firstName: 'firstName' + i,
        lastName: 'lastName' + i,
        age: i        
     }
 }
 
 data = new  Array(100).fill(0).map((d,i) => record(i));

class PageHandler {
    constructor(pageSize, data) {
        this.pages = 0;
        this.pageSize = pageSize;
        this.data = data;
    }

    getPage(pageNo) {

    }


    getPages() {      
        return (this.data.length / this.pageSize) + 1
    }
}

var mapFromNum = (n, fn) => new Array(n).fill(0).map((d,i) => fn(i));

class MyTable extends Component{
    constructor(props) {
        super(props);
        this.pagedData = new PageHandler(20, data);
        this.state = {
            currentPage : 1,
            data : data,
            columnInfo : columns,
            pages: this.pagedData.getPages()
        }
    }
 

    render(){
        return (
            <div className='formContainer'>
                <Table celled >
                    <Table.Header>
                    <Table.Row>            
                        {this.state.columnInfo.map((d,i) => <Table.HeaderCell>{d.header}</Table.HeaderCell>)}
                    </Table.Row>
                    </Table.Header>           
                    <Table.Body>
                        {
                            this.state.data.map((d) => {
                                return (
                                    <Table.Row>
                                        {/* {columns.map((c) => <Table.Cell>{render(d, c)}</Table.Cell>)} */}
                                        {
                                            columns.map((c) => <Table.Cell>{d[c.field]}</Table.Cell>)
                                        }
                                    </Table.Row>    
                                );
                            })
                        }
                    </Table.Body>
                    <Table.Footer>
                        <Table.Row>
                            <Table.HeaderCell colSpan='3'>
                            <Menu pagination floated='right' >
                                {
                                    this.state.pages > 1 &&
                                    <Menu.Item as='a' icon>
                                        <Icon name='left chevron' />
                                    </Menu.Item>
                                }
                                {
                                    mapFromNum(this.state.pages, (i) => 
                                        <Menu.Item as='a' tag={i+1} active={this.state.currentPage == i + 1} onClick={(e, data) => this.pageChanged(parseInt(data.tag))}>{i +1}</Menu.Item>
                                        )
                                }
                                { 
                                    this.state.pages > 1 && 
                                    <Menu.Item as='a' icon>
                                        <Icon name='right chevron' />
                                    </Menu.Item>
                                }
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


function render(row, columnInfo) {
    //debugger;
    var field = columnInfo.field;
    /*if(columnInfo.render) {
        return columnInfo.render(row[field], row);
    }else {
        return row[field];
    }*/

    return row[field];
}

export default MyTable
