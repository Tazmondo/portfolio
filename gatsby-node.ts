const express = require('express');

// @ts-ignore
exports.onCreateDevServer = ({app}) => {
    app.use(express.static('public'))
}