const express = require("express");
const app = express();
const port = 80;
var cors = require("cors");
app.use(
  cors({
    origin: "http://localhost:5000",
    optionsSuccessStatus: 200
  })
);

app.get("/hello", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

setInterval(() => {
  try {
    var redis = require("redis"),
      client = redis.createClient("//redis:6379");

    // if you'd like to select database 3, instead of 0 (default), call
    // client.select(3, function() { /* ... */ });

    client.on("error", function(err) {
      console.log("Error " + err);
    });

    // client.set("a", "b");
    client.get("a", (err, reply) => {
      console.log({ reply });
    });

    client.set("string key", "string val", redis.print);
    client.hset("hash key", "hashtest 1", "some value", redis.print);
    client.hset(["hash key", "hashtest 2", "some other value"], redis.print);
    client.hkeys("hash key", function(err, replies) {
      console.log(replies.length + " replies:");
      replies.forEach(function(reply, i) {
        console.log("    " + i + ": " + reply);
      });
      client.quit();
    });
  } catch (err) {
    console.log(err);
  }
}, 5000);
