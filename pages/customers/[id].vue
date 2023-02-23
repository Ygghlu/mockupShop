<template>
    <v-container fluid col="8">
        {{ id }}

       <p>show</p>
        {{ customer }}

        
        
    </v-container>
</template>

<script setup>

const { id } = useRoute().params
const { data: customer } = await useFetch(() => `/api/customers/search/` , { params: { id } })

</script>

<style></style>