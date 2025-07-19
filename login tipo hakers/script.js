function createMatrixRain() {
  const container = document.getElementById('matrixRain');
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*(){}[]|\\:;\"'<>,.?/~`";

  function createColumn() {
    const column = document.createElement('div');
    column.className = 'matrix-column';
    let text = '';
    const height = Math.floor(Math.random() * 20) + 10;
    for (let i = 0; i < height; i++) {
      text += characters[Math.floor(Math.random() * characters.length)] + '\n';
    }
    column.textContent = text;
    column.style.left = Math.random() * 100 + '%';
    column.style.animationDuration = (Math.random() * 3 + 2) + 's';
    column.style.animationDelay = Math.random() * 2 + 's';
    container.appendChild(column);

    setTimeout(() => {
      if (container.contains(column)) container.removeChild(column);
    }, 5000);
  }

  setInterval(createColumn, 200);
}

function typeText(element, text, speed = 100) {
  let i = 0;
  element.textContent = '';
  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

function setupPasswordToggle() {
  const passwordInput = document.getElementById('password');
  const toggleBtn = document.getElementById('passwordToggle');

  toggleBtn.addEventListener('click', function () {
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      toggleBtn.textContent = '🙈';
    } else {
      passwordInput.type = 'password';
      toggleBtn.textContent = '👁';
    }
  });
}

function setupForm() {
  const form = document.getElementById('loginForm');
  const submitBtn = document.getElementById('submitBtn');

  form.addEventListener('submit', async function (e) {
    e.preventDefault();
    submitBtn.classList.add('loading');
    submitBtn.innerHTML = '<span class="loading-spinner"></span>INFILTRANDO...';

    await new Promise(resolve => setTimeout(resolve, 2000));

    submitBtn.innerHTML = 'ACCESO CONCEDIDO';
    submitBtn.style.background = 'linear-gradient(45deg, #001100, #004400)';
    submitBtn.style.boxShadow = '0 0 30px #00ff00';

    setTimeout(() => {
      alert('🚨 ACCESO CONCEDIDO - SISTEMA INFILTRADO 🚨\n\n> Conexión establecida...\n> Cortafuegos deshabilitado...\n> Acceso root obtenido...\n> Bienvenido al sistema, hacker.');
      submitBtn.classList.remove('loading');
      submitBtn.innerHTML = 'ACCEDER AL SISTEMA';
      submitBtn.style.background = '';
      submitBtn.style.boxShadow = '';
      form.reset();
    }, 1000);
  });
}

document.addEventListener('DOMContentLoaded', function () {
  createMatrixRain();
  typeText(document.getElementById('typingText'), 'INICIALIZANDO PROTOCOLO DE SEGURIDAD...', 80);
  setupPasswordToggle();
  setupForm();
});

document.addEventListener('keydown', function (e) {
  if (e.ctrlKey && e.shiftKey && e.key === 'H') {
    document.body.style.filter = 'hue-rotate(180deg)';
    setTimeout(() => {
      document.body.style.filter = '';
    }, 1000);
  }
  if (e.key === 'Escape') {
    document.getElementById('loginForm').reset();
  }
});
