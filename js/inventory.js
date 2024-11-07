let inventoryData = JSON.parse(localStorage.getItem("inventoryData")) || [];

// Função para adicionar item ao inventário
document.getElementById("machineForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const cliente = document.getElementById("cliente").value;
    const ordemServico = document.getElementById("ordemServico").value;
    const identificacao = document.getElementById("identificacao").value;
    const parecer = document.getElementById("parecer").value;
    const quantidade = document.getElementById("quantidade").value;
    const descricao = document.getElementById("descricao").value;
    const custo = document.getElementById("custo").value;
    
    // Captura a imagem
    const imagem = document.getElementById("imagem").files[0];

    // Se houver uma imagem, cria um URL para exibir no inventário
    let imagemURL = '';
    if (imagem) {
        imagemURL = URL.createObjectURL(imagem);
    }

    const item = {
        cliente, ordemServico, identificacao, parecer, quantidade, descricao, custo, imagemURL
    };

    inventoryData.push(item);
    localStorage.setItem("inventoryData", JSON.stringify(inventoryData));

    renderInventoryList();
    document.getElementById("machineForm").reset();
});

// Função para renderizar a lista de itens no inventário
function renderInventoryList() {
    const machineList = document.getElementById("machineList");
    machineList.innerHTML = "";

    inventoryData.forEach(item => {
        const listItem = document.createElement("li");

        listItem.innerHTML = `
            <strong>Cliente:</strong> ${item.cliente} <br>
            <strong>Ordem de Serviço:</strong> ${item.ordemServico} <br>
            <strong>Identificação:</strong> ${item.identificacao} <br>
            <strong>Parecer Geral:</strong> ${item.parecer} <br>
            <strong>Quantidade:</strong> ${item.quantidade} <br>
            <strong>Descrição:</strong> ${item.descricao} <br>
            <strong>Custo Real:</strong> ${item.custo} <br>
            ${item.imagemURL ? `<img src="${item.imagemURL}" alt="Imagem" style="max-width: 100px;">` : ''}
        `;
        machineList.appendChild(listItem);
    });
}

// Função para mostrar todos os itens do inventário
function showAllMachines() {
    renderInventoryList();
}

// Função para exportar o inventário para Word
function exportInventoryToWord() {
    const docTemplate = `
        <w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
            <w:body>
                <w:p>
                    <w:r>
                        <w:t>Inventário de Máquinas</w:t>
                    </w:r>
                </w:p>
                ${inventoryData.map(item => `
                    <w:p>
                        <w:r>
                            <w:t><strong>Cliente:</strong> ${item.cliente}</w:t>
                        </w:r>
                    </w:p>
                    <w:p>
                        <w:r>
                            <w:t><strong>Ordem de Serviço:</strong> ${item.ordemServico}</w:t>
                        </w:r>
                    </w:p>
                    <w:p>
                        <w:r>
                            <w:t><strong>Identificação:</strong> ${item.identificacao}</w:t>
                        </w:r>
                    </w:p>
                    <w:p>
                        <w:r>
                            <w:t><strong>Parecer Geral:</strong> ${item.parecer}</w:t>
                        </w:r>
                    </w:p>
                    <w:p>
                        <w:r>
                            <w:t><strong>Quantidade:</strong> ${item.quantidade}</w:t>
                        </w:r>
                    </w:p>
                    <w:p>
                        <w:r>
                            <w:t><strong>Descrição:</strong> ${item.descricao}</w:t>
                        </w:r>
                    </w:p>
                    <w:p>
                        <w:r>
                            <w:t><strong>Custo Real:</strong> ${item.custo}</w:t>
                        </w:r>
                    </w:p>
                    ${item.imagemURL ? `
                        <w:p>
                            <w:r>
                                <w:t><strong>Imagem:</strong> Imagem Anexada</w:t>
                            </w:r>
                        </w:p>
                    ` : ''}
                `).join('')}
            </w:body>
        </w:document>
    `;

    // Gerar o arquivo Word usando PizZip
    const zip = new PizZip(docTemplate);
    const docBlob = zip.generate({ type: "blob" });

    // Salvar o arquivo Word
    saveAs(docBlob, "inventario_maquinas.docx");
}

document.addEventListener("DOMContentLoaded", renderInventoryList);
