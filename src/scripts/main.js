document.addEventListener('DOMContentLoaded', function(){
   document.getElementById('sorteador').addEventListener('submit', function(evento){
      evento.preventDefault();
      let numeroMaximo = parseInt(document.getElementById('numero-maximo').value);
      let aleatorio = parseInt(Math.floor(Math.random() * numeroMaximo)+1);
      document.getElementById('resultado-valor').innerText = aleatorio;
      document.querySelector('.resultado').style.display = 'block';
   })
})