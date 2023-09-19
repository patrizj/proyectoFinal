import store from '../imagenes/Store.jpg';
import Llamanos from './llamanos';

function Contacto() {
    return (

        <>
            <div className='App'>
            <h1 className="titulos">Contacto</h1>
                <div id="slide1">
                    <div>
                        <h4>Dirección:</h4>
                        <p> C/ Barcelona 180, local2
                            <br />
                            08457 Barcelona
                            <br />
                            España
                            <br />
                            <a href="mailto:info@shopmuytop.es">info@compraventa.es</a>
                        </p>
                        <p>
                            <Llamanos/></p>
                    </div>

                    <img style={{marginLeft: '5%',width: '20%',height: '20%'}} src={store} alt="Tienda" />
            
                </div>

                <div id="ubicacion">
                    <h4>Ubicación</h4>

                    <div id="mapa">

                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47873.50614443216!2d2.1594111999999996!3d41.415475199999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a31e344cbad9%3A0x591a74d97831dcd8!2sL&#39;Auditori!5e0!3m2!1ses!2ses!4v1685305566305!5m2!1ses!2ses" 
                        width="600" height="450" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>

                <div id="contact">
                    <h4>Pregúntanos</h4>
                    <br />
                    <div className="formulario">
                        <form action="./thankyou.html">
                            <div>
                                <label>Asunto:</label>
                                <br />
                                <input placeholder="Tu asunto" type="text" />
                            </div>

                            <div style={{marginTop: '10px',marginBottom: '10px'}}>
                                <label>Mensaje:</label>
                                <br />
                                <textarea placeholder="Tu mensaje" name="textarea" rows="10" cols="90"></textarea>
                            </div>

                            <input style={{backgroundColor:'gray', color: 'white', padding: '5px'}} type="submit" value="Enviar" />

                        </form>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Contacto;