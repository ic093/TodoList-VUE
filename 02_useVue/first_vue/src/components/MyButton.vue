<template>
    <button @click="handleClick">{{ text }}</button>
</template>

<script setup>
const text = 'Click me';

function handleClick() {
alert('Button clicked!');
}
</script>