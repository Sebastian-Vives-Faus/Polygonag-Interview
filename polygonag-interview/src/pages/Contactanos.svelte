<main>
    <div class="container">
     <h1>Contáctanos</h1>

     <input type="text" placeholder="Nombre"/>
     <input type="text" placeholder="Correo"/>
     <textarea placeholder="Mensaje" class="mensaje-input"/>
     <button type="button">Enviar</button>
    </div>
 </main>
 <style>
     .container {
         display: flex;
         flex-direction: column;
         margin-top: 120px;
         padding: 0 4em;
         flex-flow: column;
         height: calc(100vh - 205px);
         align-items: center;
     }

     .container h1 {
        font-size: 17px;
        margin-bottom: 38px;
     }

     .container input{
        width: 100%;
        margin-bottom: 1.2em;
        box-shadow: 0px 3px 15px #0000000B;
        border-radius: 5px;
        border: none;
        height: 32px;
        padding: 0.1em 1em;
     }
     .container button{
        width: 100%;
        background-color: white;
        border: none;
        box-shadow: 0px 3px 15px #0000000B;
        border-radius: 5px;
        height: 32px;
        padding: 0.1em 1em;
        margin: unset;
        min-width: 290px;
        font-size: 14px;
     }

     .mensaje-input {
        min-height: 117px;
        width: 100%;
        margin-bottom: 1.2em;
        box-shadow: 0px 3px 15px #0000000B;
        border-radius: 5px;
        border: none;
        height: 32px;
        padding: 1em 1em;
     }
 </style>