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
npm install linear-regression-tfjs
```

how to use linear regression

```javascript
const LinearRegressionJs = require('linear-regression-tfjs')
```
or

```javascript
import LinearRegressionJs from 'linear-regression-tfjs'
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

### asyncompileAndTrain

Training and saving a model!

This method becomes more interesting, since with it we can train a model and leave it 
saved.. so that it can be used in the future on several occasions.

```javascript
async asyncompileAndTrain(x, y, epochs, prefix)
```
Let's analyze the arguments.

* X = It is a one-dimensional array of numbers.
* Y = is a tensor and must be reported as one.
* epochs = Training period of our model (The callback is shown in the console so you can check the best number of epochs for your model.)
* prefix = It is the directory where you want to save your model.
By default, tensorflow will always save your model as "model.json" plus a binary.

Let's see an implementation example:

```javascript
 let dir = `${__dirname}/models`
 let predict = await linearRegressionJs.asyncompileAndTrain([1, 2, 3, 4, 5], [[10], [20], [30], [40], [50]], 1500, dir)
```
It is important to note that you must use __dirname to get your application's directory. And remember to create the directories you want to store your model. 
In the case of the examples, we created the "models" directory and passed it in dir.

The return of this function will be...
```javascript
{ message: 'SUCCESS' }
```
After this process, you will see your model within the specified directory. Now we are ready to use it.

###  linearRegressionNode

This method will perform a prediction based on a pre-trained model. (as done in the previous method)

```javascript
 async linearRegressionNode(model, y)
```
Let's analyze the arguments.

* model = The directory where we have a pre-trained model.
* y = Numeric array from which we want to extract a prediction

```javascript
 let dir = `${__dirname}/models`
 let predict = await linearRegressionJs.linearRegressionNode(dir,[6, 7, 8, 9,10,11])
 console.log(predict)
```
If you noticed. In the asyncompileAndTrain function we trained the multiples of 10 from 0 to 5. 
Now we want our model to tell us what the predictions would be for 6 to 11.

The return of this call will be:

```javascript
{
  vector: [ 6, 7, 8, 9, 10, 11 ],
  prefict: [ 60, 70, 80, 90, 100, 110 ]
}
```

### final thoughts

You can use this library in several ways. It can predict coin prices, population numbers, player actions and many others. 
If you want to contribute to the library with improvements and functions, feel free and you will be very welcome.