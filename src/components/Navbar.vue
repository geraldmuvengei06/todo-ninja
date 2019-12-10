<template>
    <div>

        <v-snackbar
            v-model="snackbar"
            :timeout="4000"
            top
            color="success"
        >
            <span>Entry added!</span>
            <v-btn flat text color="white" @click.native="snackbar = false">Close</v-btn>
        </v-snackbar>

        <v-app-bar flat app>
            <v-app-bar-nav-icon color="grey" @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="text-uppercase grey--text">
                <span class="font-weight-light">Todo</span>
                <span>Ninja</span>
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <v-menu offset-y>
                <template v-slot:activator="{ on }"> 
                    <v-btn text color="grey" v-on="on">
                        <v-icon left>expand_more</v-icon>
                        <span>Menu</span>
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item v-for="item in items" :key="item.text" link :to="item.route">
                        <v-list-item-title>{{ item.text }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
    
            <v-btn text color="grey">
                <span>Sign Out</span>
                <v-icon right>exit_to_app</v-icon>
            </v-btn>

        </v-app-bar>
        

        <v-navigation-drawer v-model="drawer" app color="deep-purple lighten-1">

            <v-layout column align-center>
                <v-flex class=mt-5>
                    <v-avatar size="100">
                        <img src="/avatar.png" alt="">
                    </v-avatar>
                    <p class="white--text mt-2 text-center">
                        Slim Gera
                    </p>
                </v-flex>

                <v-flex class="mt-4 mb-3">
                    <Popup @projectAdded="snackbar = true"></Popup>
                </v-flex>

            </v-layout>

            <v-list dense nav>
                <v-list-item v-for="item in items" :key="item.title" link :to="item.route">
                <v-list-item-icon >
                    <v-icon class="white--text">{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content >
                    <v-list-item-title class="white--text">{{ item.text }}</v-list-item-title>
                </v-list-item-content>
                </v-list-item>
            </v-list>

            <template v-slot:append>
                <div class="pa-2">
                    <v-btn block outlined color="white">
                        <v-icon left small>lock</v-icon>
                        Logout
                    </v-btn>
                </div>
            </template>
        </v-navigation-drawer>
    </div>
</template>

<script>

import Popup from './Popup';

export default {
    components :{
        Popup
    },
    data() {
        return {
            drawer: false,
            snackbar: false,
            items: [
                { icon: 'dashboard', text: 'Dashboard', route: '/' },
                { icon: 'folder', text: 'Projects', route: '/projects' },
                { icon: 'person', text: 'Team', route: '/team' },
            ],
        }
    },
    
};
</script>