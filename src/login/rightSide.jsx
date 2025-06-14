import React from 'react'

class RightSide extends React.Component {
    render() {
        return (
            <div className="col-lg-6">
                <div className="d-flex justify-content-center" style={{height: "300px", maxWidth: "100%", margin: "-40px"}}>
                    <div className="card shadow-sm p-4" style={{width: "400px", height: "380px", borderStyle: "8px"}}>
                        <form>
                            <div className="mb-3">
                                <input type="text" className="form-control" placeholder="E-mail ou número de telemóvel"
                                       style={{height: "50px"}}/>
                            </div>
                            <div className="mb-3">
                                <input type="password" className="form-control" placeholder="Palavra-passe"
                                       style={{height: "50px"}}/>
                            </div>
                            <div className="d-grid mb-2">
                                <button type="submit" className="btn btn-primary fw-bold"
                                        style={{height: "50px", fontSize: "18px"}}>Iniciar sessão
                                </button>
                            </div>
                            <div className="text-center mb-3">
                                <a href="#" className="text-decoration-none" style={{color: "#1877f2", fontSize: "14px"}}>Não
                                    sabes a tua palavra-passe?</a>
                            </div>
                            <hr/>
                            <div className="d-grid">
                                <button className="newAcc">Criar nova conta</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default RightSide;