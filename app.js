const express = require('express')

const app = express();
const port = process.env.PORT || 5000;
app.get('/',(req,res)=>{
    res.send('hello rest api')
});

// app.listen(port,()=>{
//     console.log('server is running on port 3000');
    
// })
const start = async () => {
    try {
        app.listen(port,()=>{
           console.log(`${port}  Yes I am Connected`);
           
        });
    } catch (error) {
        console.log(error);
        
    }
}

start()