const Purifycss = require('purifycss-webpack');

module.exports = ({ paths }) => ({
    plugins: [
        new Purifycss({ paths })
    ]
});