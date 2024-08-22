CONTENTS OF THIS FILE
---------------------

 * Introduction
 * Requirements
 * Installation
 * Configuration
 * Maintainers

 INTRODUCTION
------------

This module provides an AI Block to your [Gutenberg Editor](https://www.drupal.org/project/gutenberg), with this tool, you can use generative AI to add content to your nodes.

REQUIREMENTS
------------

This module [requires the Gutenberg](https://www.drupal.org/project/gutenberg) and [OpenAI](https://www.drupal.org/project/openai) modules to be installed first, you will need to purchase OpenAI credits to use the engine.

INSTALLATION
------------

 1. Install normally as other modules are installed. For Support:
   https://www.drupal.org/docs/8/extending-drupal/installing-contributed-modules

2. Enable the OpenAI modules, then go to /admin/config/openai/settings and add the API Key and Organization ID, you will need to open an account at [OpenAI](https://openai.com/api/) first

 3. This module enables a REST Endpoint for interacting with the OpenAI engine from the Gutenberg Editor, make sure it is enabled by going to /admin/config/services/rest and verify the resource "Gutenberg AI Tools OpenAI REST" is enabled.


 4. Open the Gutenberg Editor in your Drupal site, click on the "+" (Add Block) icon, type "AI Block", select it, and on the "Block title" field, type the question you want to feed to OpenAI, and then hit tab, the answer provided by OpenAI will appear below.

TODO
---

- The answer may take some time, sometimes an extra tab is need to make it appear, there is an issue with the onBlur callback that I have to fix.

- Set up a config page for setting the  options related to how ChatGPT generates its response.

- Improve plugin frontend.