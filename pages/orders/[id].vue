<template>
    <v-container fluid col="8">
       <v-card class="card">
        <h3>Order Detail</h3>
        
        <v-divider></v-divider>
       
        <h4> Order Number : {{ orders.rows[0].orderNumber  }}</h4>
       
       <P> Order Date : {{new Date(orders.rows[0].orderDate)}}</P> 
       <P> Required Date : {{new Date(orders.rows[0].requiredDate)}}</P> 
       <P> Shipped Date : {{ new Date(orders.rows[0].shippedDate)}}</P> 
       <v-divider></v-divider>
       <P> Status : {{orders.rows[0].status}}</P>
       <P> Comments : {{orders.rows[0].comments}}</P>  
       <v-divider></v-divider>
        <h4>Product In Order</h4>
        <v-divider></v-divider>
       <v-col v-for="p in orders.rows" :key="p" cols="6">

        <h4 > Product : {{ p.productCode }} </h4>

            <p>  Customer : {{ p.customerNumber }}</p>
            <p> Price Each : {{ p.priceEach  }}</p>
            <p> Quantity : {{ p.quantityOrdered}} </p>
         
       </v-col>
       {{ products}}




       
    </v-card>


        
    </v-container>
</template>

<script setup>

useHead({ 
        title: `Shop name | Order detail `,
        meta: [ 
            { name: "description", content: "Shop Description"}
         ]
     })
//const z = '2003-01-05T17:00:00.000Z'

//const date = new Date(z)
const { id } = useRoute().params
const { data: orders } = await useFetch(() => `/api/orders/search/` , { params: { id } })
//const productCode = 'S18_1749'
//const { data: products } = await useFetch(() => `/api/products/search/` , { params: { productCode  } })

</script>

<style></style>