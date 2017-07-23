var express = require('express'),
    app = express();

var router = express.Router();

router.get('/', function(req, res) {
    res.send('Hello world');
});

app.use(router);

app.listen(3000, function() {
    console.log('Node server running on http://localhost:3000/')
});