import './Cadastro.css';

function Cadastro() {
    return (
        <div className="cadastro-page-background">
            <div className="cadastro-container">
                <h1 className="cadastro-title">Cadastro</h1>
                
                <form className="cadastro-form">
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="seuemail@exemplo.com"
                            required
                        />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="password">Senha</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="********"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirmar Senha</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            placeholder="********"
                            required
                        />
                    </div>

                    <div className="user-type-group">
                        <label className="user-type-label">Tipo de cadastro</label>
                        <div className="radio-options">
                            <div className="radio-option">
                                <input type="radio" id="tutor" name="userType" value="tutor" defaultChecked />
                                <label htmlFor="tutor">Tutor</label>
                            </div>
                            <div className="radio-option">
                                <input type="radio" id="prestador" name="userType" value="prestador" />
                                <label htmlFor="prestador">Prestador</label>
                            </div>
                        </div>
                    </div>
                    
                    <button type="submit" className="cadastro-button">
                        Cadastrar
                    </button>
                    
                    <p className="login-link">
                        Já possui cadastro? <a href="/login">Login</a>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Cadastro;