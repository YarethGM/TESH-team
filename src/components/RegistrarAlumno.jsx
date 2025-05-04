import { useState } from 'react';
import { ethers } from 'ethers'; // Nombre correcto de importación

export default function RegistrarAlumno({ contract }) {
    const [matricula, setMatricula] = useState('');
    const [password, setPassword] = useState('');

    const handleRegistro = async () => {
        try {
            const tx = await contract.registrarAlumno(matricula, password);
            await tx.wait();
            alert(`Alumno ${matricula} registrado con éxito!`); // Usa backticks (`) para template strings
        } catch (err) {
            alert("Error: Solo el admin puede registrar alumnos.");
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
            <button onClick={handleRegistro}>Registrar</button>
        </div>
    );
}