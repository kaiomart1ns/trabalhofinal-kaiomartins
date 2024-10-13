document.getElementById('candidato-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const numeroCandidato = document.getElementById('numeroCandidato').value;
    const partidoId = 1; // ID fixo do partido, *lembrar disso Kaio.*
  
    const response = await fetch('/candidatos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nome, numeroCandidato, partidoId })
    });
  
    if (response.ok) {
      alert('Candidato cadastrado com sucesso!');
    } else {
      alert('Erro ao cadastrar candidato.');
    }
  });
  