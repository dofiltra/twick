/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      items: ['intro'],
    },
    {
      type: 'category',
      label: 'Packages',
      items: [
        {
          type: 'category',
          label: 'Media Utils',
          items: [
            'packages/media-utils/intro',
            'packages/media-utils/api',
          ],
        },
        // Add more packages here as they are documented
      ],
    },
  ],
};

module.exports = sidebars; 