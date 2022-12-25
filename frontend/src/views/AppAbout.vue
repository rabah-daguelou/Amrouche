<template>
    <div>
        <div class="taddart">

        </div>
        <div class="map">
            <img src="../assets/axxam.png" width="40" alt="">
            <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d12817.207878037138!2d4.091778920715327!3d36.57094032490259!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sfr!4v1671642050708!5m2!1sfr!2sfr" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <section>
            <P>
                L'entreprise Ali BEDDAD se trouve au village Taguemount Ledjdid dans la commune Iwadhiyen, wilaya de Tizi-Ouzou 
                Bla bla 
                
            </P>

            <p>
                <a href="https://fr.wikipedia.org/wiki/Ouadhia#localit%C3%A9s_de_la_commune" target="_blank " > Visiter IWADHIYEN wikipedia </a>
            </p>
            <ul>
                <li>
                    Spécialités
                </li>
                <li>
                    Bla bla
                </li>
            </ul>
        </section>
        <footer>
           © Copyright tous droits réservés. Ali Beddad. 2022.
        </footer>
    </div>
    
</template>

<script>


</script>

<style scoped>
    .taddart{
        margin-top:-20px;
        width: 100%;
        height: 100px;
        background-image: url('../assets/taddart.png');
        background-size: cover;
    }

    div iframe {
        width: 100%;
        height: 100px;
    }

    .map {
        position: relative;
    }
    img {
        position: absolute;
        right: 45%;
        top: 40%;
        border-radius: 50%;
    }
    section {
        margin-top: 20px;
    }
    footer {
        margin-top: 50px;
    }
</style>