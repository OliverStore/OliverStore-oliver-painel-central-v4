// Função para incluir o rodapé
function includeFooter() {

    var footer = `
        <footer>

            <div class="logo-section ">
                <img src="images/favicon.ico" alt="Logo da UAI RolePlay" class="logo">
            </div>

            <div class="copyright-section">
                 
              <p>Copyright © 2023, <a href="https://github.com/OliverStore" target="_blank">OliverDEV</a>, All rights reserved</p>

            </div>


            <div class="social-media-section">


                <div class="redes-sociais-footer">

                    <a href="https://www.facebook.com/LeonidasRolePlay/" target="_blank"><i class="fab fa-facebook"></i></a>
                    <a href="https://www.instagram.com/leonidasroleplay/" target="_blank"><i class="fab fa-instagram"></i></a>
                    <a href="https://www.youtube.com/@LeonidasRolePlay?sub_confirmation=1" target="_blank"><i class="fab fa-youtube"></i></a>
                    <a href="https://www.tiktok.com/@leonidasroleplay?lang=pt-BR" target="_blank"><i class="fab fa-tiktok"></i></a>
                    <a href="https://www.twitch.tv/leonidasroleplay" target="_blank"><i class="fab fa-twitch"></i></a>
                    <a href="https://discord.gg/5FtEtpAe89" target="_blank"><i class="fab fa-discord"></i></a>
             
                    </div>

            </div>

  
            
        </footer>
    `;

    document.write(footer);
    // document.getElementById("current-year").textContent = new Date().getFullYear();

}

// Incluir o cabeçalho e o rodapé nas páginas
includeFooter();
