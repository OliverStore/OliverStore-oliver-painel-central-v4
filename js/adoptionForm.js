document.getElementById("generateCertificate").addEventListener("click", function () {
    console.log('chegou')
    var motherName = document.getElementById("motherName").value;
    var fatherName = document.getElementById("fatherName").value;
    var judgeNameAd = document.getElementById("judgeNameAd").value;
    var cityNameAd = document.getElementById("cityNameAd").value;
    var childNameAd = document.getElementById("childNameAd").value;
    var childAgeAd = document.getElementById("childAge").value;
    var newDate = document.getElementById("date").value;
    var monthText = ''
    var dateParts = newDate.split('/');

        // Certifique-se de que há três partes (dia, mês, ano)
        if (dateParts.length === 3) {
            var day = parseInt(dateParts[0], 10);
            var month = parseInt(dateParts[1], 10);
            var year = parseInt(dateParts[2], 10);
    
            // Verifique se os valores são numéricos
            if (!isNaN(day) && !isNaN(month) && !isNaN(year)) {
                // Verifique se o mês está no formato desejado
                var monthNames = [
                    "Janeiro", "Fevereiro", "Março",
                    "Abril", "Maio", "Junho",
                    "Julho", "Agosto", "Setembro",
                    "Outubro", "Novembro", "Dezembro"
                ];
    
                if (month >= 1 && month <= 12) {
                    monthText = monthNames[month - 1];
                    console.log("Mês: " + monthText);
    
                    // Salve o ano em uma variável
                    var ano = year;
                    console.log("Ano: " + ano);
                } else {
                    console.log("Mês inválido");
                }
            } else {
                console.log("Formato de data inválido");
            }
        } else {
            console.log("Formato de data inválido");
        }

    // Obter as imagens carregadas
    var childImageInput = document.getElementById("childImage");
    var logoCityInput = document.getElementById("logoCityImage");

    if (motherName.trim() === "" || fatherName.trim() === "" || judgeNameAd.trim() === "" || cityNameAd.trim() === "" || childImageInput.files.length === 0 || logoCityInput.files.length === 0) {
        // Exibir uma mensagem de erro se algum campo estiver vazio
        alert("Por favor, preencha todos os campos e selecione as imagens dos noivos e da Cidade.");
    } else {

        // Remover a seção do formulário da tela
        var weddingCertificateSection = document.getElementById("adoptionCertificate");
        weddingCertificateSection.style.display = "none"; // Oculta a seção

        var childImage = childImageInput.files[0];
        var logoCityImage = logoCityInput.files[0];

        // Preencher os campos do elemento "dadosAdocao" com os dados coletados e as imagens
        var dadosAdocao = document.getElementById("dadosAdocao");
        dadosAdocao.innerHTML = `    <div class="container ">

        <div id="adoptionCertificateContainer" class="position-relative mt-4 mb-5">

            <h1 class="text-center ">certidão de adoção</h1>

            <div class="logocity">
                <img src="${URL.createObjectURL(logoCityImage)}" alt="Logo da cidade">
            </div>

            <div class="w-100 text-adoption-certificate">
                <p> Certificamos que, no dia ${day} de ${monthText} de ${year} , foi realizado o registro de adoção,
                    O pai, <strong class="font-weight-bold text-capitalize">${fatherName}</strong> , e a mãe, <strong
                        class="font-weight-bold text-capitalize">${motherName}</strong>, oficializaram a adoção de seu filho(a)
                    perante as
                    autoridades competentes. O(a) filho(a) <strong class="font-weight-bold text-capitalize">${childNameAd}</strong>, com <strong class="text-capitalize"> ${childAgeAd} </strong> anos de idade, e passa a ser legalmente reconhecido(a) como membro desta família. Este registro de adoção é
                    emitido de acordo com as leis e regulamentos estabelecidos, com validade em todo o território
                    nacional. Local e data do registro:<strong class="font-weight-bold text-capitalize">${cityNameAd}</strong>. ${day} de ${month} de ${year}
                </p>
            </div>


            <div class="w-100 d-flex justify-content-center flex-column align-items-center position-absolute bottom-3">

            <h2 class="text-nowrap border-bottom border-dark text-capitalize">${judgeNameAd}</h2>
            <p>Juiz(a)</p>

                <img class="logoPandora" src="./img/pandora.png" alt="logo pandora">
            </div>

            <div class="playerPhotoContainer position-absolute bottom-0_7 right-1_8">
                <img src="${URL.createObjectURL(childImage)}" alt="foto filho">
            </div>


        </div>



    </div>


    <div class='container d-flex justify-content-center'>

        <button id="generateNewFormButton" class="btn btn-primary btn-custom">Gerar Novo Formulário</button>
        <button id="downloadButton" class="btn btn-primary btn-custom ml-5">Download</button>

    </div>`;

        // Event listener para o botão "Gerar novo formulário"
        document.getElementById("generateNewFormButton").addEventListener("click", function () {
            // Mostrar a seção do formulário novamente
            weddingCertificateSection.style.display = "block"; // Mostra a seção novamente
            dadosAdocao.innerHTML = ""; // Limpar o conteúdo do certificado gerado

            // Limpar os campos de input
            document.getElementById("motherName").value = "";
            document.getElementById("fatherName").value = "";
            document.getElementById("judgeNameAd").value = "";
            document.getElementById("cityNameAd").value = "";
            document.getElementById("childImage").value = "";
            document.getElementById("logoCityImage").value = "";
            document.getElementById('childImageLabel').textContent = 'Selecione a foto';
            document.getElementById('childImageLabel2Ad').textContent = 'Selecione a foto';


        });

        // Event listener para o botão "Download"
        document.getElementById("downloadButton").addEventListener("click", function () {
            // Crie um elemento temporário para conter o conteúdo desejado
            var tempElement = document.getElementById("certificateImage");

            tempElement.innerHTML = `

            <div class="container ">

            <div id="adoptionCertificateContainer" class="position-relative mt-4 mb-5">
    
                <h1 class="text-center ">certidão de adoção</h1>
    
                <div class="logocity">
                    <img src="${URL.createObjectURL(logoCityImage)}" alt="Logo da cidade">
                </div>
    
                <div class="w-100 text-adoption-certificate">
                    <p> Certificamos que, no dia ${day} de ${month} de ${year} , foi realizado o registro de adoção,
                        O pai, <strong class="font-weight-bold">${fatherName}</strong> , e a mãe, <strong
                            class="font-weight-bold text-capitalize">${motherName}</strong>, oficializaram a adoção de seu filho(a)
                        perante as
                        autoridades competentes. O(a) filho(a) <strong class="font-weight-bold text-capitalize">${childNameAd}</strong>, com <strong> ${childAgeAd} </strong>  anos de idade, e passa a ser legalmente reconhecido(a) como membro desta família. Este registro de adoção é
                        emitido de acordo com as leis e regulamentos estabelecidos, com validade em todo o território
                        nacional. Local e data do registro:<strong class="font-weight-bold text-capitalize">${cityNameAd}</strong>. ${day} de ${month} de ${year}
                    </p>
                </div>
    
    
                <div class="w-100 d-flex justify-content-center flex-column align-items-center position-absolute bottom-3">
    
                    <h2 class="text-nowrap border-bottom border-dark text-capitalize">${judgeNameAd}</h2>
                        <p>Juiz(a)</p>
                    <img class="logoPandora" src="./img/pandora.png" alt="logo pandora">
                </div>
    
                <div class="playerPhotoContainer position-absolute bottom-0_7 right-1_8">
                    <img src="${URL.createObjectURL(childImage)}" alt="foto filho">
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
                a.download = "certidao_adoção.png";
                a.style.display = "none";
                document.body.appendChild(a);

                // Dispare o evento de clique no link para iniciar o download
                a.click();

                // Remova o link após o download
                document.body.removeChild(a);

                // Oculte o elemento com o ID "certificateImage"
                tempElement.style.display = "none";

                // Oculte o botão de download
                document.getElementById("downloadButton").style.display = "none";
            });


        });


    }

});
