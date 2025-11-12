async function carregarComponente(caminho, seletor) {
  try {
    const resposta = await fetch(caminho);
    const html = await resposta.text(); 
    document.querySelector(seletor).innerHTML = html;
  } catch (erro) {
    console.error('Erro ao carregar componente:', erro);
  }
}

function destacarMenu() {
  let paginaAtual = window.location.pathname.split('/').pop();

  if (paginaAtual === "") {
    paginaAtual = "index.html";
  }

  const linksMenu = document.querySelectorAll('.nav ul li a');

  linksMenu.forEach(link => {
    const linkHref = link.getAttribute('href');

    if (linkHref === paginaAtual) {
      link.setAttribute('aria-current', 'page');
      link.classList.add('active'); 
    }
  });
}