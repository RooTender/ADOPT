<script setup lang="ts"></script>

<script lang="ts">
export default {
    name: 'status-bar',
    data () {
      return {}
    }
}
</script>

<template>
    <div class="container">
        <ul class="progressbar">
            <li class="active">Step 1</li>
            <li class="active">Step 2</li>
            <li>Step 3</li>
            <li>Step 4</li>
            <li>Step 5</li>
        </ul>
    </div>
</template>

<style scoped>
.container{
  width: 100%;
  position: absolute;
  z-index: 1;
}

.progressbar li{
  float: left;
  width: 20%;
  position: relative;
  text-align: center;
}

.progressbar li:before{
  content:'';
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

.progressbar li:after{
  content: '';
  position: absolute;
  width:100%;
  height: 3px;
  background: #bebebe;
  top: 14px;
  left: -50%;
  z-index: -1;
}

.progressbar li.active:before{
 border-color: #3aac5d;
 background: #3aac5d;
 color: white
}
.progressbar li.active:after{
 background: #3aac5d;
}
.progressbar li.active - li:after{
 background: #3aac5d;
}
.progressbar li.active - li:before{
border-color: #3aac5d;
background: #3aac5d;
color: white
}
.progressbar li:first-child:after{
 content: none;
}
</style>