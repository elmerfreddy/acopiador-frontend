<template>
    <v-app id="inspire">
      <v-content>
        <v-container class="fill-height" fluid>
          <v-row align="center" justify="center">
            <v-col cols="12" sm="8" md="6">
              <v-card class="elevation-12">
                <v-window v-model="step">
                  <v-window-item :value="1">
                    <v-row>
                      <v-col cols="12" md="11">
                        <v-card-text class="mt-0">
                          <h1
                            class=" color text-center display-2 teal--text text--accent-3"
                          >Perfil de Usuario</h1>
                          <br>
                          <label for="exampleInputEmail1" class="form-label"> Nombre:</label>
                          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                           placeholder="defreddyelmer@gmail.com">
                           <br>
                           <label for="exampleInputEmail1" class="form-label">Apellido:</label>
                          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                           placeholder="defreddyelmer@gmail.com">
                           <br>
                           <label for="exampleInputEmail1" class="form-label">Entidad:</label>
                          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                           placeholder="defreddyelmer@gmail.com">
                           <v-divider ></v-divider>
                           <h4
                            class=" col text-left display-2 teal--text text--accent-3"
                          >Cambiar Contraseña</h4>
                          <v-form>
                            <v-text-field
                              label="Anterior Contraseña"
                              name="Anterior Contraseña"
                              prepend-icon="email"
                              type="text"
                              color="brown darken-4"
                            />
  
                            <v-text-field
                              id="password"
                              label="Nueva Contraeña"
                              name="Nueva Contraeña"
                              prepend-icon="lock"
                              type="password"
                              color="brown darken-4"
                            />

                            <v-text-field
                              id="password"
                              label="Repita Nueva Contraseña"
                              name="Repita Nueva Contraseña"
                              prepend-icon="lock"
                              type="password"
                              color="brown darken-4"
                            />
                          </v-form>
                        </v-card-text>
                        <div class="text-center mt-1">
                          <v-btn rounded color="red darken-2" dark>Guardar</v-btn>
                        </div>
                      </v-col>
                    
                    </v-row>
                  </v-window-item>
                  
                </v-window>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-content>
    </v-app>
  </template>
  
  <script>
  export default {
    data: () => ({
      step: 1
    }),
    props: {
      source: String
    }
  };
  </script>
<style>
.form-label{
    
    color:rgba(80, 35, 20, 0.8);
    padding:10% 
}
.col{
    color:rgba(80, 35, 20, 0.8);
    padding-right: 50%;
}
.h4{
    padding: 10%
}
</style>