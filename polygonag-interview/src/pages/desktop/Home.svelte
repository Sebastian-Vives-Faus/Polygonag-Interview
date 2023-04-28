<script>
    import VimLogo from "/VIM_Blanco.png"
    import HomeBackground from "/Group 152.png"
    import MediaQuery from '../../lib/MediaQuery.svelte';
    import DownArrow from "/Group 158.svg"
</script>

<main>
    <MediaQuery query="(max-width: 750px)" let:matches> 
    <div class="home-container">
        <div class="home-logo">
            <img src={VimLogo} alt="Vim" />
            <h1>PROYECTOS UNICOS</h1>
        </div>
        <div class="home-footer">
            {#if matches}
                <img src={DownArrow} alt="Scroll down para ver proyectos." width="50px"/>
            {:else}
                <p>Scroll down para ver proyectos.</p>
                <span class="material-symbols-outlined">
                    arrow_downward
                    </span>
            {/if}
        </div>
        
    </div>
    </MediaQuery>
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

    .home-logo img {
        height: 90px;
    }

    .home-footer {
        color: white;
    }

    h1 {
        font-family: Termina-ExtraLight;
        font-size: 20px;
        margin: unset;
        margin-left: 1em;
        padding-bottom: 0.4em;
    }

    @media only screen and (max-width: 768px) {
        .home-container {
            top: 80px;
            /* s */
            height: 100%;
            padding: unset;
        }

        .home-logo{
            /* padding-top: 165px; */
            justify-content: center;
        }

        .home-logo img {
            height: 80px;
        }

        h1 {
            font-family: Termina-ExtraLight;
            font-size: 13px;
            margin: unset;
            margin-left: 1.5em;
            padding-bottom: 0.8em;
        }
    }
</style>