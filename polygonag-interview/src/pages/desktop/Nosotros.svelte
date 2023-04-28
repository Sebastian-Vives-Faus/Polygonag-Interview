<script>
    import HomeDesc from "../../components/HomeDesc.svelte";
    import VimVimVim from "/vimvimvim.png"
    import MediaQuery from '../../lib/MediaQuery.svelte';
</script>

<main>
    <HomeDesc />
    <MediaQuery query="(max-width: 750px)" let:matches>
    <div class="main-container">
        <div class="quienes-somos">
            <h1>QUIENES SOMOS</h1>
            <div class="quienes-p">Como parte de Grupo Vimar, Vim nace con la finalidad de atender los proyectos arquitectónicos más exigentes y especializados del país.</div>
            <div class="quienes-p">Con el apoyo de Vitrocanceles y de la mano de los mejores proveedores en el mercado, logramos ofrecer a nuestros clientes un servicio integral de principio a fin.</div>
        </div>
    </div>
    {#if matches}
        <div class="extra-img"></div>
    {/if}
    <div class="prod-proc">
        <div class="{matches ? 'col' : 'col1'}">
            <h1>PRODUCTOS</h1>
            <p>Cancelería en Aluminio</p>
            <p>Domos</p>
            <p>Canceles de Baño</p>
            <p>Barandales</p>
        </div>
        <div class="{matches ? 'col row2' : 'col2'}">
            <h1>PROCESOS</h1>
            <p>Esmerilado</p>
            <p>Insulado</p>
            <p>Laminado</p>
            <p>Entradas y Barrenos</p>
            <p>Templado</p>
            <p>Serigrafia</p>
            <p>Cantos Pulidos</p>
            <p>Lunas</p>
        </div>
    </div>
    {#if !matches}
        <div class="main-container vimvim">
            <img src={VimVimVim} alt="Vim Vim Vim" height="425px"/>
        </div>
    {/if}
    </MediaQuery>
</main>

<style>

    @media only screen and (max-width: 768px) {
        .main-container{
            padding: 3em 2em !important;
            height: auto !important;
        }

        .extra-img {
            background: url('/2128.dsc0588.jpg@2x.png');
           background-position: center;
            background-size: cover;
            height: 450px;
        }

        h1 {
            font-size: 20px !important;
        }

        p {
            font-size: 14px !important;
        }
        .quienes-p {
            font-size: 14px !important;
            margin-top: 1em !important;
        }
        
        .quienes-somos{
            padding: unset !important;
        }

        .col {
            padding: 3em 2em;
            height: auto;
            text-align: center;
        }

        .row2{
            background-color: rgba(230, 230, 230, 0.27);
        }

        .prod-proc{
            flex-direction: column;
        }
    }
    .main-container {
        padding: 0 166px;
        font-family: Termina-ExtraLight;
        border-bottom: 1px solid grey;
        background-color: white;
        height: 70vh;
    }

    .vimvim {
        display: flex;
        justify-content: center;
    }

    .main-container img {
        margin: 100px 0;
    }

    .quienes-somos {
        padding: 100px 0 150px 0;
        
    }

    h1 {
        font-size: 30px;
        font-family: Termina-ExtraLight;
    }

    p {
        font-size: 18px;
        font-family: Termina-ExtraLight;
        
    }

    .quienes-p{
        margin-top: 50px;
        line-height: 2;
        font-size: 18px;
        
    }

    .prod-proc {
        
        display: flex;
    }

    .prod-proc p {
        margin: unset;
        line-height: 2;
    }

    .col1,
    .col2 {
        flex: 1 0 50%;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        padding: 190px 0 190px 166px;
        border-bottom: 1px solid grey;
    }

    .col1{
        background-color: #E6E6E6;
    }

    .col2 {
        background-color: white;
    }
</style>