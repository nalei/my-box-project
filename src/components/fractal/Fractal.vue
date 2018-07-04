<template>
  <div class="container">
    <div class="row">

      <div class="col-md-8 color-map" id="canvasContainer">
        <h4>Color map:</h4>
        <span class="info"><b>{{ drawing }}</b></span>
        <fdraw-rw v-model="params" @progress="progress" @stat="stat=$event"></fdraw-rw>
      </div>
      <div class="col-md-4 tools">
        <h4>Tools:</h4>
        <div class="thumbnail">
          <div class="form-group">
            <label class="control-label info">Размер:</label>
            <div class="value">
              <input :value="params.width" @input="pushToImmutable('width', $event)" title="Width" disabled>
              <span>&times;</span>
              <input :value="params.height" @change="pushToImmutable('height', $event)" title="Height" disabled>
            </div>
          </div>
          <div class="form-group">
            <label class="control-label info">Итераций:</label>
            <input :value="params.resolution" @change="pushToImmutable('resolution', $event)" title="Resolution">
          </div>
          <div class="form-group">
            <label class="control-label info">Палитра:</label>
            <div class="value">
              <select :value="selectedPalette" @change="selectPalette" title="Palette">
                <option disabled value="custom">Select palette</option>
                <option value="bw">b&amp;w</option>
                <option value="wb">w&amp;b</option>
                <option value="rb">rainbow</option>
                <option value="wk">wiki</option>
              </select>
            </div>
          </div>
          <div class="info">x:&nbsp;&nbsp;&nbsp;&nbsp;{{ params.x }}</div>
          <div class="info">y:&nbsp;&nbsp;&nbsp;&nbsp;{{ params.y}}</div>
          <div class="info">zoom: {{ params.zoom }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import FdrawR from '@/fdraw/components/FdrawR'
  import FdrawRw from '@/fdraw/components/FdrawRw'
  import getColor from '@/fdraw/services/getColor'
  import resizeSensor from '@/utilities/resize-sensor'
  export default {
    components: { FdrawR, FdrawRw },
    data: () => ({
      params: {
        width: 339,
        height: 440,
        x: 0.1382337141429088,
        y: 0.5170517061830592,
        zoom: 1122238.5468749993,
        resolution: 170,
        palette: getColor.wb
      },
      drawing: '',
      stat: [],
      palette: getColor.wb,
    }),
    mounted () {
      // ToDo: сделать метод для ресайза
      let element = document.getElementById('canvasContainer')
      let n = element.clientWidth - 36
      if (!isNaN(n) && n > 0) {
          this.params = { ...this.params, ['width']: n }
      }
      new ResizeSensor(element, () => {
        n = element.clientWidth - 36
        if (!isNaN(n) && n > 0) {
          this.params = { ...this.params, ['width']: n }
        }
      })
    },
    computed: {
      selectedPalette () {
        switch (this.params.palette) {
          case getColor.bw: return 'bw'
          case getColor.wb: return 'wb'
          case getColor.rb: return 'rb'
          case getColor.wk: return 'wk'
          default: return 'custom'
        }
      }
    },
    methods: {
      selectPalette (event) {
        const palette = getColor[event.target.value]
        this.params = { ...this.params, palette }
        this.palette = palette
      },
      pushToImmutable (key, event) {
        const n = +event.target.value
        if (!isNaN(n) && n > 0) {
          this.params = { ...this.params, [key]: n }
        }
      },
      progress (event) {
        this.drawing = event ? 'Drawing...' : 'Перетаскивание, [+] [-] для изменения масштаба'
      }
    }
  }
</script>

<style>
  .color-map {
    margin-bottom: 20px;
  }
  .color-map h4 {
    margin-bottom: 0;
    margin-left: 4px;
  }
  .color-map .info {
    margin-left: 15px;
  }
  .tools h4 {
    margin-bottom: 19px;
    margin-left: 4px;
  }
  .tools .thumbnail {
    padding: 10px;
  }
  .tools label {
    width: 65px;
    /* float: left; */
  }
  .tools input {
    margin: 4px;
    width: 42px;
    padding: 2px;
    text-align: center;
  }
  .info {
    font-family: monospace;
    font-size: 0.8em;
  }
</style>
