<script>
    import Carousel from 'svelte-carousel'
    import State1 from '/Mask Group 34@2x.png'
    import State2 from '/Core-70-Industrial-Sin-Fondo@2x.png'
    import State3 from '/2_55@2x.png'
    import State1Img1 from '/CoreVisionPlusSliding_2@2x.png'    
    import State1Img2 from '/CoreVisionPlusSliding_3@2x.png'    
    import State1Img3 from '/CoreVisionPlusSliding_4@2x.png'
    import State2Img1 from '/2399.cor.70.inddustrial@2x.png'    
    import State2Img2 from '/2400.cor.70industrial@2x.png'    
    import State2Img3 from '/2401.cor70industrial2@2x.png'
    import State3Img1 from '/98.20111404@2x.png'     
    import State3Img2 from '/589.alien3@2x.png'     
    import State3Img3 from '/747.esporles5@2x.png'

    let stateIndex = 0;

    let stateExtras = [
        {
            img1: State1Img1,      
            img2: State1Img2,      
            img3: State1Img3,
            title: 'Cor Vision Plus',
            acristalamiento: '54',
            dimensiones: '4.00 x 4.00',
            peso: '700',
            
        },
        {
            img1: State2Img1,      
            img2: State2Img2,      
            img3: State2Img3,
            title: 'Core 70 Industrial',
            acristalamiento: '55',
            dimensiones: '1.50 x 2.60',
            peso: '160',
            
        },
        {
             img1: State3Img1,       
             img2: State3Img2,       
             img3: State3Img3,
             title: 'Cor Vision',
             acristalamiento: '30',
             dimensiones: '2.50 x 3.00',
             peso: '320',
                    
        },

    ]
</script>

<main>
<div class="main-container">
    <div class="title">
        <h1>SERIES UNICAS</h1>
        <p>Entendiendo el mercado y el tipo de proyectos que VIM busca atacar, proponemos líneas base de Cortizo y Cuprum, sin embargo tenemos la capacidad de trabajar con cualquier extrusor nacional e internacional.</p>
    </div>
    <div class="carousel">
        <Carousel
        dots={false}
        on:pageChange={
            event => stateIndex = event.detail
          }>
            <div class="carousel-img">
                <img class="carousel-img" src={State1} alt="Test">
            </div>
            <div class="carousel-img">
                <img class="carousel-img" src={State2} alt="Test">
            </div>
            <div class="carousel-img">
                <img class="carousel-img" src={State3} alt="Test">
            </div>
          </Carousel>
    </div>
    <div class="footer">
        <div class="col-l">
            <div class="col1" style="background-image: url({stateExtras[stateIndex].img1});"></div>
            <div class="col1" style="background-image: url({stateExtras[stateIndex].img2});"></div>
            <div class="col1" style="background-image: url({stateExtras[stateIndex].img3});"></div>
        </div>
        <div class="col-r">
            <h2>{stateExtras[stateIndex].title}</h2>
            <p>Acristalamiento maximo {stateExtras[stateIndex].acristalamiento} mm.</p>
            <p>Dimensiones maximas {stateExtras[stateIndex].dimensiones} m.</p>
            <p>Peso maximo {stateExtras[stateIndex].peso} kg</p>
            <p>Ensambles a 90o</p>
            <p>Apertura manual o motorizada</p>
        </div>
    </div>
</div>
</main>

<style>

    .col1 {
        margin-right: 0.5em;
        width: 200px;
        height: 150px;
        background-size: cover;
        background-position: center;
        
    }
    .main-container {
        z-index: 1;
        position: relative;
        height: 100vh;
        background-color: #E6E6E6;
        padding: 121px 167px;
        font-family: Termina-Light;
        
    }
    h1 {
        margin-top: unset;
    }

    .carousel {
        
    }

    .carousel-img {
        width: 485px;
        display: flex;
        justify-content: center;
    }

    .col-r{
        width: 335px;
        margin-left: 1em;
    }

    .col-r p {
        margin: 0.5em 0;
        font-size: 14px;
    }
    .col-r h2 {
        margin: unset;
        margin-bottom: 0.5em;
        font-family: Termina-ExtraLight;
        font-size: 20px;
    }
    .col-l{
        display: flex;
    }

    .footer{
        display: flex;
        justify-content: center;
        margin-top: 2em;
    }

    h1 {
        font-size: 30px;
        font-family: Termina-ExtraLight;
    }

    p {
        font-size: 18px;
        font-family: Termina-ExtraLight;
    }
</style>