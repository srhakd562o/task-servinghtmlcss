//const http = require('http');
//const routes = require('./routes');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactRoutes = require('./routes/contactus')
const successRoutes = require('./routes/success')

app.use(bodyParser.urlencoded({extended:  false}));
app.use(express.static(path.join(__dirname,'public')))
//app.use('/',(req,res,next)=>{
  //  console.log("This always runs!");
    //next();
//})
app.use('/admin',adminRoutes);
app.use(shopRoutes);
app.use(contactRoutes);
app.use(successRoutes);
//app.use('/login',loginRoutes)


app.use((req,res,next)=>{
  res.status(404).sendFile(path.join(__dirname,'views','4O4.html'));
})



//const server = http.createServer(app);
//const PORT = 3000;

//server.listen(PORT, () => {
  //  console.log(`Server is running on port ${PORT}`);
//});
//server.listen(3000);
app.listen(3000);