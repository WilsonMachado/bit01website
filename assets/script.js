// * Para determinar si el formulario está vacío

let contactForm = document.querySelector("#contact-form");

contactForm.addEventListener("submit", submitForm);

function submitForm(e){     

    e.preventDefault();
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    
    if (name === "" || email === "" || message === "") {
        showErrorModal();        
    } else {       
        contactForm.reset();
        showSuccessModal(name);
      }
}

function showSuccessModal(nombre){
    
    let backgroudModal = document.createElement("div");
    backgroudModal.className = "modal-bg";
    backgroudModal.id = "modal-bg";

    let modal = document.createElement("div");
    modal.className = "modal-content";

    document.getElementById("contact-form").appendChild(backgroudModal);
    
    backgroudModal.appendChild(modal);
    modal.insertAdjacentHTML("beforeend", `<h3>¡Gracias por tu mensaje, ${nombre}!</h3>`);
    modal.insertAdjacentHTML("beforeend", "<p>Hemos recibido tu mensaje y estaremos en contacto contigo tan pronto como nos sea posible.</p>");
    modal.insertAdjacentHTML("beforeend", "<div class='contact-button button-modal'><a class='demo-button' href='javascript:hideModal()'>¡Vale!</a></div>");


    document.getElementById("body").classList.add("no-scroll");
}

function showErrorModal(){

    let backgroudModal = document.createElement("div");
    backgroudModal.className = "modal-bg";
    backgroudModal.id = "modal-bg";

    let modal = document.createElement("div");
    modal.className = "modal-content";

    document.getElementById("contact-form").appendChild(backgroudModal);
    
    backgroudModal.appendChild(modal);
    modal.insertAdjacentHTML("beforeend", `<h3>Por favor, completa todos los campos</h3>`);
    modal.insertAdjacentHTML("beforeend", "<p>Todos los campos en el formulario son obligatorios.</p>");
    modal.insertAdjacentHTML("beforeend", "<div class='contact-button button-modal'><a class='demo-button' href='javascript:hideModal()'>Entiendo</a></div>");

    
    document.getElementById("body").classList.add("no-scroll");
    
}

function hideModal(){
    let modal = document.getElementById("modal-bg");
    document.getElementById("contact-form").removeChild(modal);
    document.getElementById("body").classList.remove("no-scroll");
}