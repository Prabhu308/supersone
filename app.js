const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<h1 style="color:red">Hello, World!</h1>');
});

app.get("/work",function(req,res)


{
  res.send("<h1 style='color:red'>I am vijay</h1>")

});




module.exports = app; // Export for testingnod


app.listen(3000);