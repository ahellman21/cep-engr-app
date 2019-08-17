var nodeExternals = require('webpack-node-externals');

module.exports = {
    "mode": "development",
    "entry": "script.js",
    "target": 'node', // in order to ignore built-in modules like path, fs, etc.
    "externals": [nodeExternals()],
    "output": {
        "path": __dirname+'/static',
        "filename": "bundle.js"
    },
    "module": {
        "rules": [
            {
                "test": /\.less$/,
                "use": [
                    "style-loader",
                    "css-loader",
                    "less-loader"
                ]
            }
        ]
    }
}