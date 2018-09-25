const express = require('express');
const app = express();
const fs = require('fs');
const port = process.env.PORT || 3000;

const cors = require('cors');
app.use(cors());

app.use(express.static('files'));

app.listen(port);

console.log("server started on port: " + port);

app.get('/posts', allPosts);

function allPosts(request, response) {
    if (fs.existsSync('posts.json')) {
        let items = fs.readFileSync('posts.json');
        let reply = JSON.parse(items);
        response.send(reply);
    } else {
        throw new Error('No posts available');
    }
}