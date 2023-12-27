import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { WyzwanieSecurity, schemaTypes } from './schemas'
import { media } from 'sanity-plugin-media'

import { markdownSchema } from 'sanity-plugin-markdown'
import { CustomMarkdownInput } from './components/Markdown'
import { WyzwanieSecurityIcon } from './components/Icons'

const createListItem = (S, singleType) => {
  const { title, name, icon } = singleType;
  return S.listItem()
    .title(title)
    .id(name)
    .icon(icon)
    .child(
      S.document()
        .schemaType(name)
        .title(title)
        .documentId(name)
    )
}

export default defineConfig({
  name: 'default',
  title: 'security-bez-tabu',
  projectId: '1ougtf07',
  dataset: 'production',
  plugins: [
    deskTool({
      structure: (S) =>
      S.list()
        .title('Strony')
        .items([
          createListItem(S, schemaTypes.find(({ name }) => name === 'global')),
          S.divider(),
          S.listItem()
            .title('Wyzwanie Security')
            .icon(WyzwanieSecurityIcon)
            .child(
              S.list()
                .title('Elementy')
                .items([
                  ...WyzwanieSecurity.map((item) => createListItem(S, item)),
                ])
            ),
        ])
    }),
    visionTool(),
    markdownSchema({ input: CustomMarkdownInput }),
    media(),
  ],
  schema: {
    types: schemaTypes,
  },
})