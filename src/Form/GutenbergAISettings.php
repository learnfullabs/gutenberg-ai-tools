<?php 

namespace Drupal\gutenberg_ai_tools\Form;

use Drupal\Core\Form\ConfigFormBase;
use Drupal\Core\Form\FormStateInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * Class GutenbergAISettings.
 */
class GutenbergAISettings extends ConfigFormBase {

  /**
   * The OpenAI API wrapper.
   *
   * @var \Drupal\openai\OpenAIApi
   */
  protected $api;

  /**
   * {@inheritdoc}
   */
  public function getFormId() {
    return 'gutenberg_ai_tools_settings';
  }

  /**
   * {@inheritdoc}
   */
  protected function getEditableConfigNames() {
    return ['gutenberg_ai_tools.settings'];
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container) {
    $instance = parent::create($container);
    $instance->api = $container->get('openai.api');
    return $instance;
  }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state) {
    $form = parent::buildForm($form, $form_state);

    $config = $this->config('gutenberg_ai_tools.settings');

    $form['options'] = [
      '#type' => 'markup',
      '#markup' => '<p>Set the ChatGPT options for the response sent Gutenberg AI Block, here you can set what engine to use, temperature options and tokens.</p><br />',
    ];

    $models = $this->api->filterModels(['gpt']);

    $form['model'] = [
      '#type' => 'select',
      '#title' => $this->t('Model'),
      '#options' => $models,
      '#default_value' => 'gpt-3.5-turbo',
      '#description' => $this->t('Select which model to use to analyze text. See the <a href=":link">model overview</a> for details about each model.', [':link' => 'https://platform.openai.com/docs/models/gpt-3.5']),
    ];

    $form['temperature'] = [
      '#type' => 'number',
      '#title' => $this->t('Temperature'),
      '#min' => 0,
      '#max' => 2,
      '#step' => .1,
      '#default_value' => '0.4',
      '#description' => $this->t('What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.'),
    ];

    $form['max_tokens'] = [
      '#type' => 'number',
      '#title' => $this->t('Max tokens'),
      '#min' => 128,
      '#step' => 1,
      '#default_value' => '128',
      '#description' => $this->t("The maximum number of tokens to generate in the completion. The token count of your prompt plus max_tokens cannot exceed the model\'s context length."),
    ];

    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    $config = $this->config('gutenberg_ai_tools.settings');

    parent::submitForm($form, $form_state);
  }

}
