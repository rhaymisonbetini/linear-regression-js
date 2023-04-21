'use strict'

const Brain = require('./src/Brain');
const NeuralNetwork = require('./src/NeuralNetwork');
const tf = require('@tensorflow/tfjs');
const tfn = require('@tensorflow/tfjs-node')
const fs = require('fs');
let teste = ''
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

    async asyncompileAndTrain(x, y, epochs, prefix, type = '') {
        if (type == 'web') {
            let model = await this.neuralNetwork.compileModel(x, y, epochs);
            await model.save(`localstorage://${prefix}`);
        } else {
            let model = await this.neuralNetwork.compileModelNode(x, y, epochs);
            await model.save(`file://${__dirname}/${prefix}`);
        }
    }

    async linearRegressionNode(model, y, prefix) {
        const trainedModel = await tf.loadLayersModel(`file://${__dirname}/${prefix}/model.json`);
        let predict = await this.neuralNetwork.linearRegressionNt(trainedModel, y);
    }

    async linearRegressionWeb(model, y, prefix) {
        const trainedModel = await tf.loadLayersModel(`localstorage://${prefix}`);
        let predict = await this.neuralNetwork.linearRegressionNt(trainedModel, y);
    }
}

module.exports = LinearRegressionJs;