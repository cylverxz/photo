<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.22/vue.min.js"></script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap");

html,
body {
  margin: 0;
  font-family: Source Sans Pro, sans-serif;
}

.title-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.title {
  font-family: Source Sans Pro, sans-serif;
  font-size: 30pt;
  font-weight: bold;
}

.project-title {
  font-size: 10pt;
  padding: 10px;
  margin-top: 50px;
}

a:link {
  color: black;
  text-decoration: none;
}

a:visited {
  color: grey;
  text-decoration: none;
}

a:hover {
  color: #f5365c;
  text-decoration: none;
}

a:active {
  text-decoration: none;
}

.filter {
  font-family: Source Sans Pro, sans-serif;
  padding: 6px 6px;
  cursor: pointer;
  border-radius: 3px;
  transition: all 0.35s;
  border: none;
}

.filter:focus {
  box-shadow: 0px 1px 1px 0px #00000026;
  outline: none;
  background: #f5365c;
}

.filter.focus-visible {
  box-shadow: 0 0 0 2px green;
}

.filter:hover {
  background: #f5365c;
}

.projects {
  margin-bottom: 50px;
  margin-top: 25px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.projects-enter {
  transform: scale(0.5) translatey(-80px);
  opacity: 0;
}

.projects-leave-to {
  transform: translatey(30px);
  opacity: 0;
}

.projects-leave-active {
  position: absolute;
  z-index: -1;
}

.project {
  transition: all 0.35s ease-in-out;
  margin: 10px;
  box-shadow: 0px 2px 8px lightgrey;
  border-radius: 5px;
  width: 190px;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left !important;
}

.project-image-wrapper {
  position: relative;
}

.gradient-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 180px;
  opacity: 0.01;
  background: linear-gradient(
      to bottom,
      rgba(0, 210, 247, 0.65) 0%,
      rgba(0, 210, 247, 0.64) 1%,
      rgba(0, 0, 0, 0) 100%
    ),
    linear-gradient(
      to top,
      rgba(247, 0, 156, 0.65) 0%,
      rgba(247, 0, 156, 0.64) 1%,
      rgba(0, 0, 0, 0) 100%
    );
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

.project-image {
  width: 100%;
  height: 180px;
  padding-bottom: 5px;
  border-bottom-left-radius: ;
  border-bottom-right-radius: ;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.search-wrapper {
  margin-top: 20px;
  position: relative;
}

input {
  outline: none;
  border-radius: 3px;
  font-family: Source Sans Pro, sans-serif;
  padding: 4px 12px;
  color: rgba(0, 0, 0, 0.7);
  border: 1px solid rgba(0, 0, 0, 0.12);
  transition: 0.15s all ease-in-out;
  background: white;
  width: 200px;
}

input:focus {
  outline: none;
  transform: scale(1.05);
}

input::-webkit-input-placeholder {
  font-size: 12px;
  color: rgba(0, 0, 0, 0.5);
  font-weight: 100;
  font-family: Source Sans Pro, sans-serif;
}

input.focus-visible {
  box-shadow: 0 0 0 2px green;
}

</style>

<div id="app">
  <div class="title-container">
    <!--<div>
      <h3 class="title">
        ARATA PHOTOGRAPHY
      </h3>
    </div>-->
    <div class="filters">
      <button class="filter" v-on:click="setFilter('ALL')">ALL</button>
      <button class="filter" v-on:click="setFilter('FINE')">FINE</button>
      <button class="filter" v-on:click="setFilter('PORTRAITS')">PORTRAITS</button>
      <button class="filter" v-on:click="setFilter('EDITORIAL')">EDITORIAL</button>
      <button class="filter" v-on:click="setFilter('LANDSCAPE')">LANDSCAPE</button>
      <button class="filter" v-on:click="setFilter('OCASSIONS')">OCASSIONS</button>
      <button class="filter" v-on:click="setFilter('FOOD')">FOOD</button>
      <button class="filter" v-on:click="setFilter('FLORA')">FLORA/FAUNA</button>
      <button class="filter" v-on:click="setFilter('MISC')">MISC</button>
    </div>
    <div class="search-wrapper">
      <input type="text" v-model="search" placeholder="🔍 Search" />
    </div>

    <transition-group class="projects" name="projects">
      <div class="project" v-for="project in filteredAndSearched" v-bind:key="project.title">
        <a v-bind:href="project.url" target="_blank" rel="noopener">
          <div class="project-image-wrapper">
            <img class="project-image" v-bind:src="project.image">
            <div class="gradient-overlay"></div>
            <span class="project-title">{{project.title}}</span>
          </div>
      </div></a>
  </div>
</div>
</transition-group>
</div>

<script>
new Vue({
  el: "#app",
  data: {
    search: "",
    currentFilter: "ALL",
    projects: [
      {
        title: "F/GO Anastasia",
        url: "https://verxz-assets.carrd.co/#fine",
        image:
          "https://verxz-assets.carrd.co/assets/images/gallery02/2c952bd6_original.jpg?v=cd307c82",
        category: ["ALL", "FINE"]
      },
      {
        title: "IDOLiSH7 Osaka Sogo (Vega)",
        url: "https://verxz-assets.carrd.co/#fine",
        image:
          "https://verxz-assets.carrd.co/assets/images/gallery02/784982ae_original.jpg?v=cd307c82&fit=crop",
        category: ["ALL", "FINE"]
      },
      {
        title: "GSNK Kashima, Hori",
        url: "https://verxz-assets.carrd.co/#fine",
        image:
          "https://verxz-assets.carrd.co/assets/images/gallery09/47f32232.jpg?v=cd307c82",
        category: ["ALL", "FINE"]
      },
      {
        title: "F/GO Anastasia",
        url: "https://verxz-assets.carrd.co/#fine",
        image:
          "https://verxz-assets.carrd.co/assets/images/gallery09/4972d2bb.jpg?v=cd307c82",
        category: ["ALL", "FINE"]
      },
      {
        title: "MDZS",
        url: "https://verxz-assets.carrd.co/#fine",
        image:
          "https://verxz-assets.carrd.co/assets/images/gallery02/40b6fddd.jpg?v=cd307c82",
        category: ["ALL", "FINE"]
      },
      {
        title: "Howl",
        url: "https://verxz-assets.carrd.co/#fine",
        image:
          "https://verxz-assets.carrd.co/assets/images/gallery02/0e4c7b97.jpg?v=cd307c82",
        category: ["ALL", "FINE"]
      },
      {
        title: "TKRB",
        url: "https://verxz-assets.carrd.co/#fine",
        image:
          "https://verxz-assets.carrd.co/assets/images/gallery09/50fcc14f.jpg?v=cd307c82",
        category: ["ALL", "FINE"]
      },
      {
        title: "Halloween",
        url: "https://verxz-assets.carrd.co/#fine",
        image:
          "https://verxz-assets.carrd.co/assets/images/gallery09/b6a98c8f.jpg?v=cd307c82",
        category: ["ALL", "FINE"]
      },
      {
        title: "Onmyouji",
        url: "https://verxz-assets.carrd.co/#fine",
        image:
          "https://verxz-assets.carrd.co/assets/images/gallery02/0fa0fe1b.jpg?v=cd307c82",
        category: ["ALL", "FINE"]
      },
      {
        title: "MDZS wei ying",
        url: "https://verxz-assets.carrd.co/#fine",
        image:
          "https://verxz-assets.carrd.co/assets/images/gallery09/3051e81b.jpg?v=cd307c82",
        category: ["ALL", "FINE"]
      },
      {
        title: "The Evil Within",
        url: "https://verxz-assets.carrd.co/#fine",
        image:
          "https://verxz-assets.carrd.co/assets/images/gallery02/0b145412.jpg?v=cd307c82",
        category: ["ALL", "FINE"]
      },
      {
        title: "Halloween bishoujo",
        url: "https://verxz-assets.carrd.co/#fine",
        image:
          "https://verxz-assets.carrd.co/assets/images/gallery09/7e29630a.jpg?v=cd307c82",
        category: ["ALL", "FINE"]
      },
      {
        title: "Onmyouji Hetchrome",
        url: "https://verxz-assets.carrd.co/#fine",
        image:
          "https://verxz-assets.carrd.co/assets/images/gallery09/be7465b9.jpg?v=cd307c82",
        category: ["ALL", "FINE"]
      },
      {
        title: "Halloween",
        url: "https://verxz-assets.carrd.co/#fine",
        image:
          " https://verxz-assets.carrd.co/assets/images/gallery02/af7a4086.jpg?v=cd307c82",
        category: ["ALL", "FINE"]
      },
      {
        title: "Princess Tutu",
        url: "https://verxz-assets.carrd.co/#fine",
        image:
          "https://verxz-assets.carrd.co/assets/images/gallery09/9b86c3e7.jpg?v=cd307c82",
        category: ["ALL", "FINE"]
      },
      {
        title: "Hunter x Hunter Hisoka",
        url: "https://verxz-assets.carrd.co/#fine",
        image:
          "https://verxz-assets.carrd.co/assets/images/gallery02/ea1bdae6.jpg?v=cd307c82",
        category: ["ALL", "FINE"]
      },
      {
        title: "Haikyuu",
        url: "https://verxz-assets.carrd.co/#fine",
        image:
          " https://verxz-assets.carrd.co/assets/images/gallery09/1f7c30e8.jpg?v=cd307c82",
        category: ["ALL", "FINE"]
      },
      {
        title: "Halloween",
        url: "https://verxz-assets.carrd.co/#fine",
        image:
          "https://verxz-assets.carrd.co/assets/images/gallery02/b41bbc7f.jpg?v=cd307c82",
        category: ["ALL", "FINE"]
      },
      {
        title: "FFX",
        url: "https://verxz-assets.carrd.co/#fine",
        image:
          "https://verxz-assets.carrd.co/assets/images/gallery02/64ebb56d.jpg?v=cd307c82",
        category: ["ALL", "FINE"]
      },
      {
        title: "The Evil Within",
        url: "https://verxz-assets.carrd.co/#fine",
        image:
          "https://verxz-assets.carrd.co/assets/images/gallery09/e20ff11e.jpg?v=cd307c82",
        category: ["ALL", "FINE"]
      },
      {
        title: "Heroaca",
        url: "https://verxz-assets.carrd.co/#fine",
        image:
          "https://verxz-assets.carrd.co/assets/images/gallery02/928414ef.jpg?v=cd307c82",
        category: ["ALL", "FINE"]
      },
      {
        title: "F/GO Dantes",
        url: "https://verxz-assets.carrd.co/#fine",
        image:
          "https://verxz-assets.carrd.co/assets/images/gallery02/ca1a5d99.jpg?v=cd307c82",
        category: ["ALL", "FINE"]
      },
      {
        title: "Princess Tutu",
        url: "https://verxz-assets.carrd.co/#fine",
        image:
          "https://verxz-assets.carrd.co/assets/images/gallery09/e3f7adfa.jpg?v=cd307c82",
        category: ["ALL", "FINE"]
      },
      {
        title: "SOMA",
        url: "https://verxz-assets.carrd.co/#fine",
        image:
          "https://verxz-assets.carrd.co/assets/images/gallery09/ecbb81b2.jpg?v=cd307c82",
        category: ["ALL", "FINE"]
      },
      {
        title: "Heroaca, Maimai/Cylverxz/Straw",
        url: "https://verxz-assets.carrd.co/#fine",
        image:
          "https://verxz-assets.carrd.co/assets/images/gallery02/2341ad99.jpg?v=cd307c82",
        category: ["ALL", "FINE"]
      },
      {
        title: "Howl's Moving Castle",
        url: "https://verxz-assets.carrd.co/#fine",
        image:
          "https://verxz-assets.carrd.co/assets/images/gallery09/4828c360.jpg?v=cd307c82",
        category: ["ALL", "FINE"]
      },
      {
        title: "Kara no Kyoukai Shiki",
        url: "https://verxz-assets.carrd.co/#fine",
        image:
          "https://verxz-assets.carrd.co/assets/images/gallery02/2a82aa65.jpg?v=cd307c82",
        category: ["ALL", "FINE"]
      },
      {
        title: "Love Live",
        url: "https://verxz-assets.carrd.co/#fine",
        image:
          "https://verxz-assets.carrd.co/assets/images/gallery09/391bd2dc.jpg?v=cd307c82",
        category: ["ALL", "FINE"]
      },
      {
        title: "CAW",
        url: "https://verxz-assets.carrd.co/#fine",
        image:
          "https://verxz-assets.carrd.co/assets/images/gallery01/b9be9a0e.jpg?v=40a22126",
        category: ["ALL", "FINE"]
      },
      {
        title: "Andytown",
        url: "https://verxz-assets.carrd.co/#food",
        image:
          "https://verxz-assets.carrd.co/assets/images/gallery01/069f79a0.jpg?v=40a22126",
        category: ["ALL", "FOOD"]
      },
      {
        title: "W&W",
        url: "https://verxz-assets.carrd.co/#food",
        image:
          "https://verxz-assets.carrd.co/assets/images/gallery01/818c0404.jpg?v=40a22126",
        category: ["ALL", "FOOD"]
      },
      {
        title: "Sightglass",
        url: "https://verxz-assets.carrd.co/#food",
        image:
          "https://verxz-assets.carrd.co/assets/images/gallery01/e917d296.jpg?v=40a22126",
        category: ["ALL", "FOOD"]
      },
      {
        title: "w&w",
        url: "https://verxz-assets.carrd.co/#food",
        image:
          "https://verxz-assets.carrd.co/assets/images/gallery01/e5061c11.jpg?v=40a22126",
        category: ["ALL", "FOOD"]
      },
      {
        title: "state bird",
        url: "https://verxz-assets.carrd.co/#food",
        image:
          "https://verxz-assets.carrd.co/assets/images/gallery01/84926a9e.jpg?v=40a22126",
        category: ["ALL", "FOOD"]
      },
      {
        title: "dumpling",
        url: "https://verxz-assets.carrd.co/#food",
        image:
          "https://verxz-assets.carrd.co/assets/images/gallery01/547f0437.jpg?v=40a22126",
        category: ["ALL", "FOOD"]
      },
      {
        title: "stinking rose",
        url: "https://verxz-assets.carrd.co/#food",
        image:
          "https://verxz-assets.carrd.co/assets/images/gallery01/48a734d2.jpg?v=40a22126",
        category: ["ALL", "FOOD"]
      },
      {
        title: "interval",
        url: "https://verxz-assets.carrd.co/#food",
        image:
          "https://verxz-assets.carrd.co/assets/images/gallery01/f84b874a.jpg?v=40a22126",
        category: ["ALL", "FOOD"]
      },
      {
        title: "state bird",
        url: "https://verxz-assets.carrd.co/#food",
        image:
          "https://verxz-assets.carrd.co/assets/images/gallery01/7ddd1471.jpg?v=40a22126",
        category: ["ALL", "FOOD"]
      },
      {
        title: "Hiyori",
        url: "https://verxz-assets.carrd.co/#editorial",
        image:
          "https://verxz-assets.carrd.co/assets/images/gallery14/c1c4566a.jpg?v=0af1df38",
        category: ["ALL", "EDITORIAL"]
      },
      {
        title: "david",
        url: "https://verxz-assets.carrd.co/#editorial",
        image:
          "https://verxz-assets.carrd.co/assets/images/gallery14/840d0485.jpg?v=0af1df38",
        category: ["ALL", "EDITORIAL"]
      },
      {
        title: "enst",
        url: "https://verxz-assets.carrd.co/#editorial",
        image:
          "https://verxz-assets.carrd.co/assets/images/gallery14/66d22edd.jpg?v=0af1df38",
        category: ["ALL", "EDITORIAL"]
      },
      {
        title: "an-n",
        url: "https://verxz-assets.carrd.co/#editorial",
        image:
          "https://verxz-assets.carrd.co/assets/images/gallery14/7dd50f3b.jpg?v=0af1df38",
        category: ["ALL", "EDITORIAL"]
      },
      {
        title: "tkrb",
        url: "https://verxz-assets.carrd.co/#editorial",
        image:
          "https://verxz-assets.carrd.co/assets/images/gallery14/a3bc854f.jpg?v=0af1df38",
        category: ["ALL", "EDITORIAL"]
      },
      {
        title: "ritsu cover",
        url: "https://verxz-assets.carrd.co/#editorial",
        image:
          "https://verxz-assets.carrd.co/assets/images/gallery14/03d90336.jpg?v=0af1df38",
        category: ["ALL", "EDITORIAL"]
      },
      {
        title: "davinci",
        url: "https://verxz-assets.carrd.co/#editorial",
        image:
          "https://verxz-assets.carrd.co/assets/images/gallery14/5cfe1ee2.jpg?v=0af1df38",
        category: ["ALL", "EDITORIAL"]
      },
      {
        title: "sena",
        url: "https://verxz-assets.carrd.co/#editorial",
        image:
          "https://verxz-assets.carrd.co/assets/images/gallery14/416cd3fc.jpg?v=0af1df38",
        category: ["ALL", "EDITORIAL"]
      },
      {
        title: "natsuya",
        url: "https://verxz-assets.carrd.co/#editorial",
        image:
          "https://verxz-assets.carrd.co/assets/images/gallery14/d0725f1b.jpg?v=0af1df38",
        category: ["ALL", "EDITORIAL"]
      },
      {
        title: "yuuri",
        url: "https://verxz-assets.carrd.co/#editorial",
        image:
          "https://verxz-assets.carrd.co/assets/images/gallery14/1c6f52ac.jpg?v=0af1df38",
        category: ["ALL", "EDITORIAL"]
      },
      {
        title: "arashi",
        url: "https://verxz-assets.carrd.co/#editorial",
        image:
          "https://verxz-assets.carrd.co/assets/images/gallery14/a9440120.jpg?v=0af1df38",
        category: ["ALL", "EDITORIAL"]
      },
      {
        title: "natsuya",
        url: "https://verxz-assets.carrd.co/#editorial",
        image:
          "https://verxz-assets.carrd.co/assets/images/gallery14/911e03d0.jpg?v=0af1df38",
        category: ["ALL", "EDITORIAL"]
      },
      {
        title: "ritsu arashi",
        url: "https://verxz-assets.carrd.co/#editorial",
        image:
          "https://verxz-assets.carrd.co/assets/images/gallery14/932f5352.jpg?v=0af1df38",
        category: ["ALL", "EDITORIAL"]
      },
      {
        title: "david",
        url: "https://verxz-assets.carrd.co/#editorial",
        image:
          " https://verxz-assets.carrd.co/assets/images/gallery14/aa289951.jpg?v=0af1df38",
        category: ["ALL", "EDITORIAL"]
      },
      {
        title: "ritsu an-n",
        url: "https://verxz-assets.carrd.co/#editorial",
        image:
          "https://verxz-assets.carrd.co/assets/images/gallery14/564c4576.jpg?v=0af1df38",
        category: ["ALL", "EDITORIAL"]
      },
      {
        title: "heroaca",
        url: "https://verxz-assets.carrd.co/#editorial",
        image:
          "https://verxz-assets.carrd.co/assets/images/gallery14/aecd38d4.jpg?v=0af1df38",
        category: ["ALL", "EDITORIAL"]
      },
      {
        title: "sena cover",
        url: "https://verxz-assets.carrd.co/#editorial",
        image:
          "https://verxz-assets.carrd.co/assets/images/gallery14/4af7a548.jpg?v=0af1df38",
        category: ["ALL", "EDITORIAL"]
      },
      {
        title: "bakugo",
        url: "https://verxz-assets.carrd.co/#editorial",
        image:
          "https://verxz-assets.carrd.co/assets/images/gallery14/c006b319.jpg?v=0af1df38",
        category: ["ALL", "EDITORIAL"]
      },
      {
        title: "hiyori",
        url: "https://verxz-assets.carrd.co/#editorial",
        image:
          "https://verxz-assets.carrd.co/assets/images/gallery14/1e8485bd.jpg?v=0af1df38",
        category: ["ALL", "EDITORIAL"]
      },
      {
        title: "soma",
        url: "https://verxz-assets.carrd.co/#editorial",
        image:
          "https://verxz-assets.carrd.co/assets/images/gallery14/f1d63c03.jpg?v=0af1df38",
        category: ["ALL", "EDITORIAL"]
      },
      {
        title: "natuya",
        url: "https://verxz-assets.carrd.co/#editorial",
        image:
          "https://verxz-assets.carrd.co/assets/images/gallery14/b4f07b15.jpg?v=0af1df38",
        category: ["ALL", "EDITORIAL"]
      },
      {
        title: "ikuya",
        url: "https://verxz-assets.carrd.co/#editorial",
        image:
          "https://verxz-assets.carrd.co/assets/images/gallery14/a0f6b502.jpg?v=0af1df38",
        category: ["ALL", "EDITORIAL"]
      },
      {
        title: "ikuya",
        url: "https://verxz-assets.carrd.co/#editorial",
        image:
          "https://verxz-assets.carrd.co/assets/images/gallery14/d35ff494.jpg?v=0af1df38",
        category: ["ALL", "EDITORIAL"]
      },
      {
        title: "ritsu recording",
        url: "https://verxz-assets.carrd.co/#editorial",
        image:
          "https://verxz-assets.carrd.co/assets/images/gallery14/04da0e17.jpg?v=0af1df38",
        category: ["ALL", "EDITORIAL"]
      },
      {
        title: "denki jiro",
        url: "https://verxz-assets.carrd.co/#editorial",
        image:
          "https://verxz-assets.carrd.co/assets/images/gallery14/111dfac7.jpg?v=0af1df38",
        category: ["ALL", "EDITORIAL"]
      },
      {
        title: "karamatsu",
        url: "https://verxz-assets.carrd.co/#editorial",
        image:
          "https://verxz-assets.carrd.co/assets/images/gallery14/2fe3e3be.jpg?v=0af1df38",
        category: ["ALL", "EDITORIAL"]
      },
      {
        title: "ritsu recording",
        url: "https://verxz-assets.carrd.co/#editorial",
        image:
          "https://verxz-assets.carrd.co/assets/images/gallery14/b7ccbb37.jpg?v=0af1df38",
        category: ["ALL", "EDITORIAL"]
      },
      {
        title: "sena an-n",
        url: "https://verxz-assets.carrd.co/#editorial",
        image:
          "https://verxz-assets.carrd.co/assets/images/gallery14/3495d70c.jpg?v=0af1df38",
        category: ["ALL", "EDITORIAL"]
      },
      {
        title: "arashi j-ns",
        url: "https://verxz-assets.carrd.co/#editorial",
        image:
          "https://verxz-assets.carrd.co/assets/images/gallery14/0b54888b.jpg?v=0af1df38",
        category: ["ALL", "EDITORIAL"]
      },
      {
        title: "",
        url: "https://verxz-assets.carrd.co/#flora",
        image:
          "https://verxz-assets.carrd.co/assets/images/gallery15/bf5eace7.jpg?v=0af1df38",
        category: ["ALL", "FLORA"]
      },
      {
        title: "",
        url: "https://verxz-assets.carrd.co/#flora",
        image:
          "https://verxz-assets.carrd.co/assets/images/gallery15/7526288d.jpg?v=0af1df38",
        category: ["ALL", "FLORA"]
      },
      {
        title: "",
        url: "https://verxz-assets.carrd.co/#flora",
        image:
          "https://verxz-assets.carrd.co/assets/images/gallery15/741efd6b.jpg?v=0af1df38",
        category: ["ALL", "FLORA"]
      },
      {
        title: "",
        url: "https://verxz-assets.carrd.co/#flora",
        image:
          "https://verxz-assets.carrd.co/assets/images/gallery15/42af6995.jpg?v=0af1df38",
        category: ["ALL", "FLORA"]
      },
      {
        title: "",
        url: "https://verxz-assets.carrd.co/#flora",
        image:
          "https://verxz-assets.carrd.co/assets/images/gallery15/3e20f776.jpg?v=0af1df38",
        category: ["ALL", "FLORA"]
      },
      {
        title: "",
        url: "https://verxz-assets.carrd.co/#flora",
        image:
          "https://verxz-assets.carrd.co/assets/images/gallery15/5fa44178.jpg?v=0af1df38",
        category: ["ALL", "FLORA"]
      },
      {
        title: "",
        url: "https://verxz-assets.carrd.co/#landscape",
        image:
          "https://verxz-assets.carrd.co/assets/images/gallery16/339c0d8d.jpg?v=0af1df38",
        category: ["ALL", "LANDSCAPE"]
      },
      {
        title: "",
        url: "https://verxz-assets.carrd.co/#landscape",
        image:
          "https://verxz-assets.carrd.co/assets/images/gallery16/3ec4ee42.jpg?v=0af1df38",
        category: ["ALL", "LANDSCAPE"]
      },
      {
        title: "",
        url: "https://verxz-assets.carrd.co/#landscape",
        image:
          "https://verxz-assets.carrd.co/assets/images/gallery16/baf9d012.jpg?v=0af1df38",
        category: ["ALL", "LANDSCAPE"]
      },
      {
        title: "",
        url: "https://verxz-assets.carrd.co/#landscape",
        image:
          "https://verxz-assets.carrd.co/assets/images/gallery16/6414213a.jpg?v=0af1df38",
        category: ["ALL", "LANDSCAPE"]
      },
      {
        title: "",
        url: "https://verxz-assets.carrd.co/#landscape",
        image:
          "https://verxz-assets.carrd.co/assets/images/gallery16/87ab8221.jpg?v=0af1df38",
        category: ["ALL", "LANDSCAPE"]
      },
      {
        title: "",
        url: "https://verxz-assets.carrd.co/#landscape",
        image:
          "https://verxz-assets.carrd.co/assets/images/gallery16/221c251d.jpg?v=0af1df38",
        category: ["ALL", "LANDSCAPE"]
      },
      {
        title: "",
        url: "https://verxz-assets.carrd.co/#landscape",
        image:
          "https://verxz-assets.carrd.co/assets/images/gallery16/20ce4453.jpg?v=0af1df38",
        category: ["ALL", "LANDSCAPE"]
      },
      {
        title: "",
        url: "https://verxz-assets.carrd.co/#landscape",
        image:
          "https://verxz-assets.carrd.co/assets/images/gallery16/80576d93.jpg?v=0af1df38",
        category: ["ALL", "LANDSCAPE"]
      },
      {
        title: "",
        url: "https://verxz-assets.carrd.co/#misc",
        image:
          "https://verxz-assets.carrd.co/assets/images/gallery17/73753437.jpg?v=0af1df38",
        category: ["ALL", "MISC"]
      },
      {
        title: "",
        url: "https://verxz-assets.carrd.co/#misc",
        image:
          "https://verxz-assets.carrd.co/assets/images/gallery17/1ae8c6f6.jpg?v=0af1df38",
        category: ["ALL", "MISC"]
      },
      {
        title: "",
        url: "https://verxz-assets.carrd.co/#misc",
        image:
          "https://verxz-assets.carrd.co/assets/images/gallery17/c494c51f.jpg?v=0af1df38",
        category: ["ALL", "MISC"]
      },
      {
        title: "",
        url: "https://verxz-assets.carrd.co/#misc",
        image:
          "https://verxz-assets.carrd.co/assets/images/gallery17/4029c035.jpg?v=0af1df38",
        category: ["ALL", "MISC"]
      },
      {
        title: "wedding",
        url: "https://verxz-assets.carrd.co/#ocassions",
        image:
          "https://verxz-assets.carrd.co/assets/images/gallery18/4df99f81.jpg?v=0af1df38",
        category: ["ALL", "OCASSIONS"]
      },
      {
        title: "",
        url: "https://verxz-assets.carrd.co/#ocassions",
        image:
          "https://verxz-assets.carrd.co/assets/images/gallery18/62b2c288.jpg?v=0af1df38",
        category: ["ALL", "OCASSIONS"]
      },
      {
        title: "",
        url: "https://verxz-assets.carrd.co/#ocassions",
        image:
          "https://verxz-assets.carrd.co/assets/images/gallery18/53374047.jpg?v=0af1df38",
        category: ["ALL", "OCASSIONS"]
      },
      {
        title: "Grad",
        url: "https://verxz-assets.carrd.co/#ocassions",
        image:
          "https://verxz-assets.carrd.co/assets/images/gallery18/de0a2d60.jpg?v=0af1df38",
        category: ["ALL", "OCASSIONS"]
      },
      {
        title: "Grad",
        url: "https://verxz-assets.carrd.co/#ocassions",
        image:
          "https://verxz-assets.carrd.co/assets/images/gallery18/781f18b6.jpg?v=0af1df38",
        category: ["ALL", "OCASSIONS"]
      },
      {
        title: "Jess Grad",
        url: "https://verxz-assets.carrd.co/#ocassions",
        image:
          "https://verxz-assets.carrd.co/assets/images/gallery18/5bc0ae3a.jpg?v=0af1df38",
        category: ["ALL", "OCASSIONS"]
      },
      {
        title: "Jess ",
        url: "https://verxz-assets.carrd.co/#ocassions",
        image:
          "https://verxz-assets.carrd.co/assets/images/gallery18/4b59bd65.jpg?v=0af1df38",
        category: ["ALL", "OCASSIONS"]
      },
      {
        title: "Event: Brilliant Day",
        url: "https://verxz-assets.carrd.co/#ocassions",
        image:
          "https://verxz-assets.carrd.co/assets/images/gallery18/dd1339fe.jpg?v=0af1df38",
        category: ["ALL", "OCASSIONS"]
      },
      {
        title: "i7",
        url: "https://verxz-assets.carrd.co/#ocassions",
        image:
          "https://verxz-assets.carrd.co/assets/images/gallery18/fc4aa38a.jpg?v=0af1df38",
        category: ["ALL", "OCASSIONS"]
      },
      {
        title: "Megumi",
        url: "https://verxz-assets.carrd.co/#ocassions",
        image:
          "https://verxz-assets.carrd.co/assets/images/gallery18/626a4414.jpg?v=0af1df38",
        category: ["ALL", "OCASSIONS"]
      },
      {
        title: "",
        url: "https://verxz-assets.carrd.co/#ocassions",
        image:
          "https://verxz-assets.carrd.co/assets/images/gallery18/71f3091c.jpg?v=0af1df38",
        category: ["ALL", "OCASSIONS"]
      },
      {
        title: "beach",
        url: "https://verxz-assets.carrd.co/#ocassions",
        image:
          "https://verxz-assets.carrd.co/assets/images/gallery18/27d54c71.jpg?v=0af1df38",
        category: ["ALL", "OCASSIONS"]
      },
      {
        title: "baseball",
        url: "https://verxz-assets.carrd.co/#ocassions",
        image:
          "https://verxz-assets.carrd.co/assets/images/gallery18/86498774.jpg?v=0af1df38",
        category: ["ALL", "OCASSIONS"]
      },
      {
        title: "HORI",
        url: "https://verxz-assets.carrd.co/#portraits",
        image:
          "https://verxz-assets.carrd.co/assets/images/gallery19/9991fd8a.jpg?v=0af1df38",
        category: ["ALL", "PORTRAITS"]
      },
      {
        title: "Viktor",
        url: "https://verxz-assets.carrd.co/#portraits",
        image:
          "https://verxz-assets.carrd.co/assets/images/gallery19/c6fe46de.jpg?v=0af1df38",
        category: ["ALL", "PORTRAITS"]
      },
      {
        title: "",
        url: "https://verxz-assets.carrd.co/#portraits",
        image:
          "https://verxz-assets.carrd.co/assets/images/gallery19/a0ae77de.jpg?v=0af1df38",
        category: ["ALL", "PORTRAITS"]
      },
      {
        title: "",
        url: "https://verxz-assets.carrd.co/#portraits",
        image:
          "https://verxz-assets.carrd.co/assets/images/gallery19/058e6af9.jpg?v=0af1df38",
        category: ["ALL", "PORTRAITS"]
      },
      {
        title: "",
        url: "https://verxz-assets.carrd.co/#portraits",
        image:
          "https://verxz-assets.carrd.co/assets/images/gallery19/582204ce.jpg?v=0af1df38",
        category: ["ALL", "PORTRAITS"]
      },
      {
        title: "",
        url: "https://verxz-assets.carrd.co/#portraits",
        image:
          "https://verxz-assets.carrd.co/assets/images/gallery19/c97e97e8.jpg?v=0af1df38",
        category: ["ALL", "PORTRAITS"]
      },
      {
        title: "",
        url: "https://verxz-assets.carrd.co/#portraits",
        image:
          "https://verxz-assets.carrd.co/assets/images/gallery19/86feba76.jpg?v=0af1df38",
        category: ["ALL", "PORTRAITS"]
      },
      {
        title: "ayanami",
        url: "https://verxz-assets.carrd.co/#portraits",
        image:
          "https://verxz-assets.carrd.co/assets/images/gallery19/aa5ac32a.jpg?v=0af1df38",
        category: ["ALL", "PORTRAITS"]
      },
      {
        title: "bakugo",
        url: "https://verxz-assets.carrd.co/#portraits",
        image:
          "https://verxz-assets.carrd.co/assets/images/gallery19/b1580344.jpg?v=0af1df38",
        category: ["ALL", "PORTRAITS"]
      },
      {
        title: "",
        url: "https://verxz-assets.carrd.co/#portraits",
        image:
          "https://verxz-assets.carrd.co/assets/images/gallery19/65cd36e5.jpg?v=0af1df38",
        category: ["ALL", "PORTRAITS"]
      },
      {
        title: "miyuki",
        url: "https://verxz-assets.carrd.co/#portraits",
        image:
          "https://verxz-assets.carrd.co/assets/images/gallery19/c352e47b.jpg?v=0af1df38",
        category: ["ALL", "PORTRAITS"]
      },
      {
        title: "toono",
        url: "https://verxz-assets.carrd.co/#portraits",
        image:
          "https://verxz-assets.carrd.co/assets/images/gallery19/c20d502c.jpg?v=0af1df38",
        category: ["ALL", "PORTRAITS"]
      },
      {
        title: "",
        url: "https://verxz-assets.carrd.co/#portraits",
        image:
          "https://verxz-assets.carrd.co/assets/images/gallery19/993705c4.jpg?v=0af1df38",
        category: ["ALL", "PORTRAITS"]
      }
    ]
  },

  computed: {
    filteredAndSearched: function () {
      return this.projects.filter((project) => {
        return (
          project.title.toLowerCase().includes(this.search.toLowerCase()) &&
          project.category.indexOf(this.currentFilter) !== -1
        );
      });
    }
  },

  methods: {
    setFilter: function (project) {
      this.currentFilter = project;
    }
  }
});

</script>