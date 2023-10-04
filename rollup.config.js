import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'index.js', // Ruta al archivo de entrada de tu proyecto
  output: {
    file: 'dist/bundle.js', // Ruta al archivo de salida
    format: 'iife', // Formato de salida (puedes cambiarlo según tus necesidades)
  },
  plugins: [
    resolve(), // Resuelve las dependencias de node_modules
    commonjs(), // Convierte los módulos CommonJS en módulos ES6
  ],
};
