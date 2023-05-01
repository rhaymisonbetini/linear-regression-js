# LINEAR REGRESSION JS

Library for linear regression in Javascript.
You can run it on your backend in Node!

<div align="center">
  <img src="./src/assets/banner.png" width="100%" height="150"/>
</div>

<p align="center">
   <img src="https://img.shields.io/bower/l/MI?style=flat-square">
   <img src="https://img.shields.io/badge/version-1.0.0-blue">
   <img src="https://img.shields.io/npm/dy/linear-regression-js">
   <img alt="npm" src="https://img.shields.io/npm/dm/linear-regression-js">
   <img alt="npm" src="https://img.shields.io/npm/dw/linear-regression-js">
   <img src="https://img.shields.io/github/issues/rhaymisonbetini/linear-regression-js.svg">
   <img src="https://img.shields.io/github/issues-closed/rhaymisonbetini/linear-regression-js.svg">
   <img src="https://img.shields.io/github/issues-pr/rhaymisonbetini/linear-regression-js.svg">
   <img src="https://img.shields.io/github/issues-pr-closed/rhaymisonbetini/linear-regression-js.svg">
</p>

<p align="center">
   <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
   <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white">
   <img src="https://img.shields.io/badge/TensorFlow-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white">
</p>

<p align="center">
  <a href="https://www.linkedin.com/in/heleno-betini-2b3016175/" target="_blank">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white">
  </a>
  <a href="https://github.com/rhaymisonbetini" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white">
  </a>
</p>

# INSTALL

```
npm install linear-regression-js
```

how to use linear regression

```javascript
const LinearRegressionJs = require('linear-regression-js')
```
or

```javascript
import LinearRegressionJs from 'linear-regression-js'
```

```javascript
let linearRegressionJs = new LinearRegressionJs();
```

Now everything is ready for you to start making two predictions with your library!

# METHODS

### linearRegression

This asynchronous method returns a simple linear regression output.
This method accepts two numeric arrays as an argument.

```javascript
async linearRegression(x = [], y = [])  
```
Let's view an example:

```javascript
    let predict = await linearRegressionJs.linearRegression([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [10, 20, 30, 40, 50, 60])
```
Note that the first argument has a larger dimension. So we want to have the prediction of the indices that 
don't exist in y. So we see that y is a function of x

The return of this function will be...

```javascript
{
  one: [
    1, 2, 3, 4,  5,
    6, 7, 8, 9, 10
  ],
  predict: [
    10, 20, 30, 40,  50,
    60, 70, 80, 90, 100
  ]
}
```
Cool!!!



