const ABI = [
  {
      "type": "constructor",
      "inputs": [],
      "stateMutability": "nonpayable"
  },
  {
      "type": "function",
      "name": "getTokens",
      "inputs": [
          {
              "name": "matricula",
              "type": "string",
              "internalType": "string"
          }
      ],
      "outputs": [
          {
              "name": "",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "stateMutability": "view"
  },
  {
      "type": "function",
      "name": "login",
      "inputs": [
          {
              "name": "matricula",
              "type": "string",
              "internalType": "string"
          },
          {
              "name": "password",
              "type": "string",
              "internalType": "string"
          }
      ],
      "outputs": [
          {
              "name": "",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "stateMutability": "nonpayable"
  },
  {
      "type": "function",
      "name": "owner",
      "inputs": [],
      "outputs": [
          {
              "name": "",
              "type": "address",
              "internalType": "address"
          }
      ],
      "stateMutability": "view"
  },
  {
      "type": "function",
      "name": "registrarAlumno",
      "inputs": [
          {
              "name": "matricula",
              "type": "string",
              "internalType": "string"
          },
          {
              "name": "password",
              "type": "string",
              "internalType": "string"
          }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
  }
];