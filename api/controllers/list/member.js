module.exports = {


  friendlyName: 'Member',


  description: 'Member list.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {

    // All done.
    const members = await Member.find();
    return members;

  }


};
