<script>
    import { router } from "../stores/router";
</script>

<main>
    <div class="close-container">
        <span class="material-symbols-outlined" on:click={() => router.set(0)}>
            close
            </span>
    </div>
    <div class="menu-container">
        <p on:click={() => router.set(3)}>Nosotros</p>
        <p on:click={() => router.set(2)}>Proyectos</p>
        <p on:click={() => router.set(4)}>Contacto</p>
    </div>
</main>

<style>
    .close-container{
        display: flex;
        justify-content: flex-end;
        padding: 1em;
    }

    .close-container span {
        font-size: 34px;
    }

    .menu-container {
        padding: 1em;
        font-size: 24px;
    }
</style>