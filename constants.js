// creating variable names for each move, and some messages
const IP = 'localhost';
const PORT = 50541;
const Move_up = 'w';
const Move_down = 's';
const Move_left = 'a';
const Move_right = 'd';
const someMessages = {
    '1': 'I\'m a snake',
    '2': 'I\'m very fast',
    '3': 'I like to move in a pattern'
};

// Exporting module
module.exports = {
    IP,
    PORT,
    Move_up,
    Move_down,
    Move_left,
    Move_right,
    someMessages
};