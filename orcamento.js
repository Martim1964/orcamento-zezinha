document.addEventListener('DOMContentLoaded', function() {
    // 1. Efeito de zoom nas imagens dos bolos ao passar o mouse
    const imagensBolos = document.querySelectorAll('.opcao img');
    imagensBolos.forEach(img => {
        img.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });
        img.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // 2. Destaque interativo para os sabores
    const itensSabores = document.querySelectorAll('#massas-list li, #recheios-list li');
    itensSabores.forEach(item => {
        item.addEventListener('click', function() {
            this.classList.toggle('sabor-selecionado');
            atualizarContadorSabores();
        });
    });

    function atualizarContadorSabores() {
        const selecionados = document.querySelectorAll('.sabor-selecionado');
        if (selecionados.length > 2) {
            alert('Você pode selecionar no máximo 2 sabores de recheio!');
            selecionados[selecionados.length-1].classList.remove('sabor-selecionado');
        }
    }

    // 3. Botão flutuante para WhatsApp
    const criarBotaoWhatsApp = () => {
        const btnWhatsApp = document.createElement('a');
        btnWhatsApp.href = 'https://wa.me/351913047889';
        btnWhatsApp.className = 'whatsapp-float';
        btnWhatsApp.innerHTML = '📝 Encomendar por WhatsApp';
        document.body.appendChild(btnWhatsApp);
    };
    criarBotaoWhatsApp();

    // 4. Animação de confirmação ao clicar nos botões de contato
    const botoesContato = document.querySelectorAll('.contato .btn');
    botoesContato.forEach(botao => {
        botao.addEventListener('click', function(e) {
            e.preventDefault();
            const originalText = this.innerText;
            this.innerText = 'Redirecionando...';
            setTimeout(() => {
                window.location.href = this.href;
            }, 1000);
        });
    });

    // 5. Efeito de scroll suave para seções
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});