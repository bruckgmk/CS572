//Book collection
{
    _id: ObjectId(),
    isbn: '0001', // use it as ID
    author: 'Tom Clancy',
    tag: ['keyword1','keyword2'],
    borrowedBy:[
        {student:'A', borrowedDate: '', returnDate: ''},
        {student:'B', borrowedDate: '', returnDate: ''}
    ]
}

//Author Collection
{
    author:''
}

// Student Collection
{
    student:''
}