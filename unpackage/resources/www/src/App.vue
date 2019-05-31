<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
	padding: 0;
	margin: 0;
}
img{display: block;width: 100%;height: 100%;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  		width: 100%;
		overflow: hidden;
}
@font-face {
  font-family: 'iconfont';  /* project id 1206839 */
  src: url('//at.alicdn.com/t/font_1206839_68msvn4oxfw.eot');
  src: url('//at.alicdn.com/t/font_1206839_68msvn4oxfw.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1206839_68msvn4oxfw.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1206839_68msvn4oxfw.woff') format('woff'),
  url('//at.alicdn.com/t/font_1206839_68msvn4oxfw.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1206839_68msvn4oxfw.svg#iconfont') format('svg');
}
.icon{
	 font-family: 'iconfont';
	 vertical-align: middle;
}
</style>
