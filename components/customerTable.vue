<template>
    <div>
        <h3>customer</h3>

        <v-data-table
    :items-per-page="itemsPerPage"
    :headers="headers"
    :items="customers"
    item-value="customerName"
    class="elevation-1"
  >
  <template v-slot:item.actions="{ item }">
      <NuxtLink :to="`/customers/${item.raw.customerNumber}`"> <v-btn>more</v-btn> </NuxtLink>
    </template>
</v-data-table>


    </div>
</template>

<script setup>

const { customers } = defineProps(['customers'])

let itemsPerPage= 5
const headers = [
          {
            title: 'Customer',
            align: 'start',
            sortable: false,
            key: 'customerName',
          },
          { title: 'city', align: 'start', key: 'city' },
          { title: 'Contact name', align: 'start', key: 'contactFirstName' },
          { title: 'Phone number', align: 'start', key: 'phone' },
          { title: 'Actions', key: 'actions', sortable: false },
        ]

</script>

<style></style>