import "./Perfil.css"

export default function Perfil() {
    return (
        <>
        <div className="pagina-perfil">
            <h1>Editar Perfil</h1>
            <div className="container-do-perfil">
                <div className="campo-de-foto">
                    <img src="" alt="Foto do perfil" />
                    <h2>Nome</h2>
                    <h2>Tutor</h2>
                </div>
                <div className="campo-de-texto">
                    <div>
                        <h2>Nome</h2>
                        <input />
                    </div>
                    <div>
                        <h2>Email</h2>
                        <input />
                    </div>
                    <div>
                        <h2>Trocar Senha</h2>
                        <input type="password" />
                    </div>
                    <div>
                        <h2>Confirmar Senha</h2>
                        <input type="password" />
                    </div>
                    <div className="caixa-dos-botoes">
                        <button>Confirmar</button>
                        <button>Cancelar</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}