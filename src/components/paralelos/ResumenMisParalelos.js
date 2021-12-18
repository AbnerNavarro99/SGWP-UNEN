import React from 'react';
import { connect } from 'react-redux';
import { EliminarInscripcion } from '../../store/actions/AccionesParalelo';
import ModalInscripciones from '../layout/ModalInscripciones'
import { Button } from 'react-materialize';
import moment from 'moment';
import 'moment/locale/es';

class ResumenParalelo extends React.Component {

    onEliminar = (idParalelo) => {
        this.props.EliminarInscripcion(idParalelo);
    }

    render() {
        const { paralelo, paralelosInscritos } = this.props;
        let yaInscrito = false;
        paralelosInscritos &&
            paralelosInscritos.forEach(p => {
                if (p === paralelo.id) {
                    yaInscrito = true;
                }
            });

        const ButtonParalelo = yaInscrito ?
            <Button node="button" className="btn red ligthen-1 z-depth-0 boton-Inscribir">
                Eliminar Verano
            </Button> :
            <Button node="button" className="btn green ligthen-1 z-depth-0 boton-Inscribir">
                Inscribir Verano
            </Button>

        const datePublicacion = paralelo.publicacion.toDate();
        moment.locale('es');
        return (
            <div className="container section detalles-paralelo">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <div className="card-title">{paralelo.nombreParalelo}</div>
                        <h5>Descripción:</h5>
                        <p>{paralelo.descripcion}</p>
                        {/* {paralelo.cantidadInscritos >= 10 &&
                                < p
                                    style={{ color: 'green' }}
                                >
                                    Costo: C$ {paralelo.costoxEstudiante}.00
                            </p>
                            } */}
                        <p
                            style={{ color: 'green' }}
                        >Inscritos actualmente: {paralelo.cantidadInscritos} estudiante(s).</p>
                        <p>Docente impartiente: {paralelo.docente}.</p>
                        <h4 style={{ textAlign: 'center' }}>Horario del Verano</h4>
                        <img src={paralelo.urlHorario} alt="Horario del Verano (Pendiente de acuerdo)" width="100%" />
                    </div>

                    <div className="card-action text-grey ligthen-4 grey-text">
                        <div>Publicado por UNEN ANECYS</div>
                        <div>{moment(datePublicacion).format('LL')}</div>
                    </div>
                    <ModalInscripciones paralelo={paralelo} yaInscrito={true}  trigger={ButtonParalelo} onAceptar={this.onEliminar} />
                </div>
            </div >

        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        EliminarInscripcion: (idParalelo) => dispatch(EliminarInscripcion(idParalelo))
    }
}


export default connect(null, mapDispatchToProps)
    (ResumenParalelo)