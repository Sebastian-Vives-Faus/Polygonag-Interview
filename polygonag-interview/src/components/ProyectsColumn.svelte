<script>
    import Proyect1 from '/Enmascarar grupo 1@2x.png'
    import Proyect2 from '/Enmascarar grupo 2@2x.png'
    import Proyect3 from '/Enmascarar grupo 3@2x.png'

    import { router } from '../stores/router'

    let proyects = [
        {
            id: 1, name: 'Valle de Bravo', img: Proyect1
        },
        {
            id: 2, name: 'Ciudad de Mexico', img: Proyect2
        },
        {
            id: 3, name: 'Ciudad de Mexico', img: Proyect3
        }
    ]
</script>

<main>
    <div class="main-container {$router == 0 ? 'home-margin' : 'proyects-margin'}">
        {#each proyects as proyect}
        <div class="proyect-container">
            <img src={proyect.img} alt="{proyect.name}" />
            <div class="proyect-title-container">
                <p>{proyect.name}</p>
            </div>
        </div>
        {/each}
    </div>
</main>

<style>
    .main-container{
        background-color: var(--light-grey1);
        /* height: 2000px; */
       /*  margin-top: 550px; */
        z-index: 1;
        position: relative;
    }

    p {
        font-family: 'Termina-Light';
        font-size: 17px;
    }

    .home-margin {
        margin-top: 550px;
    }

    .proyects-margin {
        margin-top: 60px;
    }

    .proyect-container img {
        width: 100% ;
    }

    .proyect-container {
        padding: 0 25px;
        border-bottom: 1px solid grey;
        padding-top: 100px;
    }

    h2 {
        margin: 0.5em 0 0 0;
        font-size: 17px;
    }

    .proyect-title-container{
        height: 100px;
    }
</style>