<main>
    <div class="home-desc">
        <div class="col1">
        </div>
        <div class="col2">
            <h2>PROYECTOS UNICOS</h2>
            <p>Vim es una empresa dedicada al suministro e instalacion de vidrio, aluminio y PVC para el sector residencial en Mexico.</p>
        </div>
    </div>
</main>

<style>
    .home-desc{
            height: 90vh;
            width: 100%;
            display: flex;
            background-color: white;
        }

        .col1,
        .col2 {
        flex: 1 0 50%;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        justify-content: center;
        }

        .col1 {
           background: url('/2128.dsc0588.jpg@2x.png');
           background-position: center;
            background-size: cover;
        }

        .col2{
            display: flex;
            padding: 0 166px 0 1.5em;
            font-family: Termina-ExtraLight;
            font-size: 18px;
            border-bottom: 1px solid grey;
            text-align: left;
        }

        h2 {
            font-family: Termina-ExtraLight;
            font-size: 30px;
            margin-bottom: 0.5em;
        }

        p {
            margin: unset;
            line-height: 2;
        }
</style>