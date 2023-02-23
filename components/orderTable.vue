<template>
  <v-card class="ml-12 mr-12" >
    <v-card-title>
      Order
    </v-card-title>


    <v-data-table :items-per-page="itemsPerPage" :headers="headers" :items="orders" item-value="orderNumber"  class="elevation-1 " >
      <template v-slot:item.orderDate="{ item }">

        {{ new Date(item.raw.orderDate).toLocaleDateString('en-GB') }}
      </template>
      <template v-slot:item.requiredDate="{ item }">

        {{ new Date(item.raw.requiredDate).toLocaleDateString('en-GB') }}
      </template>



      <template v-slot:item.actions="{ item }">
        <NuxtLink :to="`/orders/${item.raw.orderNumber}`"> <v-btn variant="tonal" icon="mdi-magnify"></v-btn> </NuxtLink>
      </template>
    </v-data-table>


  </v-card>
</template>

<script setup>

const { orders } = defineProps(['orders'])
let itemsPerPage = 10
const headers = [
  {
    title: 'Orders Number',
    align: 'start',
    sortable: false,
    key: 'orderNumber',
  },
  { title: 'Order Date', align: 'start', key: 'orderDate' },
  { title: 'Required Date', align: 'start', key: 'requiredDate' },
  { title: 'status', align: 'start', key: 'status' },
  { title: 'Actions', key: 'actions', sortable: false },
]

</script>

<style></style>