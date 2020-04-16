module.exports = {


  friendlyName: 'Organisation type',


  description: '',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {

    const org = await OrganisationType.find();
    return org;

  }


};
