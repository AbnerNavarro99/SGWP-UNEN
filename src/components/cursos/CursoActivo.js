import React, { Component } from 'react'
import './CursoActivo.css';
import { Link } from 'react-router-dom';


export default class CursoActivo extends Component {
    render() {
        const { curso } = this.props;

        return (
            <Link to={"modf/"+curso.id} className="white-text">
                <div className="container CursoActivo">
                    <div className="row valign-wrapper">
                        <div className="col s10 m11">
                            <h5>{curso.nombreParalelo}</h5>
                        </div>
                        <div className="col s2 m1">
                            <i class="material-icons" id="iconModificar">border_color</i>
                        </div>
                    </div>
                </div>
            </Link>
        )
    }
}

