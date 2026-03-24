<template>
  <div class="gradient-bg">
    <!-- Orbs animados -->
    <div class="orb orb-1" />
    <div class="orb orb-2" />
    <div class="orb orb-3" />
    <div class="orb orb-4" />

    <!-- Noise overlay -->
    <div class="noise" />

    <!-- Conteúdo -->
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script setup>
// Componente puramente visual — sem props obrigatórias.
// Use <AnimatedGradient> como wrapper de página ou seção.
</script>

<style scoped>
/* ── Variáveis ─────────────────────────────────────── */
.gradient-bg {
  --c1: #0d0d0d;
  --c2: #111118;
  --orb-a: #706e71; /* violeta profundo  */
  --orb-b: #5f6162; /* azul noite        */
  --orb-c: #2b2c2c; /* verde-escuro      */
  --orb-d: #3b3b3d; /* índigo            */
  --blur: 120px;
  --size: 55vmax;

  position: relative;
  width: 100%;
  min-height: 100vh;
  background: var(--c1);
  overflow: hidden;
  isolation: isolate;
}

/* ── Orbs ──────────────────────────────────────────── */
.orb {
  position: absolute;
  border-radius: 50%;
  width: var(--size);
  height: var(--size);
  filter: blur(var(--blur));
  opacity: 0.55;
  will-change: transform;
}

.orb-1 {
  background: radial-gradient(circle at 40% 40%, var(--orb-a), transparent 70%);
  top: -20%;
  left: -10%;
  animation: drift1 18s ease-in-out infinite;
}

.orb-2 {
  background: radial-gradient(circle at 60% 60%, var(--orb-b), transparent 70%);
  bottom: -15%;
  right: -10%;
  animation: drift2 22s ease-in-out infinite;
}

.orb-3 {
  background: radial-gradient(circle at 50% 50%, var(--orb-c), transparent 70%);
  top: 40%;
  left: 35%;
  width: calc(var(--size) * 0.7);
  height: calc(var(--size) * 0.7);
  animation: drift3 26s ease-in-out infinite;
}

.orb-4 {
  background: radial-gradient(circle at 50% 50%, var(--orb-d), transparent 70%);
  top: -10%;
  right: 15%;
  width: calc(var(--size) * 0.65);
  height: calc(var(--size) * 0.65);
  animation: drift4 20s ease-in-out infinite;
}

/* ── Noise ─────────────────────────────────────────── */
.noise {
  position: absolute;
  inset: -50%;
  width: 200%;
  height: 200%;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E");
  opacity: 0.035;
  pointer-events: none;
}

/* ── Conteúdo ──────────────────────────────────────── */
.content {
  position: relative;
  z-index: 10;
}

/* ── Keyframes ─────────────────────────────────────── */
@keyframes drift1 {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(8%, 12%) scale(1.08);
  }
  66% {
    transform: translate(-5%, 6%) scale(0.95);
  }
}

@keyframes drift2 {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(-10%, -8%) scale(1.05);
  }
  66% {
    transform: translate(6%, -12%) scale(1.1);
  }
}

@keyframes drift3 {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }
  50% {
    transform: translate(-8%, 10%) scale(1.12);
  }
}

@keyframes drift4 {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }
  40% {
    transform: translate(10%, 8%) scale(0.9);
  }
  80% {
    transform: translate(-6%, 4%) scale(1.05);
  }
}
</style>
