import React from 'react';
import './Login.css';

function Login() {
    return (
        <div className="login-page-background">
            <div className="login-container">
                <h1 className="login-title">Login</h1>
                
                <form className="login-form">
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
                        <a href="/esqueci-senha" className="forgot-password-link">
                            Esqueceu sua senha?
                        </a>
                    </div>
                    
                    <button type="submit" className="login-button">
                        Entrar
                    </button>
                    
                    <p className="signup-link">
                        Não tem cadastro? <a href="/cadastro">Cadastre-se</a>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Login;