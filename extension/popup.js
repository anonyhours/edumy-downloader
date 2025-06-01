document.addEventListener('DOMContentLoaded', function() {
  const extractBtn = document.getElementById('extract');
  const copyBtn = document.getElementById('copy');
  const tokenContainer = document.getElementById('token-container');
  const tokenElement = document.getElementById('token');
  const statusElement = document.getElementById('status');

  // Función para mostrar el estado
  function setStatus(message, isError = false) {
    statusElement.textContent = message;
    statusElement.style.color = isError ? '#dc3545' : '#6c757d';
  }

  // Función para extraer el token
  extractBtn.addEventListener('click', async () => {
    try {
      setStatus('Buscando token en las cookies de Udemy...');
      
      const cookies = await chrome.cookies.getAll({
        domain: '.udemy.com',
        name: 'access_token'
      });
      
      if (cookies.length > 0) {
        const accessToken = cookies[0].value;
        tokenElement.textContent = accessToken;
        tokenContainer.style.display = 'block';
        setStatus('Token extraído con éxito!');
        
        // Analizar el token JWT
        try {
          const payload = JSON.parse(atob(accessToken.split('.')[1].replace(/-/g, '+').replace(/_/g, '/')));
          const expiryDate = new Date(payload.exp * 1000);
          setStatus(`Token válido hasta: ${expiryDate.toLocaleString()}`);
        } catch (e) {
          console.log('No se pudo analizar el token JWT:', e);
        }
      } else {
        tokenContainer.style.display = 'none';
        setStatus('No se encontró access_token. Asegúrate de estar logueado en Udemy.', true);
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus(`Error: ${error.message}`, true);
    }
  });

  // Función para copiar el token
  copyBtn.addEventListener('click', () => {
    const token = tokenElement.textContent;
    if (token) {
      navigator.clipboard.writeText(token).then(() => {
        copyBtn.textContent = '¡Copiado!';
        setTimeout(() => {
          copyBtn.textContent = 'Copiar al Portapapeles';
        }, 2000);
      });
    }
  });
});