import React,{Component} from 'react';
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
import PagedData from '../helpers/pagedData';

var mapTimes = (n, fn) => new Array(n).fill(0).map((d,i) => fn(i));

class MyTable extends Component{
    constructor(props) {
        super(props);         
        this.updateState(props);       
    } 

    updateState(props) {
        this.pagedData = new PagedData(props.pageSize, props.data);
        this.state = {
            ...this.state,
            currentPage : 1,
            data: this.pagedData.getPage(1),
            pages: this.pagedData.getPages()
        };
        console.log("state....",this.state); 
    }

    componentWillReceiveProps(props){
        this.updateState(props);     
    }

    renderHeader() {
        return (
            <Table.Row>
            {
                this.props.columns.map(c => 
                    <Table.HeaderCell>{c.header}</Table.HeaderCell>)
            }
            </Table.Row>
        )
    }

    renderRows() {
        if(this.state.data.length > 0) {
            return(
                this.state.data.map(d => 
                    <Table.Row>
                        {this.props.columns.map(c=> 
                            <Table.Cell>{d[c.field]}</Table.Cell>                            
                        )}
                    </Table.Row>
                )                
            )
        }
    }

    renderFooter() {
        return mapTimes(this.state.pages, (i) =>             
            <Menu.Item 
                as='a' 
                active={this.state.currentPage == i+1} 
                tag={i +1}
                onClick={(e,data)=> this.onPageChange(data.tag)}>
                    {i+1}
            </Menu.Item>        
        )
    }

    onPageChange(pageTag) {
        this.setState({
            ...this.state,
            currentPage : pageTag,
            data : this.pagedData.getPage(pageTag)       
        });
    }

    render(){
        console.log(this.props);
        return (
            <div className='formContainer'>
                <Table celled>
                    <Table.Header>                    
                        {this.renderHeader()}                                           
                    </Table.Header>
                    <Table.Body>
                        {this.renderRows.call(this)}
                    </Table.Body>
                    <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='3'>
                        <Menu floated='right' pagination>
                            {this.state.pages > 1 && 
                                <Menu.Item as='a' tag="-1" icon onClick={(e,data)=> this.onPageChange(data.tag)}>
                                    <Icon name='left chevron' />
                                </Menu.Item>
                            }
                            {this.renderFooter()}
                            {this.state.pages > 1 && 
                                <Menu.Item as='a' tag="+1" icon onClick={(e,data)=> this.onPageChange(data.tag)}>
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

    pageChanged(pageTag) {
        var pageNo = this.state.currentPage;        
        if(pageTag === '-1') {
            if(pageNo > 1) {
                --pageNo;
            }
        }else if(pageTag === '+1') {
            if(pageNo < this.pagedData.getPages()){
                ++pageNo;
            }
        }else {
            pageNo = parseInt(pageTag);
        }        
        this.setState({
            ...this.state,
            currentPage : pageNo
        });
    }
}

export default MyTable
