<script>
    import VimLogo from "/vim-logo.svg"
    import { router } from "../stores/router";
    import MediaQuery from "../lib/MediaQuery.svelte";
</script>

<main>
    <MediaQuery query="(max-width: 750px)" let:matches> 
    <div class="navbar-contianer">
        <div>
            <img src={VimLogo} alt="Vim" />
        </div>
        {#if matches}
            <div>
                <span class="material-symbols-outlined" on:click={() => {router.set(1)}}>
                    menu
                    </span>
            </div>
        {:else}
            <div class="col2">
                {#if $router == 2}
                    Proyectos
                {:else if $router == 3}
                    Nosotros
                {/if}
                <span class="material-symbols-outlined" on:click={() => {router.set(1)}}>
                    menu
                    </span>
            </div>
        {/if}
    </div>
    </MediaQuery>
</main>

<style>
    .navbar-contianer{
        height: 78px;
        border-bottom: solid 1px grey;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: sticky;
        position: fixed;
        z-index: 2;
        top: 0;
        background-color: white;
        width: 100%;
    }

    .navbar-contianer img {
        width: 63px;
        margin-left: 17px;
    }

    .navbar-contianer span {
        font-size: 34px;
        margin-right: 17px;
    }

    @media only screen and (min-width: 750px) {
        .navbar-contianer img{
            padding-left: 166px;
            margin: unset;
        }
        .navbar-contianer span{
            padding-right: 166px;
            margin-right: unset;
            margin-left: 0.5em;
        }

        .col2{
            display: flex;
            font-family: Termina-Light;
            align-items: center;
        }
    }
</style>