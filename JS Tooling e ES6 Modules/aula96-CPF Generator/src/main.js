import GenerateCpf from './modules/GenerateCpf';

import './assets/css/style.css';

(function() {
  const generateCpf = new GenerateCpf();
  const cpfField = document.querySelector('.cpf-gerado');
  cpfField.innerHTML = generateCpf.generateNewCpf();
})();
