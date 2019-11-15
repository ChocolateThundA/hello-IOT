/**
 * Copyright 2017, Google, Inc.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

// [START gae_node_request_example]
const express = require('express');

const app = express();

//how many times has the user said hello
let timesHelloed = 0;

app.get('/', (req, res) => {
  res
    .status(200)
    .send('Hello, world!')
    .end();
});
//user says hello
app.get('/hello',(req, res) => {

  timesHelloed = timesHelloed + 1;
  res
    .status(200)
    .send('User said hello to us')
    .end();
});

//so what I need to do in here is change the source code to be a github repo that I can change locally 

//let the user see how many times they've said hello
app.get('/timesHelloed',(req,res) =>{
  res
    .status(200)
    .send('Times Helloed = '+timesHelloed)
    .end()
}); 

app.get('/resetTimesHelloed',(req,res) =>{
  timesHelloed = 0
  res
    .status(200)
    .send('Times helloed reset')
    .end()
}); 

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
// [END gae_node_request_example]

module.exports = app;
