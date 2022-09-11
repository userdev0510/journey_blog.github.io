<?php

// Exit if accessed directly.
if (! defined('ABSPATH')) {
    exit;
}

if (! defined('SUPERBBLOCKS_VERSION')) {
    exit;
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_superb_blocks_block_init()
{
    wp_register_style(
        'superb-blocks-fontawesome-css', // Handle.
        plugins_url('superb-blocks/lib/fontawesome/css/all.min.css', plugin_dir_path(__FILE__)), // Block style CSS.
        is_admin() ? array( 'wp-editor' ) : null, // Dependency to include the CSS after it.
        SUPERBBLOCKS_VERSION // filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.style.build.css' ) // Version: File modification time.
    );
    wp_enqueue_style('superb-blocks-fontawesome-css');
    $blocks = array(
        'superb-author-block',
        'superb-rating-block',
        'superb-table-of-content-block'
    );
    foreach ($blocks as $block) {
        register_block_type(plugin_dir_path(__FILE__).'blocks/'.$block.'/');
    }
}
add_action('init', 'create_block_superb_blocks_block_init');


add_action('admin_init', 'superb_blocks_spbThemesNotification', 9);
function superb_blocks_spbThemesNotification()
{
    $notifications = include(plugin_dir_path(__FILE__).'inc/admin_notification/Autoload.php');
    $options = array("delay"=> "+3 days");
    $notifications->Add("superb_blocks_admin_notification", "Unlock All Features with Superb Blocks Premium", "
		
            Take advantage of the up to <span style='font-weight:bold;'>45% discount</span> and unlock all features for Superb Blocks Premium. 
            The discount is only available for a limited time.
    
            <div>
            <a style='margin-bottom:15px;' class='button button-large button-secondary' target='_blank' href='https://superbthemes.com/plugins/superb-blocks/'>Read more</a> <a style='margin-bottom:15px;' class='button button-large button-primary' target='_blank' href='https://superbthemes.com/plugins/superb-blocks/'>Buy now</a>
            </div>
    
            ", "info", $options);
    $notifications->Boot();
}
