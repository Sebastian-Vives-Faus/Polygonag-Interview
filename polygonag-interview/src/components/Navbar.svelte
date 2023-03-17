<script>
    import VimLogo from "/vim-logo.svg"
    import { router } from "../stores/router";
</script>

<main>
    <div class="navbar-contianer">
        <div>
            <img src={VimLogo} alt="Vim" />
        </div>
        <div>
            <span class="material-symbols-outlined" on:click={() => {router.set(1)}}>
                menu
                </span>
        </div>
    </div>
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
</style>