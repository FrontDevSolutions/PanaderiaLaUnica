baseDeDatosLogin =JSON.parse(localStorage.getItem("sistema-de-login"));

if(!baseDeDatosLogin){
    cargarDatosLogin();
}

function guardarDatosDeLaBaseDeDatosLogin(){
    localStorage.setItem("sistema-de-login", JSON.stringify(baseDeDatosLogin));
}

function cargarDatosLogin(){
    baseDeDatosLogin = {
        1102825148:{
            contraseña:"12345"
        }
    }
}

async function menuBasico(){
    opcion_menuBasico = -1;
    await swal.fire({
        title:"Menú",
        color: '#f56612',
        imageUrl:'logo.png',
        imageWidth: 200,
        imageHeight: 100,
        imageAlt: 'Custom image',
        showConfirmButton:false,
        html:`
        <button class="swal2-confirm swal2-styled" onclick='opcion_menuBasico = 0;Swal.close()'>
            Registrar nuevo usuario
        </button>
        <br><br>
        <button class="swal2-confirm swal2-styled" onclick='opcion_menuBasico = 1;Swal.close()'>
            Login
        </button>
        `
    })
    switch (opcion_menuBasico) {
        case 0:
            registrarNuevoUsuario();
            break;
        case 1:
            login();
            break;
    
        default:
            await menuBasico();
            break;
    }
}

async function registrarNuevoUsuario(){
    opcion_registrarNuevoUsuario = -1;
    await swal.fire({
        title:"Registrar",
        color: '#f56612',
        imageUrl:'logo.png',
        imageWidth: 200,
        imageHeight: 100,
        imageAlt: 'Custom image',
        showConfirmButton:false,
        html:`
        <input class="swal2-input" placeholder="Usuario" id="usuario">
        <input type="password" class="swal2-input" placeholder="Contraseña" id=contraseña>
        <button class="swal2-confirm swal2-styled" onclick='opcion_registrarNuevoUsuario = 0;Swal.clickConfirm()'>
            Crear
        </button>
        <br>
        <button class="swal2-confirm swal2-styled" onclick='opcion_registrarNuevoUsuario = 1;Swal.close()'>
            Cancelar
        </button>
        `,
        preConfirm:()=>{
            let usuario = document.getElementById("usuario").value;
            let contraseña = document.getElementById("contraseña").value;
            if(!usuario){
                Swal.showValidationMessage("No hay usuario");
                return false;
            }
            if(!contraseña){
                Swal.showValidationMessage("No hay contraseña");
                return false;
            }
            baseDeDatosLogin[usuario] = {};
            baseDeDatosLogin[usuario].contraseña = contraseña;
            guardarDatosDeLaBaseDeDatosLogin();
            
            return true;
        },
    });
    switch (opcion_registrarNuevoUsuario) {
        case 0:
            await swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Usuario guardado corectamente',
                showConfirmButton: false,
                timer: 2000
              })
            menuBasico();
            break;
        case 1:
            menuBasico();
            break;
    
        default:
            registrarNuevoUsuario();
            break;
    }
}

async function login(){
    opcion_login = -1;
    let {value : datos} = await swal.fire({
        title:"Bienvenido",
        confirmButtonText:"Login",
        color: '#f56612',
        imageUrl:'logo.png',
        imageWidth: 200,
        imageHeight: 100,
        imageAlt: 'Custom image',
        html:`
        <div style="margin:5px">
            <input class="swal2-input" placeholder="Usuario" id="usuario">
            <input type="password" class="swal2-input" placeholder="Contraseña" id="contraseña">
        </div>
        <button class="swal2-confirm swal2-styled" onclick='menuBasico();Swal.close()'>Cancelar</button>
        `,
        preConfirm:()=>{
            let usuario = document.getElementById("usuario").value;
            let contraseña = document.getElementById("contraseña").value;
            if(!usuario){
                Swal.showValidationMessage("No hay usuario");
                return false;
            }
            if(!contraseña){
                Swal.showValidationMessage("No hay contraseña");
                return false;
            }
            let datos = baseDeDatosLogin[usuario];
            if(!datos){
                Swal.showValidationMessage("Usuario no existe");
                return false;
            }else{ 
                window.location = "menu.html";  
            }
            if(datos.contraseña != contraseña){
                Swal.showValidationMessage("La contraseña es incorrecta");
                return false;
            }
            return datos;
        },
    });
    
    switch (opcion_login) {
        case 0:
            menuBasico();
            break;
        case 1:
            menuBasico();
            break;
        default:
            await login();
            break;
    }
}

