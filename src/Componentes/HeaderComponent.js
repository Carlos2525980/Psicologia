





const HeaderComponent = () => {

    const handleClick = () => {


        alert("Enviado");




    }

    return (

        <div class="header">
            <img src="./fundo.jpg" class="fundo" ></img>

            <div class="titulo">

                <h1>Kelly Roberta Reis Silva Souza</h1>
                <h1>Psicóloga</h1>
                <button class="whats" onclick={handleClick}>Agendar Consulta<img src="./whatsapp.png" class="whatszapp"></img></button>

            </div>

        </div>

    )

}

export default HeaderComponent;