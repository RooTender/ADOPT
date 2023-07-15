<script lang="ts">
export default {
  name: "progress-bar",
  props: {
    step: {
      type: Number,
      required: true,
    },
    length: {
      type: Number,
      required: true,
    },
  },
  methods: {
    isActive(i: number): boolean {
      return i <= this.step;
    },
  },
};
</script>

<template>
  <div class="container">
    <ul class="progressbar">
      <li :class="{ active: isActive(i) }" v-for="i in length" :key="i" />
    </ul>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  z-index: 1;
}

.progressbar {
  display: flex;
  justify-content: center;
  align-items: center;
}

.progressbar li {
  float: left;
  width: 100%;
  position: relative;
  text-align: center;
}

.progressbar li:before {
  content: "";
  width: 30px;
  height: 30px;
  border: 2px solid #bebebe;
  display: block;
  margin: 0 auto 10px auto;
  border-radius: 50%;
  line-height: 27px;
  background: white;
  color: #bebebe;
  text-align: center;
  font-weight: bold;
}

.progressbar li:after {
  content: "";
  position: absolute;
  width: 100%;
  height: 3px;
  background: #bebebe;
  top: 14px;
  left: -50%;
  z-index: -1;
}

.progressbar li.active:before {
  border-color: #3aac5d;
  background: #3aac5d;
  color: white;
}
.progressbar li.active:after {
  background: #3aac5d;
}
.progressbar li.active - li:after {
  background: #3aac5d;
}
.progressbar li.active - li:before {
  border-color: #3aac5d;
  background: #3aac5d;
  color: white;
}
.progressbar li:first-child:after {
  content: none;
}
</style>
