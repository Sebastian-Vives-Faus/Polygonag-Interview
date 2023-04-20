<script>
    import Proyect1 from '/Component 12 – 1@2x.png'
    import Proyect2 from '/Component 14 – 1@2x.png'
    import Proyect3 from '/Component 15 – 1.png'
    import MediaQuery from '../lib/MediaQuery.svelte';

    import { router } from '../stores/router'
    import HomeDesc from './HomeDesc.svelte';

    let proyects = [
        {
            id: 1, name: 'Privee, CDMX', img: Proyect1
        },
        {
            id: 2, name: 'Rio Escondido, CDMX', img: Proyect2
        },
        {
            id: 3, name: 'Montage, Los Cabos', img: Proyect3
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
                <HomeDesc />
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

        .proyects-margin {
            padding-bottom: unset;
        }
    }
</style>