<script></script>
<main>
    <div class="wrapper">
        <div class="main-container">
            <h1>CONTACTO</h1>
            <div class="title"></div>
            <input type="text" class="main-input" placeholder="Correo" />
            <input type="text" class="main-input" placeholder="Mensaje" />
            <button type="button" class="enviar" >Enviar <span class="material-symbols-outlined">
                arrow_forward
                </span></button>
        </div>
    </div>
</main>
<style>
    @media only screen and (max-width: 768px) {
        h1 {
            font-size: 20px !important;
        }

        .main-input, .enviar{
            font-size: 14px !important;
        }

        .enviar {
            align-items: center;
        }

        .main-container {
            padding: 0 2em !important;
        }
    }
    .main-input {
        background-color: unset;
        border: unset;
        border-bottom-color: unset;
        border-bottom-style: unset;
        border-bottom-width: unset;
        font-size: 20px;
        padding: 1.5em 0;
        font-family: Termina-Light;
        border-bottom: 1px solid gray;
    }

    .wrapper {
        z-index: 1;
        position: relative;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .main-container {
        padding: 0 166px;
        font-family: Termina-ExtraLight;
        display: flex;
        flex-direction: column;
    }

    h1 {
        font-size: 30px;
        font-family: Termina-ExtraLight;
        margin: unset;
        letter-spacing: 2px;
    }

    .title {
        height: 3em;
        border-bottom: 1px solid grey;
    }

    .enviar {
        background-color: unset;
        border: unset;
        width: fit-content;
        font-size: 16px;
        padding: 3em 0;
        font-family: Termina-Light;
        display: flex;
    }

    .enviar span {
        margin-left: 0.5em;
    }
</style>