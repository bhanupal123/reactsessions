Exercise: 

1. Reimplement MyTable component to take following properties 

	a) data : Array of JSON with fields.. each entry in the Array corresponds to a row. 
	eg: 
    [ 
		{
            id : 1
            firstName : 'First Name 1',
            lastName : 'Last Name 1',
            mail: 'user1@mail.com
        },
        {
            id : 2
            firstName : 'First Name 2',
            lastName : 'Last Name 2',
            mail: 'user2@mail.com
        },
        {
            id : 3
            firstName : 'First Name 3',
            lastName : 'Last Name 3',
            mail: 'user3@mail.com
        }
    ]        

    b) columns : Array of column header defintion, 'field' value is the key name to be read from the data array to list the rows in the table.
    if the field value for column 1 is 'id' then the cell value for row 1 and column 1 is data[0][id]   
    
    eg: 
    [
        {
            field : 'id',
            header : 'Id',         
        },
        {
            field : 'firstName',
            header: 'First Name',      
        },
        {
            field : 'lastName',
            header: 'Last Name'
        },
        {
            field : 'mail',
            header: 'Last Name'
        }
    ] 

    c) pageSize: Number of rows to be listed in the table per page

    MyTable implementation requirement

    i) MyTable should display pagination control at the bottom of the table
    ii) MyTable should only display number of records that is equal to 'pageSize'
    iii) Pagination control should have right number of page entries. 
        Eg: if per page records is 10 and total records are 50, pagination control should have 1,2,3,4,5 entries only
    iv) When the page changes, the table content should change displaying new page content
    
2. TablForm component should return pageSize and total number of pages to App component
3. App component must create mock data. ie create n number of entries as data value and pass to MyTable
    Hint: Have a template object defintion and use map to generate n number of records. If stuck refer to datatable-datageneration branch
4. App component must also pass the column defintion, data and pageSize to MyTable component