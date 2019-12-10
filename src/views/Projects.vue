<template>
  <div class="home">
    <v-subheader>Projects</v-subheader>
    <v-container class="my-5">
      
      
      <v-expansion-panels class="mx-2">
        <v-expansion-panel
          v-for="(project,i) in myProjects"
          :key="i"
        >
          <v-expansion-panel-header>{{ project.title }}</v-expansion-panel-header>
          <v-expansion-panel-content>
           <v-text>
             {{ project.content }}
           </v-text>
           <v-text>
            {{ project.due }}
           </v-text>
           <v-chip>{{ project.status }}</v-chip>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>

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

  computed: {
    myProjects() {
        return this.projects.filter(project => {
          return project.person === "Slim Gera"
        })
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
}
</script>
