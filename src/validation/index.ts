import { extend, setInteractionMode } from 'vee-validate';
import { required } from 'vee-validate/dist/rules';

// https://logaretm.github.io/vee-validate/guide/interaction-and-ux.html#eager
setInteractionMode('eager');

// Rules are not installed by default. You need to import and install them yourself.
// This allows you to only import what you need while keeping the bundle size for your
// application to minimum. Read more at:
// https://logaretm.github.io/vee-validate/guide/rules.html#importing-the-rules
extend('required', {
	...required,
	// If you need custom messages, you can set it on each rule.
	// See: https://logaretm.github.io/vee-validate/guide/basics.html#messages
	// message: 'Your custom message here'
});

// You can make your own rules if you need one:
// Read more at: https://logaretm.github.io/vee-validate/guide/basics.html#adding-rules
