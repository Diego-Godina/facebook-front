import React from 'react';

class RightSide extends React.Component {
    render() {
        return (
            <div className="friends-right">
                <span className="friends-title">Pessoas que talvez conheças</span>

                <div className="friends-conteudo">
                    <div className="card">
                        <img className="card-img-top" src="imagens2/porto.jpg" alt="Card image"/>

                        <div className="card-body">
                            <span className="card-title">Porto</span>
                            <button className="btn btn-card-add">
                                Adicionar amigo/a
                            </button>
                            <button className="btn btn-card-remove">
                                Remover
                            </button>

                        </div>
                    </div>

                    <div className="card">
                        <img className="card-img-top" src="imagens2/sporting.jpg" alt="Card image"/>

                        <div className="card-body">
                            <span className="card-title">Sporting</span>
                            <button className="btn btn-card-add">
                                Adicionar amigo/a
                            </button>
                            <button className="btn btn-card-remove">
                                Remover
                            </button>

                        </div>
                    </div>

                    <div className="card">
                        <img className="card-img-top" src="imagens2/braga.jpg" alt="Card image"/>

                        <div className="card-body">
                            <span className="card-title">Braga</span>
                            <button className="btn btn-card-add">
                                Adicionar amigo/a
                            </button>
                            <button className="btn btn-card-remove">
                                Remover
                            </button>

                        </div>
                    </div>

                    <div className="card">
                        <img className="card-img-top" src="imagens2/vitoria.png" alt="Card image"/>

                        <div className="card-body">
                            <span className="card-title">Vitoria de Guimarões</span>
                            <button className="btn btn-card-add">
                                Adicionar amigo/a
                            </button>
                            <button className="btn btn-card-remove">
                                Remover
                            </button>

                        </div>
                    </div>

                    <div className="card">
                        <img className="card-img-top" src="imagens2/elvas.jpg" alt="Card image"/>

                        <div className="card-body">
                            <span className="card-title">Elvas</span>
                            <button className="btn btn-card-add">
                                Adicionar amigo/a
                            </button>
                            <button className="btn btn-card-remove">
                                Remover
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default RightSide