'use strict'

const Brain = require('./src/Brain');
const NeuralNetwork = require('./src/NeuralNetwork');
const tfn = require('@tensorflow/tfjs-node')

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

    async asyncompileAndTrain(x, y, epochs, prefix) {
        let model = await this.neuralNetwork.compileModelNode(x, y, epochs);
        await model.save(`file://${prefix}`);
        return {message:"SUCCESS"}
    }

    async linearRegressionNode(model, y) {
        const trainedModel = await tfn.loadLayersModel(`file://${model}/model.json`);
        let predict = await this.neuralNetwork.linearRegressionNt(trainedModel, y);
        return predict;
    }
}

module.exports = LinearRegressionJs;