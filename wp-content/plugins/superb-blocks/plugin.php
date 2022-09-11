<?php
/**
 * Plugin Name: Superb Gutenberg Blocks
 * Plugin URI: https://superbthemes.com/plugins/superb-blocks/
 * Description: Add new awesome features to the WordPress editor with Superb Gutenberg blocks!
 * Author: Themeeverest, suplugins
 * Author URI: https://superbthemes.com/
 * Version: 2.0.2
 * License: GPL2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package CGB
 */

// Exit if accessed directly.
if (! defined('ABSPATH')) {
    exit;
}

// Constants
if (! defined('SUPERBBLOCKS_VERSION')) {
    define('SUPERBBLOCKS_VERSION', '2.0.2');
}

require_once plugin_dir_path(__FILE__) . 'init.php';
