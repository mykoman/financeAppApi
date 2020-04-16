module.exports = {


  friendlyName: 'Member',


  description: 'Member register.',


  inputs: {
    name:{
      type: 'string',
      required: true
    },

    phone:{
     type: 'string',
     required: true
   },

   

   dob:{
     type: 'string',
     required: true
   },

   

  organisationId:{
    type: 'number',
    required: true,
  },

  address: {
    type: 'string',
     required: true
  },

  amount: {
    type: 'number',
    required: true,
    min: 1000,
  }
  },


  exits: {

  },


  fn: async function (inputs) {
    const member = await Member.create(inputs).fetch();
    const memberId = member.id;
    constWalletInput = {memberId, amount:inputs.amount}
    const wallet= await Wallet.create(constWalletInput);

    // All done.
    return member;

  }


};
