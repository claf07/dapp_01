export const CONTRACT_ADDRESS = '0x5b1869D9A4C187F2EAa108f3062412ecf0526b24';

export const CONTRACT_ABI = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "donor",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "string",
        "name": "organType",
        "type": "string"
      }
    ],
    "name": "OrganDonated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "recipient",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "string",
        "name": "organType",
        "type": "string"
      }
    ],
    "name": "OrganRequested",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "donors",
    "outputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "bloodType",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "location",
        "type": "string"
      },
      {
        "internalType": "bool",
        "name": "isVerified",
        "type": "bool"
      },
      {
        "internalType": "bool",
        "name": "isDeceased",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "donorList",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "recipients",
    "outputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "bloodType",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "age",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "neededOrgan",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "urgency",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "medicalHistory",
        "type": "string"
      },
      {
        "internalType": "bool",
        "name": "isVerified",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "patientList",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "userAddress",
        "type": "address"
      },
      {
        "internalType": "uint8",
        "name": "role",
        "type": "uint8"
      }
    ],
    "name": "verifyUser",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "donorAddress",
        "type": "address"
      }
    ],
    "name": "markDonorDeceased",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "patientAddress",
        "type": "address"
      }
    ],
    "name": "getMatches",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "donorAddress",
            "type": "address"
          },
          {
            "internalType": "string",
            "name": "organType",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "matchScore",
            "type": "uint256"
          }
        ],
        "internalType": "struct OrganDonation.Match[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getAvailableOrgans",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "donorAddress",
            "type": "address"
          },
          {
            "internalType": "string",
            "name": "organType",
            "type": "string"
          },
          {
            "internalType": "bool",
            "name": "verified",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "deceased",
            "type": "bool"
          }
        ],
        "internalType": "struct OrganDonation.AvailableOrgan[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getPendingVerifications",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "userAddress",
            "type": "address"
          },
          {
            "internalType": "uint8",
            "name": "role",
            "type": "uint8"
          },
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          }
        ],
        "internalType": "struct OrganDonation.PendingVerification[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
]; 