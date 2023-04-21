'use strict'
const tf = require('@tensorflow/tfjs');
const Utils = require('./helpers/Utils');

class NeuralNetwork {

    async compileModel() {
        const model = tf.sequential();
        model.add(tf.layers.dense({ units: 1, inputShape: [1] }))
        model.compile({ loss: 'meanSquaredError', optimizer: 'sgd' });
        return model;
    }


    async linearRegressionNt() {
        let predictInput = [5, 6, 7, 8, 9, 10];
        const x = tf.tensor([1, 2, 3, 4], [4, 1]); //original values
        const y = tf.tensor([[10], [20], [30], [40]]) // train
        const input = tf.tensor(predictInput, [predictInput.length, 1]) // inptus to predict
        let model = await this.compileModel();
        await model.fit(x, y, {
            epochs: 2500, callbacks: { onBatchEnd:(bath, logs) =>{
                console.log(logs.loss)
            }}
        })
        let output = model.predict(input).dataSync()
        output = Utils.convertTensorPredictToarray(output)
        return {
            vector: predictInput,
            prefict: output
        }
    }
   
}

module.exports = NeuralNetwork;