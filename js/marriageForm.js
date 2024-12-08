document.getElementById("generateCertificateButton").addEventListener("click", function () {
    console.log('casamento')

    var groomName = document.getElementById("groomName").value;
    var brideName = document.getElementById("brideName").value;
    var judgeName = document.getElementById("judgeName").value;
    var cityName = document.getElementById("cityName").value;
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
    var groomImageInput = document.getElementById("groomImage");
    var brideImageInput = document.getElementById("brideImage");

    if (groomName.trim() === "" || brideName.trim() === "" || judgeName.trim() === "" || cityName.trim() === "" || groomImageInput.files.length === 0 || brideImageInput.files.length === 0) {
        // Exibir uma mensagem de erro se algum campo estiver vazio
        alert("Por favor, preencha todos os campos e selecione as imagens dos noivos e da Cidade.");
    } else {

        // Remover a seção do formulário da tela
        var weddingCertificateSection = document.getElementById("weddingCertificate");
        weddingCertificateSection.style.display = "none"; // Oculta a seção

        var groomImage = groomImageInput.files[0];
        var brideImage = brideImageInput.files[0];

        // Preencher os campos do elemento "dadosCertidao" com os dados coletados e as imagens
        var dadosCertidao = document.getElementById("dadosCertidao");
        dadosCertidao.innerHTML = `

      
        <div class="container mt-5 mb-5">

        <div id="weddingCertificateContainer" class="position-relative mt-5 mb-5">
            <div class="weddingPhotoContainer">
                <img src="${URL.createObjectURL(groomImage)}" alt="Foto do Noivo">
                <div class="weddingPhotoBanckground"></div>
                <img src="img/flores.svg" alt="background flores">
            </div>
            <h1 class="weddingTitleColor custom-font-sloop-script">Casamento</h1>
            <h2 class="text-uppercase bold-custom-font weddingTitleColor">forúm da cidade ${cityName}</h2>
            <h3 class="text-uppercase custom-font color-default text-center">isto é para certificar que</h3>

            <div class="w-100 d-flex align-items-center justify-content-center ">

                <div class="w-custom mr-3 text-center border-bottom color-default">
                    <p class="text-nowrap text-capitalize">${groomName}</p>
                </div>

                <h5 class="custom-font-sloop-script display-1 color-default  my-0">e</h5>
              
                <div class="w-custom ml-3 text-center border-bottom color-default">
                    <p class="text-nowrap text-capitalize">${brideName}</p>
                </div>

            </div>

            <h3 class="text-uppercase custom-font color-default text-center position-absolute custom-position">estão
                unidos em matrimônio
            </h3>

            <div class="d-flex align-items-center justify-content-center">
                <p class="color-default custom-font text-center">No dia</p>
                <div class="border-bottom color-default">
                    <p>${day}</p>
                </div>
                <p class="color-default custom-font">de</p>
                <div class="border-bottom color-default">
                    <p>${monthText}</p>
                </div>
                <p class="color-default custom-font">no ano de</p>
                <div class="border-bottom color-default">
                    <p>${year}</p>
                </div>
            </div>

            <div class="d-flex align-items-center justify-content-center mt-5 mb-mt-5">
                <p class="color-default custom-font">em</p>
                <div class="border-bottom color-default">
                    <p>Assembleia</p>
                </div>
                <p class="color-default custom-font">Juiz</p>
                <div class="border-bottom color-default">
                    <p class="custom-font-sloop-script">${judgeName}</p>
                </div>
            </div>

            <div class="w-100 d-flex align-items-center justify-content-center  ">

                <div class="w-50 text-center d-flex flex-column ml-3">

                    <div class=" border-bottom color-default ">
                        <h4 class="custom-font-sloop-script text-nowrap text-capitalize">${groomName}</h4>
                    </div>

                    <p class="color-default custom-font text-center">Marido</p>
                </div>

                <div class="logoCity">
                    <img src="${URL.createObjectURL(brideImage)}" alt="Logo cidade">
                </div>

                <div class="w-50 text-center d-flex flex-column mr-3">
                    <div class="border-bottom color-default">
                        <h4 class="custom-font-sloop-script text-nowrap">${brideName}</h4>
                    </div>
                    <p class="color-default custom-font text-center">Esposa</p>
                </div>

            </div>

            <!-- <div id="logCityContainer">

                <div class="logoCity">
                    <img src="${URL.createObjectURL(brideImage)}" alt="Foto do Noivo">
                </div>

            </div> -->

            <img id="logoPandora" src="./img/pandora.png" alt="logo pandora">

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
            weddingCertificateSection.style.display = "block"; // Mostra a seção novamente
            dadosCertidao.innerHTML = ""; // Limpar o conteúdo do certificado gerado

            // Limpar os campos de input
            document.getElementById("groomName").value = "";
            document.getElementById("brideName").value = "";
            document.getElementById("judgeName").value = "";
            document.getElementById("cityName").value = "";
            document.getElementById("groomImage").value = "";
            document.getElementById("brideImage").value = "";
            document.getElementById("date").value = '';
            document.getElementById('groomImageLabel').textContent = 'Selecione a foto';
            document.getElementById('groomImageLabel2').textContent = 'Selecione a foto'

        });

        // Event listener para o botão "Download"
        document.getElementById("downloadButton").addEventListener("click", function () {
            // Crie um elemento temporário para conter o conteúdo desejado
            var tempElement = document.getElementById("certificateImageSection");

            tempElement.innerHTML = `

          <div class="container mt-5 mb-5">

        <div id="weddingCertificateContainer" class="position-relative mt-5 mb-5">
            <div class="weddingPhotoContainer">
                <img src="${URL.createObjectURL(groomImage)}" alt="Foto do Noivo">
                <div class="weddingPhotoBanckground"></div>
                <img src="img/flores.svg" alt="bg flores">
            </div>
            
            <h1 class="weddingTitleColor custom-font-sloop-script">Casamento</h1>
            <h2 class="text-uppercase bold-custom-font weddingTitleColor">forúm da cidade ${cityName}</h2>
            <h3 class="text-uppercase custom-font color-default text-center">isto é para certificar que</h3>

            <div class="w-100 d-flex align-items-center justify-content-center ">

                <div class="w-custom mr-3 text-center border-bottom color-default text-capitalize text-nowrap">
                    <p>${groomName}</p>
                </div>

                <h5 class="custom-font-sloop-script display-1 color-default  my-0">e</h5>
              
                <div class="w-custom ml-3 text-center border-bottom color-default text-capitalize text-nowrap">
                    <p>${brideName}</p>
                </div>

            </div>

            <h3 class="text-uppercase custom-font color-default text-center position-absolute custom-position">estão
                unidos em matrimônio
            </h3>

            <div class="d-flex align-items-center justify-content-center">
                <p class="color-default custom-font text-center">No dia</p>
                <div class="border-bottom color-default">
                    <p>${day}</p>
                </div>
                <p class="color-default custom-font">de</p>
                <div class="border-bottom color-default">
                    <p>${month}</p>
                </div>
                <p class="color-default custom-font">no ano de</p>
                <div class="border-bottom color-default">
                    <p>${year}</p>
                </div>
            </div>

            <div class="d-flex align-items-center justify-content-center mt-5 mb-mt-5">
                <p class="color-default custom-font">em</p>
                <div class="border-bottom color-default">
                    <p>Assembleia</p>
                </div>
                <p class="color-default custom-font">Juiz</p>
                <div class="border-bottom color-default">
                    <p class="custom-font-sloop-script">${judgeName}</p>
                </div>
            </div>

            <div class="w-100 d-flex align-items-center justify-content-center  ">

                <div class="w-50 text-center d-flex flex-column ml-3">

                    <div class=" border-bottom color-default ">
                        <h4 class="custom-font-sloop-script text-nowrap">${groomName}</h4>
                    </div>

                    <p class="color-default custom-font text-center">Marido</p>
                </div>

                <div class="logoCity">
                    <img src="${URL.createObjectURL(brideImage)}" alt="Logo cidade">

                </div>

                <div class="w-50 text-center d-flex flex-column mr-3">
                    <div class="border-bottom color-default">
                        <h4 class="custom-font-sloop-script text-nowrap">${brideName}</h4>
                    </div>
                    <p class="color-default custom-font text-center">Esposa</p>
                </div>

            </div>

            <!-- <div id="logCityContainer">

                <div class="logoCity">
                    <img src="${URL.createObjectURL(brideImage)}" alt="Foto do Noivo">
                </div>

            </div> -->

            <img id="logoPandora" src="./img/pandora.png" alt="logo pandora">

        </div>
    </div>

    `;

            // Use a biblioteca html2canvas para converter o elemento em uma imagem
            html2canvas(tempElement).then(function (canvas) {

                var imgData = canvas.toDataURL("image/png");

                // Crie um link para download da imagem
                var a = document.createElement("a");
                a.href = imgData;
                a.download = "certidao_casamento.png";
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
