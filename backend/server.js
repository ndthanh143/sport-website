const app = require('./app');
const connectDatabase = require('./config/database');

const dotenv = require('dotenv');

// Handle Uncaught exceptions
process.on('uncaughtException', (err) => {
    console.log(`ERROR: ${err.message}`);
    console.log('Shutting down server due to uncaught exception');
    process.exit(1);
});

//Setting up config file
dotenv.config({ path: 'backend/config/config.env' });

// Connecting to database
connectDatabase();

// if (process.env.NODE_ENV == 'PRODUCTION') {
//     const path = require('path');
//     app.get('/', (req, res) => {
//         app.use(express.static(path.resolve(__dirname, 'build', 'index.html')));
//         res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
//     });
// }
if (process.env.NODE_ENV == 'production') {
    const path = require('path');

    app.get('/', (req, res) => {
        app.use(express.static(path.resolve(__dirname, 'build')));
        res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
    });
}

const server = app.listen(process.env.PORT, () => {
    console.log(`Server start on Port: ${process.env.PORT} in ${process.env.NODE_ENV} mode.`);
});

// Handle unhandled Promise rejections
process.on('unhandledRejection', (err) => {
    console.log(`ERROR: ${err.message}`);
    console.log('Shutting down the server due to Unhandled Promise rejection');
    server.close(() => {
        process.exit(1);
    });
});
