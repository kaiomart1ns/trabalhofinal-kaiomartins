document.getElementById('partido-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const sigla = document.getElementById('sigla').value;
    const numeroRegistro = document.getElementById('numeroRegistro').value;
  
    const response = await fetch('/partidos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nome, sigla, numeroRegistro })
    });
  
    if (response.ok) {
      alert('Partido cadastrado com sucesso!');
    } else {
      alert('Erro ao cadastrar partido.');
    }
  });
  