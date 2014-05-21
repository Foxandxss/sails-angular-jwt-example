/**
* Message.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    body: {
      type: 'string',
      required: true
    },
    user: {
      model: 'user'
    }
  },

  beforeUpdate: function(values, cb) {
    // If we are removing the association, the message is not useful anymore
    if (values.user === null) {
      console.log(this.id);
    }

    cb();
  }
};

