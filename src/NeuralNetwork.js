'use strict'
const tf = require('@tensorflow/tfjs');
const tfn = require('@tensorflow/tfjs-node')
const Utils = require('./helpers/Utils');

class NeuralNetwork {

    async compileModelNode(datas, corresponding, epochs) {
        const model = tfn.sequential();
        model.add(tfn.layers.dense({ units: 1, inputShape: [1] }))
        model.compile({ loss: 'meanSquaredError', optimizer: 'sgd' });
        const x = tfn.tensor(datas, [datas.length, 1]);
        const y = tfn.tensor(corresponding) //[10], [20], [30], [40]
        await model.fit(x, y, {
            epochs: epochs, callbacks: {
                onBatchEnd: (bath, logs) => {
                    console.log(logs.loss)
                }
            }
        })
        return model;
    }

    async compileModel(datas, corresponding,epochs) {
        const model = tf.sequential();
        model.add(tf.layers.dense({ units: 1, inputShape: [1] }))
        model.compile({ loss: 'meanSquaredError', optimizer: 'sgd' });
        const x = tf.tensor(datas, [datas.length, 1]);
        const y = tf.tensor(corresponding) //[10], [20], [30], [40]
        await model.fit(x, y, {
            epochs: epochs, callbacks: {
                onBatchEnd: (bath, logs) => {
                    console.log(logs.loss)
                }
            }
        })
        return model;
    }

    async linearRegressionNt(model,predictInput) {
        const input = tf.tensor(predictInput, [predictInput.length, 1]) // inptus to predict
        let output = model.predict(input).dataSync()
        output = Utils.convertTensorPredictToarray(output)
        return {
            vector: predictInput,
            prefict: output
        }
    }

}

module.exports = NeuralNetwork;