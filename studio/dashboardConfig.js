export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '610cde74ea2a79626a9b36c4',
                  title: 'Sanity Studio',
                  name: 'demo-for-tim-studio',
                  apiId: '682d485d-6a9c-4bb2-bdd5-4c8b606e779f'
                },
                {
                  buildHookId: '610cde7414cf626463b6b41f',
                  title: 'Portfolio Website',
                  name: 'demo-for-tim',
                  apiId: '37f09b50-27d6-412e-aced-97e3fcddaf3b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/chrish-d/demo-for-tim',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://demo-for-tim.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
