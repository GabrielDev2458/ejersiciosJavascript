//Estudiar el comportamiento del alcance o contexto
function funcion1(){
    var a = 3;
    //console.log(b) //ReferenceError
    function funcion3(){
        var b = 2;

        function funcion4(){
            console.log(a, b);
        }
        funcion4();
    }
    funcion3();
    //funcion4();//ReferenceError
}

function funcion2(){
    var a = 7;
    function funcion5(){
        console.log(a);
    }
    funcion5();
}

funcion1();
funcion2();

//console.log(a, b) //ReferenceError
