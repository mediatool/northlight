import React from 'react'
import ReferencePage from '../../reference-page'

const CarouselPage = () => (
  <ReferencePage data={ {
    tags: {},
    filePath: 'lib/components/carousel/carousel.tsx',
    description: '',
    displayName: 'Carousel',
    methods: [],
    props: {
      showArrows: {
        defaultValue: {
          value: 'true',
        },
        description: '',
        name: 'showArrows',
        parent: {
          fileName: 'framework/lib/components/carousel/types.ts',
          name: 'CarouselProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/carousel/types.ts',
            name: 'CarouselProps',
          },
        ],
        required: false,
        type: {
          name: 'enum',
          raw: 'boolean',
          value: [
            {
              value: 'false',
            },
            {
              value: 'true',
            },
          ],
        },
      },
      showRadio: {
        defaultValue: {
          value: 'true',
        },
        description: '',
        name: 'showRadio',
        parent: {
          fileName: 'framework/lib/components/carousel/types.ts',
          name: 'CarouselProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/carousel/types.ts',
            name: 'CarouselProps',
          },
        ],
        required: false,
        type: {
          name: 'enum',
          raw: 'boolean',
          value: [
            {
              value: 'false',
            },
            {
              value: 'true',
            },
          ],
        },
      },
      itemWidth: {
        defaultValue: {
          value: '150',
        },
        description: '',
        name: 'itemWidth',
        parent: {
          fileName: 'framework/lib/components/carousel/types.ts',
          name: 'CarouselProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/carousel/types.ts',
            name: 'CarouselProps',
          },
        ],
        required: false,
        type: {
          name: 'number',
        },
      },
      itemHeight: {
        defaultValue: {
          value: '150',
        },
        description: '',
        name: 'itemHeight',
        parent: {
          fileName: 'framework/lib/components/carousel/types.ts',
          name: 'CarouselProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/carousel/types.ts',
            name: 'CarouselProps',
          },
        ],
        required: false,
        type: {
          name: 'number',
        },
      },
      spacing: {
        defaultValue: {
          value: '60',
        },
        description: '',
        name: 'spacing',
        parent: {
          fileName: 'framework/lib/components/carousel/types.ts',
          name: 'CarouselProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/carousel/types.ts',
            name: 'CarouselProps',
          },
        ],
        required: false,
        type: {
          name: 'number',
        },
      },
      value: {
        defaultValue: null,
        description: '',
        name: 'value',
        parent: {
          fileName: 'framework/lib/components/carousel/types.ts',
          name: 'CarouselProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/carousel/types.ts',
            name: 'CarouselProps',
          },
        ],
        required: false,
        type: {
          name: 'number',
        },
      },
      onChange: {
        defaultValue: null,
        description: '',
        name: 'onChange',
        parent: {
          fileName: 'framework/lib/components/carousel/types.ts',
          name: 'CarouselProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/carousel/types.ts',
            name: 'CarouselProps',
          },
        ],
        required: false,
        type: {
          name: '(value: number) => void',
        },
      },
      carouselStyles: {
        defaultValue: {
          value: '{}',
        },
        description: '',
        name: 'carouselStyles',
        parent: {
          fileName: 'framework/lib/components/carousel/types.ts',
          name: 'CarouselProps',
        },
        declarations: [
          {
            fileName: 'framework/lib/components/carousel/types.ts',
            name: 'CarouselProps',
          },
        ],
        required: false,
        type: {
          name: 'StackProps',
        },
      },
    },
  } }
  />
)

export default CarouselPage
