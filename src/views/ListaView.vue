<template>
    <div>
      <v-table>
        <th>
         <v-select class="uno" label="Name"></v-select>
        </th>
       <th>
         <v-select class="uno" label="Correo"></v-select>
        </th>
        <th>
         <v-select class="uno" label="name"></v-select>
        </th>
         <th>
         <v-select class="uno" label="Acciones"></v-select>
        </th>
      </v-table>
    </div>
  </template>
<script>
 
</script>
<style>
table {
    margin: 2rem auto;
    width: 50%;
    min-width: 35%;
    max-width: 95%;
    background: rgba(245, 235, 220);
    padding: 10px; 
}
.uno{
    padding-top: 3%;
    padding-left: 10%;
    max-width: 90%;
    color:#502314
}
th{
    color:#502314;
}
</style>