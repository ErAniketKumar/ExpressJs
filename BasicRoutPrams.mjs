import express from 'express';
const app=express();
const PORT=process.env.PORT||3000;

app.get('/',(req, res)=>{
    // res.send("hello from home age");
    // res.send({msg:"hello"});
    res.status(201).send({name:"Aniket"});
});

const userArr=[
{id:1, username:'aniket', displayName:"Aniket Kumar"},
{id:1, username:'aniket', displayName:"Aniket Kumar"},
{id:2, username:'anup', displayName:"Anup Kumar"},
{id:3, username:'ani', displayName:"ANi Kumar"},
{id:4, username:'ankur', displayName:"Ankur Kumar"},
{id:5, username:'ajit', displayName:"Ajit Kumar"}
];

app.get('/api/users',(req, res)=>{
    res.send(userArr);
})

app.get('/api/products',(req, res)=>{
    res.send([
    {id:123,name:'soap',price:99},
    {id:124,name:'masala',price:50},
    {id:125,name:'chicken',price:199},
    {id:126,name:'roti',price:9}
  ]);
});

app.get('/api/users/:id', (req, res)=>{

    const parsedId=parseInt(req.params.id);

    const findUser=userArr.find((user)=>{
       return user.id===parsedId
    });

    if(!findUser)
    {
        res.status(404).send('user not found');
    }else {
        res.send(findUser);
    }

});

app.listen(PORT,()=>{
    console.log(`Server Started at Port ${PORT}`);
})
