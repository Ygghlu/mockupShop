<template>
    <div>
        <h3>Orders</h3>

        <v-data-table
    :items-per-page="itemsPerPage"
    :headers="headers"
    :items="orders"
    item-value="orderNumber"
    class="elevation-1"
  >
  <template v-slot:item.orderDate="{ item }">
      
        {{ new Date(item.raw.orderDate) }}
    </template>
    <template v-slot:item.requiredDate="{ item }">
      
      {{ new Date(item.raw.requiredDate) }}
  </template>



  <template v-slot:item.actions="{ item }">
      <NuxtLink :to="`/orders/${item.raw.orderNumber}`"> <v-btn>more</v-btn> </NuxtLink>
    </template>
</v-data-table>


    </div>
</template>

<script setup>

const { orders } = defineProps(['orders'])

let itemsPerPage= 5
const headers = [
          {
            title: 'Orders Number',
            align: 'start',
            sortable: false,
            key: 'orderNumber',
          },
          { title: 'Order Date', align: 'start', key: 'orderDate' },
          { title: 'required Date', align: 'start', key: 'requiredDate' },
          { title: 'status', align: 'start', key: 'status' },
          { title: 'Actions', key: 'actions', sortable: false },
        ]

</script>

<style></style>