let osData = JSON.parse(localStorage.getItem("osData")) || [];

// Função para renderizar a lista de ordens de serviço
function renderOSList() {
    const osList = document.getElementById("osList");
    osList.innerHTML = "";

    osData.forEach(os => {
        const osItem = document.createElement("li");
        osItem.innerHTML = `
            <strong>O.S:</strong> ${os.ordemServico} <br>
            <strong>Marca:</strong> ${os.marca} <br>
            <strong>Modelo:</strong> ${os.modelo} <br>
            <strong>CV:</strong> ${os.cv} <br>
            <strong>Volts:</strong> ${os.volts} <br>
            <strong>Amperes:</strong> ${os.amperes} <br>
            <strong>RPM:</strong> ${os.rpm} <br>
            <strong>Hz:</strong> ${os.hz} <br>
            <strong>Isolação:</strong> ${os.isolacao} <br>
            <strong>IP:</strong> ${os.ip} <br>
            <strong>E.S:</strong> ${os.es} <br>
            <strong>C. Pacote:</strong> ${os.cPacote} <br>
            <strong>D. Pacotes:</strong> ${os.dPacotes} <br>
            <strong>N. Ranhuras:</strong> ${os.nRanhuras} <br>
            <strong>Amp V. Passe:</strong> ${os.ampVPasse} <br>
            <strong>Espias:</strong> ${os.espias} <br>
            <strong>Fio:</strong> ${os.fio} <br>
            <strong>Ligação Série:</strong> ${os.ligSerie} <br>
            <strong>Ligação Paralelo:</strong> ${os.ligParalelo} <br>
            <strong>Terminais:</strong> ${os.terminais} <br>
            <strong>Peso M:</strong> ${os.pesoM} <br>
            <strong>Grupo B:</strong> ${os.grupoB} <br>
            <strong>B Grupo:</strong> ${os.bGrupo} <br>
            <strong>Observações:</strong> ${os.obs} <br>
            <strong>Data:</strong> ${os.data}
        `;
        osList.appendChild(osItem);
    });
}

// Função para adicionar uma nova ordem de serviço
document.getElementById("osForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const ordemServico = Date.now().toString();
    const marca = document.getElementById("marca").value;
    const modelo = document.getElementById("modelo").value;
    const cv = document.getElementById("cv").value;
    const volts = document.getElementById("volts").value;
    const amperes = document.getElementById("amperes").value;
    const rpm = document.getElementById("rpm").value;
    const hz = document.getElementById("hz").value;
    const isolacao = document.getElementById("isolacao").value;
    const ip = document.getElementById("ip").value;
    const es = document.getElementById("es").value;
    const cPacote = document.getElementById("cPacote").value;
    const dPacotes = document.getElementById("dPacotes").value;
    const nRanhuras = document.getElementById("nRanhuras").value;
    const ampVPasse = document.getElementById("ampVPasse").value;
    const espias = document.getElementById("espias").value;
    const fio = document.getElementById("fio").value;
    const ligSerie = document.getElementById("ligSerie").value;
    const ligParalelo = document.getElementById("ligParalelo").value;
    const terminais = document.getElementById("terminais").value;
    const pesoM = document.getElementById("pesoM").value;
    const grupoB = document.getElementById("grupoB").value;
    const bGrupo = document.getElementById("bGrupo").value;
    const obs = document.getElementById("obs").value;
    const data = document.getElementById("data").value;
    const imagem= document.getElementById("imagem").value;

    const os = {
        ordemServico, marca, modelo, cv, volts, amperes, rpm, hz,
        isolacao, ip, es, cPacote, dPacotes, nRanhuras, ampVPasse,
        espias, fio, ligSerie, ligParalelo, terminais, pesoM,
        grupoB, bGrupo, obs, data, imagem
    };

    osData.push(os);
    localStorage.setItem("osData", JSON.stringify(osData));
    renderOSList();
    document.getElementById("osForm").reset();
});

// Função para exportar a tabela de ordens de serviço para Excel
function exportOSToExcel() {
    const osSheet = XLSX.utils.json_to_sheet(osData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, osSheet, "Ordens de Serviço");
    XLSX.writeFile(workbook, "ordens_de_servico.xlsx");
}

document.addEventListener("DOMContentLoaded", () => {
    renderOSList();
});
