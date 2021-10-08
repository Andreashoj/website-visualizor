<script setup lang="ts">
import Header from './components/Header.vue'
import Sidebar from './components/Sidebar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
	<div class="app-wrapper">
		<Header />
		<Sidebar />
		<RouterView />
		<Footer />
	</div>
</template>

<style>
</style>
