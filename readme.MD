
A simple docker box for testing whether webpack is actually uglifying code.


# How to use.

Run `docker-compose up`.

This will bring the box up, install the npm modules and start webpack running in watch mode.

Two files will be written to ./output

output/main.js - the output from webpack.

output/manual.min.js - the output from manually calling `UglifyJS.minify()`

The Javascript in the manually uglified file looks minified to me:

```
function really_long_test_function_name(a,p){var d=a+"asdjpajdpoadpsapodjpasojdpoajpdoaspdpasjd";return(d+(d+(d+(d+(d+(d+(d+(p+"asdjpajdpoadpsapodjpasojdpoajpdoaspdpasjd")))))))).length}
```

The built output/main.js doesn't look minified at all:

```
!function(l){function _(n){if(a[n])return a[n].exports;var o=a[n]={i:n,l:!1,exports:{}};return l[n].call(o.exports,o,o.exports,_),o.l=!0,o.exports}var a={};_.m=l,_.c=a,_.i=function(l){return l},_.d=function(l,a,n){_.o(l,a)||Object.defineProperty(l,a,{configurable:!1,enumerable:!0,get:n})},_.n=function(l){var a=l&&l.__esModule?function(){return l.default}:function(){return l};return _.d(a,"a",a),a},_.o=function(l,_){return Object.prototype.hasOwnProperty.call(l,_)},_.p="",_(_.s=0)}([/*!******************************!*\
  !*** ./src/compress_test.js ***!
  \******************************/
function(module,exports){eval('// compress_test.js\nfunction really_long_test_function_name(some_really_long_param_name_1, some_really_long_param_name_2) {\n\n\n    var foo_really_long_var_name_1 = some_really_long_param_name_1 + "asdjpajdpoadpsapodjpasojdpoajpdoaspdpasjd";\n    var foo_really_long_var_name_2 = some_really_long_param_name_2 + "asdjpajdpoadpsapodjpasojdpoajpdoaspdpasjd";\n\n    var foo_really_long_var_name_3 = foo_really_long_var_name_1 + foo_really_long_var_name_2;\n    var foo_really_long_var_name_4 = foo_really_long_var_name_1 + foo_really_long_var_name_3;\n    var foo_really_long_var_name_5 = foo_really_long_var_name_1 + foo_really_long_var_name_4;\n    var foo_really_long_var_name_6 = foo_really_long_var_name_1 + foo_really_long_var_name_5;\n    var foo_really_long_var_name_7 = foo_really_long_var_name_1 + foo_really_long_var_name_6;\n    var foo_really_long_var_name_8 = foo_really_long_var_name_1 + foo_really_long_var_name_7;\n    var foo_really_long_var_name_9 = foo_really_long_var_name_1 + foo_really_long_var_name_8;\n\n\n    return foo_really_long_var_name_9.length;\n}//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wcmVzc190ZXN0LmpzP2EwZDQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gY29tcHJlc3NfdGVzdC5qc1xuZnVuY3Rpb24gcmVhbGx5X2xvbmdfdGVzdF9mdW5jdGlvbl9uYW1lKHNvbWVfcmVhbGx5X2xvbmdfcGFyYW1fbmFtZV8xLCBzb21lX3JlYWxseV9sb25nX3BhcmFtX25hbWVfMikge1xuXG5cbiAgICB2YXIgZm9vX3JlYWxseV9sb25nX3Zhcl9uYW1lXzEgPSBzb21lX3JlYWxseV9sb25nX3BhcmFtX25hbWVfMSArIFwiYXNkanBhamRwb2FkcHNhcG9kanBhc29qZHBvYWpwZG9hc3BkcGFzamRcIjtcbiAgICB2YXIgZm9vX3JlYWxseV9sb25nX3Zhcl9uYW1lXzIgPSBzb21lX3JlYWxseV9sb25nX3BhcmFtX25hbWVfMiArIFwiYXNkanBhamRwb2FkcHNhcG9kanBhc29qZHBvYWpwZG9hc3BkcGFzamRcIjtcblxuICAgIHZhciBmb29fcmVhbGx5X2xvbmdfdmFyX25hbWVfMyA9IGZvb19yZWFsbHlfbG9uZ192YXJfbmFtZV8xICsgZm9vX3JlYWxseV9sb25nX3Zhcl9uYW1lXzI7XG4gICAgdmFyIGZvb19yZWFsbHlfbG9uZ192YXJfbmFtZV80ID0gZm9vX3JlYWxseV9sb25nX3Zhcl9uYW1lXzEgKyBmb29fcmVhbGx5X2xvbmdfdmFyX25hbWVfMztcbiAgICB2YXIgZm9vX3JlYWxseV9sb25nX3Zhcl9uYW1lXzUgPSBmb29fcmVhbGx5X2xvbmdfdmFyX25hbWVfMSArIGZvb19yZWFsbHlfbG9uZ192YXJfbmFtZV80O1xuICAgIHZhciBmb29fcmVhbGx5X2xvbmdfdmFyX25hbWVfNiA9IGZvb19yZWFsbHlfbG9uZ192YXJfbmFtZV8xICsgZm9vX3JlYWxseV9sb25nX3Zhcl9uYW1lXzU7XG4gICAgdmFyIGZvb19yZWFsbHlfbG9uZ192YXJfbmFtZV83ID0gZm9vX3JlYWxseV9sb25nX3Zhcl9uYW1lXzEgKyBmb29fcmVhbGx5X2xvbmdfdmFyX25hbWVfNjtcbiAgICB2YXIgZm9vX3JlYWxseV9sb25nX3Zhcl9uYW1lXzggPSBmb29fcmVhbGx5X2xvbmdfdmFyX25hbWVfMSArIGZvb19yZWFsbHlfbG9uZ192YXJfbmFtZV83O1xuICAgIHZhciBmb29fcmVhbGx5X2xvbmdfdmFyX25hbWVfOSA9IGZvb19yZWFsbHlfbG9uZ192YXJfbmFtZV8xICsgZm9vX3JlYWxseV9sb25nX3Zhcl9uYW1lXzg7XG5cblxuICAgIHJldHVybiBmb29fcmVhbGx5X2xvbmdfdmFyX25hbWVfOS5sZW5ndGg7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcHJlc3NfdGVzdC5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==')}]);
```


## Some other tips

### Check what the container name is

`docker ps`

### shell into box

`docker exec -it reacttest_npm_1 bash`
