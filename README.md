Nome do projeto: Delícias do Trigo

Trabalho desenvolvido por Bárbara Beatriz Silva e Bruno Gadêlha Mariz, segue link do protótipo no Figma: https://www.figma.com/site/XR0Fbc1bMkToWZNGpxVb9a/Sem-t%C3%ADtulo?node-id=0-1&t=uvFYg9OrRNCvewsE-1

Acesso ao site:
Site publicado no Git Pages: https://blinkon-cpu.github.io/padariadeliciasdotrigo/
<img width="1891" height="995" alt="image" src="https://github.com/user-attachments/assets/70ef75da-7c49-40a2-b13e-1f415bd2d2f4" />


A empresa Delícias do Trigo é uma padaria de origem familiar, com raízes brasileiras e portuguesas, que traz receitas tradicionais de Portugal para o coração da Ceilândia.

O site foi desenvolvido com o objetivo de ampliar a presença digital da empresa, localizada na Ceilândia Norte, proporcionando maior visibilidade e expansão nas vendas online por meio do comércio eletrônico.

Inicialmente, o público-alvo da empresa eram os moradores próximos, de ambos os sexos e de todas as idades. Com a chegada do e-commerce, o propósito é alcançar novos clientes, especialmente moradores de classe média de toda a região da Ceilândia.

A estrutura do site conta com uma barra de navegação (nav) no topo da página, composta pelas seções: Início, Produtos e Contatos. Essas opções foram escolhidas para garantir uma navegação simples, objetiva e intuitiva ao usuário.

A paleta de cores escolhida combina tons brancos muito claros com nuances de cinza, marrom café e dourado, transmitindo autenticidade, credibilidade, sofisticação e inovação. Esta paleta são todas cores secundarias, com fundo branco claro com nuances cinza e com predominância nas letras o preto, dourado e marrom e nos botões a cor marrom e dourado.

Foi feita uma logomarca com Canvas. Esta foi exportada como .PNG e logo em seguida foi enviada ao Figma, onde foi exportada como .SVG. A mesma foi usada como ícone da página (na aba do navegador). Alteração feita às 8:00 por Bárbara e Bruno. Foi adicionado um link href na imagem, para quando for clicada, o site volta à página inicial.

A tipografia utilizada (font-family: "Playfair Display", serif) e as cores das letras, que variam entre preto, marrom e branco, foram selecionadas para proporcionar leitura agradável e harmonia visual, incentivando o visitante a continuar explorando o site.

As imagens da seção de produtos funcionam como o carro-chefe visual, despertando no usuário o desejo de experimentar os produtos e reforçando a proposta artesanal e saborosa da marca.

Paleta de cores:

#f8f8f8 - Fundo Geral

#3b2a1a - Texto Principal

#d9a25f - Destaque

#a8743a - Destaque Escuro

#ffffff - Fundo de Cards

#6b4c2a - Texto Secundário

#4b3621 - Label Formulário

#b37c37 - Foco Formulário


O site foi aberto no DevTools e está funcionando perfeitamente em todas as resoluções de tela.
Não há quebra de página em nenhuma das resoluções
As partes que se repetem são: Cabeçalho, onde está logomarca e menu e o Rodapé também se repete nas três páginas.
Tudo está funcionando perfeitamente.
Foi adicionado java script ao código para continuar funcionando o hover no Menu, já que o código HTML do 'componentes.js' é estático e não pode ser utilizado 'aria-current', utilizado anteriormente.

O menu está funcionando bem depois da alteração no código com java script e hover.

Usamos head, body, main, header e nav, article e section, e usamos footer.

Todas as imagens possuem atributo 'alt'

O site todo funciona com teclado, inclusive há acessibilidade skip-link ('Tab' (Conteúdo Principal).)

Os títulos seguem a hierarquia. As páginas possuem título principal e subtítulo.

Não possui < label > no atributo alt.

Código possui 3 breakpoints de media queries.

Site foi testado no Lighthouse em aba de navegação anônima para resultado fidedigno. O resultado foi 79 de desempenho; 94 de acessibilidade; 100 de práticas recomendadas e 91 de SEO.

Fontes do código estão em 'rem' ao invés de 'px'.

**Estrutura de arquivos**

deliciasdotrigofinal/
|-- index.html
|-- produtos.html
|-- contato.html
|-- componentes/
|   |-- header.html
|   |-- footer.html
|-- css/
|   |-- style.css
|-- js/
|   |-- components.js
|-- img/
|   |-- coxinha.jpeg
|   |-- croissant.jpeg
|   |-- logo.jpeg
|   |-- logo.cvg
|   |-- pao-artesanal.jpeg
|   |-- paodequeijo.jpeg
|   |-- rabanada.jpeg
|   |-- rocambole.jpeg
|-- README.md

**Componentes modularizados:**
Header e footer
Estes compenentes foram modularizados para facilitar qualquer mudança posterior no projeto, utilizando apenas o recurso de componentes.
Não precisamos de muitos ajustes. O projeto já estava bem alinhado.

O desafio que encontramos foi que o nosso projeto tinha um hover no menu, e com a modularização ficaríamos sem esse recurso, já que o código é estático para funcionar em todas as páginas. Com isso utilizamos um java script para resolver o problema.

Tecnologias utilizadas no projeto foram HTML5, CSS3 e Javascript.

Para rodar o projeto localmente, será necessário abrir o VSCODE com o workspace limpo. Com a pasta aberta no programa, clicar em index.html e depois clicar em Go Live, utilizando o Live Server para visualizar o site completo. Devido à modularização, os componentes JS não são mostrados quando abertos localmente (Ex: C:\MeuPC\Documentos\index.html) .

Foi feita a mininficação do CSS, para melhoria do carregamento do site.

As imagens do site foram otimizadas e convertidas para o formato ".webp".
Foi implementado Lazy Loading nas imagens que aparecem mais abaixo da página, para otimizar o carregamento das imagens e do site como um todo.

**Resumo**
O projeto teve 3 partes para ser desenvolvido. Na Parte 1 implementamos o código HTML cru. Na parte 2 utilizamos o CSS3 para estilizar a página e na parte 3 fizemos alterações finais e implementamos JavaScript.

**Plano de melhoras:**
Implementar chat diretamente com a empresa através do site, pelo botão do whatsapp
Implementar possibilidade de pedidos pelo site.


**Testes realizados:**

---Falta escrever---
- Lista de navegadores testados;
- Lista de dispositivos/resoluções testadas;
- Problemas encontrados e como foram resolvidos;
- Limitações conhecidas (se houver);
- Links para as pastas com prints de evidências.


## Reflexão Individual (Bruno)

Cada integrante deve escrever um texto breve (pode ser em documento compartilhado ou diretamente no README.md) respondendo:

**Aprendizados Técnicos:**

- Quais foram as principais habilidades técnicas que você desenvolveu? (HTML, CSS, Git, organização, etc.)
- Qual foi a tecnologia ou conceito mais desafiador de aprender?
- O que você domina melhor agora comparado ao início do projeto?

**Aprendizados de Processo:**

- Como foi trabalhar em dupla? Quais foram os desafios?
- Como vocês organizaram as tarefas e a comunicação?
- O que funcionou bem na metodologia da dupla?

**Desafios Enfrentados:**

- Qual foi o maior desafio do projeto?
- Como vocês superaram?
- Se pudesse voltar no tempo, o que faria diferente?
  
## Reflexão Individual (Bárbara)

Cada integrante deve escrever um texto breve (pode ser em documento compartilhado ou diretamente no README.md) respondendo:

**Aprendizados Técnicos:**

- Quais foram as principais habilidades técnicas que você desenvolveu? (HTML, CSS, Git, organização, etc.)
- Qual foi a tecnologia ou conceito mais desafiador de aprender?
- O que você domina melhor agora comparado ao início do projeto?

**Aprendizados de Processo:**

- Como foi trabalhar em dupla? Quais foram os desafios?
- Como vocês organizaram as tarefas e a comunicação?
- O que funcionou bem na metodologia da dupla?

**Desafios Enfrentados:**

- Qual foi o maior desafio do projeto?
- Como vocês superaram?
- Se pudesse voltar no tempo, o que faria diferente?

Créditos: 
Site Canvas - Foi feito o ícone no site Canvas.
