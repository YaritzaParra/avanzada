import './Comentarios.css'

export function Comentarios(){
    return(
        <>
        <div className="banner3">
            <div className="comen col">
            <h2><b>DÉJANOS UN COMENTARIO</b></h2>

           <textarea rows="5" cols="50"></textarea>
<br />
            <input className='enviar' type="submit" value="Enviar comentario"/>
            </div>
        </div>
        </>
    )
}