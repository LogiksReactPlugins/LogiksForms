import './styles.css';
export { default as InfoView } from './components/form/Form.js'; // ✅ named export
export { default } from './components/form/Form.js'; // ✅ default export
export * from './components/form/Form.types.js';