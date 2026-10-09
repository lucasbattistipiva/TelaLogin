const Page = () => {
    return (
        <main className="min-h-screen bg-gray-900 text-white flex items-center text-justify flex-col">
            <h1 className="font-bold mt-4 text-2xl">Sistema de Login</h1>
            <div className="flex flex-col items-left mt-4 w-60">

                <label htmlFor="emailField" className="text-sm">Endereço de e-mail</label>
                <input className="mt-1 mb-2 border border-gray-600 rounded-md bg-gray-800 outline-yellow-500"
                 type="email" id="emailField" />

                <label htmlFor="passwordField" className="text-sm">Senha</label>
                <input className="mt-1 border rounded-md bg-gray-800 outline-yellow-500" type="password"
                 id="passwordField" />

                <button className="mt-3 px-0.5 py-1 text-xs font-semibold rounded-sm bg-yellow-500 border-none
                 text-white cursor-pointer">Entrar</button>

                <div className=" text-xs px-2 py-4 text-gray-500">
                    Não é membro? <a href="" className="text-yellow-500 font-bold">Faça seu cadastro agora</a>
                </div>
            </div>

        </main>

    )
};

export default Page