# _Ping Pong Numbers Game Webpage_

####  Iterates through a user defined range of numbers and replaces certain numbers with words, _8/18/2017_

#### By _**Dawson Mortenson**_

## Description
jQuery takes a number from the user by using an HTML form. The backend then loops through all the numbers up to that number and replaces every multiple of 3 with "ping", every multiple of 5 with "pong", and every multiple of 15 with "ping-pong".

#### Specifications
* It checks to make sure the user's input is numeric
  * Example input: "cat"
  * Example Output: "Please enter a number"
* It displays every number from one up to the user's number
  * Example input: 16
  * Example Output: (1,2,...16)
* It displays a "ping" for a number divisible by 3
  * Example input: 3
  * Example Output: (1,2,"ping")
* It displays a "pong" for a number divisible by 5
  * Example input: 5
  * Example Output: (1,2,"ping",4,"pong")
* It displays a "ping-pong" for a number divisible by 15
  * Example input: 15
  * Example Output: (1,2,"ping",4,"pong",...,"ping-pong")

#### To Run Locally
* `git clone https://github.com/CodingTea17/ping-pong.git` into your desired directory.
* `cd ping-pong`
* Open the index.html in a web browser.

#### For a Live Version of The Site
* [Click Here](https://codingtea17.github.io/ping-pong)

## Technologies Used

_HTML, CSS, Javascript, jQuery, and the Bootstrap Framework_

### License

*This website is licensed under the MIT License*

Copyright (c) 2017 **_Dawson Mortenson_**
