<template>
    <v-app>
        <div class="background"></div>  
        <v-main class="d-flex justify-center align-center">
            <v-col cols="4" lg="4" class="mx-auto">
                <v-card class="pa-5">
                    <div class="text-center">
                        <v-img 
                        lazy-src="@/assets/img/logomaker.jpg"
                        max-height="63"
                        max-width="500"
                        src="@/assets/img/logomaker.jpg">
                        </v-img>
                        <v-car >
                          <h2>Iniciar Sesión</h2>
                        </v-car>
                    </div>
                    <v-form>
                        <v-card-text>
                            <v-text-field
                                type="username"
                                label="Username"
                                placeholder="Username"
                                prepend-inner-icon="mdi-account"
                            />
                            <v-text-field
                                    
                                    :type="passwordShow? 'text':'password'"
                                    label="Password"
                                    placeholder="Password"
                                    prepend-inner-icon="mdi-key"
                                    :append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
                                    @click:append="passwordShow = !passwordShow"
                            />
                            <a href="">Olvidó su contraseña?</a>
                        </v-card-text>
                        

                        <v-card-actions  class="justify-center">
                        <v-btn
                         color="primary"
                         :disabled="!form"
                         variant="elevated"
                         
                        >
                         Button
                        </v-btn>

                        </v-card-actions>
                    </v-form>
                </v-card>
            </v-col>
        </v-main> 
    </v-app>
</template>
<script>
export default{
    name:'App',

    data:()=>({
        passwordShow:false,
            
        }),
};


</script>
<style>
 
</style>
