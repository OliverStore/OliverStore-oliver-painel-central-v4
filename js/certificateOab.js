document.getElementById("generateCertificate").addEventListener("click", function () {

    var name = document.getElementById("name").value;
    var id = document.getElementById("id").value;
    var newDate = document.getElementById("date").value;
    var newDate_2 = document.getElementById("date_2").value;

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
 
    var monthText_2 = ''
    var dateParts_2 = newDate_2.split('/');

    // Certifique-se de que há três partes (dia, mês, ano)
    if (dateParts_2.length === 3) {
        var day_2 = parseInt(dateParts_2[0], 10);
        var month_2 = parseInt(dateParts_2[1], 10);
        var year_2 = parseInt(dateParts_2[2], 10);

        // Verifique se os valores são numéricos
        if (!isNaN(day_2) && !isNaN(month_2) && !isNaN(year_2)) {
            // Verifique se o mês está no formato desejado
            var monthNames_2 = [
                "Janeiro", "Fevereiro", "Março",
                "Abril", "Maio", "Junho",
                "Julho", "Agosto", "Setembro",
                "Outubro", "Novembro", "Dezembro"
            ];

            if (month_2 >= 1 && month_2 <= 12) {
                monthText_2 = monthNames_2[month - 1];
                console.log("Mês: " + monthText_2);

                // Salve o ano em uma variável
                var ano_2 = year_2;
                console.log("Ano: " + ano_2);
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
    var imageInput = document.getElementById("image");
    var imageLogo = document.getElementById("imageLogo");

    if (imageInput.files.length === 0) {
        // Exibir uma mensagem de erro se algum campo estiver vazio
        alert("Por favor, preencha todos os campos e selecione as imagens dos noivos e da Cidade.");
    } else {

        // Remover a seção do formulário da tela
        var certificateSection = document.getElementById("walletOabContainer");
        certificateSection.style.display = "none"; // Oculta a seção

        var image = imageInput.files[0];
        var logo = imageLogo.files[0]
        // Preencher os campos do elemento "dadosCertidao" com os dados coletados e as imagens
        var dadosCertidao = document.getElementById("dadosCertidao");
        dadosCertidao.innerHTML = `
      
        <div class="d-flex justify-content-center align-items-center " id="walletOab">

        <div class="walletOabContainer position-relative">

            <img src="img/background-carteirinha-oab.png" alt="">

            <div class="walletOabText">

                <div class="walletOabPhoto">
                    <img src="${URL.createObjectURL(image)}"
                        alt="Foto do jogar ">
                </div>

                <div class="cityImage">
                    <img src="${URL.createObjectURL(logo)}" alt="logo opcional">
                </div>


                <div class="expirationDate text-uppercase bold-custom-font letter-spacing-custom">
                    emissão ${day} / ${month} / ${year}
                </div>
               
                <div class="emission text-uppercase bold-custom-font letter-spacing-custom">
                    Validade ${day_2} / ${month_2} / ${year_2}
                </div>

                <div class="userInfosContainer">

                    <div class="userInfos">
                    ${name}
                        <p class="text-uppercase">nome do portador</p>
                    </div>

                    <div class="userInfos">
                        ${id}
                        <p class="text-uppercase">id do portador</p>
                    </div>


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
            document.getElementById('imageLogoLabel').textContent = 'Selecione a foto';

        });

        // Event listener para o botão "Download"
        document.getElementById("downloadButton").addEventListener("click", function () {
            // Crie um elemento temporário para conter o conteúdo desejado
            var tempElement = document.getElementById("certificateImageSection");

            tempElement.innerHTML = `

            <div class="d-flex justify-content-center align-items-center " id="walletOab">

        <div class="walletOabContainer position-relative">

            <img src="img/background-carteirinha-oab.png" alt="">

            <div class="walletOabText">

                <div class="walletOabPhoto">
                    <img src="${URL.createObjectURL(image)}"
                        alt="Foto do jogar ">
                </div>

                <div class="cityImage">
                    <img src="${URL.createObjectURL(logo)}" alt="logo opcional">
                </div>


                <div class="expirationDate text-uppercase bold-custom-font letter-spacing-custom">
                    emissão ${day} / ${month} / ${year}
                </div>
               
                <div class="emission text-uppercase bold-custom-font letter-spacing-custom">
                    Validade ${day_2} / ${month_2} / ${year_2}
                </div>

                <div class="userInfosContainer">

                    <div class="userInfos">
                    ${name}
                        <p class="text-uppercase">nome do portador</p>
                    </div>

                    <div class="userInfos">
                        ${id}
                        <p class="text-uppercase">id do portador</p>
                    </div>


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
                a.download = "carteira-oab.png";
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
