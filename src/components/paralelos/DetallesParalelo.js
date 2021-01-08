import React from 'react'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { InscribirParalelo } from '../../store/actions/AccionesParalelo';
import { Redirect } from 'react-router-dom';
import { EliminarInscripcion } from '../../store/actions/AccionesParalelo';
import { Button } from 'react-materialize';
import ModalInscripciones from '../layout/ModalInscripciones'
import moment from 'moment';
import 'moment/locale/es';

class DetallesParalelo extends React.Component {

    onInscribir = (idParalelo) => {
        this.props.InscribirParalelo(idParalelo);
    }

    onEliminar = (idParalelo) => {
        this.props.EliminarInscripcion(idParalelo);
    }


    render() {
        const { paralelo, auth, usuarios } = this.props;
        const id = this.props.match.params.id;
        const uid = auth.uid;
        const miUsuario = usuarios ? usuarios[uid] : null;
        const paralelosInscritos = miUsuario ? miUsuario.paralelosInscritos : null;
        let yaInscrito = false;
        paralelosInscritos &&
            paralelosInscritos.forEach(p => {
                if (p === id) {
                    yaInscrito = true;
                }
            });

        if (!auth.uid) return <Redirect to="/" />
        const ButtonParalelo = yaInscrito ?
            <Button node="button" className="btn red ligthen-1 z-depth-0 boton-Inscribir">
                Eliminar Verano
            </Button> :
            <Button disabled node="button" className="btn green ligthen-1 z-depth-0 boton-Inscribir">
                Inscribir Verano
            </Button>

        if (paralelo) {
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
                            <img src={paralelo.urlHorario} alt="Horario del Verano (Pendiente de Acuerdo)" width="100%" />
                        </div>

                        <div className="card-action text-grey ligthen-4 grey-text">
                            <div>Publicado por UNEN ANECYS</div>
                            <div>{moment(datePublicacion).format('LL')}</div>
                        </div>

                        <ModalInscripciones id={id} paralelo={paralelo} yaInscrito={yaInscrito} trigger={ButtonParalelo} onAceptar={yaInscrito ? this.onEliminar : this.onInscribir} />
                    </div>
                </div>
            )
        } else {
            return null
        }
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        InscribirParalelo: (idParalelo) => dispatch(InscribirParalelo(idParalelo)),
        EliminarInscripcion: (idParalelo) => dispatch(EliminarInscripcion(idParalelo))
    }
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const paralelos = state.firestore.data.paralelosConvocados;
    const paralelo = paralelos ? paralelos[id] : null;
    return {
        paralelo,
        auth: state.firebase.auth,
        usuarios: state.firestore.data.usuarios
    }
}

export default compose(connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        {
            collection: 'paralelosConvocados'
        }, {
            collection: 'usuarios'
        }
    ]))
    (DetallesParalelo)
