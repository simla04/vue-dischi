<template>
  <div
    class="backg-color d-flex flex-wrap align-items-center justify-content-center"
  >
    <div class="w-100">
      <select name="albums" v-model="value">
        <option></option>
        <option v-for="element in arraygenre" :key="element" :value="element">
          {{ element }}
        </option>
      </select>
    </div>
    

    <CardComp v-for="(elem, index) in search" :key="index" :get="elem" />
  </div>
</template>

<script>
import CardComp from "./CardComp.vue";
import axios from "axios";

export default {
  name: "MainBackg",
  components: {
    CardComp,
  },
  data() {
    return {
      info: [],
      arraygenre: [],
      value: "",
    };
  },
  mounted() {
    this.array();
  },
  computed: {
    search() {
      if (this.value == "") {
        return this.info;
      } else {
        return this.info.filter((element) => {
          return element.genre == this.value;
        });
      }
    },
  },

  methods: {
    array() {
      axios
        .get("https://flynn.boolean.careers/exercises/api/array/music")
        .then((response) => {
          this.info = response.data.response;

          this.info.forEach((element) => {
            if (!this.arraygenre.includes(element.genre))
              this.arraygenre.push(element.genre);
          });
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.backg-color {
  height: 100vh;
  gap: 10px;
  background-color: rgb(34, 37, 65);
}
</style>
