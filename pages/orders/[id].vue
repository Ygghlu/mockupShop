<template>
    <v-container fluid col="6">
        <v-card class="d-flex card justify-space-around mx-auto v-card--reveal overflow-auto" color="#ECEFF1" theme="light">
            <v-col>
                <v-card-title class="d-flex justify-center">
                    <h3 class="text-h4 ">Order Detail</h3>
                </v-card-title>

            </v-col>
            <v-divider thickness="2" color="black"></v-divider>
            <v-col>
                <v-card-text>
                    <h4 class="text-h5 text--primary"> Order Number : {{ orders.rows[0].orderNumber }}</h4>
                </v-card-text>

                <v-card-text class="ml-5">
                    <P> Order Date : {{ new Date(orders.rows[0].orderDate) }}</P>
                    <P> Required Date : {{ new Date(orders.rows[0].requiredDate) }}</P>
                    <P> Shipped Date : {{ new Date(orders.rows[0].shippedDate) }}</P>
                </v-card-text>
            </v-col>

            <v-divider thickness="2" color="black"></v-divider>
            <v-row class="d-flex justify-center ml-5 mr-2">
                <v-col cols="5" >
                    <v-card-text>
                        Status : {{ orders.rows[0].status }}
                    </v-card-text>
                </v-col>
                <v-col cols="7">
                    <v-card-text>
                        Comments : {{ orders.rows[0].comments }}
                    </v-card-text>
                </v-col>
            </v-row>


            <v-divider thickness="2" color="black"></v-divider>
            <v-col>
                <v-card-text>
                    <h4>Product In Order</h4>
                </v-card-text>
            </v-col>
            <v-divider thickness="2" color="black"></v-divider>
            <v-row class="d-flex justify-space-around mb-5 ">
                <v-col v-for="p in orders.rows" :key="p" cols="5">
                    <v-card-text>

                        <h4> Product : {{ p.productCode }} </h4>
                        <p> Customer : {{ p.customerNumber }}</p>
                        <p> Price Each : {{ p.priceEach }}</p>
                        <p> Quantity : {{ p.quantityOrdered }} </p>
                    </v-card-text>
                </v-col>
            </v-row>

        </v-card>
    </v-container>
</template>

<script setup>
definePageMeta({ layout: 'detail' })
useHead({
    title: `Shop name | Order detail `,
    meta: [
        { name: "description", content: "Shop Description" }
    ]
})
//const z = '2003-01-05T17:00:00.000Z'

//const date = new Date(z)
const { id } = useRoute().params
const { data: orders } = await useFetch(() => `/api/orders/search/`, { params: { id } })
//const productCode = 'S18_1749'
//const { data: products } = await useFetch(() => `/api/products/search/` , { params: { productCode  } })

</script>

<style></style>