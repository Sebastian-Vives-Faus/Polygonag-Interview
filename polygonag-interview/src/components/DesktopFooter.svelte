<script>
    import { router } from '../stores/router';
</script>

<main>
    <div class="top-hr"></div>
    <div class="main-container">
        <div class="menu">
            <h1>Menu</h1>
            <p on:click={() => {window.scrollTo(0, 0);router.set(0);}}>Contacto</p>
            <p on:click={() => {window.scrollTo(0, 0);router.set(2);}}>Proyectos</p>
            <p on:click={() => {window.scrollTo(0, 0);router.set(3);}}>Nosotros</p>
        </div>
        <div class="contact">
            <h1>Contactanos</h1>
            <p>contacto@proyectosvim.com</p>
        </div>
    </div>
</main>

<style>
    .top-hr {
        width: 100%;
        height: 150px;
        border-bottom: 1px solid grey;
        background-color: white;
        z-index: 1;
        position: relative;
    }

    .main-container{
        background-color: white;
        z-index: 1;
        position: relative;
        padding: 0 166px 1.5em 166px;
        display: flex;
        flex-direction: column;
        align-items: end;
        text-align: end;
    }

    h1 {
        font-family: Termina-Light;
        font-size: 30px;
    }

    p {
        font-family: Termina-Light;
        font-size: 22px;
    }
</style>