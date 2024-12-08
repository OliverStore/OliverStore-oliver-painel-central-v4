document.getElementById("generateCertificate").addEventListener("click", function () {
    
    var nome = document.getElementById("name").value;
    var nomeMedico = document.getElementById("nomeMedico").value;
    var resultado = document.getElementById("resultado").value;
    var id = document.getElementById("id").value;
    var descricao = document.getElementById("description").value;
    var data = document.getElementById("date").value;

    // Obter as imagens carregadas
    var imageInput = document.getElementById("image");

    if (imageInput.files.length === 0) {
        // Exibir uma mensagem de erro se algum campo estiver vazio
        alert("Por favor, preencha todos os campos e selecione a imagem.");
    } else {

        // Remover a seção do formulário da tela
        var certificateSection = document.getElementById("walletOabContainer");
        certificateSection.style.display = "none"; // Oculta a seção

        var image = imageInput.files[0];
        // Preencher os campos do elemento "dadosCertidao" com os dados coletados e as imagens
        var dadosCertidao = document.getElementById("dadosCertidao");
        dadosCertidao.innerHTML = `
      
        <div class="d-flex" id="testeGravidezContainer">

            <div class="testeGravidez">

                <img class="bg_mandado_sentenca" src="./img/Exame-gravidez.png" alt="canva sentenca julgamento">

                <div class="testeInformativo">


                    <p class="data"> Data: ${data} </p>
                    <p class="NomePaciente"> ${nome} </p>
                    <p class="idPaciente"> ${id} </p>
                    <p class="medico"> ${nomeMedico} </p>
                    <p class=" resultado"> ${resultado} </p>
                    <p class=" descricao "> ${descricao} </p>

                    <div class=" logoCIdade">
                        <img src="${URL.createObjectURL(image)}" alt="Logo cidade ">
                    </div>


                </div>

            </div>

        </div>

        <div class='container d-flex justify-content-center'>

            <button id="generateNewFormButton" class="btn btn-primary btn-custom">Gerar Novo Formulário</button>
            <button id="downloadButton" class="btn btn-primary btn-custom ml-5">Download</button>

        </div>

            `;

        // Event listener para o botão "Gerar novo formulário"
        document.getElementById("generateNewFormButton").addEventListener("click", function () {
            // Mostrar a seção do formulário novamente
            certificateSection.style.display = "block"; // Mostra a seção novamente
            dadosCertidao.innerHTML = ""; // Limpar o conteúdo do certificado gerado

            // Limpar os campos de input
            document.getElementById("image").value = "";
            document.getElementById("date").value = '';
            document.getElementById("name").value = '';
            document.getElementById("id").value = '';
            document.getElementById('imageLabel').textContent = 'Selecione a foto';

        });

        // Event listener para o botão "Download"
        document.getElementById("downloadButton").addEventListener("click", function () {
            // Crie um elemento temporário para conter o conteúdo desejado
            var tempElement = document.getElementById("certificateImageSection");

            tempElement.innerHTML = `

        <div class="d-flex" id="testeGravidezContainer">

            <div class="testeGravidez">

                <img class="bg_mandado_sentenca" src="./img/Exame-gravidez.png" alt="canva sentenca julgamento">

                <div class="testeInformativo">


                    <p class="data"> Data: ${data} </p>
                    <p class="NomePaciente"> ${nome} </p>
                    <p class="idPaciente"> ${id} </p>
                    <p class="medico"> ${nomeMedico} </p>
                    <p class=" resultado"> ${resultado} </p>
                    <p class=" descricao "> ${descricao} </p>

                    <div class=" logoCIdade">
                        <img src="${URL.createObjectURL(image)}" alt="Logo cidade ">
                    </div>


                </div>

            </div>

        </div>
    
    `;

            // Use a biblioteca html2canvas para converter o elemento em uma imagem
            html2canvas(tempElement).then(function (canvas) {

                var imgData = canvas.toDataURL("image/png");

                // Crie um link para download da imagem
                var a = document.createElement("a");
                a.href = imgData;
                a.download = "exame-gravidez.png";
                a.style.display = "none";
                document.body.appendChild(a);

                // Dispare o evento de clique no link para iniciar o download
                a.click();

                // Remova o link após o download
                document.body.removeChild(a);

                // Oculte o elemento com o ID "certificateImageSection"
                tempElement.style.display = "none";

                // Oculte o botão de download
                document.getElementById("downloadButton").style.display = "none";
            });


        });


    }

});
