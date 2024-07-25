// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Seleciona os elementos necessários
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const menuHamburguer = document.querySelector('.menu-hamburguer');
    const menuLinks = document.querySelectorAll('.menu-hamburguer ul li a');
  
    // Função para alternar a classe 'active' no menu hambúrguer
    function toggleMenu() {
      menuHamburguer.classList.toggle('active');
    }
  
    // Função para fechar o menu hambúrguer
    function closeMenu() {
      menuHamburguer.classList.remove('active');
    }
  
    // Adiciona um ouvinte de evento para o clique no ícone do menu hambúrguer
    hamburgerMenu.addEventListener('click', toggleMenu);
  
    // Adiciona ouvintes de evento para todos os links do menu responsivo
    menuLinks.forEach(link => {
      link.addEventListener('click', closeMenu);
    });
  });
  