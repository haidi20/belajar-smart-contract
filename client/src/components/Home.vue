<template>
  <div>
    <h1> {{title}} </h1> <br>
    <button @click="connectToWallet">
      Connect
    </button>
  </div>
</template>

<script>
const {ethereum} = window;
import {ethers} from 'ethers';

  export default {
    data(){
      return {
        title: "Smart Contract",
        contractAddress: "0x43BD01f94566c0b1330510371c7FB3afE724bD17",
        contractABI: "",
      }
    },
    methods: {
      getEthereumContract(){
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const transactionContract = new ethers.Contract(contractAddress, contractABI, signer);

        return transactionContract;
      },
      async connectToWallet() {
        try {
            if(!ethereum) return alert("Please install metamask");

            const accounts = await ethereum.request({method: 'eth_requestAccounts'});

            console.log(accounts[0]);
            // setCurrentAccount(accounts[0]);
        } catch (error) {
            console.log(error);

            throw new Error("No Etherium object.");
        }
      },
      async checkIfWalletConnected() {
        try {
            if(!ethereum) return alert("Please install metamask");

            const accounts = await ethereum.request({method: 'eth_accounts'});

            if(accounts.length){
                // setCurrentAccount(accounts[0]);
            }else {
                console.log("no etherium object");
            }
        } catch (error) {
            console.log(error);

            throw new Error("error try connect accounts");
        }
      },
      async sendTransaction() {
        try {
          if (ethereum) {
            const { addressTo, amount, linkGif, message } = formData;
            const transactionContract = getEthereumContract();
            // const parsedAmount = ethers.utils.parseEther(amount);
            // const keyword = linkGif;
    
            // await ethereum.request({
            //   method: "eth_sendTransaction",
            //   params: [{
            //     from: currentAccount,
            //     to: addressTo,
            //     gas: "0x5208",
            //     value: parsedAmount._hex,
            //   }],
            // });
    
            // const transactionHash = await transactionsContract.addToBlockchain(addressTo, parsedAmount, message, keyword);
    
            // setLoading(true);
            // console.log(`Loading - ${transactionHash.hash}`);
            // await transactionHash.wait();
            // console.log(`Success - ${transactionHash.hash}`);
            // setLoading(false);

            
            let transactionCount = await transactionContract.getTransactionCount();

            transactionCount.then(response => console.log(response));
            
            // getMyNumber.then(response => console.log(response) );
    
            // const transactionsCount = await transactionsContract.getTransactionCount();
    
            // setTransactionCount(transactionsCount.toNumber());
            // window.location.reload();
          } else {
            console.log("No ethereum object");
          }
        } catch (error) {
          console.log(error);
    
          throw new Error("No ethereum object");
        }
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>