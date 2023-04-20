<script>
    import VimLogo from "/vim-logo.svg"
    import HomeBackground from "/Group 152.png"
</script>

<main>
    <div class="home-container">
        <div class="home-logo">
            <img src={VimLogo} alt="Vim" />
            <h1>PROYECTOS UNICOS</h1>
        </div>
        <div class="home-footer">
            <p>Scroll down para ver proyectos.</p>
            <span class="material-symbols-outlined">
                arrow_downward
                </span>
        </div>
        
    </div>
</main>

<style>
    .home-container {
        background: linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.73)), url("/Group 152.png");
        background-position: center;
        background-size: cover;
        display: flex;
        justify-content: space-around;;
        align-items: center;
        flex-direction: column;
        padding: 0 24px;
        position: fixed;
        text-align: center;
        z-index: 0;
        font-family: 'Termina-Light';
        font-size: 15px;
        height: 1020px;
        width: 100%;
        top: 0;
    }

    .home-logo {
        display: flex;
        color: white;
        font-family: 'Termina-Light';
        align-items: end;
    }

    .home-footer {
        color: white;
    }

    h1 {
        font-family: Termina-ExtraLight;
        font-size: 20px;
        margin: unset;
        margin-left: 1em;
    }
</style>