<template>
    <h2>{{texto}} : {{id_restaurante}}</h2>
</template>

<script>
    export default {
        name: 'restaurantes-top',
        mounted() {
            this.id_restaurante = this.$route.params.id;
        },
        data () {
            return {
                texto: 'Pageina Restaurante top',
                id_restaurante: null
            }
        }
    }
</script>
