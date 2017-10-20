Vue.component('articulos', {
    template: `
        <div class="componente-pelis">
            <h1>COMPONENTE ARTICULOS</h1>
            <h1>Listado por ajax</h1>
            <ol>
                <li v-for="(post, index) in posts">
                    {{ post.title }}
                </li>
            </ol>
            <span v-else>Cargando listado por ajax...</span>
        </div>    
    `,
    data() {
        return {
            titulo: 'ARTICULOS 8888',
            posts: null,
        }
    },
    mounted() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((respuesta) => {
                this.posts = respuesta.data;
            });
    }
});

Vue.component('frutas', {
    props: ['objeto'],
    mounted() {
        console.log(this.objeto);
    }
});


Vue.component('padre', {
    template: `<div>
        <h1>Componente padre</h1>
        <div>
            <hijo></hijo>
        </div>
    </div>`
});



Vue.component('hijo', {
    template: `<p style="background: yellow;">Soy un parrafo en el componente hijo</p>`
});


Vue.filter('mayusculas', (value) => value.toUpperCase());

new Vue({
    el: 'main',
    mounted() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((respuesta) => {
                this.posts = respuesta.data;
            });
    },
    data: {
        elegido: 'padre',
        posts: null,
        texto: 'Hola mundo desde VUE2',
        nombre: 'Francisco',
        apellido: 'Roa',
        nota: 5,
        peliculaNueva: null,
        peliculas:  ['Batman', 'La verdad duele', 'Los mercenarios', 'Spiderman'],
        frutas: [
            {nombre: 'Manzana', temporada: 'Invierno', precio: 'Bajo'},
            {nombre: 'Naranja', temporada: 'Otono', precio: 'Medio'},
            {nombre: 'Cereza', temporada: 'Ptimavera', precio: 'Alto'},
            {nombre: 'Sandia', temporada: 'Verano', precio: 'Bajo'}
        ],
        superfruta: {nombre: 'Sandia', temporada: 'Verano', precio: 'Bajo'},
        busqueda: '',
        confirmado: null
    },
    methods: {
        crearPelicula() {
            this.peliculas.unshift(this.peliculaNueva);
            this.peliculaNueva = null;
        },
        borrarPelicula(indice) {
            this.peliculas.slice(indice, 1);
        },
        marcar(index) {
            this.confirmado = index;
        }
    },
    computed: {
        nombreYapellidos() {
            var date = new Date();
            var year = date.getYear();

            return this.nombre +  " " + this.apellido + " " + this.nota + ' - ' + year;
        },
        peliculasOrdenadas() {
            return this.peliculas.sort();
        },
        buscarFruta() {
            return this.frutas.filter((fruta) => fruta.nombre.includes(this.busqueda));
        }
    }

});

const vue2 = new Vue({
    el: '#app',
    data: {
        texto: 'Segunda instancia vue'
    }
});

const vue3 = new Vue({
    el: '#tercera',
    data: {
        texto: 'Tercera instancia vue'
    }
});