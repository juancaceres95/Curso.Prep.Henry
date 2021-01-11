Objetos: Son contenedores de datos como los array, pero lo primero que los diferencia es que en su sintaxis los declaramos con llaves {}. Y en vez de tener indices como los array, tienen pares que son los: Key:Values. La key es el identificador y el value el valor que queremos guardar en esta key; los objetos pueden contener muchos pares de Key: Values.
Ejemplo: const user ={
        nombre: 'Juan',
        apellido : 'Caceres';
}       // KEY: 'Value';//   

Propiedades: se pueden explicar como las variables adjuntas a un objeto, estas son las que definen la carcteristica de un objeto.

Métodos: son las funciones() que estan dentro de un objeto, la propiedad que es una función es un método.
Ejemplo:  const user ={
        nombre: 'Juan',
        apellido : 'Caceres';
        metodo : function(){
            console.log('Hola')
        }
        }

Bucle For in: para iterar sobre un objeto, tenemos un tipo especifico de bucle for in loop con su respectiva sintaxis porque no tenemos un indice como los array; Entonces declaramos una variable, la palabra clabe in y el nombre del objeto para iterarlo. 
Ejemplo: const user ={
         nombre: 'Juan',
         apellido : 'Caceres';
        }
        for(let objeto in user){
            console.log (objeto);
        };

Notacion de puntos: llamamos al nombre del objeto un punto y la key, para acceder a la propiedad del mismo. Ej: user.nombre;
Notacion de corchetes: llamamos al nombre del objeto y envolvemos entre corchetes, podemos envolver string, numeros, o variables que apuntes a estos. Ej: user['nombre']; 
Por lo general estas ultimas se usan con variables. 
   