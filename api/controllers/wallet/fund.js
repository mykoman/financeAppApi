module.exports = {


  friendlyName: 'Fund',


  description: 'Fund wallet.',


  inputs: {
    memberId:{
      type: 'number',
      required: true
    },

    amount:{
      type: 'number',
      required: true
    }
  },


  exits: {

  },


  fn: async function (inputs) {

      const deposit =  await Deposit.create(inputs).fetch();
      const currentWallet = await Wallet.find({memberId: inputs.memberId });
      console.log(currentWallet);
      const currentAmount = currentWallet[0].amount
      console.log(currentAmount);
      const newAmount = parseInt(currentAmount + inputs.amount);
      const wallet = await Wallet.updateOne({memberId: inputs.memberId }).set({
        amount:newAmount
      });
      
    // All done.
    return wallet;

  }


};
