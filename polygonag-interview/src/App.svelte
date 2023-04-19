<script lang="ts">
  import HomeMobile from './pages/mobile/Home.svelte'
  import HomeDesktop from './pages/desktop/Home.svelte';
  import Navbar from './components/Navbar.svelte';
  import ProyectsColumn from './components/ProyectsColumn.svelte';
  import { router } from './stores/router.js';
  import NavbarMenuMobile from './pages/mobile/NavbarMenu.svelte';
  import NosotrosMobile from './pages/mobile/Nosotros.svelte';
  import ContactanosMobile from './pages/mobile/Contactanos.svelte';
  import MediaQuery from './lib/MediaQuery.svelte';
  
  let y;
    
    function updateY(event){
      y = window.scrollY;
    }

  let routerApp;

  router.subscribe(value => {
    routerApp = value;
    });
</script>
<svelte:window on:scroll={updateY} bind:scrollY={y}/>
<main>
  <MediaQuery query="(max-width: 750px)" let:matches> 
    {#if matches}
    <!-- MOBILE -->
      {#if routerApp === 0}
        {#if y > 300 }
          <Navbar/>
        {/if}
        <div>
          <HomeMobile/>
          <ProyectsColumn/>
          <div class="footer">
            Ver mas proyectos <span class="material-symbols-outlined" on:click={() => {document.body.scrollIntoView();router.set(2);}}>
              arrow_forward
              </span>
          </div>
        </div>
      {:else if routerApp === 1}
        <NavbarMenuMobile />
      {:else if routerApp === 2}
        <Navbar/>  
        <ProyectsColumn/>
        <div class="footer">
          <span class="material-symbols-outlined" on:click={() => {document.body.scrollIntoView();router.set(0);}}>
            arrow_back
            </span> Regresar
        </div>
      {:else if routerApp === 3}
        <Navbar/>  
        <NosotrosMobile/>
        <div class="footer">
          <span class="material-symbols-outlined" on:click={() => {document.body.scrollIntoView();router.set(0);}}>
            arrow_back
            </span> Regresar
        </div>
      {:else if routerApp === 4}
        <Navbar/>  
        <ContactanosMobile/>
        <div class="footer">
          <span class="material-symbols-outlined" on:click={() => {document.body.scrollIntoView();router.set(0);}}>
            arrow_back
            </span> Regresar
        </div>
      {/if}

    {:else}
        <!-- DESKTOP -->
        {#if routerApp === 0}
        <Navbar/>  
        <HomeDesktop/>
        <ProyectsColumn/>

        {:else if routerApp === 1}
        <NavbarMenuMobile />
        {/if}
    {/if}
  </MediaQuery>
</main>

<style>
  .footer {
    height: 50px;
    display: flex;
    justify-content: center;
    font-size: 14px;
    font-family: 'Termina-Medium';
    align-items: center;
  }

  
</style>
