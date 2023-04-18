'use strict'

const Brain = require('./src/Brain');

class LinearRegressionJs {

    constructor() {
        this.brain = new Brain();
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

}

module.exports = LinearRegressionJs;