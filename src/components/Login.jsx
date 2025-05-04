import { useState } from 'react';
import { ethers } from 'ethers';

export default function Login({ contract }) {
    const [matricula, setMatricula] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async () => {
        try {
            // Verifica si el contrato está disponible
            if (!contract) {
                throw new Error("El contrato no está cargado");
            }

            // Ejecuta la transacción de login
            const tx = await contract.login(matricula, password);
            await tx.wait();

            // Obtiene los tokens restantes
            const tokensRestantes = await contract.getTokens(matricula);
            alert(`¡Login exitoso! Tokens restantes: ${tokensRestantes}`);
            
        } catch (err) {
            console.error("Error en login:", err);
            setError(err.reason || err.message || "Error al iniciar sesión");
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Matrícula (ej: BUVF0308)"
                value={matricula}
                onChange={(e) => setMatricula(e.target.value)}
            />
            <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Iniciar Sesión</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
}