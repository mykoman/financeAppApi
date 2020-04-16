module.exports = {


  friendlyName: 'Balance check',


  description: '',


  inputs: {
    memberId:{
      type: 'number',
      required: true
    },
  },


  exits: {

  },


  fn: async function (inputs) {
    const currentWallet = await Wallet.find({memberId: inputs.memberId });

    // All done.
    return currentWallet;

  }


};
