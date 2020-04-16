module.exports = {


  friendlyName: 'Organisation type',


  description: '',


  inputs: {
    name:{
      type: 'string',
      required: true
    },
  },


  exits: {

  },


  fn: async function (inputs) {

    // All done.
    const organisation = await OrganisationType.create(inputs).fetch();
    return organisation;

  }


};
