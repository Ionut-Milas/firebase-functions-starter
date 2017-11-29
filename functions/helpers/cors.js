const cors = require('cors');
const whitelist = ['http://localhost:4000'];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};

const corsFn = cors(corsOptions);

module.exports = corsFn;
