

<template>
    <v-app>
        <v-layout>
            <v-app-bar border color="blue-accent-3" density="compact">
                        <v-app-bar-title color="black">
                            <v-btn icon>
                        <NuxtLink to="/">Home</NuxtLink>
                    </v-btn></v-app-bar-title>
                        
                

            </v-app-bar>

            <v-main>

                <v-container fluid>
                    <slot />


                </v-container>
            </v-main>


            <v-footer app>
                <span>&copy; {{ new Date().getFullYear() }}</span>
            </v-footer>
        </v-layout>
    </v-app>
</template>



<style>
.router-link-exact-active {
    color: white;
}
</style>