# 🧪 LabTokens - Gestión de Acceso a Laboratorios con Tokens en Scroll

![Scroll Logo](https://scroll.io/static/media/ScrollLogo.0cfb5e49.svg)  
*Solución Web3 para controlar el acceso a laboratorios académicos usando tokens en Scroll zkEVM*

## 🚀 Demo Rápida
[![Ver Demo](https://img.shields.io/badge/Ver-Demo_Live-green?style=for-the-badge)](https://tudemo.com)  
[![Scroll Testnet](https://img.shields.io/badge/Blockchain-Scroll_Sepolia-blue?style=for-the-badge)](https://sepolia.scrollscan.com)

## 📌 Problemática
- **Acceso descontrolado** a laboratorios en instituciones educativas.
- **Falta de transparencia** en el uso de recursos compartidos.
- **Sistemas centralizados** vulnerables a manipulación.

## 💡 Solución
Sistema descentralizado que:
1. Asigna **10 tokens iniciales** a cada alumno.
2. **Resta 2 tokens** por sesión de laboratorio.
3. Datos almacenados en **Scroll zkEVM** (bajo costo y escalable).

## 🛠️ Tecnologías Usadas
| Tecnología | Uso |
|------------|-----|
| ![Scroll](https://scroll.io/favicon.ico) Scroll zkEVM | L2 para transacciones económicas |
| ![Solidity](https://soliditylang.org/images/logo.svg) Solidity | Contrato `Alumnos.sol` |
| ![React](https://reactjs.org/favicon.ico) React + Vite | Frontend dinámico |
| ![Ethers](https://ethers.org/favicon.ico) Ethers.js | Conexión a blockchain |

## 📦 Estructura del Proyecto
```bash
.
├── contracts/          # Smart Contracts
│   ├── src/
│   │   └── Alumnos.sol # Lógica de tokens
├── src/                # Frontend
│   ├── components/     # UI
│   │   ├── Login.jsx   # Autenticación
│   │   └── RegistrarAlumno.jsx # Panel admin
└── foundry.toml        # Config. despliegue