'use strict'
const tf = require('@tensorflow/tfjs');

class Utils {
    /**
     * This method receive a tensorflow tensor and convert to javascript array
     * @param {*} tensor 
     * @returns {array}
     */
    static tensorToArray(tensor) {
        let array = [];
        let strTensor = tensor.toString().replace('Tensor', '').trim();
        eval('array = ' + strTensor);
        return array;
    }

    /**
    * This method receive a tensorflow predict  and convert to javascript array
    * @param {*} tensor 
    * @returns {array}
    */
    static convertTensorPredictToarray(tensors) {
        let result = [];
        for(let ts of tensors) {
            result.push(Math.ceil(ts))
        }
        return result;
    }
}

module.exports = Utils