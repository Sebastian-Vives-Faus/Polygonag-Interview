<script>
    import Proyect1 from '/Enmascarar grupo 1@2x.png'
    import Proyect2 from '/Enmascarar grupo 2@2x.png'
    import Proyect3 from '/Enmascarar grupo 3@2x.png'
    import MediaQuery from '../lib/MediaQuery.svelte';

    import { router } from '../stores/router'
    import HomeDescImg from '/2128.dsc0588.jpg@2x.png'

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
    <MediaQuery query="(max-width: 750px)" let:matches> 
        {#if matches}
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
        {:else}
        
        <div class="main-container {$router == 0 ? 'home-margin' : 'proyects-margin'}">
            {#if $router == 0}
                <div class="home-desc">
                    <div class="col1">
                    </div>
                    <div class="col2">
                        <p>Vim es una empresa dedicada al suministro e instalación de vidrio, aluminio y PVC para el sector residencial en México.</p>
                    </div>
                </div>
            {/if}
            {#each proyects as proyect}
            <div class="proyect-container">
                <img src={proyect.img} alt="{proyect.name}" />
                <div class="proyect-title-container">
                    <p>{proyect.name}</p>
                    <div class="proyect-title-right">
                        <p>Ver Proyecto </p>
                        <span class="material-symbols-outlined">
                            arrow_forward
                        </span>
                    </div>
                </div>
            </div>
            {/each}
        </div>
        {/if}
    </MediaQuery>
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

    

    @media only screen and (min-width: 750px) {
        div {
            border: 1px solid purple;
        }
        
        .proyect-container img{
            max-height: 700px;
        }

        .proyect-container {
            padding: 0 166px;
            padding-top: 140px;
            border: unset;
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
        }

        .proyect-title-container{
            width: 100%;
            border-bottom: 1px solid grey;
            height: auto;
            display: flex;
            justify-content: space-between;
        }

        .home-margin {
            margin-top: 100vh;
        }

        .main-container{
            padding-bottom: 140px;
        }

        .proyect-title-right{
            display: flex;
        }

        .proyect-title-right span {
            display: flex;
            align-items: center;
            margin-left: 0.5em;
        }

        .home-desc{
            height: 90vh;
            width: 100%;
            display: flex;
        }

        .col1,
        .col2 {
        flex: 1 0 50%;

        box-sizing: border-box;
        }

        .col1 {
           background: url('/2128.dsc0588.jpg@2x.png');
           background-position: center;
            background-size: cover;
        }

        .col2{
            display: flex;
            align-items: center;
            padding: 0 166px 0 1.5em;
            font-family: Termina-Light;
            font-size: 25px;
            border-bottom: 1px solid grey;
        }
    }
</style>