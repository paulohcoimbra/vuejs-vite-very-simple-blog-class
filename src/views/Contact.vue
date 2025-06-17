<template>
    <div class="max-w-2xl mx-auto py-12 px-4">
        <h1 class="text-3xl font-bold mb-6 text-center">Contato</h1>
        <form class="bg-gradient-to-br from-[#adcbf8a6] to-[#daaf7769] shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
                    Nome
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    type="text"
                    placeholder="Seu nome"
                />
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                    Email
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                />
            </div>
            <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="message">
                    Mensagem
                </label>
                <textarea
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="message"
                    rows="5"
                    placeholder="Digite sua mensagem"
                ></textarea>
            </div>
            <div class="flex items-center justify-between">
                <button
                    class="bg-gradient-to-br from-[#5b97f1] to-[#ddaa66] hover:bg-blue-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                >
                    Enviar
                </button>
            </div>
        </form>
        <p class="text-center text-gray-500 text-xs">
            &copy; 2024 Oitão Junior Blog. Todos os direitos reservados.
        </p>
    </div>
</template>

<script setup>
// Nenhuma lógica adicional por enquanto
</script>