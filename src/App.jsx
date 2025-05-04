import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import Login from './components/Login';
import RegistrarAlumno from './components/RegistrarAlumno';

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

function App() {
  const [contract, setContract] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const init = async () => {
      try {
        // Verificar si MetaMask está instalado
        if (!window.ethereum) {
          throw new Error("Por favor instala MetaMask");
        }

        // Solicitar conexión de la wallet
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        setIsConnected(true);

        // Crear provider y contrato
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const contractAddress = import.meta.env.VITE_CONTRACT_ADDRESS;
        const contract = new ethers.Contract(contractAddress, ABI, signer);

        // Verificar si es admin
        const ownerAddress = await contract.owner();
        const currentAddress = await signer.getAddress();
        setIsAdmin(currentAddress.toLowerCase() === ownerAddress.toLowerCase());

        setContract(contract);
      } catch (err) {
        console.error("Error inicializando:", err);
        alert(`Error: ${err.message}`);
      }
    };

    init();
  }, []);

  return (
    <div>
      <h1>Registro de Laboratorios</h1>
      {!isConnected ? (
        <button onClick={() => window.location.reload()}>Conectar Wallet</button>
      ) : contract ? (
        <>
          <Login contract={contract} />
          {isAdmin && <RegistrarAlumno contract={contract} />}
        </>
      ) : (
        <p>Cargando contrato...</p>
      )}
    </div>
  );
}

export default App;