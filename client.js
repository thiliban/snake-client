const net = require("net");
const {IP, PORT} = require('./constants')

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  // if the server has successfully connected, it will return a message
  conn.on('connect', () => {
    console.log("Successfully connected");
    conn.write('Name: TBK');
  })

  conn.on('data', (data) => {
    console.log('The server says: ', data);
  });


  return conn;
};

module.exports = { connect };
