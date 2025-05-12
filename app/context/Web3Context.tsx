"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { ethers } from 'ethers';
import Web3Modal from 'web3modal';
import { contractAddress, roles } from '../config';

// Import contract ABI
const contractABI = require('../artifacts/contracts/OrganDonation.sol/OrganDonation.json').abi;

interface Web3ContextType {
  account: string | null;
  contract: ethers.Contract | null;
  provider: ethers.providers.Web3Provider | null;
  isAdmin: boolean;
  isDonor: boolean;
  isPatient: boolean;
  loading: boolean;
  connectWallet: () => Promise<void>;
  disconnectWallet: () => void;
}

const Web3Context = createContext<Web3ContextType | undefined>(undefined);

export function Web3Provider({ children }: { children: React.ReactNode }) {
  const [account, setAccount] = useState<string | null>(null);
  const [contract, setContract] = useState<ethers.Contract | null>(null);
  const [provider, setProvider] = useState<ethers.providers.Web3Provider | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isDonor, setIsDonor] = useState(false);
  const [isPatient, setIsPatient] = useState(false);
  const [loading, setLoading] = useState(true);

  const connectWallet = async () => {
    try {
      const web3Modal = new Web3Modal();
      const connection = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      const signer = provider.getSigner();
      const address = await signer.getAddress();
      
      const contract = new ethers.Contract(contractAddress, contractABI, signer);
      
      setAccount(address);
      setProvider(provider);
      setContract(contract);
      
      // Check user role
      const userRole = await contract.getUserRole(address);
      setIsAdmin(userRole === roles.Admin);
      setIsDonor(userRole === roles.Donor);
      setIsPatient(userRole === roles.Patient);

      // Listen for account changes
      connection.on("accountsChanged", async (accounts: string[]) => {
        if (accounts.length === 0) {
          disconnectWallet();
        } else {
          setAccount(accounts[0]);
          const newRole = await contract.getUserRole(accounts[0]);
          setIsAdmin(newRole === roles.Admin);
          setIsDonor(newRole === roles.Donor);
          setIsPatient(newRole === roles.Patient);
        }
      });
    } catch (error) {
      console.error("Error connecting wallet:", error);
    } finally {
      setLoading(false);
    }
  };

  const disconnectWallet = () => {
    setAccount(null);
    setContract(null);
    setProvider(null);
    setIsAdmin(false);
    setIsDonor(false);
    setIsPatient(false);
  };

  // Check if wallet is already connected
  useEffect(() => {
    const checkConnection = async () => {
      if (window.ethereum) {
        try {
          const accounts = await window.ethereum.request({ method: 'eth_accounts' });
          if (accounts.length > 0) {
            await connectWallet();
          }
        } catch (error) {
          console.error("Error checking wallet connection:", error);
        }
      }
      setLoading(false);
    };

    checkConnection();
  }, []);

  return (
    <Web3Context.Provider
      value={{
        account,
        contract,
        provider,
        isAdmin,
        isDonor,
        isPatient,
        loading,
        connectWallet,
        disconnectWallet,
      }}
    >
      {children}
    </Web3Context.Provider>
  );
}

export function useWeb3() {
  const context = useContext(Web3Context);
  if (context === undefined) {
    throw new Error("useWeb3 must be used within a Web3Provider");
  }
  return context;
} 