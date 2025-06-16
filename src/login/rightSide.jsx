import React from 'react';

class RightSide extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            error: ''
        };
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error('Credenciais inválidas');
                }
                return res.json();
            })
            .then(data => {
                localStorage.setItem('token', data.accessToken);
                window.location.href = '/home.html';
            })
            .catch(err => {
                this.setState({ error: err.message });
            });
    }

    render() {
        return (
            <div className="col-lg-6">
                <div className="d-flex justify-content-center" style={{height: "300px", maxWidth: "100%", margin: "-40px"}}>
                    <div className="card shadow-sm p-4" style={{width: "400px", height: "380px", borderStyle: "8px"}}>
                        <form onSubmit={this.handleSubmit}>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    name="username"
                                    className="form-control"
                                    placeholder="E-mail ou número de telemóvel"
                                    value={this.state.username}
                                    onChange={this.handleChange}
                                    style={{height: "50px"}}
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="password"
                                    name="password"
                                    className="form-control"
                                    placeholder="Palavra-passe"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                    style={{height: "50px"}}
                                />
                            </div>
                            <div className="d-grid mb-2">
                                <button type="submit" className="btn btn-primary fw-bold"
                                        style={{height: "50px", fontSize: "18px"}}>
                                    Iniciar sessão
                                </button>
                            </div>
                            {this.state.error && (
                                <div className="text-danger text-center mb-2">
                                    {this.state.error}
                                </div>
                            )}
                            <div className="text-center mb-3">
                                <a href="#" className="text-decoration-none" style={{color: "#1877f2", fontSize: "14px"}}>
                                    Não sabes a tua palavra-passe?
                                </a>
                            </div>
                            <hr/>
                            <div className="d-grid">
                                <button type="button" className="newAcc">Criar nova conta</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default RightSide;
