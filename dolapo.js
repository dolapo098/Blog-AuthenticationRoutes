const expressApp = require(`express`);
const PORT = 5000;
const app= new expressApp();
const mongo = require(`mongoose`);
const bodyParser = require('body-parser');
const mysql = require('mysql');
const user = require('./MODEL/user')
const models = require('./MODEL/models'); 
const cors = require('cors');
 
app.use(cors());
//const {Schema} = require(`mongoose`);

app.use(expressApp.json());

app.use(bodyParser.urlencoded({
    extended : false
})
);

app.use(bodyParser.json());

app.use('/route', require('./routes/api'));

// Testing Port Number
app.listen(PORT ,(err)=>{
    if(err){
        console.log('I am a boy');
    }
    else{
        console.log('Buhari is our President');
    }
})

// The mongo identifier which connects my models to my mongo database
mongo.connect('mongodb://127.0.0.1:27017/nesa',{ useNewUrlParser: true } ,(err)=>{
                if (err){
                    console.log('The connection string doesnt match');
                }
                else{
                    console.log('i am connected')
                }
               
})

// Mongo connect to save a data
app.get('/savedata', (req, res)=>{
    const data = req.query;
    const modelsdata = new models({
        title: data.title,
        author: data.author,
        body: data.body,
        comments: 0,
        date: new Date
    })
    modelsdata.save((err,doc)=>{
        if (err){
            console.log('values doesnt match');
        }
        else{
            return res.json(doc);
        }
        
    })

})

//mongo connect to fetch data
app.get('/getdata',(req,res)=>{
    models.find({'title':'mongo'},(err,doc)=>{
        return res.json(doc)
    })
})
// const connectionObject = {
//     host:'localhost',
//     user: 'root',
//     password: '',
//     database: 'nesa'
// }

// const connection= mysql.createConnection(connectionObject)

// connection.connect((err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('My backend is working');
//     }
// })

// app.get('/jobs',(req, res)=>{
//     connection.query('SELECT * FROM `feedback`', (err, results, fields)=>{
//         if(!err){
//             return res.json({
//                 'status': true,
//                 'result': results,
//             })
//         }
//         console.log(err);
//         return res.json({
//             status:false,
//             message:'an error occured'
//         })
//     })
// })

// app.get('/jobsearch', (req,res,)=>{
// connection.query('SELECT * FROM `application_master` as am JOIN `jobseeker_reg`as jr ON jr.JobSeekId = am.JobSeekId WHERE `ApplicationId` = 2',(err, results, fields)=>{
//         if(!err){
//             return res.json({
//                 'status' : true,
//                 'result': results
//           })
//         }
//         console.log(err);
//         return res.json({
//             status:false,
//             message:'an error occured'
//         })
//     })
// })

//  ui.get(`/login`,(request , response)=>{
//       let person = request.query;
//       return response.send(person);
      
// //     const user = {
// //         name: 'Dols'.toLocaleLowerCase(),
// //         skillLevel: '04',
// //         height: 'Lol',
// //         laptop : 'Hp',
// //         password :'bok@12',
// //         gender : 'male',
// //         sports : 'football'
// //     }
// //     const data = request.query;
// //     if(data.name.toLocaleLowerCase() == user.name && data.password == user.password){
// //         // return response.send('welcome ${user.name}')
// //         return response.json(request.query);
// //     }
// //     else{
// //        return response.send('wrong credentials') 
// //     }

//  })





// ui.post('/register', (request , response)=>{
    
//     const callPerson = request.body;
//         return response.json(callPerson);
   
// })

// ui.get(`/profile`,(request , response)=>{
//     response.send('You requested for a data on my Git Profile');
// })
