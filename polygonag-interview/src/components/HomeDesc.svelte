<script>
import { router } from "../stores/router";
console.log($router)
import MediaQuery from '../lib/MediaQuery.svelte';
</script>

<main>
    <MediaQuery query="(max-width: 750px)" let:matches>
    {#if matches} 
    <div class="home-desc">
        {#if $router != 0}
        <div class="head-img">
        </div>
        {/if}
        <div class="mobile-col {$router == 0 ? '' : 'proyects-margin'}">
            {#if $router != 0}
                <h2>PROYECTOS UNICOS</h2>
            {/if}
            <p>VIM ES UNA EMPRESA DEDICADA AL SUMINISTRO E INSTALACIÓN DE VIDRIO, ALUMINIO Y PVC PARA EL SECTOR RESIDENCIAL EN MÉXICO.</p>
        </div>
    </div>
    {:else}
    <div class="home-desc">
        <div class="col1">
        </div>
        <div class="col2">
            {#if $router != 0}
                <h2>PROYECTOS UNICOS</h2>
            {/if}
            <p>Vim es una empresa dedicada al suministro e instalacion de vidrio, aluminio y PVC para el sector residencial en Mexico.</p>
        </div>
    </div>
    {/if}
    </MediaQuery>
</main>

<style>
    @media only screen and (max-width: 768px) {
        .col1,
        .col2 {
        flex: 0 !important;
        }

        .col1{
            display: none !important;
        }

        .col2 {
            width: 100%;
            padding: 0 1em;
        }

        .proyects-margin{
        }

        h2 {
            font-size: 20px !important;
        }

        .mobile-col {
            font-family: Termina-ExtraLight;
            font-size: 14px;
            display: flex;
            justify-content: center;
            padding: 5em 3em;
            background-color: rgb(250 250 250);
            flex-direction: column;
        }

        .head-img{
            background: url('/2128.dsc0588.jpg@2x.png');
           background-position: center;
            background-size: cover;
            height: 450px;
        }

        .home-desc {
            height: auto !important;
            flex-direction: column;
        }
    }
    .home-desc{
            height: 90vh;
            width: 100%;
            display: flex;
            background-color: white;
        }

        .col1,
        .col2 {
        flex: 1 0 50%;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        justify-content: center;
        }

        .col1 {
           background: url('/2128.dsc0588.jpg@2x.png');
           background-position: center;
            background-size: cover;
        }

        .col2{
            display: flex;
            padding: 0 166px 0 1.5em;
            font-family: Termina-ExtraLight;
            font-size: 18px;
            border-bottom: 1px solid grey;
            text-align: left;
        }

        h2 {
            font-family: Termina-ExtraLight;
            font-size: 30px;
            margin-bottom: 0.5em;
        }

        p {
            margin: unset;
            line-height: 2;
        }
</style>