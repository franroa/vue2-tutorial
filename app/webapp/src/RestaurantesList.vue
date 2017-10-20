<template>
	<div>
		<ul id="restaurantes-list" v-if="restaurantes != null">
			<li v-for="restaurante in restaurantes">
				<strong>{{restaurante.nombre}}</strong>
				<p>
					<router-link :to="{name: 'restaurante', params:{id: restaurante.id}}">Ver</router-link>
					<router-link :to="{name: 'editar-restaurante', params:{id: restaurante.id}}">Editar</router-link>
					<span v-if="showBorrar != restaurante.id">
						<a @click="borrarRestaurante(restaurante.id)" style="cursor:pointer;">Eliminar</a>
					</span>
				 	<span v-else>
				 		<p>¿Estas seguro de querer borrarlo?</p>
				 		<button @click="cancelarBorrado()">Cancelar</button>
				 		<button @click="confirmarBorrado(restaurante.id)">Borrar</button>
					</span>
				</p>
			</li>
		</ul>
		<span v-else>Cargando restaurantes...</span>
	</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'restaurantes-list',
  mounted() {
  	this.getRestaurantes();
  },
  data () {
    return {
      texto: 'Página Restaurantes LIST',
      restaurantes: null,
      showBorrar: null
    }
  },
  methods: {
  	getRestaurantes(){
  		axios.get('http://localhost/api-rest/restaurantes-api.php/restaurantes')
  			 .then((respuesta) => {
  			 	this.restaurantes = respuesta.data.data;
  			 });
  	},
  	borrarRestaurante(id){
  		this.showBorrar = id;
  	},
  	cancelarBorrado(){
  		this.showBorrar = null;
  	},
  	confirmarBorrado(id){
  		axios.get('http://localhost/api-rest/restaurantes-api.php/delete-restaurante/'+id)
  		     .then((respuesta) => {
  		     	this.showBorrar = null;
  		     	this.getRestaurantes();
  		     });
  	}
  }
}
</script>

<style lang="scss">
	#restaurantes-list{
		padding: 5px;
		li{
			margin-top: 10px;
			width: 30%;
			height: 120px;
			border: 1px solid #ddd;
			background: #eee;
			padding: 20px;
			overflow:hidden;
		}
	}
</style>