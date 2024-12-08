document.getElementById('generateCertificateButton').addEventListener("click", function () {
    console.log('oi')
    var childName = document.getElementById("childName").value;
    var childSex = document.getElementById("sex").value;
    var chilskinColor = document.getElementById("skinColor").value;
    var motherName = document.getElementById("motherName").value;
    var fatherName = document.getElementById("fatherName").value;
    var importantObservations = document.getElementById("importantObservations").value;
    var judgeName = document.getElementById("judgeName").value;
    var cityName = document.getElementById("cityName").value;
    var newDate = document.getElementById("date").value;
    var dateParts = newDate.split('/');
    var monthText = ''

    // Obter as imagens carregadas
    var childImageInput = document.getElementById("childImage");
    var cityLogoImage = document.getElementById("cityLogoImage");

    var certifiedData = document.getElementById("certifiedData");

    var childImage = childImageInput && childImageInput.files && childImageInput.files.length > 0 ? childImageInput.files[0] : null;
    var cityLogo = cityLogoImage && cityLogoImage.files && cityLogoImage.files.length > 0 ? cityLogoImage.files[0] : null;

    {/*  */ }

   

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

    if (childImage && cityLogo && childName.trim() != 0 && childSex.trim() != 0 && chilskinColor.trim() != 0 && motherName.trim() != 0 && fatherName.trim() != 0 && importantObservations.trim() != 0 && judgeName.trim() != 0 && cityName.trim() != 0) {

        certifiedData.innerHTML = `
        <div class="container">
        <div class="d-flex justify-content-center" id="birthCertificate">
            <div class="certificate position-relative">
                <img src="img/backgroundCertidaoNascimento.png" alt="background certidao nascimento">
                <div class="birthCertificateContainer">
                    <div class="cityLogo">
                        <img src="${URL.createObjectURL(cityLogo)}" alt="logo da cidade">
                    </div>
                    <div class="bold-custom-font" id="childName">Nome: <span class="custom-font text-wrap">${childName}</span>
                    </div>
                    <div id="childPhoto">
                        <img src="${URL.createObjectURL(childImage)}" alt="logo da cidade">
                    </div>
                    <div class="bold-custom-font" id="dateBirth">Data de nascimento: <span
                            class="custom-font">${day}/${month}/${year}</span></div>
                    <div class="bold-custom-font" id="hometown">cidade: <span class="custom-font"> ${cityName}</span>
                    </div>
                    <div class="bold-custom-font" id="sex">sexo: <span class="custom-font">${childSex}</span></div>
                    <div class="bold-custom-font" id="skinColor">Cor de pele: <span
                            class="custom-font">${chilskinColor}</span></div>
                    <div id="fatherName"> ${fatherName}</div>
                    <div id="motherName"> ${motherName} </div>
                    <div class="judgeName text-center "> ${judgeName} </div>


                    <div class="w-100 d-flex flex-column mb-3">
                        <label class="bold-custom-font letter-spacing-custom text-center"
                            for="importantObservations">Informações Importantes</label>
                        <div id="importantObservations" class="text-break text">
                            ${importantObservations}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>`;
        // Adicionar funcionalidade de download
        var downloadButton = document.createElement("button");
        downloadButton.id = "downloadButton";
        downloadButton.className = "btn btn-primary btn-custom ";
        downloadButton.textContent = "Download";

        downloadButton.addEventListener("click", function () {
            // Ocultar o botão de download antes de criar a imagem
            downloadButton.style.display = "none";

            // Crie um elemento temporário para conter o conteúdo desejado
            var tempElement = document.getElementById("certifiedData");

            // Use a biblioteca html2canvas para converter o elemento em uma imagem
            html2canvas(tempElement).then(function (canvas) {
                var imgData = canvas.toDataURL("image/png");

                // Crie um link para download da imagem
                var a = document.createElement("a");
                a.href = imgData;
                a.download = "certidao_nascimento.png";
                a.style.display = "none";
                document.body.appendChild(a);

                // Dispare o evento de clique no link para iniciar o download
                a.click();

                // Remova o link após o download
                document.body.removeChild(a);

                // Restaurar a visibilidade do botão de download após o download
                downloadButton.style.display = "block";
            });
        });

        // Adicionar o botão de download ao documento
        certifiedData.appendChild(downloadButton);
    } else {
        alert("Por favor, preencha todas informaçoes.");
    }

})