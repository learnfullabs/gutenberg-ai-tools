<?php

namespace Drupal\gutenberg_ai_tools\Plugin\rest\resource;

use Psr\Log\LoggerInterface;
use Drupal\rest\Plugin\ResourceBase;
use Drupal\rest\ResourceResponse;
use Drupal\Core\Language\LanguageDefault;
use Drupal\Core\Session\AccountInterface;
use Drupal\Core\Session\AccountProxyInterface;
use Drupal\Core\Entity\EntityStorageException;
use Drupal\Core\Entity\EntityTypeManagerInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\HttpKernel\Exception\AccessDeniedHttpException;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;
use Symfony\Component\HttpKernel\Exception\HttpException;
use Drupal\rest\ModifiedResourceResponse;
use Drupal\Core\Database\Connection;
use Drupal\openai\OpenAIApi;

/**
 * Provides a Save Events User Endpoint
 * 
 * @RestResource(
 *   id = "gutenberg_ai_tools_openai_endpoint",
 *   label = @Translation("Gutenberg AI Tools OpenAI REST"),
 *   serialization_class = "",
 *   uri_paths = {
 *     "create" = "/gutenberg-ai-tools/openai-rest"
 *   }
 * )
 */
class GutenbergAIEndpoint extends ResourceBase {

  /**
   * A current user instance.
   *
   * @var \Drupal\Core\Session\AccountProxyInterface
   */
  protected $currentUser;

  /**
   * The entity type manager.
   *
   * @var \Drupal\Core\Entity\EntityTypeManagerInterface
   */
  protected $entityTypeManager;
 
  /**
   * The OpenAI API wrapper.
   *
   * @var \Drupal\openai\OpenAIApi
   */
  protected $api;

  /**
   * Constructs a Drupal\rest\Plugin\ResourceBase object.
   *
   * @param array $configuration
   *   A configuration array containing information about the plugin instance.
   * @param string $plugin_id
   *   The plugin_id for the plugin instance.
   * @param mixed $plugin_definition
   *   The plugin implementation definition.
   * @param array $serializer_formats
   *   The available serialization formats.
   * @param \Psr\Log\LoggerInterface $logger
   *   A logger instance.
   * @param \Drupal\Core\Session\AccountProxyInterface $current_user
   *   A current user instance.
   * @param \Drupal\Core\Entity\EntityTypeManagerInterface $entity_type_manager
   *   The entity type manager.
   * @param \Drupal\openai\OpenAIApi $api
   *   The OpenAI API wrapper.
   */
  public function __construct(array $configuration, $plugin_id, $plugin_definition, array $serializer_formats, LoggerInterface $logger, AccountProxyInterface $current_user, EntityTypeManagerInterface $entity_type_manager, OpenAIApi $api) {
    parent::__construct($configuration, $plugin_id, $plugin_definition, $serializer_formats, $logger);
    $this->currentUser = $current_user;
    $this->entityTypeManager = $entity_type_manager;
    $this->api = $api;
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container, array $configuration, $plugin_id, $plugin_definition) {
    return new static(
      $configuration,
      $plugin_id,
      $plugin_definition,
      $container->getParameter('serializer.formats'),
      $container->get('logger.factory')->get('custom_rest'),
      $container->get('current_user'),
      $container->get('entity_type.manager'),
      $container->get('openai.api')
    );
  }

  /**
   * Responds to POST requests.
   *
   * @throws \Symfony\Component\HttpKernel\Exception\HttpException
   *   Throws exception expected.
   */
  public function post($data) {

    // Use current user after pass authentication to validate access.
    if (!$this->currentUser->isAuthenticated()) {
      // Display the default access denied page.
      throw new AccessDeniedHttpException('Access Denied.');
    }

    // Check if we have enough data to work with.
    if (empty($data['openai_prompt'])) {
      // If an exception was thrown at this stage, there was a problem
      // decoding the data. Throw a 400 http exception.
      throw new BadRequestHttpException('Bad data format. Please make sure you have all data set in the request.');
    }

    /* Set default options related to how ChatGPT generates its response. */
    $text = $data['openai_prompt'];
    $model = "gpt-3.5-turbo";
    $temperature = 0.4;
    $max_tokens = 256;

    $messages[] = ['role' => 'user', 'content' => trim($text)];

    try {
      $result = $this->api->chat($model, $messages, $temperature, $max_tokens);
    } catch (\Exception $e) {
      watchdog_exception('gutenberg_ai_tools', $e);
      throw new BadRequestHttpException('Error when invoking the OpenAPI service for getting the answer, please check the logs for more information.');
    }

    $response = new ResourceResponse($result);

    return $response;
  }
}