const {Move_up, Move_down, Move_left, Move_right, someMessages} = require('./constants');
let connection;

// giving a function to each key
const handleUserInput = function(key) {
    if (key === '\u0003') {
        process.exit()
    }

    if (key === Move_up) {
        connection.write('Move: up');
    }
    if (key === Move_left) {
        connection.write('Move: left');
    }
    if (key === Move_right) {
        connection.write('Move: right');
    }
    if (key === Move_down) {
        connection.write('Move: down');
    }
    if (someMessages[key]) {
        connection.write(someMessages[key]);
    }
};

const setUpInput = function (conn) {
    connection = conn;
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.resume();
    stdin.on('data', handleUserInput);
    return stdin;
};

module.exports = { setUpInput };