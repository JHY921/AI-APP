<template>
  <div class="total" style="margin-top: 20px">
    <div class="funcContainer">
      <div class="funcA" @click="functionA">
        <div
          style="
            position: absolute;
            width: 140px;
            height: 180px;
            background: #dbebef;
            opacity: 0.6;
            border-top-right-radius: 10px;
            border-bottom-right-radius: 10px;
            border: 1px solid rgba(0, 90, 110, 0.35);
          "
        >
          <div
            style="
              position: absolute;
              height: 100px;
              width: 100px;
              border-radius: 50%;
              background: rgb(46, 126, 144);
              margin-top: 40px;
              margin-left: 50px;
            "
          ></div>
          <div
            style="
              position: absolute;
              height: 80px;
              width: 80px;
              border-radius: 50%;
              background: rgb(107, 187, 181);
              margin-top: 30px;
              margin-left: 20px;
            "
          ></div>
        </div>
        <div class="glassContainer" id="glass" style="width: 150px">
          {{ funcA }}
        </div>
      </div>

      <div class="funcB" @click="functionB">
        <div
          style="
            position: absolute;
            width: 185px;
            height: 140px;
            background: rgba(207, 155, 155, 0.2);
            opacity: 0.6;
            border-top-right-radius: 10px;
            border-bottom-right-radius: 10px;
            border: 1px solid rgba(148, 0, 0, 0.1);
          "
        >
          <div
            style="
              position: absolute;
              height: 90px;
              width: 90px;
              border-radius: 50%;
              background: rgba(138, 22, 22, 0.51);
              margin-top: 0px;
              margin-left: 65px;
            "
          ></div>
          <div
            style="
              position: absolute;
              height: 60px;
              width: 80px;
              background: rgb(235, 135, 82);
              margin-top: 30px;
              margin-left: 30px;
            "
          ></div>
        </div>
        <div
          class="glassContainer"
          style="
            margin-top: -20px;
            margin-left: 10px;
            height: 140px;
            background: rgba(148, 0, 0, 0.1);
            border: 1px solid rgba(148, 0, 0, 0.1);
          "
        >
          {{ funcB }}
        </div>
      </div>

      <div class="funcC" @click="functionC">
        <div
          style="
            position: absolute;
            width: 360px;
            height: 125px;
            background: #dbebef;
            opacity: 0.8;
            margin-top: 60px;
            margin-left: 5px;
            border-radius: 10px;
            border: 1px solid rgba(0, 90, 110, 0.35);
          "
        ></div>
        <div
          style="
            position: absolute;
            height: 80px;
            width: 180px;
            background: rgb(107, 187, 181, 0.4);
            margin-top: 35px;
            margin-left: 80px;
          "
        ></div>
        <div
          style="
            position: absolute;
            height: 100px;
            width: 100px;
            border-radius: 50%;
            background: rgb(46, 126, 144, 0.8);
            margin-top: 50px;
            margin-left: 100px;
          "
        ></div>

        <div
          style="
            position: absolute;
            margin-top: 50px;
            margin-left: 200px;
            width: 0;
            height: 0;
            border-bottom: 80px solid rgb(70, 177, 152, 0.8);
            border-left: 40px solid transparent;
            border-right: 40px solid transparent;
          "
        ></div>
        <div
          class="glassContainer"
          id="glass"
          style="width: 320px; margin-left: 20px"
        >
          {{ funcC }}
        </div>
      </div>

      <div class="funcD" @click="functionD">
        <div
          style="
            position: absolute;
            width: 160px;
            height: 350px;
            background: rgba(82, 161, 126, 0.1);
            margin-left: 10px;
            border-top-left-radius: 10px;
            border-bottom-left-radius: 10px;
            border: 1px solid rgba(0, 90, 110, 0.35);
          "
        >
          <div
            style="
              position: absolute;
              height: 100px;
              width: 100px;
              border-radius: 50%;
              background: rgba(68, 139, 102, 0.7);
              margin-top: 140px;
              margin-left: 30px;
            "
          ></div>
          <div
            style="
              position: absolute;
              height: 100px;
              width: 80px;
              background: rgba(130, 208, 156, 0.6);
              margin-top: 80px;
              margin-left: 0px;
            "
          ></div>
        </div>
        <div
          class="glassContainer"
          id="glass"
          style="
            background-color: rgba(0, 148, 59, 0.07);
            height: 300px;
            margin-left: -10px;
            margin-top: 25px;
          "
        >
          {{ funcD }}
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  data () {
    return {
      funcA: "功能名称",
      funcB: "功能名称",
      funcC: "功能名称",
      funcD: "功能名称",
    }
  },
  methods: {
    functionA () {
      console.log("1")
    },
    functionB () {
      console.log("1")
    },
    functionC () {
      console.log("1")
    },
    functionD () {
      console.log("1")
    },
  }
};
</script>
  
<style scoped>
* {
  margin: 0px;
  padding: 0px;
  border-radius: 0px;
  font-size: 18px;
}

.total {
  position: relative;
  width: 360px;
  height: 640px;
  overflow: hidden;
  background: white;
}

.funcContainer {
  height: 560px;
  width: 100%;
  overflow: hidden;
}

.funcA {
  position: absolute;
  margin-top: 20px;
}

.funcB {
  position: absolute;
  margin-top: 220px;
}

.funcC {
  position: absolute;
  margin-top: 360px;
}

.funcD {
  position: absolute;
  height: 200px;
  width: 200px;
  margin-top: 10px;
  margin-left: 200px;
}

.glassContainer {
  position: absolute;
  margin: 10px;
  width: 160px;
  height: 160px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  border-radius: 10px;
  backdrop-filter: blur(6px);
  background-color: rgba(0, 191, 255, 0.075);
  box-shadow: rgba(0, 0, 0, 0.3) 2px 2px 8px;
  border: 1px solid rgba(0, 90, 110, 0.35);
  /* border: 2px rgba(255,255,255,0.4) solid;
    border-bottom: 2px rgba(40,40,40,0.35) solid;
    border-right: 2px rgba(40,40,40,0.35) solid; */
}
</style>