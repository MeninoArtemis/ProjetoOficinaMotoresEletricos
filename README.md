Sistema de Notas de Serviço  e Banco de Dados Motores Eletricos - Projeto Oficina BD
Este é um sistema simples de Notas de serviço com HTML, CSS e JavaScript. Ele permite que os usuários adicionem e visualizem informações sobre máquinas, incluindo dados como cliente, ordem de serviço, identificação, parecer, quantidade, descrição e custo real. O sistema também permite a exportação desses dados para um arquivo Word.

Funcionalidades
Adicionar Máquinas: O sistema permite adicionar máquinas com informações detalhadas (cliente, ordem de serviço, identificação, parecer, quantidade, descrição e custo).
Visualizar Inventário: Exibe uma lista de todas as máquinas registradas na Nota.
Exportação para Word: Exporte a Nota para um arquivo .docx com todas as informações registradas.
Armazenamento Local: Os dados do inventário são armazenados no localStorage, garantindo persistência entre recarregamentos da página.
Tecnologias Utilizadas
HTML: Estruturação da página web.
CSS: Estilização da interface.
JavaScript: Lógica para manipulação de dados e interação com o usuário.
PizZip e docxtemplater: Bibliotecas para gerar arquivos .docx (Word).
FileSaver.js: Biblioteca para permitir o download de arquivos.

Uso:

1.Funcionalidades de Exportação
Após adicionar máquinas a Nota , você pode clicar no botão Exportar para Word para gerar um arquivo .docx com todas as informações do inventário.
O arquivo será gerado e baixado automaticamente.

2. Estrutura do Projeto
A estrutura do projeto está organizada da seguinte forma:
bash
/ProjetoOficinaPai
│
├── /css
│   └── login_style.css  # Estilo para a página de login
│   └── Style.css        # Estilos principais do sistema
│
├── /imagens
│   └── logo.jpg         # Logo da aplicação
│
├── /js
│   └── notas.js         # Lógica de manipulação do nota
│   └── login.js         # Lógica da página de login
│   └── ordem_serviço.js # Lógica de manipulação de dados motores eletricos 
│
├── /html
│   └── index.html           # Página principal do sistema
│   └── inventory.html       # Página de notas
│   └── ordem_serviço.html   # Página de dados motores eletricos 
│
└── README.md            # Este arquivo

4. Bibliotecas Externas
Este projeto utiliza as seguintes bibliotecas externas:

docxtemplater (https://cdnjs.cloudflare.com/ajax/libs/docxtemplater/3.19.0/docxtemplater.min.js): Usada para gerar o arquivo .docx.

PizZip (https://cdnjs.cloudflare.com/ajax/libs/pizzip/3.0.6/pizzip.min.js): Usada para criar o arquivo .docx.

FileSaver.js (https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.5/FileSaver.min.js): Usada para permitir o download do arquivo gerado.

5. Como Funciona o Sistema
O formulário principal permite a inserção de dados relacionados à máquina, como cliente, ordem de serviço, identificação, parecer, quantidade, descrição e custo.

Ao submeter o formulário, os dados são armazenados no localStorage do navegador, garantindo que as informações sejam mantidas mesmo após o recarregamento da página.

A lista de notas é renderizada dinamicamente, mostrando todos os itens cadastrados.

O botão Exportar para Word converte os dados em um formato de documento Word (.docx) utilizando as bibliotecas mencionadas.
