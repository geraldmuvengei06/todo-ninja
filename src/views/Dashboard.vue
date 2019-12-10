<template>
  <div class="home">
    <v-subheader>Dashboard</v-subheader>
    <v-container class="my-5">
      
      <v-layout row class="mb-4">
        <v-flex>

          <v-tooltip top >
            <template v-slot:activator="{ on }">
              <v-btn color="grey" text small @click="sortBy('title')" v-on="on">
                <v-icon left small>folder</v-icon>
                <span class="caption text-lowercase">by project name</span>
              </v-btn>
            </template>
            <span>Sort projects by project name</span>
          </v-tooltip>

          <v-tooltip top>
            <template  v-slot:activator="{ on }">
              <v-btn color="grey" text small @click="sortBy('person')" v-on="on">
                <v-icon left small>person</v-icon>
                <span class="caption text-lowercase">by person</span>
              </v-btn>
            </template>
            <span>Sort projects by person</span>
          </v-tooltip>
          
        </v-flex>
      </v-layout>
      
      <v-card flat class="px-2" v-for="project in projects" :key="project.title">
        <v-layout  row wrap :class="`pa-3 project ${project.status}`">
          
          <v-flex xs12 md6>
            <div class="caption grey--text">Project Title</div>
            <div>{{ project.title }}</div>
          </v-flex>

          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Person</div>
            <div>{{ project.person }}</div>
          </v-flex>

          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Due By</div>
            <div>{{ project.due }}</div>
          </v-flex>

          <v-flex xs2 sm4 md2>
            <div>
              <v-chip colored small :color="`${project.status}`" class="white--text caption my-2">{{ project.status }}</v-chip>
            </div>
          </v-flex>
          
        </v-layout>
        <v-divider></v-divider>
      </v-card>
      
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import db from '@/fb'

export default {
  name: 'home',
  components: {
  },
  data() {
    return {
      projects: [],
    }
  },

  methods: {
    sortBy(prop) {
      this.projects.sort((a, b) => a[prop] > b[prop] ? -1 : 1)
    }
  },

  created() {
    db.collection('projects').onSnapshot((response) => {
      const changes = response.docChanges()

      // when database is being changed
      changes.forEach(change => {
        if (change.type === 'added') {
          this.projects.push({
            // ... spreads properties
            ...change.doc.data(),
            id: change.doc.id
          }) 
        }
      })
    })
  },
};
</script>

<style lang="scss" >
  .project.complete {
    border-left: 4px solid #3cd1c2;
  }

  .project.ongoing {
    border-left: 4px solid orange;
  }

  .project.overdue {
    border-left: 4px solid tomato;
  }

  .v-chip.complete {
    background: 4px solid #3cd1c2 !important;
  }

  .v-chip.ongoing {
    background: 4px solid orange !important;
  }

  .v-chip.overdue {
    background: 4px solid tomato !important;
  }


  
</style>
