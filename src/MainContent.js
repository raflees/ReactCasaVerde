import React from "react";

function mailICO() {
    return (
        <svg width="24" height="16" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.3">
        <path d="M23 2.24475L12.2157 6.60091L1.4314 2.24475" stroke="#202020" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M3.58826 1H20.8432C22.0294 1 23 1.56008 23 2.24461V9.7123C23 10.3968 22.0294 10.9569 20.8432 10.9569H3.58826C2.40198 10.9569 1.4314 10.3968 1.4314 9.7123V2.24461C1.4314 1.56008 2.40198 1 3.58826 1Z" stroke="#202020" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        </svg>
    )
}

function MainContent() {
    return (
        <div className="MainContent">
            <div className="NewsletterDiv">
                <p className="P1">Sua casa com as</p>
                <p className="P2">melhores plantas</p>
                <p className="P3">Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.</p>
                <div className="AssinarNewsletter">
                    <div className="NewsletterLeft">
                        { mailICO() }
                        <input placeholder="Insira seu email"></input>
                    </div>
                    <div className="NewsletterRight">
                        <p>Assinar</p>
                    </div>
                </div>
            </div>
            <img className="MainTreeImg" src={require("./images/tree_image_main.png")} alt="Tree" />
        </div>
    )
}

export default MainContent;