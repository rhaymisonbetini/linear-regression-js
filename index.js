'use strict'

const Brain = require('./src/Brain');
const NeuralNetwork = require('./src/NeuralNetwork');

class LinearRegressionJs {

    constructor() {
        this.brain = new Brain();
        this.neuralNetwork = new NeuralNetwork();
    }

    /**
     * This function execute a linear regression in more simples way
     * @param {Array<number>} x 
     * @param {Array<number>} y 
     * @returns {Promisse<Object>}
     */
    async linearRegression(x = [], y = []) {
        let predict = await this.brain.simplesLinearRegression(x, y);
        return predict
    }

    async linearRegressionNt(x = [], y = []) {
        let predict = await this.neuralNetwork.linearRegressionNt();
        console.log(predict);
    }

}

module.exports = LinearRegressionJs;