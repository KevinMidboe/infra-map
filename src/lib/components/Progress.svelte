<script lang="ts">
	export let value: number | string;
	export let max: number = 100;
</script>

<label for="file">Print progress</label>

<progress id="file" class="completed" {max} {value}>{value}%</progress>

<style lang="scss">
	label {
		font-weight: 500;
	}

	progress {
		height: 30px;
		width: 100%;
		border: 1px solid #ced7e6;
		opacity: 0.6;
		z-index: 1;
		background-color: rgba(0, 0, 0, 0);
		margin-top: 0.5rem;

		&.completed::-webkit-progress-value {
			background: unset !important;
			animation: unset !important;
			background-size: unset !important;
			background-image: linear-gradient(
				to right,
				rgb(255 80 24 / 48%),
				rgb(255 80 24 / 92%)
			) !important;
		}

		&,
		&::-webkit-progress-inner-element,
		&::-webkit-progress-value,
		&::-webkit-progress-bar {
			border-radius: 0.5rem;
		}

		&::-webkit-progress-value {
			border: 1px solid #a92200;
			margin-left: -1px;
			height: calc(100% + 2px);
			transform: translateY(-1px);
			background-color: rgba(0, 0, 0, 0);

			--width: 12px;
			background: repeating-linear-gradient(
				45deg,
				rgb(255, 80, 24),
				rgb(255, 80, 24) var(--width),
				rgb(255 80 24 / 48%) var(--width),
				rgb(255 80 24 / 48%) calc(var(--width) * 2)
			);

			background-size: 200% 100%;
			animation: progress-animation 14s linear infinite;
		}

		@keyframes progress-animation {
			0% {
				background-position: -100% 0;
			}
			100% {
				background-position: 100% 0;
			}
		}

		&::-webkit-progress-bar {
			background: #f9f5f3;
		}
	}
</style>
