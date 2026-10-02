function openTab(evt, tabId) {
  // Esconde todos os conteúdos das abas
  const contents = document.querySelectorAll('.tab-content');
  contents.forEach(content => content.classList.remove('active'));

  // Remove a seleção de todos os botões
  const buttons = document.querySelectorAll('.tab-btn');
  buttons.forEach(btn => btn.classList.remove('active'));

  // Mostra a aba selecionada e ativa o botão correspondente
  document.getElementById(tabId).classList.add('active');
  evt.currentTarget.classList.add('active');
}