<template>
    <v-app>
        <div class="background"></div>
        <v-main class="d-flex justify-center align-center">
            <v-col cols="4" lg="4" class="mx-auto">
                <v-card class="pa-5">
                    <div class="text-center">
                        <v-car>
                            <h2>Recuperar contraseña</h2>
                        </v-car>
                    </div>
                    
                    <v-form>
                        <v-card-text>
                            <v-text-field label="Usuario" prepend-inner-icon="mdi-account"></v-text-field>
                            <v-text-field type="password" label="Contraseña Nueva" placeholder="Contraseña Nueva"
                                prepend-inner-icon="mdi-lock" />
                            <v-text-field type="password" label="Repetir Contraseña" placeholder="Repetir Contraseña"
                                prepend-inner-icon="mdi-lock-alert" />
                        </v-card-text>
                        <v-card-actions class="justify-center">
                            <v-btn color="primary" :disabled="!form" variant="elevated">
                                Ingresar
                            </v-btn>

                        </v-card-actions>
                    </v-form>
                </v-card>
            </v-col>
        </v-main>
    </v-app>
</template>
<script>
export default {
    name: 'App',

    data: () => ({
        passwordShow: false,

    }),
};


</script>
<style>

</style>
