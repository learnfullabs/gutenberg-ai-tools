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

This module [requires the Gutenberg](https://www.drupal.org/project/gutenberg) and [OpenAI](https://www.drupal.org/project/openai) modules to be installed first, and you will need to open an account at [OpenAI](https://openai.com/api/) and create an API Key and Organization ID.

INSTALLATION
------------

 1. Install normally as other modules are installed. For Support:
   https://www.drupal.org/docs/8/extending-drupal/installing-contributed-modules

2. Enable the OpenAI modules, then go to **/admin/config/openai/settings** and add the API Key and Organization ID, you will need to open an account at [OpenAI](https://openai.com/api/) first

 3. This module enables a REST Endpoint for interacting with the OpenAI engine from the Gutenberg Editor, make sure it is enabled by going to **/admin/config/services/rest** and verify the resource "Gutenberg AI Tools OpenAI REST" is enabled.


 4. Open the Gutenberg Editor in your Drupal site, click on the "+" (Add Block) icon, type **"AI Block"**, select it, and on the **"Block title"** field, type the question you want to feed to OpenAI, and then click on the **Ask ChatGPT** the answer provided by OpenAI will appear after a bit in the block below.

TODO/BUGS
-------------

- Set up a config page for setting the  options related to how ChatGPT generates its response.

- Improve plugin frontend.

- The Block UX needs to be improved, I'll have to hit tab twice in order to get the info, the file edit.js needs to be refactored.

- Reduce the number of API calls.

- Add some kind of wait icon when sending the request to OpenAI and wait for the answer.

- Add Option to change format of the OpenAI's output to HTML or just plain text, provision for special characters.