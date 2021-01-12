import React, { Component } from 'react';
import './ModifyCurso.css';
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { connect } from 'react-redux';

class ModifyCurso extends Component {

    constructor(props) {
        super(props);
        this.state = {
            paraleloCargado: false,
            paralelo: {
                nombreParalelo: "",
                descripcion: ""
            }
        };
    }

    onChange = (e) => {
        this.setState({
            paralelo: { ...this.state.paralelo, [e.target.id]: e.target.value }
        });
    }

    render() {
        const { paralelo } = this.props;
        return (
            <div className="container-fluid ">
                <div className="container TituloCurso">
                    <div className="row nombreParalelo" style={{ textAlign: "center" }}>
                        <h4>{paralelo && paralelo.nombreParalelo}</h4>
                        <hr />
                    </div>
                </div>

                <section className="container ModificarCurso">
                    <div className="row">
                        <div className="col s12 m4">
                            <p>Nombre Paralelo: </p>
                        </div>
                        <div className="col s12 m6">
                            <input type="text" onChange={this.onChange} id="nombreParalelo" defaultValue={paralelo && paralelo.nombreParalelo} />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col s12 m4">
                            <p>Descripción: </p>
                        </div>
                        <div className="col s12 m8">
                            <textarea onChange={this.onChange} id="descripcion" defaultValue={paralelo && paralelo.descripcion} />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col s12 m4">
                            <p>Nombre Docente: </p>
                        </div>
                        <div className="col s12 m6">
                            <input type="text" onChange={this.onChange} id="docente" defaultValue={paralelo && paralelo.docente} />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col s12 m4 ">
                            <p>Costo Total: </p>
                        </div>
                        <div className="col s1">
                            <p>C$</p>
                        </div>
                        <div className="col s12 m2 valorCurso">
                            <input type="number" onChange={this.onChange} id="costoTotal" defaultValue={paralelo && paralelo.costoTotal} />
                        </div>
                        <div className="col s1 puntoDecimalCostoTotal">
                            <p>.00</p>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}


const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const paralelosData = state.firestore.data.paralelosConvocados;
    let paralelo;
    (paralelosData) ?
        paralelo = paralelosData[id]
        :
        paralelo = null;
    console.log(paralelo);
    return {
        paralelo
    }
}

export default compose(connect(mapStateToProps, null),
    firestoreConnect([
        {
            collection: 'paralelosConvocados'
        }
    ])
)(ModifyCurso)
