'use strict'

const tf = require('@tensorflow/tfjs');
const Utils = require('./helpers/Utils');

class Brain {
    /**
     * This function execute a calc to linear regression in more simples way
     * @param {Array<number>} x 
     * @param {Array<number>} y 
     * @returns {Promisse<Array>}
     */
    async simplesLinearRegression(vetorX, vetorY) {
        let onSize = vetorX.length;
        let twoSize = vetorY.length;

        let tempOne = vetorX.slice(0, twoSize);
        let tempTwo = vetorY
        let difSize = onSize - twoSize;

        if (difSize > 0) {

            let regression = [];

            for (let i = 0; i < difSize; i++) {
                let predict = await this.linarRegressionCalc(tempOne, tempTwo, vetorX[twoSize + i]);
                regression.push(parseFloat(predict.toFixed(2)));
            }

            let newY = tempTwo.concat(regression);
            return {
                one: vetorX,
                predict: newY
            }
        }
    }

    async linarRegressionCalc(arrX, arrY, p) {
        let x = tf.tensor(arrX);
        let y = tf.tensor(arrY);

        let resultado1 = x.sum().mul(y.sum()).div(x.size);
        let resultado2 = x.sum().mul(x.sum()).div(x.size);
        let resultado3 = x.mul(y).sum().sub(resultado1);
        let resultado4 = resultado3.div(x.square().sum().sub(resultado2));
        let resultado5 = y.mean().sub(resultado4.mul(x.mean()));

        let tensor = resultado4.mul(p).add(resultado5);
        let array = Utils.tensorToArray(tensor);
        return array;

    }
    
}

module.exports = Brain;