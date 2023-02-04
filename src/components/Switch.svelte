<script lang="ts">
    export let checked = false;
    export let disabled = false;
</script>

<label class="switch">
    <input type="checkbox" {disabled} bind:checked />
    <span class="slider" />
</label>

<style lang="scss">
    .switch {
        position: relative;
        display: inline-block;
        width: 3rem;
        height: 1.5rem;

        input {
            opacity: 0;
            width: 0;
            height: 0;

            &:checked + .slider:before {
                -webkit-transform: translate(1.625rem, 50%);
                -ms-transform: translate(1.625rem, 50%);
                transform: translate(1.625rem, 50%);
            }
        }
    }

    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        -webkit-transition: 0.4s;
        transition: 0.4s;
        border-radius: 100px;
        background-color: $white;

        &:before {
            position: absolute;
            content: '';
            height: 0.875rem;
            width: 0.875rem;
            left: 0.25rem;
            bottom: 50%;
            transform: translateY(50%);
            background-color: $violet;
            -webkit-transition: 0.4s;
            transition: 0.4s;
            border-radius: 50%;
        }

        &:hover {
            &:before {
                background-color: $light-violet;
            }
        }
    }
</style>
