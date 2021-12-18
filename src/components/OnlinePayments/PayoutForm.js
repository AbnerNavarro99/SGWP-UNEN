import React, { Component } from 'react';
import estilos from './css/estilos.css';
import chipTarjeta from './img/chip-tarjeta.png';
import logoVisa from "./img/logos/visa.png";
import moment from 'moment';

class PayoutForm extends React.Component {
    // useScript("");
    // useScript(Script);

    componentDidMount = () => {
        const script = document.createElement("script");
        script.async = true;
        script.src = 'https://firebasestorage.googleapis.com/v0/b/sistema-web-paralelos-unen.appspot.com/o/main.js?alt=media&token=6f6485bf-e93e-4191-9afa-e04eb9683c7d';
        this.div.appendChild(script);
        const script2 = document.createElement("script");
        script2.async = true;
        script2.src = "https://firebasestorage.googleapis.com/v0/b/sistema-web-paralelos-unen.appspot.com/o/moment.js?alt=media&token=965882a1-4b94-44e9-aa31-e424e693020a";
        this.div.appendChild(script2);
    }

    render() {

        return (
            <div className="contenedor" style={{ estilos }} ref={el => (this.div = el)}>
                {/* <!-- Tarjeta --> */}
                <section class="tarjeta" id="tarjeta">
                    <div class="delantera">
                        <div class="logo-marca" id="logo-marca">
                            <img src={logoVisa} alt=""/>
                        </div>
                        <img src={chipTarjeta} class="chip" alt=""/>
                        <div class ="datos">
                        <div class ="grupo" id="numero">
                        <p class ="label">Número Tarjeta</p>
                        <p class ="numero">#### #### #### ####</p>
                        </div>
                        <div class ="flexbox">
                        <div class ="grupo" id="nombre">
                        <p class ="label">Nombre Tarjeta</p>
                        <p class ="nombre">Jhon Doe</p>
                        </div>

                        <div class ="grupo" id="expiracion">
                        <p class ="label">Expiracion</p>
                        <p class ="expiracion"><span class ="mes">MM</span> / <span class ="year">AA</span></p>
                        </div>
                        </div>
                        </div>
                    </div>

                    <div class="trasera">
                        <div class="barra-magnetica"></div>
                        <div class="datos">
                            <div class="grupo" id="firma">
                                <p class="label">Firma</p>
                                <div class="firma"><p></p></div>
                            </div>
                            <div class="grupo" id="ccv">
                                <p class="label">CCV</p>
                                <p class="ccv"></p>
                            </div>
                        </div>
                        <p class="leyenda">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus exercitationem, voluptates illo.</p>
                        <a href="#" class="link-banco">www.tubanco.com</a>
                    </div>
                </section>

                {/* <!-- Contenedor Boton Abrir Formulario --> */}
                <div class="contenedor-btn">
                    <button class="btn-abrir-formulario" id="btn-abrir-formulario">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>

                {/* <!-- Formulario --> */}
                <form action="" id="formulario-tarjeta" class="formulario-tarjeta">
                    <div class="grupo">
                        <label for="inputNumero">Número Tarjeta</label>
                        <input type="text" id="inputNumero" maxlength="19" autocomplete="off" />
                    </div>
                    <div class="grupo">
                        <label for="inputNombre">Nombre</label>
                        <input type="text" id="inputNombre" maxlength="19" autocomplete="off" />
                    </div>
                    <div class="flexbox">
                        <div class="grupo expira">
                            <label for="selectMes">Expiracion</label>
                            <div class="flexbox">
                                <div class="grupo-select">
                                    <select name="mes" id="selectMes">
                                        <option  selected>Mes</option>
                                    </select>
                                    <i class="fas fa-angle-down"></i>
                                </div>
                                <div class="grupo-select">
                                    <select name="year" id="selectYear">
                                        <option  selected>Año</option>
                                    </select>
                                    <i class="fas fa-angle-down"></i>
                                </div>
                            </div>
                        </div>

                        <div class="grupo ccv">
                            <label for="inputCCV">CCV</label>
                            <input type="text" id="inputCCV" maxlength="3" />
                        </div>
                    </div>
                    <button type="submit" class="btn-enviar">Enviar</button>
                </form>
            </div>
        )
    }
}

export default PayoutForm;
