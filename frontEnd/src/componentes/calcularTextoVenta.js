import Llamanos from "./llamanos";

function CalcularTexto(props) {

    let text = "";
    let buttonPrice;
    let textPrecio;
    let precio;

    if (props.ano !== 0 && props.km !== 0 && props.matricula !== "") {
        text += "Tu vehículo es "
        buttonPrice = <Llamanos/>
        precio = 1000

        if(props.ano > 2020){
            precio *= 5
            text += "muy nuevo "
        }else if(props.ano < 2005){
            precio *= 1.5
            text += "muy antiguo "
        }else{
            precio *= 2.5
            text += "actual "
        }

        if(props.km > 150000){
            precio *= 1
            text += "y tiene muchos kilómetros "
        }else if(props.km < 50000){
            precio *= 3
            text += "y esta poco usado"
        }else{
            precio *= 1.5
            text += "y ha tenido un uso moderado"
        }

        textPrecio = "Tu vehículo esta valorado en: "
        precio = precio.toString() + "€"
    }   


    return (
        <>
        <h5 style={{ marginTop: "2%"}}>{text}</h5>
        <h5 style={{ marginTop: "5%"}}>{textPrecio}</h5>
        <h3>{precio}</h3>
        {buttonPrice}
        </>
    )
}

export default CalcularTexto;