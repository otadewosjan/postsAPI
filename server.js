const express = require('express');
const app = express();
const fs = require('fs');
const port = process.env.PORT || 3000;

app.use(express.static('files'));

app.listen(port);

console.log("server started on port: " + port);

app.get('/posts', allPosts);

function allPosts(request, response) {
    if (fs.existsSync('posts.json')) {
        let items = fs.readFileSync('posts.json');
        response.send(JSON.parse(items));
    } else {
        response.send("no posts");
    }
}