'use strict'
const tf = require('@tensorflow/tfjs');

class Utils {
    /**
     * This method receive a tensorflow tensor and convert to javascript array
     * @param {Tensor} tensor 
     * @returns {Promise<array>}
     */
    static tensorToArray(tensor) {
        let array = [];
        let strTensor = tensor.toString().replace('Tensor', '').trim();
        eval('array = ' + strTensor);
        return array;
    }
}

module.exports = Utils