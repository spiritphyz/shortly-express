var db = require('../config');
var Link = require('./link.js');

var Click = db.Model.extend({
  tableName: 'clicks',
  hasTimestamps: true,
  link: function() {
    // we think this is one to many
    // one link to many clicks
    // 'belongs' is probably backbone terminology for one-to-many relationships
    return this.belongsTo(Link, 'linkId');
  }
});

module.exports = Click;
