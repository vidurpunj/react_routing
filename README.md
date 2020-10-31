ruby 2.7.2p137
Rails 6.0.3.4
yarn 1.22.5
Node v10.19.0
Implemented: 
1.
Fetch data from Rest API
https://reqres.in/api/unknown
https://reqres.in/api/products/
2.
Read the Response from the API
3.
The APIs could be long running process so need to handle the it in an async manner.
4.
Cache the API response on Rails Server side.
5.
Merge the data from Both the API requests.
6.
Show the merged results to UI View, using either
a.
JavaScript Library Binding ( ReactJS, Angular, JQuery)
b.
Using he Rails variable
7.
Store the Values in the local store of Browser for 1 Hour. Such that it should be secure. 