import { defineMarkdocConfig, component } from '@astrojs/markdoc/config';
import starlightMarkdoc from '@astrojs/starlight-markdoc';


export default defineMarkdocConfig({
  extends: [starlightMarkdoc()],
  tags: {
    plus: {
      render: component('./src/components/Plus.astro'),
      attributes: {
      },
    },
    image: {
      render: component('./src/components/Image.astro'),
      attributes: {
        // Markdoc requires type defs for each attribute.
        // These should mirror the `Props` type of the component
        // you are rendering.
        // See Markdoc's documentation on defining attributes
        // https://markdoc.dev/docs/attributes#defining-attributes
        filename: { type: String },
      },
    }
  },
});