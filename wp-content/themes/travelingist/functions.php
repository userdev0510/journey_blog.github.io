<?php 
add_action( 'wp_enqueue_scripts', 'travelingist_enqueue_styles' );
function travelingist_enqueue_styles() {
	wp_enqueue_style( 'travelingist-parent-style', get_template_directory_uri() . '/style.css' ); 
} 

// Load new fonts
function travelingist_google_fonts(){
	wp_enqueue_style('travelingist-google-fonts', '//fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,600;1,400;1,600&display=swap', false);
}
add_action('wp_enqueue_scripts', 'travelingist_google_fonts');



// Load new header
require get_stylesheet_directory() . '/inc/custom-header.php';


function travelingist_customize_register( $wp_customize ) {
	$wp_customize->get_setting( 'blogname' )->transport         = 'postMessage';
	$wp_customize->get_setting( 'blogdescription' )->transport  = 'postMessage';
	$wp_customize->get_setting( 'header_textcolor' )->transport = 'postMessage';
	$wp_customize->get_section('header_image')->title = __( 'Header Settings', 'travelingist' );
	$wp_customize->get_section('colors')->title = __( 'Other Colors', 'travelingist' );


	$wp_customize->selective_refresh->add_partial(
		'custom_logo',
		array(
			'selector'        => '.header-titles [class*=site-]:not(.logo-container .logofont)',
			'render_callback' => 'travelingist_customize_partial_site_logo',
		)
	);

	$wp_customize->selective_refresh->add_partial(
		'retina_logo',
		array(
			'selector'        => '.header-titles [class*=site-]:not(.logo-container .logofont)',
			'render_callback' => 'travelingist_customize_partial_site_logo',
		)
	);

	if ( isset( $wp_customize->selective_refresh ) ) {
		$wp_customize->selective_refresh->add_partial( 'blogname', array(
			'selector'        => '.logo-container .logofont',
			'render_callback' => 'travelingist_customize_partial_blogname',
		) );
		$wp_customize->selective_refresh->add_partial( 'blogdescription', array(
			'selector'        => '.logo-container .logofont',
			'render_callback' => 'travelingist_customize_partial_blogdescription',
		) );
	}


	$wp_customize->add_setting( 'travelingist_main_color', array(
		'default'           => '#ff9e59',
		'sanitize_callback' => 'sanitize_hex_color',
		'transport'         => 'postMessage',
	) );
	$wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'travelingist_main_color', array(
		'label'       => __( 'Main Color', 'travelingist' ),
		'section'     => 'colors',
		'priority'   => 1,
		'settings'    => 'travelingist_main_color',
	) ) );


}
add_action( 'customize_register', 'travelingist_customize_register', 99999 );




if(! function_exists('travelingist_customizer_css_final_output' ) ):
	function travelingist_customizer_css_final_output(){
		?>

		<style type="text/css">

			.page-numbers li a, .page-numbers.current, span.page-numbers.dots, .main-navigation ul li a:hover { color: <?php echo esc_attr(get_theme_mod( 'travelingist_main_color')); ?>; }
			.comments-area p.form-submit input, a.continuereading, .blogpost-button, .blogposts-list .entry-header h2:after { background: <?php echo esc_attr(get_theme_mod( 'travelingist_main_color')); ?>; }


		</style>
	<?php }
	add_action( 'wp_head', 'travelingist_customizer_css_final_output' );
endif;



if ( ! function_exists( 'travelingist_customize_partial_site_logo' ) ) {
	/**
	 * Render the site logo for the selective refresh partial.
	 *
	 * Doing it this way so we don't have issues with `render_callback`'s arguments.
	 */
	function travelingist_customize_partial_site_logo() {
		the_custom_logo();
	}
}



/**
 * Render the site title for the selective refresh partial.
 *
 * @return void
 */
function travelingist_customize_partial_blogname() {
	bloginfo( 'name' );
}

/**
 * Render the site tagline for the selective refresh partial.
 *
 * @return void
 */
function travelingist_customize_partial_blogdescription() {
	bloginfo( 'description' );
}

/**
 * Binds JS handlers to make Theme Customizer preview reload changes asynchronously.
 */

function travelingist_customize_preview_js() {
	wp_enqueue_script( 'travelingist-customizer', get_stylesheet_directory_uri() . '/js/customizer.js', array( 'customize-preview' ), '1', true );
	wp_dequeue_style( 'marketingly-customizer' );
}
add_action( 'customize_preview_init', 'travelingist_customize_preview_js', 99999 );


/**
 * This file represents an example of the code that themes would use to register
 * the required plugins.
 *
 * It is expected that theme authors would copy and paste this code into their
 * functions.php file, and amend to suit.
 *
 * @see http://tgmpluginactivation.com/configuration/ for detailed documentation.
 *
 * @package    TGM-Plugin-Activation
 * @subpackage Example
 * @version    2.6.1 for child theme Travelingist for publication on WordPress.org
 * @author     Thomas Griffin, Gary Jones, Juliette Reinders Folmer
 * @copyright  Copyright (c) 2011, Thomas Griffin
 * @license    http://opensource.org/licenses/gpl-2.0.php GPL v2 or later
 * @link       https://github.com/TGMPA/TGM-Plugin-Activation
 */

/**
 * Include the TGM_Plugin_Activation class.
 *
 * Depending on your implementation, you may want to change the include call:
 *
 * Parent Theme:
 * require_once get_template_directory() . '/tgma/class-tgm-plugin-activation.php';
 *
 * Child Theme:
 * require_once get_stylesheet_directory() . '/tgma/class-tgm-plugin-activation.php';
 *
 * Plugin:
 * require_once dirname( __FILE__ ) . '/tgma/class-tgm-plugin-activation.php';
 */
require_once get_stylesheet_directory() . '/tgma/class-tgm-plugin-activation.php';

add_action( 'tgmpa_register', 'travelingist_register_required_plugins' );

/**
 * Register the required plugins for this theme.
 *
 * In this example, we register five plugins:
 * - one included with the TGMPA library
 * - two from an external source, one from an arbitrary source, one from a GitHub repository
 * - two from the .org repo, where one demonstrates the use of the `is_callable` argument
 *
 * The variables passed to the `tgmpa()` function should be:
 * - an array of plugin arrays;
 * - optionally a configuration array.
 * If you are not changing anything in the configuration array, you can remove the array and remove the
 * variable from the function call: `tgmpa( $plugins );`.
 * In that case, the TGMPA default settings will be used.
 *
 * This function is hooked into `tgmpa_register`, which is fired on the WP `init` action on priority 10.
 */
function travelingist_register_required_plugins() {
	/*
	 * Array of plugin arrays. Required keys are name and slug.
	 * If the source is NOT from the .org repo, then source is also required.
	 */
	$plugins = array(
		array(
			'name'      => 'Social Share And Follow Buttons',
			'slug'      => 'superb-social-share-and-follow-buttons',
			'required'  => false,
		),
				array(
			'name'      => 'Gutenberg Blocks',
			'slug'      => 'superb-blocks',
			'required'  => false,
		),

	);

	/*
	 * Array of configuration settings. Amend each line as needed.
	 *
	 * TGMPA will start providing localized text strings soon. If you already have translations of our standard
	 * strings available, please help us make TGMPA even better by giving us access to these translations or by
	 * sending in a pull-request with .po file(s) with the translations.
	 *
	 * Only uncomment the strings in the config array if you want to customize the strings.
	 */
	$config = array(
		'id'           => 'travelingist',                 // Unique ID for hashing notices for multiple instances of TGMPA.
		'default_path' => '',                      // Default absolute path to bundled plugins.
		'menu'         => 'tgmpa-install-plugins', // Menu slug.
		'has_notices'  => true,                    // Show admin notices or not.
		'dismissable'  => true,                    // If false, a user cannot dismiss the nag message.
		'dismiss_msg'  => '',                      // If 'dismissable' is false, this message will be output at top of nag.
		'is_automatic' => false,                   // Automatically activate plugins after installation or not.
		'message'      => '',                      // Message to output right before the plugins table.
	);

	tgmpa( $plugins, $config );
}

