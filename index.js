const express = require('express');
const app = express();
const router = require('./server/routers/testRouter.js')

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(__dirname + '/public'));

app.use('/', router);
app.use('/test', router)


app.listen(process.env.port || 3000);
console.log('Running at Port 3000');
/* 
- setup server (done)
- render html file (done)
- button onClick event (done)
- change arr
- change localStorage
- change html DOM (done)
*/
