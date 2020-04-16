module.exports = {


  friendlyName: 'Organisation',


  description: 'Organisation list.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {
    const organisation = await Organisation.find();
    // All done.
    return organisation;

  }


};
