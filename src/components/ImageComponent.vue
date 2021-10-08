<script setup lang="ts">
</script>

<template>
	<div class="image-box">
		<h1>Test image</h1>
		<p>tekst der beksirver billedet</p>
		<img src="https://source.unsplash.com/random" alt="">
	</div>
</template>

<style lang="scss">
.image-box {
	height: 100%;
	width: 100%;
	overflow: hidden;
	img {
		height: 100%;
		width: 100%;
		object-fit: cover;
	}
}
</style>