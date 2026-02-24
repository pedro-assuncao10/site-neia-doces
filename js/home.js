// Aguarda o documento HTML estar totalmente carregado para executar o código
document.addEventListener('DOMContentLoaded', () => {
    
    // Seleciona todos os botões de perguntas do FAQ
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            // Pega o card (item) completo daquela pergunta específica
            const faqItem = question.parentElement;
            
            // Verifica se o item clicado já está aberto
            const isActive = faqItem.classList.contains('active');

            // (Opcional) Fecha todas as outras perguntas antes de abrir a nova
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
                // Reseta a altura da resposta para esconder novamente
                item.querySelector('.faq-answer').style.maxHeight = null;
            });

            // Se o item que clicamos não estava aberto, nós o abrimos agora
            if (!isActive) {
                faqItem.classList.add('active');
                const answer = question.nextElementSibling;
                // Pega a altura real do texto escondido e aplica para criar o efeito suave de descer
                answer.style.maxHeight = answer.scrollHeight + "px";
            }
        });
    });
});