<template>
  <div>

    <V-Container fluid>
        <orderTable :orders="orders.rows"/>
    </V-Container>
  </div>
</template>
    
<script setup>

useHead({ 
        title: "Shop name | Homepage",
        meta: [ 
            { name: "description", content: "Shop Description"}
         ]
     })

const { data: orders } = await useFetch('/api/orders')


</script>