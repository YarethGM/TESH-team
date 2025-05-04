Plataforma LabChain

Un sistema descentralizado que:
✔ Registra alumnos (solo administradores)
✔ Asigna 10 tokens iniciales a cada alumno
✔ Resta 2 tokens por sesión de laboratorio
✔ Verifica saldos en la blockchain (Scroll)

Problema que resuelve:
Evita el acceso no autorizado a laboratorios y lleva un registro transparente del uso.

Pasos para ejecutar:

1. brew install node

2. npm create vite@latest lab-tokens-dapp --template react

3. npm install ethers @metamask/sdk react-icons dotenv

4. curl -L https://foundry.paradigm.xyz | bash

5. foundryup

6. forge init contracts

7. forge create --rpc-url https://sepolia-rpc.scroll.io/ --private-key tu_llave_privada_sin_0x src/Alumnos.sol:Alumnos

8. npm run dev

9. http://localhost:5173/
