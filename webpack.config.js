import path from 'path';
import { fileURLToPath } from 'url';
import Dotenv from "dotenv-webpack"

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
    entry: './public/js/chatPage.js',
    output: {
        filename: 'chatPage.bundle.js',
        path: path.resolve(__dirname, 'public/js'),
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
    plugins : [
        new Dotenv()
    ]
};
