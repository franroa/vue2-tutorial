<template>
	<div id="restaurante-add">
		<h2>Crear nuevo restaurante</h2>
		<form v-on:submit.prevent="guardarRestaurante">
			<p>
				<label>Nombre</label>
				<input type="text" v-model="restaurante.nombre">
			</p>
			<p>
				<label>Dirección</label>
				<input type="text" v-model="restaurante.direccion">
			</p>
			<p>
				<label>Descripción</label>
				<textarea v-model="restaurante.descripcion"></textarea>
			</p>
			<p>
				<label>Precio</label>
				<select v-model="restaurante.precio">
					<option value="">Selecciona una opción...</option>
					<option value="bajo">Bajo</option>
					<option value="normal">Normal</option>
					<option value="alto">Alto</option>
				</select>
			</p>
			<input type="submit" value="Guardar restaurante">
		</form>
	</div>
</template>

<script>
	import axios from 'axios';
	export default {
		name: 'restaurante-add',
		mounted(){

		},
		data(){
			return {
				restaurante: {
					nombre: '',
					direccion: '',
					descripcion: '',
					precio: 'normal'
				}
			};
		},
		methods: {
			guardarRestaurante(){
				var router = this.$router;

				var params = "json="+JSON.stringify(this.restaurante);
				axios.post('http://localhost/api-rest/restaurantes-api.php/restaurantes', params)
				     .then((respuesta)=>{
				     	
				     	if(respuesta.data.status == 'success'){
				     		// redirigir
				     		router.push('/restaurantes');
				     	}

				     })
				     .catch((error)=>{
				     	console.log(error);
				     });
			}
		}
	}
</script>
