Nome do projeto: Delícias do Trigo

Trabalho desenvolvido por Bárbara Beatriz Silva e Bruno Gadêlha Mariz, segue link do protótipo no Figma: https://www.figma.com/site/XR0Fbc1bMkToWZNGpxVb9a/Sem-t%C3%ADtulo?node-id=0-1&t=uvFYg9OrRNCvewsE-1

**Acesso ao site**
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

Foi feita a minificação do CSS, para melhoria do carregamento do site.

As imagens do site foram otimizadas e convertidas para o formato ".webp".
Foi implementado Lazy Loading nas imagens que aparecem mais abaixo da página, para otimizar o carregamento das imagens e do site como um todo.

**Resumo**
O projeto teve 3 partes para ser desenvolvido. Na Parte 1 implementamos o código HTML cru. Na parte 2 utilizamos o CSS3 para estilizar a página e na parte 3 fizemos alterações finais e implementamos JavaScript.

**Plano de melhoras:**
Implementar chat diretamente com a empresa através do site, pelo botão do whatsapp
Implementar possibilidade de pedidos pelo site.
Colocar javascript com maior interação com usuário.


**Testes realizados:**

- Chrome, Internet explorer foram os navegadores testados
- Foram testadas 3 resoluções diferentes: em Mobile, tablet, e Desktop. 
- Foi utilizado além do computador, também um celular para fazer teste das páginas e occorreu tudo nos conformes.


## Reflexão Individual (Bruno)

Cada integrante deve escrever um texto breve (pode ser em documento compartilhado ou diretamente no README.md) respondendo:

**Aprendizados Técnicos:**

- Quando iniciei o projeto, só entendia um pouco de html. Com os trabalhos, eu entendi o CSS e o Javascript e aprimorei meus conhecimentos, além de melhorar a organização de arquivos e pastas.
- O CSS ainda é um pouco difíci para mim, mas já entendo um pouco do código.
- Domino o HTML muito melhor, principalmente na estrutura do arquivo em si, utilizando as tags body, header, main, nav, article, aside, footer.

**Aprendizados de Processo:**

- Foi muito bom trabalhar em dupla, ainda mais com uma pessoa que entende muito bem de cores e beleza dos sites, além de ter boa organização e me ajudar a ver erros que passariam batidos.
- Sempre nos reuníamos online ou pessoalmente e fizemos o trabalho 100% juntos.
- Tudo funcionou muito bem.

**Desafios Enfrentados:**

- O maior desafio do projeto foi o Git Hub e seu terminal.
- Superamos tendo que aprender a enviar os arquivos pelo terminal. Agora eu já entendo como ele funciona.
- Nada faria diferente. Tudo foi feito nos conformes.
  
## Reflexão Individual (Bárbara)

Durante este projeto, desenvolvi a habilidade de visualizar o design que desejo para o site e registrar essas ideias antes de iniciar a estrutura em HTML. Ainda tenho algumas dificuldades para lembrar todos os comandos de CSS, mas percebo que estou evoluindo.
O GitHub foi a tecnologia que mais me desafiou. No entanto, com a ajuda do meu parceiro de trabalho, consegui compreender melhor como utilizá-lo.
Acredito que o trabalho fluiu bem. Dividimos as tarefas de acordo com as habilidades de cada um e agendamos reuniões on-line e presenciais para alinhar o andamento e garantir que tudo estivesse conforme o planejado. 
Nossa metodologia baseou-se em comunicação, planejamento e divisão de responsabilidades, seguida pela integração das partes e verificação final do projeto.
Meu maior desafio pessoal foi lidar com a depressão. Porém, com apoio psicológico e o incentivo do meu colega de equipe, não desisti. Continuei estudando e contribuindo, mesmo que de forma mais limitada em alguns momentos.
Outro desafio foi a publicação do site no GitHub Pages, que apresentou erros. 
Conseguimos resolver pesquisando no ChatGPT, assistindo vídeos no YouTube e testando diferentes soluções até identificar o problema.
Mesmo que eu pudesse voltar no tempo, não mudaria nada. Cada erro e acerto contribuiu para o conhecimento que tenho hoje. O que pretendo fazer daqui para frente é me organizar melhor para estudar mais e buscar cursos extras que complementem 
minha formação acadêmica.

**Reflexão da dupla**

O projeto ganhou interações e acessibilidades que o tornam mais atrativo e moderno. 

O site agrega valor a pequenos negócios que desejam ingressar no ambiente digital, possibilitando alcançar um público maior e, futuramente, implementar serviços como 
delivery na região.
Venderíamos este site ao proprietário destacando que as cores, a estrutura, os ícones e as mensagens foram pensados especificamente para atrair o público-alvo dele. Com a adoção de estratégias de SEO, ele poderá aumentar significativamente o tráfego orgânico, despertando o interesse dos clientes em visitar a loja presencialmente ou em buscar informações sobre o serviço de delivery. Essa simples ação pode elevar o fluxo de clientes e, consequentemente, o faturamento bruto, desde que a qualidade dos produtos seja mantida

Créditos: 
Site Canvas - Foi feito o ícone no site Canvas.
