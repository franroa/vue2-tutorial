<template>
	<div>
		<h1>Detalle del restaurante {{id}}</h1>
		<div id="restaurante-detail" v-if="restaurante != null">
			<h2 v-text="restaurante.nombre"></h2>
			<p v-text="restaurante.descripcion"></p>
		</div>
		<span v-else>Cargando restaurante...</span>
	</div>
</template>

<script>
import axios from 'axios';
export default{
	name: 'restaurante-detail',
	mounted(){
		this.id = this.$route.params.id;

		axios.get('http://localhost/api-rest/restaurantes-api.php/restaurante/'+this.id)
		     .then((respuesta) => {
		     	this.restaurante = respuesta.data.data;
		     });
	},
	data(){
		return {
			id: null,
			restaurante: null
		}
	}
}
</script>