// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract Alumnos {
    struct Alumno {
        string password;
        uint256 tokens;
    }

    mapping(string => Alumno) private alumnos;
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    function registrarAlumno(string memory matricula, string memory password) external {
        require(msg.sender == owner, "Solo el admin puede registrar");
        require(alumnos[matricula].tokens == 0, "Alumno ya existe");
        alumnos[matricula] = Alumno(password, 10); // 10 tokens iniciales
    }

    function login(string memory matricula, string memory password) external returns (uint256) {
        require(bytes(alumnos[matricula].password).length != 0, "Matricula no existe");
        require(keccak256(abi.encodePacked(alumnos[matricula].password)) == keccak256(abi.encodePacked(password)), "Password incorrecto");
        require(alumnos[matricula].tokens >= 2, "No tienes tokens suficientes");
        
        alumnos[matricula].tokens -= 2;
        return alumnos[matricula].tokens;
    }

    function getTokens(string memory matricula) external view returns (uint256) {
        return alumnos[matricula].tokens;
    }
}