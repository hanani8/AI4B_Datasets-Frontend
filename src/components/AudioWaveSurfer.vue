<script setup>
import { ref, watch, onMounted } from 'vue';
import WaveSurfer from 'wavesurfer.js';

const audioFilepath = ref('');
const dataset = ref("");
const text = ref("");

// Function to fetch audio as a blob
async function fetchAudioBlob(url) {
    try {
        const api = import.meta.env.PUBLIC_API_URL;
        const response = await fetch(`${api}/serve_file/${dataset.value}?filename=${url}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch audio: ${response.statusText}`);
        }
        return await response.blob();
    } catch (error) {
        console.error('Error fetching audio:', error);
        return null;
    }
}

// Function to initialize and load the audio into WaveSurfer
async function initializeWaveSurfer(fileUrl) {
    if (!fileUrl) return;
    const audioBlob = await fetchAudioBlob(fileUrl);
    if (audioBlob && wavesurfer.value) {
        wavesurfer.value.loadBlob(audioBlob);
    }
}

const wavesurfer = ref(null);

onMounted(() => {
    // Create WaveSurfer instance
    wavesurfer.value = WaveSurfer.create({
        container: "#audio-player",
        waveColor: "rgb(255, 148, 77)",
        progressColor: 'rgb(100, 0, 100)',
    });

    // Play/pause on click
    wavesurfer.value.on('click', () => {
        wavesurfer.value.playPause();
    });

    // Listen to custom event for the selected audio filepath
    window.addEventListener('audio-selected', (event) => {
        audioFilepath.value = event.detail.audio_filepath;
        text.value = event.detail.text;
        dataset.value = event.detail.dataset;
    });

    wavesurfer.value.on('destroy', () => {
        audioFilepath.value = '';
        text.value = '';
        dataset.value = '';
    });
});

// Watch for changes in audioFilepath and reinitialize WaveSurfer
watch(audioFilepath, (newUrl) => {
    if (newUrl) {
        initializeWaveSurfer(newUrl);
    }
});
</script>

<template>
    <div>
        <div id="audio-player"></div>
        <div id="text" class="flex flex-row mx-auto mt-2">
            <span class="text-xl font-normal">
                <strong>Transcript:</strong> {{ text }}
            </span>
        </div>
    </div>
</template>
