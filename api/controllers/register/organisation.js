module.exports = {


  friendlyName: 'Organisation',


  description: 'Organisation register.',


  inputs: {
    name:{
      type: 'string',
      required: true
    },

    organisationTypeId:{
      type: 'number',
      required: true,
    },
  },


  exits: {

  },


  fn: async function (inputs) {

    const organisation = await Organisation.create(inputs).fetch();
    return organisation;

  }


};
