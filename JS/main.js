const app = Vue.createApp({
    data() {
        return {
            ordenInvertido: false,
            prendas: [],
            productos: [
                { 
                    nombre: "Camiseta", 
                    precio: 25,
                    imagen: "Images/camiseta.jpeg"
                },
                { 
                    nombre: "Pantalón", 
                    precio: 40,
                    imagen: "Images/pantalon.jpeg"
                },
                { 
                    nombre: "Chaqueta", 
                    precio: 60,
                    imagen: "Images/chaqueta.jpg"
                }
            ]
        };
    },
    methods: {

        agregarPrenda(nombre) {
            this.prendas.push(nombre);
        },

        eliminarPrenda(index) {
            this.prendas.splice(index, 1);
        },

        cambiarOrden() {
            this.ordenInvertido = !this.ordenInvertido;
        }

    }
});

app.mount('#app');