import React from 'react';

class rightSide extends React.Component {
    render() {
        return (
            <div className="right">
                <div className="right-title">
                    Patrocinado
                    <div className="sponsored-ad">
                        <img src="imagens2/vagas.jpg" className="sponsored-img" alt="Vagas"/>
                            <div className="ad-text">
                                <p className="ad-description">Inscreva-se agora. Poucas vagas.</p>
                                <p className="ad-link">lp.medicapilar.pt</p>
                            </div>
                    </div>

                    <div className="sponsored-ad">
                        <img src="imagens2/alarmes.jpg" className="sponsored-img" alt="Alarmes"/>
                            <div className="ad-text">
                                <p className="ad-description">Alarme para casa desde 32.50€</p>
                                <p className="ad-link">alarmes.proseguir.pt</p>
                            </div>
                    </div>
                </div>
                <div className="right-title">
                    Grupo de chat
                    <div>
                        <button className="btn group-chat-btn">
                            <i className="bi bi-plus-circle group-icon"></i>
                            Criar grupo de chat
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default rightSide