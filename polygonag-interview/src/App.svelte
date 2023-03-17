<script lang="ts">
  import Home from './pages/Home.svelte'
  import Navbar from './components/Navbar.svelte';
  import ProyectsColumn from './components/ProyectsColumn.svelte';
  import { router } from './stores/router.js';
  import NavbarMenu from './pages/NavbarMenu.svelte';
  import Nosotros from './pages/Nosotros.svelte';
  import Contactanos from './pages/Contactanos.svelte';
  
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

  {#if routerApp === 0}
    {#if y > 300 }
      <Navbar/>
    {/if}
    <div>
      <Home/>
      <ProyectsColumn/>
      <div class="footer">
        Ver más proyectos <span class="material-symbols-outlined" on:click={() => {document.body.scrollIntoView();router.set(2);}}>
          arrow_forward
          </span>
      </div>
    </div>
  {:else if routerApp === 1}
    <NavbarMenu />
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
    <Nosotros/>
    <div class="footer">
      <span class="material-symbols-outlined" on:click={() => {document.body.scrollIntoView();router.set(0);}}>
        arrow_back
        </span> Regresar
    </div>
  {:else if routerApp === 4}
    <Navbar/>  
    <Contactanos/>
    <div class="footer">
      <span class="material-symbols-outlined" on:click={() => {document.body.scrollIntoView();router.set(0);}}>
        arrow_back
        </span> Regresar
    </div>
  {/if}
  
  
</main>

<style>
  .footer {
    height: 50px;
    display: flex;
    justify-content: center;
    font-size: 14px;
    
  }
</style>
