import React, {useState,useEffect} from 'react';
import Web3Model from 'web3modal';
import { ethers } from 'ethers';
import { create as ipfsHttpClient } from 'ipfs-http-client';
import axios from 'axios';
import { useRouter } from 'next/router';


//INTERNAL IMPORT 

import { votingAddress, votingABI } from './constants'


const client=ipfsHttpClient('https://ipfs.infura.io:5001/api/v0')


const fetchContract=(signerOrProvider) => 
  new ethers.Contract(votingAddress,votingABI,signerOrProvider);
  export const votingContext=React.createContext();

  export const votingProvider=({children}) => {
      const votingTitle ='My first smart contract app'
    return (<votingContext.Provider value={{}}>{children}</votingContext.Provider>)

  };

export default Voter;