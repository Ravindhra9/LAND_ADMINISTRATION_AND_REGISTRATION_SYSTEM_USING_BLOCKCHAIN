# blockchain-land-registration

The main aim of my project is to compare the digital signature present in the blockchain and the digital signature taken from the authorized land registration database.Then check the validity of the land records.

##  Used programming languages

The computer languages used in my project to develop the UI(user interface):
1. HTML
2. CSS
3. JavaScript
4. jquery
5. Bootstrap

I have used the Ethereum Platform to develop a decentralized application.
The Programming languages used in my project to develop the Back end(Blockchain
side) are :
1. Solidity(under Ethereum):used to develop smart contracts
2. Web3.js(a library of javascript)

## Dependencies

Dependencies to Develop my first decentralized application are :
1. Notepad(I prefer Visual studio code)
2. Chrome(a browser)
3. Remix IDE:Browser based or online IDE to get instant feedback for
solidity code.
4. Ganache : It provides a local server with 10 different addresses containing 100 ether per each .


We pay the miners with something called Gas, which is the cost to run
a contract. When you publish a smart contract, or execute a function of a
smart contract, or transfer money to another account, you pay some ether
that gets converted into gas.

## Wallet

Wallets are very important part of a smart contract. It serves 2 purposes:
• It serves as client to ethereum wallet. To make a transaction on network
  ether has to be spent and you can authorize these payments using this.
• To communicate with a blockchain and to deploy, you need to either
  have a full node or a wallet cleint of the network. A wallet can facilitate
  the communication with the network.
  
##  Deployment

The contracts are written in solidity codes and these are to be compiled to
get the Application Binary Interface (ABI) codes. ABI is the interface between two program modules, one of which is often at the level of machine
code.

To deploy a contract the following steps are to be taken:
• Compile the code and get necessary bytecodes and ABIcodes.
• Make a deployment with a wallet address as transaction sender.
• Authenticate the transaction form the wallet and pay the transaction
  cost.
• Your contract will be deployed and will be assigned a public address
  which can be used to access it.
  
## Web Interface

A web app can be used to work with the contract. A backend javascript
framework, web3.js, can intract with the blockchain. It can connect to the
network, identify the contract and perform transactions.

The web3js framework works in the following way:

• Connect to a network using web3Provider to a localhost(local testnet)
  or a global network
• Create a contract instance using the ABI code and Contract address.
  Contract address identifies the particular contract on the network to
  interact with and the ABI code specifies how to access each function
• Use the instance to call contract functions like javascript
  The figure 4.3 tells that we have setLandDetails and getLandDetails functions which are used to load and get the land details into the blockchain
  respectively.
  
At figure 4.4, the user must login in to the LATRS using his/her user credentials in order to enter into LATRS.If he/she enters wrong credentials , a
pop up would show to represent the Invalid credentials.

At figure 4.5, The user first check the availability of his/her land records in
the authorized land registration database , then only the user can validate
the land information.

At figure 4.6 , In order to validate the land information, first user should deploy the property ID and Digital sign into the blockchain using user Interface.

At figure 4.7,we could have the loaded property ID and Digital sign through getLandDetails function.

At figure 4.8,the user validate the land information through Property-ID.
  
  
