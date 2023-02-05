<script>
    export let showModal = false;

    function closeModal() {
        showModal = false;
    }
</script>

<div class="modal">
    <div class="modal-content" class:hidden={!showModal}>
        <slot />
    </div>
    <div
        class="modal-backdrop"
        class:hidden={!showModal}
        on:click|preventDefault|stopPropagation={closeModal}
    />
</div>

<style lang="scss">
    .modal-content {
        position: fixed;
        z-index: 20;
        top: 50%;
        left: 50%;
        border-radius: 6px;
        overflow: hidden;
        transform: translate(-50%, -50%);
    }
    .modal-backdrop {
        position: fixed;
        inset: 0;
        background: #000000;
        mix-blend-mode: normal;
        opacity: 0.5;
        z-index: 10;
    }

    .hidden {
        display: none;
    }
</style>
