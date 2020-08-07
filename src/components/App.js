import React, { Component } from 'react';
import Web3 from 'web3';
import './App.css';
import Doc from '../abis/Doc.json'

const ipfsClient = require('ipfs-http-client')
const ipfs = ipfsClient({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' })


class App extends Component {

  async componentWillMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()
  }

  //Get the account
  //Get the network
  //Get Smart Contract
  // -->ABI: Doc.abi
  // -->Address: networkData.address
  //Get Doc Hash
  async loadBlockchainData(){
    const web3 = window.web3
    const accounts = await web3.eth.getAccounts()  
    this.setState ({ account: accounts[0] })
    const networkId = await web3.eth.net.getId()
    const networkData =  Doc.networks[networkId]
    if(networkData) {
      const abi = Doc.abi
      const address = networkData.address
      //Fetch Contract
      const contract = web3.eth.Contract(abi, address)
      this.setState({ contract })
      const docHash = await contract.methods.get("QmPd8EjD1LrM8mbc3YozUMXzaXpN9VrVZEVEaR5xsri2fC").call()
      console.log("docHash,", docHash);
      this.setState({ docHash })
    } else {
      window.alert('Smart Contract not deployed to detected network!')
    }
  }


  constructor(props) {
    super(props);
    this.state = {
      account: '',
      buffer: null,
      contract: null,
      docHash: ''
    };
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    } if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    } else {
      window.alert('Please use metamask!')
    }
  }


  captureFile = (event) => {
    event.preventDefault()
    // Process file for IPFS
    const file = event.target.files[0]
    console.log(event.target.files) //to be added to the prj
    const reader = new window.FileReader()
    reader.readAsArrayBuffer(file)
    reader.onloadend = () =>{
      this.setState({ buffer: Buffer(reader.result) })
    }
    
  }

  //Example hash= "QmYYKGMwu4e6XSD5beG5VS75JoCwWkqSt4GnNTV3HSJZYo"
  //Example url: https://ipfs.infura.io/ipfs/QmYYKGMwu4e6XSD5beG5VS75JoCwWkqSt4GnNTV3HSJZYo
  onSubmit = (event) => {
    event.preventDefault()
    console.log("Submitting the form")
    ipfs.add(this.state.buffer, (error, result) => {
      console.log('Ipfs result', result)
      const docHash = result[0].hash
     if(error){
        console.error(error)
        return
      }
      var hash2 = "1231";
      var orgID = "0001";
      var docID = "0002";
      //Steop 2: Stroe file on blockchain
      this.state.contract.methods.set(docHash, docHash, orgID, docID).send({ from: this.state.account }).then((r) => {
        this.setState({ docHash })
      })

    })
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <a
            className="navbar-brand col-sm-3 col-md-2 mr-0"
            href="http://www.dappuniversity.com/bootcamp"
            target="_blank"
            rel="noopener noreferrer"
          >
            File Uploading
          </a>
          <ul className="navbar-nav px-3">
            <li className="nav-item text-nowrap d-none d-sm-none d-sm-block"> 
            <small className="text-white">{this.state.account}</small>
            </li>
            </ul>
        </nav>
        <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex text-center">
              <div className="content mr-auto ml-auto"> 
                <a
                  href="http://www.dappuniversity.com/bootcamp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={`https://ipfs.infura.io/ipfs/${this.state.docHash.docHash}`} />
                </a>
                <p>&nbsp;</p>
                <h2>Please add your File</h2>
                <form onSubmit={this.onSubmit} >
                  <input type='file' onChange={this.captureFile} />
                  <input type='submit' />
                </form>
                <h4>{this.state.docHash}</h4> 
                </div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
