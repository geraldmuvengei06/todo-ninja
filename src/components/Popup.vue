<template>
    <v-dialog
        v-model="dialog"
        scrollable :overlay="false"
        max-width="500px"
        transition="dialog-transition"
    >
        <template  v-slot:activator="{ on }">
            <v-btn color="secondary" v-on="on">
                Add new project
            </v-btn>
        </template>
        <v-card>
            <v-card-title>
                <v-subheader>Add a new project</v-subheader>
            </v-card-title>   
            <v-card-text>
            
                <v-form ref="form" class="px-3">
                    <v-text-field
                        prepend-icon="folder"
                        name="title"
                        label="Title"
                        id="title"
                        v-model="title"
                        :rules="inputRules"
                    ></v-text-field>

                    <v-menu offset-y>
                        <template v-slot:activator="{ on }">

                            <v-text-field
                                :value="formatedDate"
                                prepend-icon="date_range"
                                v-on="on"
                                name="due"
                                label="Due date"
                                id="due"
                                :rules="inputRules"
                            ></v-text-field>
                                
                        </template>

                        <v-date-picker v-model="due" :landscape="true" :reactive="true"></v-date-picker>
                       
                       
                    </v-menu>

                    <v-textarea
                        prepend-icon="edit"
                        label="Description"
                        name="description"
                        textarea
                        v-model="description"
                        :rules="inputRules"
                    ></v-textarea>

                    <v-btn color="success mx-0 mt-3" :loading="loading" @click="save">Add Project</v-btn>
                </v-form>
                
            </v-card-text>
        </v-card>
    </v-dialog>
</template>
<script>

import format from 'date-fns/format'
import db from '@/fb'

export default {
    data() {
        return {
            loading: false,
            dialog: false,
            title: "",
            due: "",
            description: "",
            inputRules: [
                v => v.length >= 3 || "Minimum length is 3 characters"
            ],
        }
    },
    methods: {
        save() {
            if (this.$refs.form.validate()) { 
                const project = {
                    title: this.title,
                    content: this.description,
                    due: format(new Date(this.due), 'dd MMM yyyy'),
                    person: "Slim Gera",
                    status: "ongoing",                
                }
                this.loading = true
                db.collection('projects').add(project).then(() => {
                    this.loading = false
                    this.$refs.form.reset()
                    this.dialog = false
                    this.$emit("projectAdded")
                }).catch((error) => {
                    alert(error)
                })
            }

        }
    },

    computed: {
        formatedDate() {
            return this.due ? format(new Date(this.due), "dd MMM yyyy") : ''
        }
    }
};
</script>