# Vue Responsive Mixin

Vue Responsive Mixin is a simple, lightweight Vue.js mixin designed to help you easily manage and react to changes in
window size within your Vue components. This mixin automatically updates component data with the current window width
and height upon initialization and when the browser window is resized, leveraging lodash's debounce function to optimize
performance.

## Features

- Automatically tracks and updates window width and height.
- Debounced window resize event listener to minimize performance impact.
- Easy to integrate with any Vue.js project.
- Leverages lodash's debounce for efficient event handling.

## Installation

To use the Vue Responsive Mixin, you need to ensure `Vue` and `lodash.debounce` are installed in your project. If they
are not installed, you can add them by running:

```
npm install vue lodash.debounce --save
```

## Usage

To use this mixin, simply import it into your Vue component or globally register it to make it available across all
components in your Vue application.

### Importing into a Single Component

```javascript
import Vue from 'vue';
import responsiveMixin from './path/to/vue-responsive-mixin';

export default {
  mixins: [responsiveMixin],
// Your component's options...
};
```

### Global Registration

```javascript
import Vue from 'vue';
import responsiveMixin from './path/to/vue-responsive-mixin';

Vue.mixin(responsiveMixin);
```

After importing and registering the mixin, the `windowWidth` and `windowHeight` data properties will automatically be
available in your Vue component and will update whenever the window is resized.

## Example

Here's a simple example of how you might use the `windowWidth` and `windowHeight` data properties in a component:

```html

<template>
    <div>
        <p>Window width: {{ windowWidth }}px</p>
        <p>Window height: {{ windowHeight }}px</p>
    </div>
</template>

<script>
    import responsiveMixin from './path/to/vue-responsive-mixin';

    export default {
        mixins: [responsiveMixin]
    };
</script>
```

## Contributing

Contributions to Vue Responsive Mixin are welcome! Feel free to submit issues or pull requests
on [GitHub](https://github.com/your-repo/vue-responsive-mixin).

## License

This project is licensed under the MIT License - see the LICENSE file for details.
