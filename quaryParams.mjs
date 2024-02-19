import express from 'express';
const app=express();
const PORT=process.env.PORT||3000;

const userArr=[
{id:1, username:'aniket', displayName:"Aniket Kumar"},
{id:1, username:'aniket', displayName:"Aniket Kumar"},
{id:2, username:'anup', displayName:"Anup Kumar"},
{id:3, username:'ani', displayName:"ANi Kumar"},
{id:4, username:'ankur', displayName:"Ankur Kumar"},
{id:5, username:'ajit', displayName:"Ajit Kumar"}
];

app.get('/api/users',(req, res)=>{
    // console.log(req.query);

    //query param

    // search like this
    // http://localhost:3000/api/users?key=username&value=aniket   ;   i.e key hamara username rahega aur valu aniket match kr rha hai wah savi oject do


    const{
        query:{key,value}
    }=req;

    //when filter and value are undefined
    if(!key && !value) return res.send(userArr);
    
   
//if key value found

    if(key && value) return res.send(
        userArr.filter((user)=>user[key].includes(value))
    )

})

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
