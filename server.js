var express = require('express')

var app = express();

var options = {
    index: "home.html"
}

app.use(express.static(__dirname + '/public', options))

var server = app.listen(3000, () => {
    var port = server.address().port;
    console.log(`Server started on port ${port}`)
})