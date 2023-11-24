
import './Formulario.css'

export function Formulario() {
  return (
    <>
      <div className="banner2">
      <form>
      
        <div className="row letra">

          <h2>RESERVA AQUÍ</h2>


<div className="col-12 col-md-6">
  <div className="mb-3">
    <label class="form-label">
    <i className="fa-solid fa-user"></i> Nombre
    </label>
    <input type="text" className="form-control"/>
  </div>
</div>

<div className="col-12 col-md-6">
<div className="mb-3">
    <label className="form-label">
    <i className="fa-solid fa-user"></i>  Apellido 
    </label>
    <input type="text" className="form-control"/>
  </div>
</div>

<div className="col-12 col-md-6">
<div className="mb-3">
    <label className="form-label">
    <i className="fa-solid fa-phone"></i>  Telefono 
    </label>
    <input type="number" className="form-control"/>
  </div>
</div>

<div className="col-12 col-md-6">
<div className="mb-3">
    <label className="form-label">
    <i className="fa-solid fa-users"></i>  Cantidad de Personas 
    </label>
    <input type="number" className="form-control"/>
  </div>
</div>

<div className="col-12 col-md-6">
<div className="mb-3">
    <label class="form-label">
    <i className="fa-solid fa-calendar-days"></i> Fecha Inicial 
    </label>
    <input type="date" className="form-control"/>
  </div>
</div>

<div className="col-12 col-md-6">
<div className="mb-3">
    <label className="form-label">
    <i className="fa-solid fa-calendar-days"></i>  Fecha Final 
    </label>
    <input type="date" className="form-control"/>
  </div>
</div>

<br />

<button type="submit" className="button btn btn-dark">Reservar</button>

</div>

        <div className="row"></div>
      </form>
      </div>
    </>
  );
}
