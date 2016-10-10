<script type="text/javascript">
	export default {
		route: {
		    activate: function (transition) {
		      console.log('hook-example activated!')
		      transition.next()
		    },
		    deactivate: function (transition) {
		      console.log('hook-example deactivated!')
		      transition.next()
		    }
		}
	}
</script>

<template>
	<div style="height: 667px; width: 100%; background-color: orange;">456</div>
</template>