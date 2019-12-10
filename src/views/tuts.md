<h1>Texts and Colors</h1>

    <h2>Texts</h2>
    <p class="dark-indigo-text text--darken-4">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit vero nesciunt vel asperiores provident et in incidunt magnam alias mollitia animi repudiandae at, impedit sunt suscipit quisquam delectus distinctio autem.
    </p>

    <p class="deep-purple lighten-4 red--text text--darken-4">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias magni dignissimos adipisci! Molestias accusantium atque neque inventore architecto totam facere nisi nemo, magni deserunt, natus, omnis possimus voluptas similique quasi.
    </p>

    <h2 class="display-4">
      Massive Display
    </h2>
    <h4 class="display-1">
      Small Display
    </h4>

    <p class="headline">Headline</p>
    <p class="subheading">Sub heading</p>
    <p class="caption">This is caption</p>

    <p class="text-uppercase">Uppercase text</p>


    <h2 class="heading">Buttons</h2>

    <v-btn color="pink white--text">text</v-btn>
    
    <v-btn succ ess depressed>text</v-btn>
    
    <v-btn flat color="pink--text">text</v-btn>
    
    <v-btn depressed class="pink white--text">
      <v-icon left>email</v-icon>
      <span>Email Me</span>
    </v-btn>

    <v-btn depressed small class="pink white--text">
      <v-icon left small>email</v-icon>
      <span>Email Me</span>
    </v-btn>

    <v-btn depressed large class="pink white--text">
      <span>Email Me</span>
      <v-icon right large>email</v-icon>
    </v-btn>

    <v-btn fab depressed small dark color="purple">
      <v-icon >favourite</v-icon>
    </v-btn>


    
    <h2 class="heading">Breakpoints and Visibility</h2>
    <!-- Helps in responsive designs -->

    <v-btn outlined color="primary" class="hidden-md-and-down" dark>text</v-btn>

    <v-btn color="primary" class="hidden-sm-and-up" dark>text</v-btn>

    <v-btn class="hidden-sm-only">Click Me</v-btn>


    <v-layout row wrap>
        <v-flex xs12 md6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, ut ipsum. Veritatis, quibusdam sed deserunt aliquid voluptatum, dignissimos maxime minima totam nostrum quas at ratione doloribus amet inventore provident porro?
          </p>
        </v-flex>
        <v-flex xs12 md6>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, quaerat saepe? Corrupti dolorem quos fugiat quae iure, amet vel odio quidem reiciendis accusantium reprehenderit pariatur consequuntur numquam omnis itaque ex.
          </p>
        </v-flex>

      </v-layout>

      <v-layout row wrap justify-space-around="">
        <v-flex xs4 md3 >
          <v-btn block outlined class="primary">1</v-btn>
        </v-flex>

        <v-flex xs4 md3 >
          <v-btn block outlined class="info">2</v-btn>
        </v-flex>


      </v-layout>