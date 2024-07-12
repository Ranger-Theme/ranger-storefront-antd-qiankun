module.exports = {
  pattern: ':username/:type/:desc',
  params: {
    username: ['caesar'],
    type: [
      'feat',
      'docs',
      'style',
      'refactor',
      'perf',
      'test',
      'chore',
      'revert',
      'build',
      'hotfix'
    ],
    desc: ['[a-z0-9-]+']
  },
  prohibited: ['dev', 'release'],
  whiteList: ['test', 'main']
}
