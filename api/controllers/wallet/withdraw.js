module.exports = {


  friendlyName: 'Withdraw',


  description: 'Withdraw wallet.',


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
    //let's check the balance
    const currentWallet = await Wallet.find({memberId: inputs.memberId });
    if( currentWallet[0].amount < inputs.amount){
      return {message: "Sorry, your balance is insufficient"};
    }
    else{
      const withdrawal =  await Withdrawal.create(inputs).fetch();
      const newAmount = currentWallet[0].amount - inputs.amount;
      const wallet = await Wallet.updateOne({memberId: inputs.memberId }).set({
        amount:newAmount
      });
      return wallet;
    }
    // All done.
    

  }


};
