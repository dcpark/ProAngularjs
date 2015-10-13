var connect = require("connect");
var serveStatic = require("serve-static");

app = connect();
app.use(serveStatic("./angularjs/"));
app.listen(5000);