<template>
  <div class="Logs">
  </div>
</template>

<script>
import Firebase from 'firebase'

let config = {
  apiKey: 'AIzaSyAePiSiATb0bpg0Iu9xe9igqecZ2r7vGgQ',
  authDomain: 'passtracker-6666a.firebaseapp.com',
  databaseURL: 'https://passtracker-6666a.firebaseio.com',
  projectId: 'passtracker-6666a',
  storageBucket: 'passtracker-6666a.appspot.com',
  messagingSenderId: '288117812150'
}

let app = Firebase.initializeApp(config)
let db = app.database()

let logRef = db.ref('logs')

export default {
  data () {
    return {
    }
  },
  methods: {
    getlocalization: function (lat, long) {
      return 'https://www.google.com/maps/@' + lat + ',' + long
    },
    imgDisplay: function (img) {
      if (img == null) { return 'https://bulma.io/images/placeholders/128x128.png' } else { return img }
    }
  },
  firebase: {
    logs: logRef
  }
}
</script>

<style>
.Logs{
  padding-left: 5%;
  padding-right: 5%;
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}
</style>
