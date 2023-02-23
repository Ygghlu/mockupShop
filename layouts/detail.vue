<template>
    <v-app>
        <v-layout>
            <v-app-bar border color="primary" density="compact">
                <v-btn icon >
                    
                    <NuxtLink to="/"> <v-icon color="white" >
                        mdi-home
                    </v-icon></NuxtLink>
                
                </v-btn>

                
            </v-app-bar>



            <v-main >
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


