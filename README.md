# 🍔 RT BURGUER - Landing Page

<div align="center">

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[![jQuery](https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white)](https://jquery.com/)

**Uma landing page moderna e responsiva de uma hamburgueria, desenvolvida como projeto de aprendizado e demonstração de habilidades em desenvolvimento web.**

[Live Demo](#) • [Funcionalidades](#-funcionalidades) • [Tecnologias](#-tecnologias)

</div>

---

## 📋 Sobre o Projeto

RT BURGUER é uma landing page profissional para um restaurante de hambúrgueres, desenvolvida com foco em:

- ✨ **Design Responsivo** - Totalmente adaptável a todos os dispositivos (mobile, tablet, desktop)
- 🎯 **UX Otimizada** - Navegação fluida e intuitiva
- ⚡ **Performance** - Animações suaves e otimizadas
- 🎨 **Interface Moderna** - Desgin limpo e profissional

---

## 🚀 Funcionalidades

### ✅ Implementadas

- **Navegação Dinâmica** - Menu com destaque automático da seção ativa durante scroll
- **Animações Sofisticadas** - ScrollReveal para efeitos de entrada dos elementos
- **Menu Responsivo** - Navegação mobile com hamburger menu
- **Efeitos de Scroll** - Shadow dinâmico na header durante navegação
- **Seções**:
  - 🏠 Home - Hero section com chamada para ação
  - 🍟 Cardápio - Apresentação dos pratos disponíveis
  - ⭐ Avaliações - Seção de depoimentos de clientes
  - 📞 Footer - Informações de contato

---

## 🛠️ Tecnologias Utilizadas

### Frontend
| Tecnologia | Versão | Propósito |
|-----------|--------|----------|
| **HTML5** | 5 | Estrutura semântica e responsiva |
| **CSS3** | 3 | Estilização avançada com Flexbox/Grid |
| **JavaScript** | ES6+ | Interatividade e lógica dinâmica |
| **jQuery** | 3.7.1 | Manipulação de DOM simplificada |
| **ScrollReveal** | Latest | Animações de scroll parallax |
| **Font Awesome** | 7.0.1 | Ícones profissionais |

### Recursos CSS
- 🎨 Arquitetura modular com arquivos CSS separados
- 📐 Flexbox para layouts responsivos
- 🔄 Media queries para diferentes breakpoints
- ✨ Transições e animações suaves
- 🎭 Efeitos de hover e interatividade

---

## 📁 Estrutura do Projeto

```
ytb/
├── 📄 index.html           # Arquivo HTML principal
├── 📁 src/
│   ├── 📁 assets/          # Imagens e recursos gráficos
│   │   ├── logo.png
│   │   ├── hero.png
│   │   ├── dish1-4.png
│   │   ├── avatar.png
│   │   └── wave.svg
│   ├── 📁 styles/          # Arquivos CSS
│   │   ├── style.css       # CSS principal
│   │   ├── header.css      # Estilização da header
│   │   ├── home.css        # Seção home
│   │   ├── menu.css        # Seção cardápio
│   │   ├── testimonials.css # Seção avaliações
│   │   └── footer.css      # Rodapé
│   └── 📁 JS/
│       └── script.js       # Lógica JavaScript
└── 📄 README.md            # Este arquivo
```

---

## 🎨 Destaques Técnicos

### JavaScript/jQuery
```javascript
// ✨ Navegação inteligente com scroll detection
$(window).on('scroll', function(){
    // Destaca automaticamente o item do menu da seção visível
    // Adiciona sombra dinâmica na header
});

// 📱 Menu mobile responsivo
$('#mobile-btn').on('click', function(){
    $('#mobile_menu').toggleClass('active');
});
```

### CSS Modular
- Arquivos separados por componente (header, menu, home, testimonials, footer)
- Nomenclatura consistente e fácil manutenção
- Suporte total a dispositivos mobile

### Animações
- ScrollReveal para efeitos parallax elegantes
- Transições suaves em hover
- Animações CSS keyframes

---

## 📱 Responsividade

O projeto foi desenvolvido com **Mobile-First Approach**:

✅ **Desktop** (1024px+) - Layout completo com todos os recursos  
✅ **Tablet** (768px - 1023px) - Interface otimizada  
✅ **Mobile** (< 768px) - Menu hamburger, elementos adaptados

---

## 🧠 Conhecimentos Demonstrados

Este projeto demonstra proficiência em:

- ✅ **Semântica HTML5** - Uso correto de tags semânticas
- ✅ **CSS Modular** - Organização e manutenibilidade
- ✅ **JavaScript Vanilla & jQuery** - DOM manipulation, event handling
- ✅ **Design Responsivo** - Media queries e Flexbox/Grid
- ✅ **UX/UI** - Navegação intuitiva e animações fluidas
- ✅ **Performance** - Otimização de assets e animações
- ✅ **Versionamento** - Git e GitHub (considerações de commit)
- ✅ **Integração com APIs** - Font Awesome, ScrollReveal

---

## 🚀 Como Utilizar

### Abrir Localmente

```bash
# 1. Clone o repositório
git clone https://github.com/[seu-usuario]/RT-BURGUER.git

# 2. Acesse a pasta do projeto
cd RT-BURGUER

# 3. Abra o arquivo index.html em seu navegador
# Pode usar Live Server do VS Code para melhor experiência
```

### Live Server (Recomendado)
Instale a extensão "Live Server" no VS Code e clique em "Go Live" para preview em tempo real.

---

## 📊 Otimizações Implementadas

- 🖼️ **Lazy Loading** de imagens para melhor performance
- ⚡ **Minificação** de CSS e JavaScript
- 🔍 **SEO Friendly** - Meta tags, títulos semânticos
- ♿ **Acessibilidade** - Contraste de cores adequado
- 📱 **Mobile First** - Prioridade em dispositivos móveis

---

## 🔮 Melhorias Futuras

- [ ] Dark mode toggle
- [ ] Sistema de carrinho de compras
- [ ] Integração com backend (Node.js/Express)
- [ ] Banco de dados para cardápio dinâmico
- [ ] PWA (Progressive Web App)
- [ ] Animações com Framer Motion

---

## 📚 Recursos de Aprendizado

Este projeto integra conhecimentos de:

- [MDN Web Docs - HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
- [MDN Web Docs - CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
- [MDN Web Docs - JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [jQuery Documentation](https://api.jquery.com/)
- [ScrollReveal.js](https://scrollrevealjs.org/)

---

## 📄 Licença

Este projeto é de código aberto e está disponível sob a licença MIT.

---

## 👨‍💻 Desenvolvido por

| **Rafael Silva** | 
📧 [rafagsilva1321@gmail.com]  
🔗 [LinkedIn](www.linkedin.com/in/rafaelgsilva2)  
🐙 [GitHub](https://github.com/Rafaelgs2)

---

<div align="center">

**⭐ Se este projeto foi útil, considere deixar uma estrela!**

[⬆ Voltar ao topo](#-rt-burguer---landing-page)

</div>
