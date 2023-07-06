export const app = {
  name: String(import.meta.env.VITE_APP_NAME ?? ''),
  version: String(import.meta.env.VITE_APP_VERSION ?? ''),
  commitHash: String(import.meta.env.VITE_APP_COMMIT_REF ?? ''),

  github: {
    url: String(import.meta.env.VITE_APP_REPOSITORY_URL ?? ''),
    name: String(import.meta.env.VITE_APP_REPOSITORY_NAME ?? ''),
  },

  author: {
    name: 'Matheus Zanin',
    github: {
      user: 'MattZ6',
      url: 'https://github.com/MattZ6',
    },
  },
}
