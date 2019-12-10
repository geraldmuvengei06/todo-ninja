<template>
  <div class="team">
    <v-subheader>Team</v-subheader>

    <v-container class="my-5">
      
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
          <v-card flat class="text-center ma-3">
            <v-responsive class="py-4">
              <v-avatar
                size="100"
                color="grey lighten-2"
              >
                <img :src="person.avatar" :alt="person.name">
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">{{ person.name }}</div>
              <div class="grey--text">{{ person.role }}</div>
            </v-card-text>

            <v-card-actions>
              <v-btn text color="grey">
                <v-icon small left>message</v-icon>
                <span>message</span>
              </v-btn>
            </v-card-actions>

          </v-card>
        </v-flex>
      </v-layout>

    </v-container>

  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {
  },
  data() {
    return {
      team: [
        { name: "Gerald Muvengei", role: "Web developer", avatar: "/avatar.png"},
        { name: "Slim Gera", role: "Front-end developer", avatar: "/avatar4.png"},
        { name: "Hope Jessica", role: "Ethical Hacker", avatar: "/avatar2.png"},
        { name: "Craig Muvengei", role: "Network admin", avatar: "/avatar3.png"}
      ]
    }
  },
}
</script>
