<script>
    import HomeDesc from "../../components/HomeDesc.svelte";
    import VimVimVim from "/vimvimvim.png"
</script>

<main>
    <HomeDesc />
    <div class="main-container">
        <div class="quienes-somos">
            <h1>QUIENES SOMOS</h1>
            <div class="quienes-p">Como parte de Grupo Vimar, Vim nace con la finalidad de atender los proyectos arquitectónicos más exigentes y especializados del país.</div>
            <div class="quienes-p">Con el apoyo de Vitrocanceles y de la mano de los mejores proveedores en el mercado, logramos ofrecer a nuestros clientes un servicio integral de principio a fin.</div>
        </div>
    </div>
    <div class="prod-proc">
        <div class="col1">
            <h1>PRODUCTOS</h1>
            <p>Cancelería en Aluminio</p>
            <p>Domos</p>
            <p>Canceles de Baño</p>
            <p>Barandales</p>
        </div>
        <div class="col2">
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

    <div class="main-container">
        <img src={VimVimVim} alt="Vim Vim Vim" height="425px"/>
    </div>
</main>

<style>
    .main-container {
        padding: 0 166px;
        font-family: Termina-ExtraLight;
        border-bottom: 1px solid grey;
        background-color: white;
        height: 70vh;
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