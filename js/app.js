document.addEventListener('DOMContentLoaded', () => {

    document.addEventListener('click' , () => {
        let btn = document.querySelectorAll(".btn");
        btn.forEach(button => {
            button.addEventListener('click', function() {
              let screen = document.querySelector(".screen");

              screen.textContent = this.textContent;
            });
          });
    });




})