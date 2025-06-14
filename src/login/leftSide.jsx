import React from 'react';

class LeftSide extends React.Component {
    render() {
        return (
            <div className="col-lg-6 text-center">
                <img
                    src="imagens/Facebook-Logo.svg"
                    alt="facebook login logo"
                    style={{ height: "100px", marginBottom: "-20px", marginRight: "115px" }}
                />
                <h1 style={{ fontSize: "36px", marginRight: "10px" }}>
                    Acessos recentes
                </h1>
                <p style={{ fontSize: "16px", color: "#606770", marginLeft: "-10px" }}>
                    Clica na tua foto ou adiciona uma conta.
                </p>

                <div className="d-flex justify-content-center gap-3 mt-4 ms-5">
                    <div className="card user-card text-center" style={{ width: "160px" }}>
                        <div className="position-relative">
                            <img
                                src="imagens/profile-pic-benfica.jpg"
                                alt="Benfica Login Pic"
                                className="card-img-top rounded-top"
                                style={{ height: "180px", objectFit: "cover" }}
                            />
                            <button
                                className="position-absolute top-0 start-0 m-2 btn btn-dark rounded-circle d-flex align-items-center justify-content-center p-0"
                                style={{ width: "24px", height: "24px" }}
                            >
                                <i
                                    className="bi bi-x"
                                    style={{ color: "white", fontSize: "16px" }}
                                ></i>
                            </button>
                        </div>
                        <div className="card-body p-2">
                            Sport Lisboa e Benfica
                        </div>
                    </div>

                    <div
                        className="card text-center"
                        style={{
                            width: "160px",
                            borderRadius: "10px",
                            overflow: "hidden"
                        }}
                    >
                        <div
                            className="d-flex align-items-center justify-content-center"
                            style={{ backgroundColor: "white", height: "180px" }}
                        >
                            <div
                                className="bg-primary rounded-circle d-flex align-items-center justify-content-center"
                                style={{ width: "45px", height: "45px" }}
                            >
                                <span
                                    className="text-white"
                                    style={{ fontSize: "26px" }}
                                >
                                    +
                                </span>
                            </div>
                        </div>
                        <div
                            style={{ height: "1px", backgroundColor: "#ddd", margin: "0" }}
                        ></div>
                        <div className="card-body p-2">
                            <div style={{ marginTop: "10px" }}>Adicionar Conta</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LeftSide;
